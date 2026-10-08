import fs from "node:fs";
import path from "node:path";
import { load } from "cheerio";
import postcss from "postcss";
import selectorParser from "postcss-selector-parser";
import { calculate } from "specificity";
import { standardTextClasses, standardCssFontSizes } from './tailwind-text-sizes.mjs';

// One-time migration: keep source copy, SVGs, selectors and responsive values intact.
const source = "galkanda-estate";
const destination = "frontend/src";
const files = fs
  .readdirSync(source, { recursive: true })
  .filter((f) => f.endsWith(".html"));
fs.mkdirSync(`${destination}/pages/explore`, { recursive: true });
fs.mkdirSync(`${destination}/behaviors`, { recursive: true });
const dynamic =
  /^(?:is-|has-|menu-open$|menu-is-open$|img-missing$|c\d+$|r\d+$|w-full$)/;
const dynamicPseudos = new Set([
  ":hover",
  ":focus",
  ":focus-visible",
  ":focus-within",
  ":active",
  ":checked",
  ":disabled",
  ":valid",
  ":invalid",
  ":placeholder-shown",
  ":before",
  ":after",
  "::before",
  "::after",
  "::selection",
]);
const plain = {
  "display:block": "block",
  "display:none": "hidden",
  "display:flex": "flex",
  "display:inline-flex": "inline-flex",
  "display:grid": "grid",
  "display:inline-block": "inline-block",
  "position:relative": "relative",
  "position:absolute": "absolute",
  "position:fixed": "fixed",
  "position:sticky": "sticky",
  "width:100%": "w-full",
  "height:100%": "h-full",
  "max-width:100%": "max-w-full",
  "width:100vw": "w-screen",
  "height:100vh": "h-screen",
  "overflow:hidden": "overflow-hidden",
  "overflow:visible": "overflow-visible",
  "overflow-x:hidden": "overflow-x-hidden",
  "overflow-x:auto": "overflow-x-auto",
  "align-items:center": "items-center",
  "align-items:start": "items-start",
  "align-items:flex-start": "items-start",
  "align-items:end": "items-end",
  "align-items:flex-end": "items-end",
  "justify-content:center": "justify-center",
  "justify-content:space-between": "justify-between",
  "justify-content:flex-end": "justify-end",
  "flex-direction:column": "flex-col",
  "flex-wrap:wrap": "flex-wrap",
  "flex-wrap:nowrap": "flex-nowrap",
  "flex:none": "flex-none",
  "place-items:center": "place-items-center",
  "justify-self:end": "justify-self-end",
  "object-fit:cover": "object-cover",
  "object-fit:contain": "object-contain",
  "text-decoration:none": "no-underline",
  "text-transform:uppercase": "uppercase",
  "text-align:center": "text-center",
  "text-align:left": "text-left",
  "text-align:right": "text-right",
  "font-weight:400": "font-normal",
  "font-weight:500": "font-medium",
  "font-weight:600": "font-semibold",
  "font-weight:700": "font-bold",
  "font-style:normal": "not-italic",
  "font-style:italic": "italic",
  "white-space:nowrap": "whitespace-nowrap",
  "list-style:none": "list-none",
  "border:0": "border-0",
  "border:none": "border-0",
  "border-radius:999px": "rounded-full",
  "border-radius:50%": "rounded-full",
  "cursor:pointer": "cursor-pointer",
  "pointer-events:none": "pointer-events-none",
  "pointer-events:auto": "pointer-events-auto",
  "visibility:hidden": "invisible",
  "visibility:visible": "visible",
  "opacity:0": "opacity-0",
  "opacity:1": "opacity-100",
  "background:transparent": "bg-transparent",
  "color:inherit": "text-inherit",
  "transform-origin:left": "origin-left",
  "transform-origin:top": "origin-top",
  "margin:0": "m-0",
  "padding:0": "p-0",
  "inset:0": "inset-0",
  "top:0": "top-0",
  "left:0": "left-0",
  "right:0": "right-0",
  "bottom:0": "bottom-0",
  "min-width:0": "min-w-0",
  "min-height:0": "min-h-0",
};
const spacing = {
  margin: "m",
  "margin-top": "mt",
  "margin-bottom": "mb",
  "margin-left": "ml",
  "margin-right": "mr",
  padding: "p",
  "padding-top": "pt",
  "padding-bottom": "pb",
  "padding-left": "pl",
  "padding-right": "pr",
  gap: "gap",
  "column-gap": "gap-x",
  "row-gap": "gap-y",
  width: "w",
  height: "h",
  "min-width": "min-w",
  "min-height": "min-h",
  "max-width": "max-w",
  "max-height": "max-h",
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
};
function utility(decl) {
  const prop = decl.prop,
    value = decl.value;
  let result = plain[`${prop}:${value}`];
  if (
    !result &&
    spacing[prop] &&
    /^\d+px$/.test(value) &&
    Number.parseInt(value) % 4 === 0
  )
    result = `${spacing[prop]}-${Number.parseInt(value) / 4}`;
  if (!result && spacing[prop] && value === "0") result = `${spacing[prop]}-0`;
  if (!result)
    result = `[${prop}:${value.replace(/_/g, "\\_").replace(/\s+/g, "_")}]`;
  return result + (decl.important ? "!" : "");
}
function mediaVariant(params) {
  const width = params.match(/^\(\s*(min|max)-width\s*:\s*([\d.]+)px\s*\)$/);
  if (width) return `${width[1]}-[${width[2]}px]:`;
  if (/^\(prefers-reduced-motion\s*:\s*reduce\)$/.test(params))
    return "motion-reduce:";
  if (/^\(prefers-reduced-motion\s*:\s*no-preference\)$/.test(params))
    return "motion-safe:";
  return `[@media(${params.replace(/\s+/g, "_")})]:`;
}
function conditions(node) {
  const result = [];
  for (let parent = node.parent; parent; parent = parent.parent)
    if (parent.type === "atrule" && parent.name === "media")
      result.unshift(mediaVariant(parent.params));
  return result.join("");
}
const routes = [];
let commonScript;
let globalRules;
const jsxAttrs = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  srcset: "srcSet",
  fetchpriority: "fetchPriority",
  crossorigin: "crossOrigin",
  readonly: "readOnly",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  maxlength: "maxLength",
  minlength: "minLength",
  novalidate: "noValidate",
  viewbox: "viewBox",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "fill-opacity": "fillOpacity",
  "stroke-opacity": "strokeOpacity",
  preserveaspectratio: "preserveAspectRatio",
  referrerpolicy: "referrerPolicy",
  datetime: "dateTime",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
};
const boolAttrs = new Set([
  "disabled",
  "required",
  "multiple",
  "autoFocus",
  "readOnly",
  "noValidate",
  "hidden",
  "allowFullScreen",
]);
const voidTags = new Set([
  "img",
  "input",
  "br",
  "hr",
  "meta",
  "link",
  "area",
  "base",
  "col",
  "embed",
  "param",
  "source",
  "track",
  "wbr",
]);
function splitCssValues(value) {
  const parts = [];
  let current = "",
    depth = 0,
    quote = "";
  for (const char of value) {
    if (quote) {
      current += char;
      if (char === quote) quote = "";
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      current += char;
      continue;
    }
    if (char === "(") depth++;
    if (char === ")") depth--;
    if (/\s/.test(char) && depth === 0) {
      if (current) parts.push(current);
      current = "";
    } else current += char;
  }
  if (current) parts.push(current);
  return parts;
}
const identifier = (f) =>
  path
    .basename(f, ".html")
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("")
    .replace(/^Index$/, "Home");
const encode = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/{/g, "&#123;")
    .replace(/}/g, "&#125;");
for (const file of files) {
  const relative = file.replace(/\\/g, "/");
  const html = fs.readFileSync(path.join(source, file), "utf8");
  const $ = load(html);
  const css = postcss.parse($("style").text());
  // Expand shorthands whose generated utility order could otherwise override a later longhand.
  css.walkDecls((decl) => {
    if (["margin", "padding", "inset"].includes(decl.prop)) {
      const parts = splitCssValues(decl.value);
      const values = [
        parts[0],
        parts[1] || parts[0],
        parts[2] || parts[0],
        parts[3] || parts[1] || parts[0],
      ];
      for (const [i, side] of ["top", "right", "bottom", "left"].entries())
        decl.cloneBefore({
          prop: decl.prop === "inset" ? side : `${decl.prop}-${side}`,
          value: values[i],
        });
      decl.remove();
      return;
    }
    if (decl.prop === "font" && decl.value === "inherit") {
      for (const prop of [
        "font-family",
        "font-size",
        "font-style",
        "font-weight",
        "font-variant",
        "font-stretch",
        "line-height",
      ])
        decl.cloneBefore({ prop, value: "inherit" });
      decl.remove();
    }
  });
  const classes = new Map();
  const globals = [];
  let order = 0;
  css.walkRules((rule) => {
    if (rule.parent.type === "atrule" && /keyframes/.test(rule.parent.name))
      return;
    const media = conditions(rule);
    for (const selector of rule.selectors) {
      const reset = rule.nodes.find(
        (n) => n.type === "decl" && n.prop === "all",
      );
      if (reset) {
        globals.push(`${selector}{all:${reset.value};}`);
      }
      if (
        [
          "*",
          "*::before",
          "*::after",
          ":root",
          "html",
          "body",
          "::selection",
          ":focus-visible",
        ].includes(selector) ||
        selector.startsWith("body.") ||
        selector.startsWith(".has-motion ")
      ) {
        let out = `${selector}{${rule.nodes
          .filter((n) => n.type === "decl")
          .map((n) => `${n.prop}:${n.value}${n.important ? "!important" : ""};`)
          .join("")}}`;
        for (let p = rule.parent; p; p = p.parent)
          if (p.type === "atrule" && p.name === "media")
            out = `@media ${p.params}{${out}}`;
        globals.push(out);
        continue;
      }
      const tree = selectorParser().astSync(selector);
      const selection = tree.first;
      let last = 0;
      selection.nodes.forEach((n, i) => {
        if (n.type === "combinator") last = i + 1;
      });
      let isDynamic = false;
      const matcher = tree.clone();
      matcher.walkPseudos((n) => {
        if (
          n.value.startsWith("::") ||
          dynamicPseudos.has(n.value) ||
          (n.value === ":not" &&
            n.toString().match(/is-|has-|:hover|:focus|:checked|:placeholder/))
        ) {
          isDynamic = true;
          n.remove();
        }
      });
      matcher.walkClasses((n) => {
        if (dynamic.test(n.value)) {
          isDynamic = true;
          n.remove();
        }
      });
      // State-only selectors (gallery grid spans, motion states) need a stable target.
      for (const sel of matcher.nodes) {
        if (!sel.nodes.length)
          sel.append(selectorParser.universal({ value: "*" }));
        for (let i = 0; i < sel.nodes.length; i++)
          if (
            sel.nodes[i].type === "combinator" &&
            (!sel.nodes[i + 1] || sel.nodes[i + 1].type === "combinator")
          )
            sel.insertAfter(
              sel.nodes[i],
              selectorParser.universal({ value: "*" }),
            );
      }
      let targets;
      try {
        targets = $(matcher.toString()).toArray();
      } catch (error) {
        throw new Error(`Selector ${selector}: ${error.message}`);
      }
      const specificity = calculate(selector);
      const rank = specificity.A * 1e6 + specificity.B * 1e3 + specificity.C;
      let variant = "";
      if (isDynamic) {
        const parent = selection.nodes
          .slice(0, last)
          .map((n) => n.toString())
          .join("");
        const qualifiers = selection.nodes
          .slice(last)
          .filter(
            (n) =>
              (n.type === "class" && dynamic.test(n.value)) ||
              n.type === "pseudo" ||
              n.type === "attribute",
          )
          .map((n) => n.toString())
          .join("");
        const relativeSelector = `${parent}&${qualifiers}`.trim();
        variant =
          relativeSelector === "&:hover"
            ? "hover:"
            : relativeSelector === "&:focus-visible"
              ? "focus-visible:"
              : `[${relativeSelector.replace(/\s+/g, "_")}]:`;
      }
      for (const target of targets) {
        if (
          target.name === "html" ||
          target.name === "head" ||
          target.name === "body" ||
          $(target).closest("head").length
        )
          continue;
        let entries = classes.get(target);
        if (!entries) classes.set(target, (entries = new Map()));
        for (const declaration of rule.nodes.filter(
          (n) => n.type === "decl" && n.prop !== "all",
        )) {
          const key = media + variant + declaration.prop;
          const previous = entries.get(key),
            priority = rank + (declaration.important ? 1e9 : 0);
          if (!previous || priority >= previous.priority)
            entries.set(key, {
              media,
              variant,
              prop: declaration.prop,
              priority,
              order: order++,
              value: media + variant + utility(declaration),
            });
        }
      }
    }
  });
  if (!globalRules) globalRules = globals;
  else globalRules = [...new Set([...globalRules, ...globals])];
  const script = $("body script").text();
  const [prefix, suffix] = script.split(
    "/* ================= PAGE SCRIPT ================= */",
  );
  if (!commonScript)
    commonScript = prefix.replace(
      /^\s*document\.addEventListener\('DOMContentLoaded', \(\) => \{\s*/,
      "",
    );
  let behavior = suffix
    .replace(/\/\* shared reveals, parallax & text splits \*\/[\s\S]*$/, "")
    .trim();
  const component = identifier(file);
  const behaviorName = `init${component}`;
  const listenTransform = (code) =>
    code
      .replace(
        /([A-Za-z_$][\w$]*|\$\([^;\n]+?\))\.addEventListener\(/g,
        "listen($1, ",
      )
      .replace(/\bsetTimeout\(/g, "schedule(")
      .replace(/window\.SplitText/g, "SplitText")
      .replace(/G\.ready\.then\(/g, "G.whenReady(")
      .replace(/\brequestAnimationFrame\(/g, "nextFrame(");
  fs.writeFileSync(
    `${destination}/behaviors/${component}.js`,
    `import { runEstatePage } from './shared.js';\n\nexport function ${behaviorName}() {\n  return runEstatePage(({ $, $$, G, gsap, ScrollTrigger, SplitText, Lenis, motion, reduced, mm, root, listen, schedule, nextFrame }) => {\n${listenTransform(behavior)}\n  });\n}\n`,
  );
  const routePath =
    relative === "index.html" ? "/" : "/" + relative.replace(/\.html$/, "");
  routes.push({
    component,
    path: routePath,
    file: relative,
    title: $("title").text(),
    description: $('meta[name="description"]').attr("content"),
    image: $('meta[property="og:image"]').attr("content"),
    schema: $('script[type="application/ld+json"]').text(),
  });
  $("body script").remove();
  function render(node, indent = 4) {
    if (node.type === "comment") return "";
    if (node.type === "text") return encode(node.data);
    if (!node.name) return "";
    const attrs = [];
    if (node.name === "select") {
      const selected = $(node).find("option[selected]").first();
      if (selected.length)
        attrs.push(`defaultValue="${encode(selected.attr("value") || "")}"`);
    }
    const original = (node.attribs.class || "").split(/\s+/).filter(Boolean);
    const entries = classes.get(node);
    const added = [...(entries?.values() || [])]
      .filter((entry) => {
        if (!entry.media || entry.variant) return true;
        const base = entries.get(entry.prop);
        return (
          !base ||
          base.priority < entry.priority ||
          (base.priority === entry.priority && base.order < entry.order)
        );
      })
      .sort((a, b) => a.order - b.order)
      .map((x) => x.value);
    if (node.attribs.style) {
      postcss.parse(`x{${node.attribs.style}}`).walkDecls((d) => {
        d.important = true;
        added.push(utility(d));
      });
    }
    // Bootstrap's only layout helper in these files; the width override is migrated above.
    if (original.includes("container-xxl")) added.push("w-full", "mx-auto");
    if (original.includes("lead")) added.push("font-light");
    if (original.includes("visually-hidden"))
      added.push("-m-px", "p-0", "border-0");
    for (const [raw, value] of Object.entries(node.attribs)) {
      if (raw === "class" || raw === "style") continue;
      const attr = jsxAttrs[raw] || raw;
      if (raw.startsWith("on"))
        throw new Error(`Inline handler in ${file}: ${raw}`);
      if (boolAttrs.has(attr)) {
        attrs.push(attr);
        continue;
      }
      let val = value;
      if (
        raw === "href" &&
        /\.html(?:#.*)?$/.test(val) &&
        !/^https?:/.test(val)
      ) {
        const resolved = path.posix.normalize(
          path.posix.join(path.posix.dirname(relative), val),
        );
        val = resolved.replace(/^index\.html/, "").replace(/\.html/, "");
        val = "/" + val;
      }
      if (
        attr === "value" &&
        ["input", "textarea", "select"].includes(node.name)
      )
        attrs.push(`defaultValue="${encode(val)}"`);
      else if (attr === "checked") attrs.push("defaultChecked");
      else if (attr === "selected") continue;
      else attrs.push(`${attr}="${encode(val)}"`);
    }
    if (original.length || added.length)
      attrs.unshift(
        "className={String.raw`" +
          standardTextClasses([...new Set([...original, ...added])]
            .join(" "))
            .replace(
              /\[([^\[\]]+)\]:/g,
              (_, selector) => "[" + selector.replace(/__/g, "\\_\\_") + "]:",
            ) +
          "`}",
      );
    let tag = node.name;
    if (tag === "a" && attrs.some((a) => /^href="\/(?!\/)/.test(a))) {
      tag = "Link";
      const i = attrs.findIndex((a) => a.startsWith("href="));
      attrs[i] = attrs[i].replace(/^href=/, "to=");
    }
    const open = `<${tag}${attrs.length ? " " + attrs.join(" ") : ""}`;
    if (voidTags.has(tag)) return open + " />";
    return (
      open +
      ">" +
      node.children.map((c) => render(c, indent + 2)).join("") +
      `</${tag}>`
    );
  }
  const depth = relative.includes("/") ? "../../" : "../";
  const body = $("body")
    .contents()
    .toArray()
    .map((n) => render(n))
    .join("");
  fs.writeFileSync(
    `${destination}/pages/${relative.replace(/[^/]+$/, component + ".jsx")}`,
    `import { Link } from 'react-router-dom';\nimport { useLayoutEffect } from 'react';\nimport { ${behaviorName} } from '${depth}behaviors/${component}.js';\n\nexport default function ${component}() {\n  useLayoutEffect(${behaviorName}, []);\n  return (<>${body}\n  </>);\n}\n`,
  );
}
const listenTransform = (code) =>
  code
    .replace(
      /([A-Za-z_$][\w$]*|\$\([^;\n]+?\))\.addEventListener\(/g,
      "listen($1, ",
    )
    .replace(/\bsetTimeout\(/g, "schedule(")
    .replace(/\brequestAnimationFrame\(/g, "nextFrame(");
commonScript = listenTransform(commonScript)
  .replace(/loader\.remove\(\)/g, 'gsap.set(loader, { display: "none" })')
  .replace(/G\.ready\.then\(/g, "G.whenReady(")
  .replace(
    "const $ =",
    "G.whenReady = callback => G.ready.then(() => { if (!controller.signal.aborted) context.add(callback); });\nconst $ =",
  )
  .replace("SplitText.create(el, {", "const split = SplitText.create(el, {")
  .replace("return anim;", "splits.add(split); return anim;")
  .replace(
    /gsap\.ticker\.add\(t => lenis\.raf\(t \* 1000\)\);/,
    "ticker = t => lenis.raf(t * 1000); gsap.ticker.add(ticker);",
  )
  .replace(
    /\.then\(\(\) => \{ initSplits\(\); ScrollTrigger\.sort\(\); ScrollTrigger\.refresh\(\); \}\);/,
    ".then(() => { if (controller.signal.aborted) return; context.add(() => { initSplits(); ScrollTrigger.sort(); ScrollTrigger.refresh(); }); });",
  );
fs.writeFileSync(
  `${destination}/behaviors/shared.js`,
  `import { gsap } from 'gsap';\nimport { ScrollTrigger } from 'gsap/ScrollTrigger';\nimport { SplitText } from 'gsap/SplitText';\nimport Lenis from 'lenis';\n\n// Source animation choreography, mounted and disposed with each React page.\nexport function runEstatePage(initPage) {\n  window.scrollTo({ top: 0, behavior: "instant" });\n  const controller = new AbortController();\n  const timers = new Set();\n  const frames = new Set();\n  const splits = new Set();\n  let ticker, GState, media;\n  const listen = (target, event, handler, options = {}) => target.addEventListener(event, handler, { ...(typeof options === 'boolean' ? { capture: options } : options), signal: controller.signal });\n  const schedule = (callback, delay) => { const id = setTimeout(() => { timers.delete(id); if (!controller.signal.aborted) callback(); }, delay); timers.add(id); return id; };\n  const nextFrame = callback => { const id = requestAnimationFrame(() => { frames.delete(id); if (!controller.signal.aborted) callback(); }); frames.add(id); return id; };\n  const context = gsap.context(() => {\n${commonScript
    .replace(/const hasGSAP = [^;]+;/, "const hasGSAP = true;")
    .replace("if (window.SplitText)", "if (SplitText)")
    .replace("motion && window.Lenis", "motion && Lenis")
    .replace(
      "!window.SplitText",
      "!SplitText",
    )}\n    GState = G; media = mm;\n    initPage({ $, $$, G, gsap, ScrollTrigger, SplitText, Lenis, motion, reduced, mm, root, listen, schedule, nextFrame });\n    G.initShared();\n  });\n  return () => {\n    controller.abort(); timers.forEach(clearTimeout); frames.forEach(cancelAnimationFrame);\n    if (ticker) gsap.ticker.remove(ticker);\n    media?.revert(); splits.forEach(split => split.revert()); context.revert(); GState?.lenis?.destroy();\n    document.documentElement.classList.remove('has-motion', 'has-cursor');\n    document.body.classList.remove('menu-is-open', 'lightbox-is-open', 'home-pinned'); document.body.style.overflow = '';\n    if (window.Galkanda === GState) delete window.Galkanda;\n  };\n}\n`,
);
const base = `@import "tailwindcss";\n@import "lenis/dist/lenis.css";\n\n/* Original design tokens and document baseline. Page styling lives in Tailwind utilities. */\n@layer base {\n  *, ::before, ::after { box-sizing: border-box; }\n  p { margin-top: 0; margin-bottom: 1rem; }\n  ul, ol { margin-top: 0; margin-bottom: 1rem; padding-left: 2rem; }\n  dl, figure { margin: 0 0 1rem; }\n  dd { margin-left: 0; margin-bottom: .5rem; }\n  dt, strong, b { font-weight: 700; }\n  a { text-decoration: underline; }\n  button, input, textarea, select { font: inherit; line-height: inherit; }\n  button { cursor: pointer; padding: 1px 6px; color: #000; }\n  input { color: #000; }\n  option { padding: 0 2px 1px; }\n  legend { float: left; width: 100%; padding: 0; margin-bottom: .5rem; font-size: 1.5rem; line-height: inherit; }\n  legend + * { clear: left; }\n  button, input, select, textarea { margin: 0; }\n  svg { vertical-align: middle; }\n  img { vertical-align: middle; }\n  sup { position: relative; font-size: .75em; line-height: 0; vertical-align: baseline; top: -.5em; }\n${globalRules.join("\n")}\n}\n`;
fs.writeFileSync(`${destination}/index.css`, standardCssFontSizes(base));
fs.writeFileSync(
  `${destination}/pages/routes.js`,
  `import { lazy } from 'react';\n` +
    routes
      .map(
        (r) =>
          `const ${r.component} = lazy(() => import('./${r.file.replace(/[^/]+$/, r.component + ".jsx")}'));`,
      )
      .join("\n") +
    `\n\nexport const pages = [\n${routes.map((r) => `  { path: ${JSON.stringify(r.path)}, Component: ${r.component}, title: ${JSON.stringify(r.title)}, description: ${JSON.stringify(r.description)}, image: ${JSON.stringify(r.image)}, schema: ${r.schema.trim()} },`).join("\n")}\n];\n`,
);
console.log(`Converted ${routes.length} estate pages to React and Tailwind.`);
