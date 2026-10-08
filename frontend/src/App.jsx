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
  const { pathname, hash } = useLocation();
  const cleanPath =
    pathname
      .replace(/\/index\.html$/, "/")
      .replace(/\.html$/, "")
      .replace(/\/$/, "") || "/";
  const page = pages.find((page) => page.path === cleanPath);

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
    </BrowserRouter>
  );
}
