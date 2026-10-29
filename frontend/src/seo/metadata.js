export const DEFAULT_SITE_ORIGIN = "https://www.galkandaestate.lk";

export function normalizeSeoPath(path = "/") {
  const pathname = String(path).split(/[?#]/, 1)[0] || "/";
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(/\/{2,}/g, "/").replace(/\/$/, "") || "/";
}

export function resolveSeoAssetUrl(asset) {
  if (!asset) return "";
  if (typeof asset === "string") {
    return asset.startsWith("//") ? `https:${asset}` : asset;
  }
  const url = asset.fields?.file?.url || asset.url || "";
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
}

export function createSeoMetadata({
  fields = {},
  path = "/",
  origin = DEFAULT_SITE_ORIGIN,
  fallback = {},
}) {
  const normalizedPath = normalizeSeoPath(path);
  const siteOrigin = String(origin || DEFAULT_SITE_ORIGIN).replace(/\/$/, "");
  const image = resolveSeoAssetUrl(fields.shareImage) || fallback.image || "";
  const description = fields.seoDescription || fallback.description || "";
  const title = fields.seoTitle || fallback.title || "Galkanda Estate";

  return {
    path: normalizedPath,
    title,
    description,
    canonical: `${siteOrigin}${normalizedPath}`,
    image,
    imageAlt: fields.shareImageAlt || fallback.imageAlt || "Galkanda Estate",
    robots: fields.indexable === false ? "noindex,follow" : "index,follow",
    type: "website",
    siteName: "Galkanda Estate",
  };
}

function upsertMeta({ key, value, attribute = "name" }) {
  if (typeof document === "undefined") return;
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!value) {
    element?.remove();
    return;
  }
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

export function applySeoMetadata(metadata) {
  if (typeof document === "undefined" || !metadata) return;

  document.title = metadata.title;
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = metadata.canonical;

  upsertMeta({ key: "description", value: metadata.description });
  upsertMeta({ key: "robots", value: metadata.robots });
  upsertMeta({ key: "og:type", value: metadata.type, attribute: "property" });
  upsertMeta({ key: "og:site_name", value: metadata.siteName, attribute: "property" });
  upsertMeta({ key: "og:title", value: metadata.title, attribute: "property" });
  upsertMeta({ key: "og:description", value: metadata.description, attribute: "property" });
  upsertMeta({ key: "og:url", value: metadata.canonical, attribute: "property" });
  upsertMeta({ key: "og:image", value: metadata.image, attribute: "property" });
  upsertMeta({ key: "og:image:alt", value: metadata.imageAlt, attribute: "property" });
  upsertMeta({ key: "twitter:card", value: "summary_large_image" });
  upsertMeta({ key: "twitter:title", value: metadata.title });
  upsertMeta({ key: "twitter:description", value: metadata.description });
  upsertMeta({ key: "twitter:image", value: metadata.image });
  applyStructuredData(metadata);
}

export function createStructuredData(metadata) {
  const origin = new URL(metadata.canonical).origin;
  const pathSegments = normalizeSeoPath(metadata.path).split("/").filter(Boolean);
  const breadcrumbs = [
    { name: "Home", item: `${origin}/` },
  ];

  if (pathSegments[0] === "explore" && pathSegments[1]) {
    breadcrumbs.push({ name: "Explore Kandy", item: `${origin}/explore` });
    breadcrumbs.push({ name: metadata.title, item: metadata.canonical });
  } else if (pathSegments.length) {
    breadcrumbs.push({ name: metadata.title, item: metadata.canonical });
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: `${origin}/`,
        name: metadata.siteName,
      },
      {
        "@type": "WebPage",
        "@id": `${metadata.canonical}#webpage`,
        url: metadata.canonical,
        name: metadata.title,
        description: metadata.description,
        isPartOf: { "@id": `${origin}/#website` },
        ...(metadata.image ? { primaryImageOfPage: { "@type": "ImageObject", url: metadata.image } } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${metadata.canonical}#breadcrumb`,
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      },
    ],
  };
}

export function applyStructuredData(metadata) {
  if (typeof document === "undefined") return;
  let script = document.head.querySelector('script[data-seo-structured-data="true"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoStructuredData = "true";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(createStructuredData(metadata));
}
