import { runEstatePage } from "./shared.js";

export function initSigiriyaDayTrip() {
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

      /* activity page motion */
      if (motion) {
        G.whenReady(() => {
          const tl = gsap.timeline({ delay: 0.1 });
          tl.fromTo(
            '[data-anim="top"]',
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.08,
              ease: "power3.out",
            },
          )
            .add(() => G.splitReveal($(".atop__h1"), { duration: 1.2 }), 0.15)
            .fromTo(
              ".kfacts li",
              { opacity: 0, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.06,
                ease: "power3.out",
              },
              0.5,
            )
            .fromTo(
              ".plan",
              {
                opacity: 0,
                x: window.innerWidth < 992 ? 0 : 30,
                y: window.innerWidth < 992 ? 24 : 0,
              },
              { opacity: 1, x: 0, y: 0, duration: 1.1, ease: "power3.out" },
              0.4,
            )
            .fromTo(
              ".plan__btn",
              { opacity: 0, y: 10 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.06,
                ease: "power3.out",
              },
              0.7,
            );
        });
        gsap
          .timeline({
            scrollTrigger: { trigger: ".agal", start: "top 85%", once: true },
          })
          .fromTo(
            ".agal__main",
            { clipPath: "inset(8% 0% 8% 0% round 12px)", opacity: 0 },
            {
              clipPath: "inset(0% 0% 0% 0% round 12px)",
              opacity: 1,
              duration: 1.3,
              ease: "power3.out",
            },
          )
          .fromTo(
            ".agal__t",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.08,
              ease: "power3.out",
            },
            0.25,
          );
        gsap.fromTo(
          ".agal__main img",
          { yPercent: -3 },
          {
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: ".agal",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
        ScrollTrigger.batch(".adet > div", {
          start: "top 94%",
          once: true,
          onEnter: (b) =>
            gsap.fromTo(
              b,
              { opacity: 0, y: 14 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.04,
                ease: "power3.out",
              },
            ),
        });
      }
    },
  );
}
