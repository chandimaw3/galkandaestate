import { runEstatePage } from "./shared.js";

export function initGallery() {
  return runEstatePage(
    ({
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
    }) => {
      /* =========================================================
   GALLERY — category filter + rhythmic editorial spans
========================================================= */
      const items = $$(".gmosaic .m-item");
      const PATTERN = [
        "c7 r6 w-full",
        "c5 r3",
        "c5 r3",
        "c4 r5",
        "c5 r5 w-full",
        "c3 r5",
        "c6 r4 w-full",
        "c3 r4",
        "c3 r4",
        "c3 r5",
        "c5 r5",
        "c4 r5",
      ];
      const ALL = PATTERN.join(" ").split(" ");
      const layout = () => {
        items
          .filter((it) => !it.classList.contains("is-hidden"))
          .forEach((it, i) => {
            it.classList.remove(...ALL);
            it.classList.add(...PATTERN[i % PATTERN.length].split(" "));
          });
      };
      const counts = {};
      items.forEach((it) => {
        const c = it.dataset.cat;
        counts[c] = (counts[c] || 0) + 1;
      });
      $$(".filter").forEach((b) => {
        const f = b.dataset.filter;
        b.querySelector("sup").textContent =
          f === "all" ? items.length : counts[f] || 0;
      });
      layout();

      let busy = false;
      const apply = (f) => {
        const show = (it) => f === "all" || it.dataset.cat === f;
        const done = () => {
          items.forEach((it) => it.classList.toggle("is-hidden", !show(it)));
          layout();
          const visible = items.filter(
            (it) => !it.classList.contains("is-hidden"),
          );
          $("#gstatus").textContent = visible.length + " photographs shown";
          if (motion) {
            ScrollTrigger.refresh();
            gsap.fromTo(
              visible,
              { opacity: 0, y: 24, scale: 0.98 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.9,
                stagger: 0.04,
                ease: "power3.out",
                onComplete: () => {
                  busy = false;
                },
              },
            );
          } else busy = false;
        };
        busy = true;
        if (motion)
          gsap.to(
            items.filter((it) => !it.classList.contains("is-hidden")),
            {
              opacity: 0,
              y: -12,
              duration: 0.35,
              stagger: 0.015,
              ease: "power2.in",
              onComplete: done,
            },
          );
        else done();
      };
      $$(".filter").forEach((b) =>
        listen(b, "click", () => {
          if (busy || b.classList.contains("is-active")) return;
          $$(".filter").forEach((x) => {
            x.classList.toggle("is-active", x === b);
            x.setAttribute("aria-pressed", String(x === b));
          });
          apply(b.dataset.filter);
          const top =
            $(".gpage").getBoundingClientRect().top + window.scrollY - 40;
          if (window.scrollY > top + 200) G.scrollTo(top);
        }),
      );

      if (motion) {
        ScrollTrigger.batch(".gmosaic .m-item", {
          start: "top 94%",
          once: true,
          onEnter: (b) =>
            gsap.fromTo(
              b,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.06,
                ease: "power3.out",
              },
            ),
        });
      }
    },
  );
}
