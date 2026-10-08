import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { chromium } from "@playwright/test";

const server = http
  .createServer((request, response) => {
    const file = path.join(
      process.cwd(),
      "galkanda-estate",
      decodeURI(request.url).replace(/^\//, ""),
    );
    try {
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.end(fs.readFileSync(file));
    } catch {
      response.writeHead(404);
      response.end();
    }
  })
  .listen(5180, "127.0.0.1");
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const errors = [];
const result = [];
const context = await browser.newContext({ reducedMotion: "reduce" });
const page = await context.newPage();
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (msg) => {
  if (msg.type() === "error" && !/Failed to load resource/.test(msg.text()))
    errors.push(msg.text());
});
// Original scripts are unnecessary for a static design comparison.
await page.route("**/cdn.jsdelivr.net/**/*.js", (route) => route.abort());
await page.route("**/bootstrap.min.css", (route) =>
  route.fulfill({
    contentType: "text/css",
    body: fs.readFileSync(
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "utf8",
    ),
  }),
);
await page.route("https://images.unsplash.com/**", (route) => route.abort());
const sample = [
  "index.html",
  "contact.html",
  "gallery.html",
  "explore/ambuluwawa-tower.html",
];
const properties = [
  "display",
  "position",
  "fontSize",
  "fontFamily",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
  "color",
  "backgroundColor",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "marginTop",
  "marginBottom",
  "borderRadius",
  "gridTemplateColumns",
  "gap",
  "width",
  "height",
];
const snapshot = () =>
  page.evaluate(
    (properties) =>
      Array.from(document.querySelectorAll("main, main *")).map((el) => {
        const style = getComputedStyle(el);
        return {
          tag: el.tagName,
          key: el.classList[0] || el.id || el.tagName,
          values: Object.fromEntries(properties.map((p) => [p, style[p]])),
        };
      }),
    properties,
  );
for (const width of [1440, 390]) {
  await page.setViewportSize({ width, height: 900 });
  for (const file of sample) {
    await page.goto("http://127.0.0.1:5180/" + file, {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);
    const original = await snapshot();
    await page.screenshot({
      path: `artifacts/original-${file.replaceAll("/", "-")}-${width}.png`,
    });
    const url = file === "index.html" ? "" : file.replace(/\.html$/, "");
    await page.goto("http://localhost:5173/" + url, {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);
    const converted = await snapshot();
    await page.screenshot({
      path: `artifacts/react-${file.replaceAll("/", "-")}-${width}.png`,
    });
    const diffs = [];
    original.forEach((el, i) => {
      const other = converted[i];
      if (!other || el.tag !== other.tag) {
        diffs.push({ i, key: el.key, mismatch: other?.tag });
        return;
      }
      for (const p of properties)
        if (el.values[p] !== other.values[p])
          diffs.push({
            i,
            key: el.key,
            p,
            before: el.values[p],
            after: other.values[p],
          });
    });
    result.push({
      file,
      width,
      original: original.length,
      converted: converted.length,
      diffs,
    });
  }
}
fs.writeFileSync(
  "artifacts/design-comparison.json",
  JSON.stringify(result, null, 2),
);
console.log(
  result.map((r) => ({
    file: r.file,
    width: r.width,
    differences: r.diffs.length,
    examples: r.diffs.slice(0, 8),
  })),
);
console.log("Browser errors:", errors);
await browser.close();
server.close();
