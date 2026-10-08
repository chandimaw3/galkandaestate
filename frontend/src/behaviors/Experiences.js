import { runEstatePage } from "./shared.js";

export function initExperiences() {
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
      /* cards: tap to expand (touch & small screens), staggered entrances on every screen size */
      $$(".xc__more").forEach((b) =>
        listen(b, "click", () => {
          const c = b.closest(".xc"),
            open = !c.classList.contains("is-open");
          c.classList.toggle("is-open", open);
          b.setAttribute("aria-expanded", String(open));
          b.querySelector("span").textContent = open ? "Less" : "Details";
          if (motion) schedule(() => ScrollTrigger.refresh(), 600);
        }),
      );
      if (motion) {
        ScrollTrigger.batch(".xc", {
          start: "top 92%",
          once: true,
          onEnter: (b) => {
            gsap.fromTo(
              b,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1.1,
                stagger: 0.07,
                ease: "power3.out",
              },
            );
            b.forEach((c) => {
              const f = c.querySelector(".frame");
              if (f)
                gsap.fromTo(
                  f,
                  { clipPath: "inset(10% 0% 10% 0% round 12px)" },
                  {
                    clipPath: "inset(0% 0% 0% 0% round 12px)",
                    duration: 1.2,
                    ease: "power3.out",
                  },
                );
            });
          },
        });
      }
    },
  );
}
