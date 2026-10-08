import { chromium, expect } from "@playwright/test";
import { pages } from '../frontend/src/pages/routes.js';
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.route(/^https?:\/\/(?!localhost|127\.0\.0\.1)/, (route) =>
  route.abort(),
);
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
await page.goto("http://localhost:5173/explore/temple-of-the-tooth");
await page.waitForTimeout(2500);
await page.locator(".agal__main").hover();
await page.waitForTimeout(700);
console.log(
  "cursor",
  await page
    .locator(".cursor")
    .evaluate((c) => ({
      classes: c.className,
      label: c.querySelector("span").textContent,
      opacity: getComputedStyle(c.querySelector("span")).opacity,
      ring: getComputedStyle(c.querySelector(".cursor__ring")).width,
    })),
);
await expect(page.locator(".cursor__ring span")).toHaveCSS("opacity", "1");
await expect(page.locator(".cursor__ring span")).toHaveText("View ↗");
await page.screenshot({ path: "artifacts/cursor-navigation-desktop.png" });
for (const route of [
  "/estate",
  "/experiences",
  "/food",
  "/explore",
  "/gallery",
  "/contact",
  "/",
  "/gallery",
]) {
  const link = page.locator(`a[href="${route}"]`).first();
  await link.evaluate((el) => el.click());
  await expect(page).toHaveURL("http://localhost:5173" + route);
  await expect(page).toHaveTitle(pages.find(page => page.path === route).title);
  await expect(page.locator("main")).toBeAttached();
  await expect(page.locator("main h1 .split-line").first()).toBeAttached({ timeout: 8000 });
  await expect(page.locator("main h1")).toHaveCSS("visibility", "visible", {
    timeout: 8000,
  });
  await page.waitForTimeout(500);
  console.log(
    route,
    await page.evaluate(() => ({
      scroll: scrollY,
      heading: document.querySelector("main h1")?.textContent,
      visibility:
        document.querySelector("main h1") &&
        getComputedStyle(document.querySelector("main h1")).visibility,
      headingOpacity:
        document.querySelector("main h1") &&
        getComputedStyle(document.querySelector("main h1")).opacity,
      classes: document.documentElement.className,
      lenis: !!window.Galkanda?.lenis,
      split: document.querySelector("main h1")?.innerHTML.slice(0, 110),
    })),
  );
}
await page.setViewportSize({ width: 390, height: 844 });
for (const route of ["/contact", "/", "/explore"]) {
  await page
    .locator(`a[href="${route}"]`)
    .first()
    .evaluate((el) => el.click());
  await expect(page).toHaveURL("http://localhost:5173" + route);
  await expect(page).toHaveTitle(pages.find(page => page.path === route).title);
  await expect(page.locator("main h1 .split-line").first()).toBeAttached({ timeout: 8000 });
  await expect(page.locator("main h1")).toHaveCSS("visibility", "visible", {
    timeout: 8000,
  });
}
await page.screenshot({ path: "artifacts/cursor-navigation-mobile.png" });
console.log("errors", errors);
await browser.close();
if (errors.length) throw new Error(errors.join("\n"));
