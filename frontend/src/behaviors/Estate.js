import { runEstatePage } from "./shared.js";

export function initEstate() {
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
      /* FAQ accordion */
      $$(".faq__btn").forEach((b) =>
        listen(b, "click", () => {
          const it = b.closest(".faq__item"),
            open = !it.classList.contains("is-open");
          it.classList.toggle("is-open", open);
          b.setAttribute("aria-expanded", String(open));
          if (motion) ScrollTrigger.refresh();
        }),
      );
      if (motion)
        ScrollTrigger.batch(".faq__item", {
          start: "top 92%",
          once: true,
          onEnter: (b) =>
            gsap.fromTo(
              b,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.05,
                ease: "power3.out",
              },
            ),
        });

      if (motion) {
        ScrollTrigger.batch(".feats li", {
          start: "top 94%",
          once: true,
          onEnter: (b) =>
            gsap.fromTo(
              b,
              { opacity: 0, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.03,
                ease: "power3.out",
              },
            ),
        });
        ScrollTrigger.batch(".glance li", {
          start: "top 92%",
          once: true,
          onEnter: (b) =>
            gsap.fromTo(
              b,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.08,
                ease: "power3.out",
              },
            ),
        });
      }
    },
  );
}
