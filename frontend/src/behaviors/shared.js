import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

// Source animation choreography, mounted and disposed with each React page.
export function runEstatePage(initPage) {
  // Build scroll-triggered entrances at the new route's position, not the old page's scroll.
  window.scrollTo({ top: 0, behavior: "instant" });
  const controller = new AbortController();
  const timers = new Set();
  const frames = new Set();
  const splits = new Set();
  let ticker, GState, media;
  const listen = (target, event, handler, options = {}) =>
    target.addEventListener(event, handler, {
      ...(typeof options === "boolean" ? { capture: options } : options),
      signal: controller.signal,
    });
  const schedule = (callback, delay) => {
    const id = setTimeout(() => {
      timers.delete(id);
      if (!controller.signal.aborted) callback();
    }, delay);
    timers.add(id);
    return id;
  };
  const nextFrame = (callback) => {
    const id = requestAnimationFrame(() => {
      frames.delete(id);
      if (!controller.signal.aborted) callback();
    });
    frames.add(id);
    return id;
  };
  const context = gsap.context(() => {
    "use strict";

    /* =========================================================
   0. ENVIRONMENT
========================================================= */
    const root = document.documentElement;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasGSAP = true;
    const motion = hasGSAP && !reduced;
    const G = (window.Galkanda = { lenis: null, motion, reduced });
    G.whenReady = (callback) =>
      G.ready.then(() => {
        if (!controller.signal.aborted) context.add(callback);
      });
    if (hasGSAP) {
      gsap.registerPlugin(ScrollTrigger);
      if (SplitText) gsap.registerPlugin(SplitText);
      gsap.defaults({ ease: "power3.out" });
    }
    if (motion) root.classList.add("has-motion");
    const mm = motion ? gsap.matchMedia() : null;
    const $ = (s, c = document) => c.querySelector(s);
    const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
    $$("[data-year]").forEach(
      (el) => (el.textContent = new Date().getFullYear()),
    );

    /* missing-image fallback: keeps layout intact if a placeholder URL fails */
    $$("img").forEach((im) => {
      const fail = () => {
        const f = im.closest(".frame, .m-btn");
        if (f) {
          f.classList.add("img-missing");
          f.setAttribute("data-ph", im.alt || "Photograph");
        }
      };
      if (im.complete && im.getAttribute("src") && im.naturalWidth === 0)
        fail();
      else listen(im, "error", fail, { once: true });
    });

    /* =========================================================
   1. LENIS SMOOTH SCROLL (synced with ScrollTrigger)
========================================================= */
    if (motion && Lenis) {
      const lenis = new Lenis({
        duration: 1.35,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.1,
        smoothWheel: true,
      });
      G.lenis = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      ticker = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(ticker); // GSAP's ticker runs on requestAnimationFrame
      gsap.ticker.lagSmoothing(0);
    }
    G.scrollTo = (target, opts = {}) => {
      opts = {
        offset: typeof target === "number" ? 0 : -(document.getElementById("siteHeader")?.offsetHeight || 78) - 24,
        ...opts,
      };
      if (G.lenis)
        G.lenis.scrollTo(
          target,
          Object.assign(
            { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) },
            opts,
          ),
        );
      else {
        const y =
          typeof target === "number"
            ? target
            : target.getBoundingClientRect().top +
              window.scrollY +
              (opts.offset || 0);
        window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
      }
    };
    listen(document, "click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || a.hasAttribute("data-noscroll")) return;
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      G.scrollTo(t);
    });

    /* =========================================================
   2. NAVIGATION (light over photographs, solid elsewhere)
========================================================= */
    const header = $("#siteHeader");
    G.updateHeader = () => {
      if (!header || document.body.classList.contains("menu-is-open")) return;
      const probe = header.offsetHeight / 2;
      let light = false;
      $$('[data-header="light"]').forEach((z) => {
        const r = z.getBoundingClientRect();
        if (r.top <= probe && r.bottom >= probe) light = true;
      });
      header.classList.toggle("is-light", light);
      header.classList.toggle("is-solid", !light);
    };
    let headerTick = false;
    const onScrollHeader = () => {
      if (headerTick) return;
      headerTick = true;
      nextFrame(() => {
        G.updateHeader();
        headerTick = false;
      });
    };
    if (G.lenis) G.lenis.on("scroll", onScrollHeader);
    else listen(window, "scroll", onScrollHeader, { passive: true });
    listen(window, "resize", onScrollHeader);
    G.updateHeader();

    /* overlay menu */
    (() => {
      const toggle = $(".menu-toggle"),
        menu = $("#siteMenu");
      if (!toggle || !menu) return;
      const links = $$(".menu__links a span", menu);
      const foot = $(".menu__foot", menu);
      let open = false,
        tl = null;
      const focusables = () => $$("a, button", menu).concat([toggle]);
      const set = (state) => {
        open = state;
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        menu.setAttribute("aria-hidden", String(!open));
        document.body.classList.toggle("menu-is-open", open);
        header.classList.toggle("menu-open", open);
        if (G.lenis) open ? G.lenis.stop() : G.lenis.start();
        if (motion) {
          if (tl) tl.kill();
          if (open) {
            menu.classList.add("is-open");
            tl = gsap
              .timeline()
              .fromTo(
                menu,
                { clipPath: "inset(0% 0% 100% 0%)" },
                {
                  clipPath: "inset(0% 0% 0% 0%)",
                  duration: 1,
                  ease: "power4.inOut",
                },
              )
              .fromTo(
                links,
                { yPercent: 110, rotation: 2 },
                {
                  yPercent: 0,
                  rotation: 0,
                  duration: 1,
                  stagger: 0.06,
                  ease: "power3.out",
                },
                0.45,
              )
              .fromTo(
                foot,
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.6 },
                0.8,
              );
          } else {
            tl = gsap
              .timeline({ onComplete: () => menu.classList.remove("is-open") })
              .to(links, {
                yPercent: -110,
                duration: 0.5,
                stagger: 0.03,
                ease: "power2.in",
              })
              .to(
                menu,
                {
                  clipPath: "inset(0% 0% 100% 0%)",
                  duration: 0.8,
                  ease: "power4.inOut",
                },
                0.2,
              );
          }
        } else menu.classList.toggle("is-open", open);
        if (open)
          schedule(() => {
            const f = $("a", menu);
            f && f.focus();
          }, 300);
        else {
          G.updateHeader();
        }
      };
      listen(toggle, "click", () => set(!open));
      listen(menu, "click", (e) => {
        if (e.target.closest("a")) set(false);
      });
      listen(document, "keydown", (e) => {
        if (!open) return;
        if (e.key === "Escape") {
          set(false);
          toggle.focus();
        }
        if (e.key === "Tab") {
          const f = focusables(),
            first = f[0],
            last = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      });
      listen(window, "resize", () => {
        if (open && window.innerWidth >= 992) set(false);
      });
    })();

    /* =========================================================
   3. CUSTOM CURSOR (desktop pointer only)
========================================================= */
    (() => {
      const c = $(".cursor");
      const fine = window.matchMedia(
        "(hover: hover) and (pointer: fine) and (min-width: 992px)",
      );
      if (!c || !motion || !fine.matches) return;
      root.classList.add("has-cursor");
      const ring = $(".cursor__ring", c),
        dot = $(".cursor__dot", c),
        label = $(".cursor__ring span", c);
      const rx = gsap.quickTo(ring, "x", {
          duration: 0.55,
          ease: "power3.out",
        }),
        ry = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3.out" });
      const dx = gsap.quickTo(dot, "x", { duration: 0.12 }),
        dy = gsap.quickTo(dot, "y", { duration: 0.12 });
      let shown = false;
      listen(
        window,
        "pointermove",
        (e) => {
          if (!shown) {
            shown = true;
            gsap.set([ring, dot], { x: e.clientX, y: e.clientY });
            gsap.to(c, { opacity: 1, duration: 0.4 });
          }
          rx(e.clientX);
          ry(e.clientY);
          dx(e.clientX);
          dy(e.clientY);
        },
        { passive: true },
      );
      listen(document, "pointerover", (e) => {
        const v = e.target.closest("[data-cursor]");
        if (v)
          label.textContent =
            v.getAttribute("data-cursor") === "moment" ? "Moment \u2197" : "View \u2197";
        const l = !v && e.target.closest("a, button");
        c.classList.toggle("is-view", !!v);
        c.classList.toggle("is-link", !!l);
        c.classList.toggle(
          "is-light",
          !!e.target.closest(
            "[data-cursor-light], .sec--dark, .sec--deep, .site-footer, .lightbox",
          ),
        );
      });
      listen(document, "pointerleave", () =>
        gsap.to(c, { opacity: 0, duration: 0.3 }),
      );
      listen(document, "pointerenter", () =>
        gsap.to(c, { opacity: 1, duration: 0.3 }),
      );
    })();

    /* =========================================================
   4. LOADER (homepage only, ~1.2s)
========================================================= */
    G.ready = new Promise((resolve) => {
      const loader = $(".loader");
      if (!loader) return resolve();
      if (!motion) {
        gsap.set(loader, { display: "none" });
        return resolve();
      }
      if (G.lenis) G.lenis.stop();
      gsap
        .timeline({
          onComplete: () => {
            // React owns this node; removing it breaks the next route unmount.
            gsap.set(loader, { display: "none" });
            if (G.lenis) G.lenis.start();
          },
        })
        .to(".loader__line i", { scaleX: 1, duration: 1, ease: "power2.inOut" })
        .to(
          loader,
          { opacity: 0, duration: 0.45, ease: "power2.out", onStart: resolve },
          "+=.05",
        );
    });

    /* =========================================================
   5. TEXT REVEALS (SplitText on headings)
========================================================= */
    G.splitReveal = (el, opts = {}) => {
      if (!motion) return null;
      gsap.set(el, { visibility: "visible" });
      const base = {
        yPercent: 110,
        rotation: 1.6,
        transformOrigin: "0% 100%",
        duration: 1.2,
        stagger: 0.08,
        ease: "power3.out",
      };
      if (!SplitText)
        return gsap.from(
          el,
          Object.assign(
            { y: 40, opacity: 0, duration: 1.2 },
            opts.scrollTrigger ? { scrollTrigger: opts.scrollTrigger } : {},
            opts.delay ? { delay: opts.delay } : {},
          ),
        );
      let anim;
      const split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          anim = gsap.from(self.lines, Object.assign({}, base, opts));
          return anim;
        },
      });
      splits.add(split);
      return anim;
    };
    function initSplits() {
      $$("[data-split]").forEach((el) => {
        const mode = el.getAttribute("data-split");
        if (mode === "manual") return;
        G.splitReveal(el, {
          scrollTrigger: { trigger: el, start: "top 87%", once: true },
        });
      });
    }

    /* =========================================================
   6. IMAGE REVEALS, FADES & PARALLAX
========================================================= */
    function initReveals() {
      $$("[data-reveal]").forEach((el) => {
        const dir = el.getAttribute("data-reveal");
        const from =
          {
            up: "inset(100% 0% 0% 0%)",
            left: "inset(0% 100% 0% 0%)",
            right: "inset(0% 0% 0% 100%)",
          }[dir] || "inset(100% 0% 0% 0%)";
        const im = el.querySelector(":scope > img, .frame__img");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
        tl.fromTo(
          el,
          { clipPath: from },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "power2.inOut",
            onComplete: () => {
              el.style.clipPath = "none";
            },
          },
        );
        if (im)
          tl.fromTo(
            im,
            { scale: 1.08 },
            { scale: 1, duration: 1.9, ease: "power2.inOut" },
            0,
          );
      });
      ScrollTrigger.batch("[data-fade]", {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.08,
            ease: "power3.out",
            overwrite: true,
          }),
      });
    }
    function initParallax() {
      $$("[data-parallax]").forEach((fr) => {
        const im = fr.querySelector(":scope > img");
        if (!im) return;
        const amt =
          (parseFloat(fr.getAttribute("data-parallax")) || 7) *
          (window.innerWidth < 768 ? 0.6 : 1);
        gsap.fromTo(
          im,
          { yPercent: -amt },
          {
            yPercent: amt,
            ease: "none",
            scrollTrigger: {
              trigger: fr,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }

    /* inner-page hero */
    function initPageHero() {
      const ph = $(".phero");
      if (!ph) return;
      const intro = $(".phero__intro", ph),
        im = $(".phero__intro img", ph),
        h = $(".phero h1", ph);
      const rest = $$(".phero [data-hero-fade]", ph);
      G.whenReady(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          intro,
          { clipPath: "inset(3% 3% 3% 3% round 22px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            duration: 1.8,
            ease: "power4.inOut",
          },
        )
          .fromTo(
            im,
            { scale: 1.08 },
            { scale: 1, duration: 2.2, ease: "power2.inOut" },
            0,
          )
          .add(() => {
            if (h) G.splitReveal(h, {});
          }, 0.7)
          .fromTo(
            rest,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
            1.2,
          );
      });
      mm.add({ d: "(min-width: 768px)", m: "(max-width: 767.98px)" }, (ctx) => {
        const ins = ctx.conditions.d
          ? "inset(0% 2.5% 6% 2.5% round 20px)"
          : "inset(0% 4% 5% 4% round 16px)";
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ph,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          })
          .fromTo(
            $(".phero__media", ph),
            { clipPath: "inset(0% 0% 0% 0% round 0px)" },
            { clipPath: ins, ease: "none" },
            0,
          )
          .to(intro, { yPercent: 14, ease: "none" }, 0)
          .to(
            $(".phero__copy", ph),
            { yPercent: -18, opacity: 0, ease: "none" },
            0,
          );
      });
    }

    /* =========================================================
   7. LIGHTBOX (vanilla, keyboard accessible)
========================================================= */
    G.lightbox = (() => {
      const lb = $("#lightbox");
      if (!lb) return null;
      const im = $(".lightbox__img", lb),
        capCat = $(".lightbox__cat", lb),
        capText = $(".lightbox__text", lb),
        cnt = $(".lightbox__count", lb);
      let items = [],
        idx = 0,
        lastFocus = null;
      const show = (i) => {
        idx = (i + items.length) % items.length;
        const src = items[idx].querySelector("img");
        const full = src.getAttribute("data-full") || src.currentSrc || src.src;
        const b = items[idx];
        const swap = () => {
          im.src = full;
          im.alt = src.alt;
          capCat.textContent = b.dataset.cat || "";
          capText.textContent = b.dataset.caption || src.alt;
          cnt.textContent =
            String(idx + 1).padStart(2, "0") +
            " / " +
            String(items.length).padStart(2, "0");
        };
        if (motion)
          gsap
            .timeline()
            .to(im, { opacity: 0, duration: 0.2, onComplete: swap })
            .fromTo(
              im,
              { opacity: 0, scale: 0.97 },
              { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
            );
        else swap();
      };
      const open = (list, i) => {
        items = list;
        lastFocus = document.activeElement;
        lb.classList.add("is-open");
        lb.setAttribute("aria-hidden", "false");
        if (G.lenis) G.lenis.stop();
        document.body.style.overflow = "hidden";
        if (motion)
          gsap.fromTo(
            lb,
            { opacity: 0 },
            { opacity: 1, duration: 0.45, ease: "power2.out" },
          );
        show(i);
        $(".lightbox__close", lb).focus();
      };
      const close = () => {
        const done = () => {
          lb.classList.remove("is-open");
          lb.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
          if (G.lenis) G.lenis.start();
          lastFocus && lastFocus.focus();
        };
        motion
          ? gsap.to(lb, { opacity: 0, duration: 0.35, onComplete: done })
          : done();
      };
      listen($(".lightbox__close", lb), "click", close);
      listen($(".lightbox__prev", lb), "click", () => show(idx - 1));
      listen($(".lightbox__next", lb), "click", () => show(idx + 1));
      listen(lb, "click", (e) => {
        if (e.target === lb || e.target.classList.contains("lightbox__stage"))
          close();
      });
      // touch swipe
      let sx = null;
      listen(
        lb,
        "touchstart",
        (e) => {
          sx = e.touches[0].clientX;
        },
        { passive: true },
      );
      listen(lb, "touchend", (e) => {
        if (sx === null) return;
        const d = e.changedTouches[0].clientX - sx;
        if (Math.abs(d) > 50) show(idx + (d < 0 ? 1 : -1));
        sx = null;
      });
      listen(document, "keydown", (e) => {
        if (!lb.classList.contains("is-open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(idx - 1);
        if (e.key === "ArrowRight") show(idx + 1);
        if (e.key === "Tab") {
          const f = $$("button", lb),
            first = f[0],
            last = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      });
      // wire every gallery: buttons inside [data-lightbox-group]
      $$("[data-lightbox-group]").forEach((group) => {
        listen(group, "click", (e) => {
          const b = e.target.closest(".m-btn, .lb-btn");
          if (!b) return;
          const list = $$(".m-btn, .lb-btn", group).filter(
            (x) => !x.closest(".is-hidden"),
          );
          open(list, list.indexOf(b));
        });
      });
      return { open, close };
    })();

    /* =========================================================
   8. INIT SHARED MOTION
========================================================= */
    // called after the page script, so pinned sections are created first (top-to-bottom order)
    G.initShared = () => {
      if (!motion) return;
      try {
        initPageHero();
        initReveals();
        initParallax();
        (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
          if (controller.signal.aborted) return;
          context.add(() => {
            initSplits();
            ScrollTrigger.sort();
            ScrollTrigger.refresh();
          });
        });
      } catch (err) {
        console.error(err);
        root.classList.remove("has-motion");
      }
      listen(window, "load", () => ScrollTrigger.refresh());
    };

    GState = G;
    media = mm;
    initPage({
      $,
      $$,
      G,
      gsap,
      ScrollTrigger,
      SplitText,
      Lenis,
      motion,
      reduced,
      mm,
      root,
      listen,
      schedule,
      nextFrame,
    });
    G.initShared();
    // Resolve cross-page section links after the lazy page and its motion mount.
    G.ready.then(() => {
      if (controller.signal.aborted || !window.location.hash) return;
      nextFrame(() => {
        let id;
        try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
        const target = document.getElementById(id);
        if (target) G.scrollTo(target, { immediate: true, offset: -(header?.offsetHeight || 78) - 24 });
      });
    });
  });
  return () => {
    controller.abort();
    timers.forEach(clearTimeout);
    frames.forEach(cancelAnimationFrame);
    if (ticker) gsap.ticker.remove(ticker);
    media?.revert();
    splits.forEach((split) => split.revert());
    context.revert();
    GState?.lenis?.destroy();
    document.documentElement.classList.remove("has-motion");
    document.documentElement.classList.remove("has-cursor");
    document.body.classList.remove(
      "menu-is-open",
      "lightbox-is-open",
      "home-pinned",
    );
    document.body.style.overflow = "";
    if (window.Galkanda === GState) delete window.Galkanda;
  };
}
