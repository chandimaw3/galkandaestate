import { createClient } from "contentful";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createSeoMetadata, createStructuredData, normalizeSeoPath, resolveSeoAssetUrl } from "../src/seo/metadata.js";

const frontendDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(frontendDir, "dist");
let productionOrigin = "https://www.galkandaestate.lk";
const requiredStaticPaths = [
  "/",
  "/about",
  "/villa",
  "/experiences",
  "/explore",
  "/food",
  "/gallery",
  "/contact",
];
const sitemapPaths = new Set();

function loadLocalEnvironment() {
  for (const fileName of [".env", ".env.local", "env"]) {
    const filePath = join(frontendDir, fileName);
    if (!existsSync(filePath)) continue;
    const lines = readFileSync(filePath, "utf8").split(/\r?\n/);
    for (const line of lines) {
      const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!match || process.env[match[1]]) continue;
      let value = match[2].trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      process.env[match[1]] = value;
    }
  }
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

function metaTag(key, value, attribute = "name") {
  return value
    ? `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(value)}" />`
    : "";
}

function createHeadMetadata(metadata) {
  const tags = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />`,
    metaTag("description", metadata.description),
    metaTag("robots", metadata.robots),
    metaTag("og:type", metadata.type, "property"),
    metaTag("og:site_name", metadata.siteName, "property"),
    metaTag("og:title", metadata.title, "property"),
    metaTag("og:description", metadata.description, "property"),
    metaTag("og:url", metadata.canonical, "property"),
    metaTag("og:image", metadata.image, "property"),
    metaTag("og:image:alt", metadata.imageAlt, "property"),
    metaTag("twitter:card", "summary_large_image"),
    metaTag("twitter:title", metadata.title),
    metaTag("twitter:description", metadata.description),
    metaTag("twitter:image", metadata.image),
  ].filter(Boolean).join("\n    ");

  const structuredData = JSON.stringify(createStructuredData(metadata)).replace(/</g, "\\u003c");
  return `${tags}\n    <script type="application/ld+json" data-seo-structured-data="true">${structuredData}</script>`;
}

function withMetadata(template, metadata) {
  let html = template
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/i, "")
    .replace(/\s*<meta\s+(?:name|property)=["'](?:description|robots|og:[^"']+|twitter:[^"']+)["'][^>]*>/gi, "")
    .replace(/\s*<script\s+type=["']application\/ld\+json["'][^>]*data-seo-structured-data=["']true["'][^>]*>[\s\S]*?<\/script>/i, "");
  return html.replace("</head>", `    ${createHeadMetadata(metadata)}\n  </head>`);
}

function validateSeoRecord(fields, path) {
  const title = String(fields.seoTitle || "").trim();
  const description = String(fields.seoDescription || "").trim();
  const image = resolveSeoAssetUrl(fields.shareImage);
  const errors = [];
  if (!title) errors.push("seoTitle");
  if (!description) errors.push("seoDescription");
  if (!String(fields.focusKeyword || "").trim()) errors.push("focusKeyword");
  if (!image || !/^https:\/\//i.test(image)) errors.push("shareImage (public HTTPS asset)");
  if (!String(fields.shareImageAlt || "").trim()) errors.push("shareImageAlt");
  if (errors.length) {
    throw new Error(`SEO record for ${path} is missing or invalid: ${errors.join(", ")}. Publish the completed Contentful entry and rebuild.`);
  }
}

function writeRouteHtml(template, path, fields) {
  const normalizedPath = normalizeSeoPath(path);
  const metadata = createSeoMetadata({ fields, path: normalizedPath, origin: productionOrigin });
  const outputPath = normalizedPath === "/"
    ? join(distDir, "index.html")
    : join(distDir, normalizedPath.slice(1), "index.html");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, withMetadata(template, metadata), "utf8");
  if (fields.indexable !== false) sitemapPaths.add(normalizedPath);
}

function writeSitemapAndRobots() {
  const urls = [...sitemapPaths]
    .sort((a, b) => a.localeCompare(b))
    .map((path) => `  <url><loc>${escapeHtml(`${productionOrigin}${path}`)}</loc></url>`)
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${productionOrigin}/sitemap.xml\n`;
  writeFileSync(join(distDir, "sitemap.xml"), sitemap, "utf8");
  writeFileSync(join(distDir, "robots.txt"), robots, "utf8");
}

async function main() {
  loadLocalEnvironment();
  productionOrigin = (process.env.VITE_SITE_URL || productionOrigin).replace(/\/$/, "");
  const space = process.env.VITE_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;
  const environment = process.env.VITE_CONTENTFUL_ENVIRONMENT || "master";
  if (!space || !accessToken) {
    throw new Error("SEO prerendering needs VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN. Set them in the frontend environment and in the Vercel project settings.");
  }

  const templatePath = join(distDir, "index.html");
  if (!existsSync(templatePath)) throw new Error("Vite output is missing frontend/dist/index.html; run the Vite build before SEO prerendering.");
  const template = readFileSync(templatePath, "utf8");
  const client = createClient({ space, accessToken, environment });

  const [staticResult, exploreResult] = await Promise.all([
    client.getEntries({ content_type: "pageSeo", limit: 1000 }),
    client.getEntries({ content_type: "exploreExperience", limit: 1000 }),
  ]);

  const staticEntries = new Map();
  for (const entry of staticResult.items || []) {
    const rawPath = entry.fields?.path;
    if (!rawPath) throw new Error(`Page SEO entry ${entry.sys?.id || "(unknown)"} has an empty path.`);
    const path = normalizeSeoPath(rawPath);
    if (staticEntries.has(path)) throw new Error(`More than one published Page SEO entry uses path ${path}.`);
    validateSeoRecord(entry.fields, path);
    staticEntries.set(path, entry.fields);
  }

  for (const path of requiredStaticPaths) {
    const fields = staticEntries.get(path);
    if (!fields) throw new Error(`No published Page SEO entry found for ${path}. Create and publish it in Contentful before building.`);
    writeRouteHtml(template, path, fields);
  }

  const exploreEntries = new Map();
  for (const entry of exploreResult.items || []) {
    const fields = entry.fields || {};
    const slug = String(fields.slug || "").trim();
    if (!slug) throw new Error(`Published Explore Experience entry ${entry.sys?.id || "(unknown)"} has an empty slug.`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`Explore slug "${slug}" must use lowercase letters, numbers, and single hyphens.`);
    if (exploreEntries.has(slug)) throw new Error(`More than one published Explore Experience entry uses slug ${slug}.`);
    const path = `/explore/${slug}`;
    validateSeoRecord(fields, path);
    exploreEntries.set(slug, fields);
    writeRouteHtml(template, path, fields);
  }

  // This experience is maintained locally by the frontend. If its Contentful
  // entry also exists, the CMS SEO values above take precedence; otherwise use
  // the bundled photo and route copy so its existing public URL still has tags.
  const localExploreSlug = "degaldoruwa-raja-maha-vihara";
  if (!exploreEntries.has(localExploreSlug)) {
    const bundledImage = readdirSync(join(distDir, "assets")).find((file) => /degaldoruwa-temple/i.test(file));
    if (!bundledImage) throw new Error("Could not find the bundled Degaldoruwa image for its local Explore route.");
    writeRouteHtml(template, `/explore/${localExploreSlug}`, {
      seoTitle: "Degaldoruwa Raja Maha Vihara – Temple Guide Near Kandy",
      seoDescription: "Discover Degaldoruwa Raja Maha Vihara near Kandy, a Buddhist rock temple known for traditional Kandyan murals. Get local tips for a respectful visit.",
      focusKeyword: "Degaldoruwa Raja Maha Vihara",
      shareImage: `${productionOrigin}/assets/${bundledImage}`,
      shareImageAlt: "Degaldoruwa Raja Maha Vihara temple near Kandy",
      indexable: true,
    });
  }

  writeSitemapAndRobots();

  console.log(`Generated SEO HTML for ${requiredStaticPaths.length} static pages and ${exploreEntries.size + (exploreEntries.has(localExploreSlug) ? 0 : 1)} Explore pages, plus sitemap and robots.txt.`);
}

main().catch((error) => {
  console.error(`SEO prerender failed: ${error.message}`);
  process.exitCode = 1;
});
