import { runEstatePage } from "./shared.js";

export function initContact() {
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
   ENQUIRY FORM — light client-side validation (no booking / payment)
========================================================= */
      const form = $("#enquiry"),
        status = $(".cform__status");
      const required = ["f-name", "f-email", "f-guests"];
      listen(form, "submit", (e) => {
        e.preventDefault();
        let ok = true;
        required.forEach((id) => {
          const el = document.getElementById(id),
            f = el.closest(".field");
          const valid =
            el.value.trim() !== "" &&
            (el.type !== "email" ||
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value));
          f.classList.toggle("is-invalid", !valid);
          if (!valid && ok) {
            el.focus();
            ok = false;
          }
        });
        if (!ok) {
          status.textContent =
            "Please add your name, a valid email and the number of guests.";
          return;
        }
        // TODO: send the data to your form handler / email service here (e.g. fetch(form.action, { method: 'POST', body: new FormData(form) }))
        status.textContent =
          "Thank you — your enquiry is ready to send. We’ll reply personally.";
        if (motion)
          gsap.fromTo(
            status,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.6 },
          );
        form.reset();
      });
      $$(".field input, .field select").forEach((el) =>
        listen(el, "input", () =>
          el.closest(".field").classList.remove("is-invalid"),
        ),
      );
    },
  );
}
