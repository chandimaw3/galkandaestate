import { runEstatePage } from "./shared.js";

export function initHome() {
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
   HOMEPAGE — 1. HERO LOAD + HERO \u2192 ABOUT TRANSFORMATION
========================================================= */
      const hx = $("#hero");
      const hxTitle = $(".hx__title"),
        hxH2 = $(".hx__h2");
      let heroST = null;

      if (motion) {
        const intro = $(".hx__intro"),
          zoomImg = $(".hx__zoom img");
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
            .to(zoomImg, { scale: 1, duration: 2.2, ease: "power2.inOut" }, 0)
            .add(
              () => G.splitReveal(hxTitle, { duration: 1.25, stagger: 0.1 }),
              0.85,
            )
            .to(
              "[data-hero-fade]",
              { opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out" },
              1.5,
            );
        });

        // split the About heading once (explicit <br> lines)
        const aboutSplit = SplitText
          ? SplitText.create(hxH2, {
              type: "lines",
              mask: "lines",
              linesClass: "split-line",
            })
          : null;
        const aboutLines = aboutSplit ? aboutSplit.lines : [hxH2];

        mm.add("(min-width: 992px)", () => {
          hx.classList.add("is-pinned");
          const stage = $(".hx__stage"),
            media = $(".hx__media"),
            zoom = $(".hx__zoom"),
            slot = $(".hx__slot");
          const copy = $(".hx__copy"),
            cream = $(".hx__cream"),
            shade = $(".hx__shade");
          const img2 = $(".hx__img2"),
            fades = $$(".hx__a");
          const hslot = $(".hx__hslot"),
            hhead = $(".hx__head"),
            hbits = $$(".hx__hb");
          document.body.classList.add("home-pinned");

          // geometry of the destination frame, relative to the pinned section
          const geo = () => {
            const s = slot.getBoundingClientRect(),
              h = hx.getBoundingClientRect();
            return {
              t: s.top - h.top,
              l: s.left - h.left,
              w: s.width,
              h: s.height,
              W: h.width,
              H: h.height,
            };
          };
          const clipTo = () => {
            const g = geo();
            return `inset(${g.t}px ${g.W - g.l - g.w}px ${g.H - g.t - g.h}px ${g.l}px round 16px)`;
          };
          const scaleTo = () => {
            const g = geo();
            return Math.max(g.w / g.W, g.h / g.H) * 1.06;
          };
          const dx = () => {
            const g = geo();
            return g.l + g.w / 2 - g.W / 2;
          };
          const dy = () => {
            const g = geo();
            return g.t + g.h / 2 - g.H / 2;
          };
          const setOrigin = () =>
            gsap.set(zoom, { transformOrigin: "50% 50%" });
          // second destination: the first photograph of "Around the House"
          const geo2 = () => {
            const s = hslot.getBoundingClientRect(),
              h = hx.getBoundingClientRect();
            return {
              t: s.top - h.top,
              l: s.left - h.left,
              w: s.width,
              h: s.height,
              W: h.width,
              H: h.height,
            };
          };
          const clipTo2 = () => {
            const g = geo2();
            return `inset(${g.t}px ${g.W - g.l - g.w}px ${g.H - g.t - g.h}px ${g.l}px round 16px)`;
          };
          const scaleTo2 = () => {
            const g = geo2();
            return Math.max(g.w / g.W, g.h / g.H) * 1.04;
          };
          const dx2 = () => {
            const g = geo2();
            return g.l + g.w / 2 - g.W / 2;
          };
          const dy2 = () => {
            const g = geo2();
            return g.t + g.h / 2 - g.H / 2;
          };
          const houseSplit = SplitText
            ? SplitText.create($(".hx__hh"), {
                type: "lines",
                mask: "lines",
                linesClass: "split-line",
              })
            : null;
          const houseLines = houseSplit ? houseSplit.lines : [$(".hx__hh")];

          gsap.set(media, { clipPath: "inset(0px 0px 0px 0px round 0px)" });
          gsap.set(aboutLines, {
            yPercent: 110,
            rotation: 1.5,
            transformOrigin: "0% 100%",
          });
          gsap.set(fades, { opacity: 0, y: 30 });
          gsap.set(img2, { clipPath: "inset(100% 0% 0% 0%)" });
          gsap.set(img2.querySelector("img"), { scale: 1.12 });
          gsap.set(houseLines, {
            yPercent: 110,
            rotation: 1.5,
            transformOrigin: "0% 100%",
          });
          gsap.set(hbits, { opacity: 0, y: 24 });
          const next = $(".hx__next"),
            nextImg = $(".hx__next img");
          gsap.set(next, { opacity: 0 });
          setOrigin();

          const TOTAL_H = 1.82,
            ABOUT_END = 1.0;
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: hx,
              start: "top top",
              end: "+=270%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onRefresh: setOrigin,
              onUpdate: (self) => {
                stage.setAttribute(
                  "data-header",
                  self.progress * TOTAL_H < 0.42 ? "light" : "off",
                );
                G.updateHeader();
              },
            },
          });
          // PHASE 1 (0 \u2192 .25): almost still — slow push-in, copy drifts
          tl.to(zoom, { scale: 1.02, duration: 0.25 }, 0)
            .to(copy, { y: -40, duration: 0.25 }, 0)
            // PHASE 2 (.25 \u2192 .60): the photograph becomes a framed editorial image
            .fromTo(
              media,
              { clipPath: "inset(0px 0px 0px 0px round 0px)" },
              {
                clipPath: clipTo,
                duration: 0.35,
                ease: "power2.inOut",
                immediateRender: false,
              },
              0.25,
            )
            .to(
              zoom,
              {
                scale: scaleTo,
                x: dx,
                y: dy,
                duration: 0.35,
                ease: "power2.inOut",
              },
              0.25,
            )
            .to(
              copy,
              { autoAlpha: 0, y: -130, duration: 0.18, ease: "power2.in" },
              0.25,
            )
            .to(shade, { opacity: 0, duration: 0.3 }, 0.28)
            .to(cream, { opacity: 1, duration: 0.25 }, 0.3)
            // PHASE 3 (.60 \u2192 1): the About composition forms around it
            .to(
              aboutLines,
              {
                yPercent: 0,
                rotation: 0,
                duration: 0.22,
                stagger: 0.05,
                ease: "power3.out",
              },
              0.56,
            )
            .fromTo(
              img2,
              { clipPath: "inset(100% 0% 0% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.3,
                ease: "power2.inOut",
                immediateRender: false,
              },
              0.62,
            )
            .to(
              img2.querySelector("img"),
              { scale: 1, duration: 0.34, ease: "power2.out" },
              0.62,
            )
            .to(
              fades,
              {
                opacity: 1,
                y: 0,
                duration: 0.22,
                stagger: 0.05,
                ease: "power3.out",
              },
              0.7,
            )
            // PHASE 4 (1.08 \u2192 1.82): understood the place — now step inside the home.
            // About copy drifts away, the farm image crops out sideways, the villa frame grows into
            // the first photograph of "Around the House" (scale ≈ 1 \u2192 1.04, power4.inOut).
            .to(
              [hhead].concat(fades),
              {
                autoAlpha: 0,
                y: -50,
                duration: 0.3,
                stagger: 0.03,
                ease: "power2.in",
              },
              1.08,
            )
            .to(img2, { x: "6vw", duration: 0.5, ease: "power4.inOut" }, 1.1)
            .fromTo(
              img2,
              { clipPath: "inset(0% 0% 0% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 100%)",
                duration: 0.5,
                ease: "power4.inOut",
                immediateRender: false,
              },
              1.1,
            )
            .fromTo(
              media,
              { clipPath: clipTo },
              {
                clipPath: clipTo2,
                duration: 0.55,
                ease: "power4.inOut",
                immediateRender: false,
              },
              1.15,
            )
            .to(
              zoom,
              {
                scale: scaleTo2,
                x: dx2,
                y: dy2,
                duration: 0.55,
                ease: "power4.inOut",
              },
              1.15,
            )
            // the scene changes inside the moving frame: the Section 03 image wipes + blends over the hero photo
            .fromTo(
              next,
              { opacity: 0, clipPath: "inset(0% 0% 0% 100%)" },
              {
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.5,
                ease: "power2.inOut",
                immediateRender: false,
              },
              1.2,
            )
            .fromTo(
              nextImg,
              { scale: 1.08, xPercent: 3 },
              {
                scale: 1,
                xPercent: 0,
                duration: 0.6,
                ease: "power2.out",
                immediateRender: false,
              },
              1.18,
            )
            .to(
              zoomImg,
              { scale: 1.04, duration: 0.5, ease: "power2.inOut" },
              1.15,
            )
            .to(
              houseLines,
              {
                yPercent: 0,
                rotation: 0,
                duration: 0.25,
                stagger: 0.05,
                ease: "power3.out",
              },
              1.42,
            )
            .to(
              hbits,
              {
                opacity: 1,
                y: 0,
                duration: 0.22,
                stagger: 0.05,
                ease: "power3.out",
              },
              1.5,
            )
            .to({}, { duration: 0.1 }, 1.72);
          heroST = tl.scrollTrigger;
          heroST.aboutAt = ABOUT_END / TOTAL_H;

          return () => {
            hx.classList.remove("is-pinned");
            document.body.classList.remove("home-pinned");
            stage.setAttribute("data-header", "light");
            heroST = null;
          };
        });

        mm.add("(max-width: 991.98px)", () => {
          gsap.from(aboutLines, {
            yPercent: 110,
            rotation: 1.5,
            duration: 1.2,
            stagger: 0.08,
            scrollTrigger: { trigger: hxH2, start: "top 85%", once: true },
          });
          $$(".hx__a, .hx__slot .frame, .hx__img2").forEach((el) =>
            gsap.from(el, {
              opacity: 0,
              y: 36,
              duration: 1.1,
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            }),
          );
        });
      }
      // "Discover the Estate" lands on the finished About composition
      listen(
        $("[data-discover]"),
        "click",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (heroST)
            G.scrollTo(
              heroST.start + (heroST.end - heroST.start) * heroST.aboutAt,
              { duration: 2.2 },
            );
          else G.scrollTo($("#about"));
        },
        true,
      );

      /* =========================================================
   2. AROUND THE HOUSE — each photograph has its own ScrollTrigger:
      masked reveal, focus near centre, soften on the way out
========================================================= */
      if (motion) {
        mm.add("all", () => {
          $$(".hp").forEach((fig) => {
            const fr = fig.querySelector(".hp__frame"),
              im = fr.querySelector("img");
            gsap.fromTo(
              fr,
              { clipPath: "inset(10% 0% 10% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: { trigger: fig, start: "top 90%", once: true },
              },
            );
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: fig,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              })
              .fromTo(
                fig,
                { opacity: 0.55, scale: 0.96 },
                { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" },
              )
              .to(fig, { opacity: 1, duration: 0.15 })
              .to(fig, { opacity: 0.7, duration: 0.4, ease: "power1.in" });
            gsap.fromTo(
              im,
              { scale: 1.04, yPercent: -2 },
              {
                scale: 1,
                yPercent: 2,
                ease: "none",
                scrollTrigger: {
                  trigger: fig,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });
        });

        /* =========================================================
   4. MORNING \u2192 LIFE ON THE FARM (pinned, desktop)
========================================================= */
        const mf = $(".mf");
        mm.add("(min-width: 992px)", () => {
          mf.classList.add("is-pinned");
          const stage = $(".mf__stage"),
            frame = $(".mf__frame"),
            slot = $(".mf__slot"),
            cream = $(".mf__cream"),
            shade = $(".mf__shade");
          const l1 = $(".mf__l1"),
            l2 = $(".mf__l2"),
            mh = $(".mf__mh");
          const figs = $$(".mf__img"),
            items = $$(".mf__item"),
            bars = $$(".mf__bar i");
          const panelBits = [
            $(".mf__panel .label"),
            $(".mf__panel .h-md"),
          ].concat(items, [$(".mf__panel .link-u")]);
          const N = figs.length,
            A = 1.2,
            B = 1.2,
            C = N * 0.8,
            TOTAL = A + B + C;
          let cur = 0;

          const clipTo = () => {
            const s = slot.getBoundingClientRect(),
              h = stage.getBoundingClientRect();
            return `inset(${s.top - h.top}px ${h.right - s.right}px ${h.bottom - s.bottom}px ${s.left - h.left}px round 16px)`;
          };
          const setActive = (i) => {
            if (i === cur) return;
            const prev = figs[cur],
              next = figs[i];
            gsap.to(prev, {
              opacity: 0,
              duration: 1,
              ease: "power2.inOut",
              overwrite: true,
            });
            gsap.to(prev.querySelector("img"), {
              scale: 1.03,
              duration: 1,
              ease: "power2.inOut",
              overwrite: true,
            });
            gsap.set(next, { zIndex: 2 });
            gsap.set(prev, { zIndex: 1 });
            gsap.fromTo(
              next,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                overwrite: true,
              },
            );
            gsap.fromTo(
              next.querySelector("img"),
              { scale: 1.06 },
              { scale: 1, duration: 1.1, ease: "power2.out", overwrite: true },
            );
            items.forEach((it, k) => it.classList.toggle("is-active", k === i));
            cur = i;
          };

          gsap.set(frame, { clipPath: "inset(0px 0px 0px 0px round 0px)" });
          gsap.set(panelBits, { opacity: 0, y: 24 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: mf,
              start: "top top",
              end: () => "+=" + Math.round(window.innerHeight * 4.6),
              pin: stage,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const u = self.progress * TOTAL;
                stage.setAttribute(
                  "data-header",
                  u < A + 0.35 ? "light" : "off",
                );
                G.updateHeader();
                if (u < A + B) {
                  setActive(0);
                  bars.forEach((b) => gsap.set(b, { scaleX: 0 }));
                  return;
                }
                const f = Math.min(0.9999, (u - A - B) / C) * N,
                  i = Math.floor(f);
                setActive(i);
                bars.forEach((b, k) =>
                  gsap.set(b, { scaleX: k === i ? f - i : 0 }),
                );
              },
            },
          });
          // A — morning: slow push-in, lines part and fade
          tl.to(
            figs[0].querySelector(".mf__z"),
            { scale: 1.07, duration: A },
            0,
          )
            .to(l1, { xPercent: -14, duration: A }, 0)
            .to(l2, { xPercent: 14, duration: A }, 0)
            .to(mh, { opacity: 0, duration: A * 0.45 }, A * 0.5)
            // B — the photograph crops into the farm-life frame
            .fromTo(
              frame,
              { clipPath: "inset(0px 0px 0px 0px round 0px)" },
              {
                clipPath: clipTo,
                duration: B,
                ease: "power2.inOut",
                immediateRender: false,
              },
              A,
            )
            .to(
              figs[0].querySelector(".mf__z"),
              { scale: 1, duration: B, ease: "power2.inOut" },
              A,
            )
            .to(shade, { opacity: 0, duration: B * 0.7 }, A)
            .to(cream, { opacity: 1, duration: B * 0.6 }, A + 0.1)
            .to(
              panelBits,
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.out",
              },
              A + B * 0.55,
            )
            // C — step through the experiences (driven by onUpdate)
            .to({}, { duration: C }, A + B);

          const st = tl.scrollTrigger;
          $$(".mf__btn").forEach((b) =>
            listen(b, "click", () => {
              const i = +b.dataset.i;
              G.scrollTo(
                st.start +
                  ((A + B + (i + 0.5) * 0.8) / TOTAL) * (st.end - st.start),
                { duration: 1.4 },
              );
            }),
          );
          return () => {
            mf.classList.remove("is-pinned");
            stage.setAttribute("data-header", "light");
          };
        });

        /* =========================================================
   5. FARM TO TABLE — cover slides away, image settles
========================================================= */
        const ftt = $(".ftt__main");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ftt,
              start: "top 85%",
              end: "center 50%",
              scrub: 1,
            },
          })
          .fromTo(
            ".ftt__cover",
            { scaleX: 1 },
            { scaleX: 0, ease: "power2.inOut" },
            0,
          )
          .fromTo(
            ftt.querySelector("img"),
            { scale: 1.12 },
            { scale: 1, ease: "power2.out" },
            0,
          );

        /* =========================================================
   6. SUSTAINABILITY — items come into focus at centre
========================================================= */
        $$(".sus__item").forEach((it) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: it,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            })
            .fromTo(
              it,
              { opacity: 0.15, filter: "blur(6px)", y: 40 },
              {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                duration: 0.45,
                ease: "power2.out",
              },
            )
            .to(it, { opacity: 1, duration: 0.15 })
            .to(it, { opacity: 0.35, duration: 0.4 });
        });

        /* =========================================================
   7. PHILOSOPHY — one line at a time, then a held pause
========================================================= */
        const pl = $$(".philo__lines span");
        mm.add("(min-width: 768px)", () => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".philo",
                start: "top top",
                end: "+=240%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
              },
            })
            .fromTo(
              pl,
              { opacity: 0.07, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 1.1,
                ease: "power2.out",
              },
            )
            .to({}, { duration: 1.6 });
        });
        mm.add("(max-width: 767.98px)", () => {
          pl.forEach((s) =>
            gsap.fromTo(
              s,
              { opacity: 0.1 },
              {
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: s,
                  start: "top 80%",
                  end: "top 55%",
                  scrub: true,
                },
              },
            ),
          );
        });

        /* =========================================================
   8. PEOPLE — quiet opposing entrances
========================================================= */
        mm.add("(min-width: 768px)", () => {
          gsap.from(".people__media", {
            x: -56,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: { trigger: ".people", start: "top 70%", once: true },
          });
          gsap.from(".people__text > *", {
            x: 48,
            opacity: 0,
            duration: 1.2,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: ".people", start: "top 66%", once: true },
          });
        });
        mm.add("(max-width: 767.98px)", () => {
          gsap.from(".people__media", {
            x: -24,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: ".people", start: "top 80%", once: true },
          });
          gsap.from(".people__text > *", {
            x: 24,
            opacity: 0,
            duration: 1.1,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".people__text",
              start: "top 85%",
              once: true,
            },
          });
        });

        /* =========================================================
   9. BEYOND — vertical scroll drives a horizontal journey
========================================================= */
        const by = $(".beyond");
        mm.add("(min-width: 992px)", () => {
          by.classList.add("is-h");
          const track = $(".beyond__track"),
            intro = $(".beyond__intro");
          const dist = () => track.scrollWidth - window.innerWidth;
          const count = $(".beyond__count"),
            bar = $(".beyond__bar i"),
            cards = $$(".bcard");
          gsap.to(intro.children, {
            opacity: 0,
            ease: "none",
            stagger: 0.02,
            scrollTrigger: {
              trigger: by,
              start: "top top",
              end: () => "top+=" + window.innerWidth * 0.26 + " top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
          const move = gsap.to([track, intro], {
            x: () => -dist(),
            ease: "none",
            scrollTrigger: {
              trigger: by,
              start: "top top",
              end: () => "+=" + dist(),
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                gsap.set(bar, { scaleX: self.progress });
                count.textContent = String(
                  Math.min(
                    cards.length,
                    1 + Math.floor(self.progress * cards.length),
                  ),
                ).padStart(2, "0");
              },
            },
          });
          // counter-parallax inside each photograph
          $$(".bcard__img").forEach((im) => {
            gsap.fromTo(
              im,
              { xPercent: -6 },
              {
                xPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: im.parentElement,
                  containerAnimation: move,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              },
            );
          });
          gsap.from(intro, {
            opacity: 0,
            y: 30,
            duration: 1.2,
            scrollTrigger: { trigger: by, start: "top 70%", once: true },
          });
          return () => by.classList.remove("is-h");
        });
        mm.add("(max-width: 991.98px)", () => {
          gsap.from(".beyond__intro > *", {
            opacity: 0,
            y: 26,
            duration: 1,
            stagger: 0.08,
            scrollTrigger: { trigger: by, start: "top 80%", once: true },
          });
        });

        /* =========================================================
   10. A DAY AT GALKANDA — timeline draws, photograph follows
========================================================= */
        mm.add("(min-width: 992px)", () => {
          const items = $$(".day__item"),
            frames = $$(".day__frame"),
            badge = $(".day__badge");
          let cur = 0;
          const setDay = (i) => {
            if (i === cur) return;
            const a = frames[cur],
              b = frames[i];
            gsap.to(a, {
              opacity: 0,
              duration: 1,
              ease: "power2.inOut",
              overwrite: true,
            });
            gsap.fromTo(
              b,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                overwrite: true,
              },
            );
            gsap.fromTo(
              b.querySelector("img"),
              { scale: 1.06 },
              { scale: 1, duration: 1.2, ease: "power2.out", overwrite: true },
            );
            items.forEach((it, k) => it.classList.toggle("is-active", k === i));
            badge.textContent = items[i].querySelector("time").textContent;
            cur = i;
          };
          gsap.set(frames, { opacity: 0 });
          gsap.set(frames[0], { opacity: 1 });
          items.forEach((it, i) =>
            ScrollTrigger.create({
              trigger: it,
              start: "top 58%",
              end: "bottom 58%",
              onToggle: (s) => s.isActive && setDay(i),
            }),
          );
          gsap.fromTo(
            ".day__track i",
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".day__list",
                start: "top 58%",
                end: "bottom 70%",
                scrub: true,
              },
            },
          );
          return () => {
            gsap.set(frames, { clearProps: "opacity" });
          };
        });
        mm.add("(max-width: 991.98px)", () => {
          gsap.fromTo(
            ".day__track i",
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".day__list",
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
              },
            },
          );
          $$(".day__item").forEach((it) =>
            ScrollTrigger.create({
              trigger: it,
              start: "top 70%",
              end: "bottom 70%",
              toggleClass: "is-active",
            }),
          );
        });

        /* =========================================================
   11. OWN PACE — the photograph grows behind the words
========================================================= */
        const pace = $(".pace");
        mm.add("(min-width: 992px)", () => {
          pace.classList.add("is-anim");
          const stage = $(".pace__stage"),
            media = $(".pace__media"),
            shade = $(".pace__shade");
          gsap.set(media, { clipPath: "inset(52% 31% 9% 31% round 20px)" });
          gsap.set(shade, { opacity: 0 });
          gsap
            .timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: pace,
                start: "top top",
                end: "+=130%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                onUpdate: (s) => {
                  stage.setAttribute(
                    "data-header",
                    s.progress > 0.78 ? "light" : "off",
                  );
                  G.updateHeader();
                },
              },
            })
            .fromTo(
              media.querySelector("img"),
              { scale: 1.15 },
              { scale: 1, duration: 1 },
              0,
            )
            .fromTo(
              media,
              { clipPath: "inset(54% 31% 8% 31% round 20px)" },
              {
                clipPath: "inset(50% 0% 0% 0% round 0px)",
                duration: 0.5,
                ease: "power2.inOut",
              },
              0,
            )
            .fromTo(
              media,
              { clipPath: "inset(50% 0% 0% 0% round 0px)" },
              {
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                duration: 0.5,
                ease: "power2.inOut",
                immediateRender: false,
              },
              0.5,
            )
            .to(shade, { opacity: 1, duration: 0.35 }, 0.5)
            .to(stage, { color: "#ffffff", duration: 0.16 }, 0.7)
            .to({}, { duration: 0.25 });
          return () => {
            pace.classList.remove("is-anim");
            gsap.set([media, shade, stage], { clearProps: "all" });
          };
        });

        /* =========================================================
   12. MOBILE COUNTERPARTS — the same motion language, scaled for small screens
========================================================= */
        mm.add("(max-width: 991.98px)", () => {
          // hero: the photograph settles into a framed image as you scroll (mirrors the desktop transform)
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".hx__stage",
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            })
            .fromTo(
              ".hx__media",
              { clipPath: "inset(0% 0% 0% 0% round 0px)" },
              { clipPath: "inset(4% 4% 6% 4% round 18px)", ease: "none" },
              0,
            )
            .to(".hx__zoom", { scale: 1.05, ease: "none" }, 0)
            .to(".hx__copy", { yPercent: -16, opacity: 0, ease: "none" }, 0);
          // about \u2192 house: the same frame keeps moving while the scene blends into the Section 03 image
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".hx__slot",
                start: "top 35%",
                end: "bottom 10%",
                scrub: true,
              },
            })
            .fromTo(
              ".hx__slotnext",
              { opacity: 0, clipPath: "inset(0% 0% 0% 100%)" },
              {
                opacity: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "power2.inOut",
              },
              0,
            )
            .fromTo(
              ".hx__slotnext img",
              { scale: 1.08 },
              { scale: 1, ease: "none" },
              0,
            )
            .fromTo(".hx__slot .frame", { y: 0 }, { y: -24, ease: "none" }, 0);
          // morning: the two lines part and the image pushes in
          gsap
            .timeline({
              scrollTrigger: {
                trigger: ".mf__stage",
                start: "top 60%",
                end: "bottom top",
                scrub: true,
              },
            })
            .to(".mf__l1", { xPercent: -10, ease: "none" }, 0)
            .to(".mf__l2", { xPercent: 10, ease: "none" }, 0)
            .fromTo(
              '.mf__img[data-i="0"] .mf__z',
              { scale: 1 },
              { scale: 1.08, ease: "none" },
              0,
            );
          // swipe cards arrive one after another
          [".mf__mobile .snap__card", ".beyond .bcard"].forEach((sel) => {
            const els = $$(sel);
            if (!els.length) return;
            gsap.fromTo(
              els,
              { opacity: 0, x: 40 },
              {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: els[0],
                  start: "top 85%",
                  once: true,
                },
              },
            );
          });
          // beyond: counter-parallax inside each photo while swiping
          const track = $(".beyond__track");
          if (track) {
            const ims = $$(".bcard__img", track);
            gsap.set(ims, { scale: 1.12 });
            const upd = () => {
              const w = window.innerWidth;
              ims.forEach((im) => {
                const r = im.parentElement.getBoundingClientRect();
                gsap.set(im, {
                  xPercent: ((r.left + r.width / 2) / w - 0.5) * -10,
                });
              });
            };
            listen(track, "scroll", () => nextFrame(upd), { passive: true });
            upd();
          }
          // a day: each photo opens as its time arrives
          $$(".day__mimg").forEach((f) =>
            gsap.fromTo(
              f,
              { clipPath: "inset(12% 0% 12% 0% round 14px)" },
              {
                clipPath: "inset(0% 0% 0% 0% round 14px)",
                ease: "none",
                scrollTrigger: {
                  trigger: f,
                  start: "top 95%",
                  end: "top 55%",
                  scrub: true,
                },
              },
            ),
          );
          // own pace: the photograph grows to fill the section
          gsap.fromTo(
            ".pace__media",
            { clipPath: "inset(10% 7% 10% 7% round 20px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              ease: "none",
              scrollTrigger: {
                trigger: ".pace",
                start: "top 85%",
                end: "top 15%",
                scrub: true,
              },
            },
          );
        });

        /* =========================================================
   13. CUSTOMER TESTIMONIAL — calm crossfade, arrows + swipe
========================================================= */
      }
      (() => {
        const wrap = $(".testi");
        if (!wrap) return;
        const slides = $$(".testi__slide", wrap),
          count = $(".testi__count b", wrap);
        let cur = 0;
        const go = (d) => {
          const next = (cur + d + slides.length) % slides.length;
          const a = slides[cur],
            b = slides[next];
          a.setAttribute("aria-hidden", "true");
          b.setAttribute("aria-hidden", "false");
          if (motion) {
            gsap.to(a, {
              opacity: 0,
              y: -12,
              duration: 0.45,
              ease: "power2.in",
              onComplete: () => a.classList.remove("is-active"),
            });
            b.classList.add("is-active");
            gsap.fromTo(
              b,
              { opacity: 0, y: 16 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                delay: 0.25,
                ease: "power3.out",
              },
            );
          } else {
            a.classList.remove("is-active");
            b.classList.add("is-active");
          }
          cur = next;
          count.textContent = String(cur + 1).padStart(2, "0");
        };
        $$(".testi__btn", wrap).forEach((b) =>
          listen(b, "click", () => go(+b.dataset.dir)),
        );
        let sx = null;
        const box = $(".testi__slides", wrap);
        listen(
          box,
          "touchstart",
          (e) => {
            sx = e.touches[0].clientX;
          },
          { passive: true },
        );
        listen(box, "touchend", (e) => {
          if (sx === null) return;
          const dx = e.changedTouches[0].clientX - sx;
          if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
          sx = null;
        });
        if (motion)
          gsap.from(".testi__slide.is-active, .testi__nav", {
            opacity: 0,
            y: 24,
            duration: 1.1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: wrap, start: "top 75%", once: true },
          });
      })();
      if (motion) {
        /* =========================================================
   13. FINAL CTA — oversized words settle into place
========================================================= */
        const fl = $$(".fin__l");
        mm.add("(min-width: 768px)", () => {
          gsap
            .timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: ".fin",
                start: "top bottom",
                end: "top top",
                scrub: 1,
              },
            })
            .fromTo(
              fl[0],
              { xPercent: -26, scale: 1.3 },
              { xPercent: 0, scale: 1 },
              0,
            )
            .fromTo(
              fl[1],
              { xPercent: 22, scale: 1.3 },
              { xPercent: 0, scale: 1 },
              0,
            )
            .fromTo(
              fl[2],
              { xPercent: -14, scale: 1.3 },
              { xPercent: 0, scale: 1 },
              0,
            )
            .fromTo(".fin__media img", { scale: 1.05 }, { scale: 1 }, 0)
            .fromTo(
              ".fin__sub, .fin__btns, .fin__note",
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, stagger: 0.06 },
              0.6,
            );
        });
        mm.add("(max-width: 767.98px)", () => {
          gsap
            .timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: ".fin",
                start: "top bottom",
                end: "top 20%",
                scrub: 1,
              },
            })
            .fromTo(
              fl[0],
              { xPercent: -12, scale: 1.15 },
              { xPercent: 0, scale: 1 },
              0,
            )
            .fromTo(
              fl[1],
              { xPercent: 10, scale: 1.15 },
              { xPercent: 0, scale: 1 },
              0,
            )
            .fromTo(
              fl[2],
              { xPercent: -8, scale: 1.15 },
              { xPercent: 0, scale: 1 },
              0,
            )
            .fromTo(".fin__media img", { scale: 1.06 }, { scale: 1 }, 0);
        });
      }
    },
  );
}
