import fs from "node:fs";
import { chromium, expect } from "@playwright/test";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const errors = [];
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  reducedMotion: "reduce",
});
await context.route(/^https?:\/\/(?!localhost|127\.0\.0\.1)/, (route) =>
  route.abort(),
);
const page = await context.newPage();
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (msg) => {
  if (msg.type() === "error" && !/Failed to load resource/.test(msg.text()))
    errors.push(msg.text());
});
await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.locator(".menu-toggle").click();
await expect(page.locator("#siteMenu")).toHaveAttribute("aria-hidden", "false");
await page.keyboard.press("Escape");
await expect(page.locator("#siteMenu")).toHaveAttribute("aria-hidden", "true");
await page.goto("http://localhost:5173/gallery", { waitUntil: "networkidle" });
await page.locator(".filter").nth(1).click();
await expect(page.locator(".filter").nth(1)).toHaveAttribute(
  "aria-pressed",
  "true",
);
const visible = await page.locator(".gmosaic .m-item:not(.is-hidden)").count();
if (visible < 1 || visible === (await page.locator(".gmosaic .m-item").count()))
  throw new Error("Gallery filtering did not change visible photos");
await page.locator(".gmosaic .m-item:not(.is-hidden) .m-btn").first().click();
await expect(page.locator(".lightbox")).toHaveAttribute("aria-hidden", "false");
await page.keyboard.press("Escape");
await expect(page.locator(".lightbox")).toHaveAttribute("aria-hidden", "true");
await page.goto("http://localhost:5173/contact", { waitUntil: "networkidle" });
await expect(page.locator("#f-guests")).toHaveValue("");
await page.locator('#enquiry button[type="submit"]').click();
await expect(page.locator(".cform__status")).toContainText("Please add");
await page.locator("#f-name").fill("Test visitor");
await page.locator("#f-email").fill("visitor@example.com");
await page.locator("#f-guests").selectOption({ index: 1 });
await page.locator('#enquiry button[type="submit"]').click();
await expect(page.locator(".cform__status")).toContainText("ready to send");
console.log(
  "Mobile menu, gallery filter, lightbox and enquiry validation passed.",
);
const files = fs
  .readdirSync("galkanda-estate", { recursive: true })
  .filter((f) => f.endsWith(".html"));
await page.emulateMedia({ reducedMotion: "no-preference" });
await page.setViewportSize({ width: 1440, height: 900 });
for (const file of files) {
  const route = file
    .replaceAll("\\", "/")
    .replace(/^index\.html$/, "")
    .replace(/\.html$/, "");
  await page.goto("http://localhost:5173/" + route, {
    waitUntil: "networkidle",
  });
  await expect(page.locator("main")).toBeVisible();
  await page.waitForTimeout(100);
  // Exercise the React link transition so effects must be disposed without a document reload.
  await page.locator(".brand").first().click();
  await expect(page).toHaveURL("http://localhost:5173/");
}
console.log("All 19 routes and SPA navigation passed.");
console.log("Runtime errors:", errors);
fs.writeFileSync(
  "artifacts/interaction-check.json",
  JSON.stringify({ routes: files.length, errors }, null, 2),
);
await browser.close();
if (errors.length) process.exitCode = 1;
