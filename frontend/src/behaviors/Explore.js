import { runEstatePage } from "./shared.js";

export function initExplore() {
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
      /* Explore cards — desktop hover is CSS; on touch / small screens the same motion plays as each card comes into view */
      if (motion) {
        ScrollTrigger.batch(".ecard", {
          start: "top 92%",
          once: true,
          onEnter: (b) =>
            gsap.fromTo(
              b,
              { opacity: 0, y: 36 },
              {
                opacity: 1,
                y: 0,
                duration: 1.1,
                stagger: 0.08,
                ease: "power3.out",
              },
            ),
        });
        $$(".ecard__media img").forEach((im) =>
          gsap.fromTo(
            im,
            { yPercent: -4 },
            {
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: im.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          ),
        );
        mm.add("(hover: none), (max-width: 991.98px)", () => {
          $$(".ecard").forEach((c) =>
            ScrollTrigger.create({
              trigger: c,
              start: "top 68%",
              end: "bottom 32%",
              toggleClass: "is-inview",
            }),
          );
        });
      }

      /* category filter */
      const cards = $$("#journalGrid .ecard");
      let busy = false;
      $$(".journal__filters .filter").forEach((b) =>
        listen(b, "click", () => {
          if (busy || b.classList.contains("is-active")) return;
          $$(".journal__filters .filter").forEach((x) => {
            x.classList.toggle("is-active", x === b);
            x.setAttribute("aria-pressed", String(x === b));
          });
          const f = b.dataset.filter,
            show = (c) => f === "all" || c.dataset.cat === f;
          const done = () => {
            cards.forEach((c) => c.classList.toggle("is-hidden", !show(c)));
            const vis = cards.filter((c) => !c.classList.contains("is-hidden"));
            $("#jstatus").textContent = vis.length + " experiences shown";
            if (motion) {
              ScrollTrigger.refresh();
              gsap.fromTo(
                vis,
                { opacity: 0, y: 24 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.05,
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
              cards.filter((c) => !c.classList.contains("is-hidden")),
              {
                opacity: 0,
                y: -10,
                duration: 0.3,
                stagger: 0.02,
                ease: "power2.in",
                onComplete: done,
              },
            );
          else done();
        }),
      );
    },
  );
}
