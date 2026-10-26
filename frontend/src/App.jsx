import { Suspense, useLayoutEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { pages } from "./pages/routes.js";

function EstateRoutes() {
  const { pathname, hash, search } = useLocation();
  const cleanPath =
    pathname
      .replace(/\/index\.html$/, "/")
      .replace(/\.html$/, "")
      .replace(/\/$/, "") || "/";
  const page = pages.find((p) => {
    if (p.path === cleanPath) return true;
    if (p.path.includes("/:slug")) {
      const prefix = p.path.split("/:slug")[0];
      return (
        cleanPath.startsWith(prefix + "/") &&
        cleanPath.split("/").length === prefix.split("/").length + 1
      );
    }
    return false;
  });

  useLayoutEffect(() => {
    if (!page) return;
    document.title = page.title;
    for (const [name, content] of [
      ["description", page.description],
      ["og:title", page.title],
      ["og:description", page.description],
      ["og:image", page.image],
    ]) {
      const attr = name.startsWith("og:") ? "property" : "name";
      let meta = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content || "";
    }
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify(page.schema);
    document.head.appendChild(schema);
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => schema.remove();
  }, [pathname, page]);

  useLayoutEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        if (window.Galkanda) window.Galkanda.scrollTo(target);
        else target.scrollIntoView();
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  if (cleanPath === "/estate")
    return <Navigate to={{ pathname: "/villa", search, hash }} replace />;

  if (pathname !== cleanPath && page)
    return <Navigate to={{ pathname: cleanPath, hash }} replace />;
  return (
    <Routes>
      {pages.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen" />}>
        <EstateRoutes />
      </Suspense>
      <a
        href="tel:+94778072329"
        aria-label="Call Galkanda Estate on +94 77 807 2329"
        title="Call +94 77 807 2329"
        className="floating-call fixed right-6 bottom-10 z-[130] flex h-12 items-center rounded-full px-[13.5px] [background:var(--green)] text-white shadow-lg no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:[outline-color:var(--green)] motion-reduce:transition-none motion-reduce:transform-none [margin-bottom:env(safe-area-inset-bottom)]"
      >
        <svg className="shrink-0" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />
        </svg>
        <span
          aria-hidden="true"
          className="floating-call__label text-sm font-medium"
        >
          Call now
        </span>
      </a>
    </BrowserRouter>
  );
}
