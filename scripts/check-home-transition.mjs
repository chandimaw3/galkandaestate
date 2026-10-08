import fs from 'node:fs';
import { chromium, expect } from '@playwright/test';

const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const page = await browser.newPage({ viewport: { width: 1230, height: 850 } });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
await expect(page.locator('.hx__h2 .split-line').first()).toBeAttached();
await expect(page.locator('.hx__hh .split-line').first()).toBeAttached();
await page.waitForTimeout(3500);
const states=[];
for (const progress of [0.45, 0.58, 0.72, 0.94]) {
  await page.evaluate(async progress => {
    const moduleUrl = performance.getEntriesByType('resource').find(entry => entry.name.includes('/gsap_ScrollTrigger.js')).name;
    const { ScrollTrigger: triggers } = await import(moduleUrl);
    const hero = triggers.getAll().find(trigger => trigger.trigger.id === 'hero');
    window.Galkanda.lenis.scrollTo(hero.start + progress * (hero.end - hero.start), { immediate: true });
  }, progress);
  await page.waitForTimeout(1700);
  states.push(await page.evaluate(progress => {
    const summary = selector => {
      const el=document.querySelector(selector), style=getComputedStyle(el), rect=el.getBoundingClientRect();
      return {opacity:style.opacity,visibility:style.visibility,x:rect.x,y:rect.y,width:rect.width,height:rect.height,lines:el.querySelectorAll('.split-line').length,masks:Array.from(el.querySelectorAll('.split-line')).map(line=>getComputedStyle(line.parentElement).overflow)};
    };
    return {progress, about:summary('.hx__h2'), house:summary('.hx__hh'),aboutHead:summary('.hx__head')};
  },progress));
  await page.screenshot({path:`artifacts/home-transition-${progress}.png`});
}
await page.setViewportSize({width:390,height:844});
await page.evaluate(() => window.Galkanda.lenis.scrollTo(document.querySelector('#about'), { immediate: true }));
await page.waitForTimeout(1700);
await page.screenshot({path:'artifacts/home-transition-mobile.png'});
console.log(JSON.stringify({states,errors},null,2));
fs.writeFileSync('artifacts/home-transition-check.json',JSON.stringify({states,errors},null,2));
await browser.close();
if(errors.length)process.exitCode=1;
