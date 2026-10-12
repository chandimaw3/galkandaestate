import { Link } from "react-router-dom";

export default function ExploreMiniCTA() {
  return (
    <section
      className={String.raw`minicta [background:var(--bg-warm)] [padding-top:clamp(56px,7vw,96px)] pr-0 [padding-bottom:clamp(56px,7vw,96px)] pl-0`}
      aria-labelledby="minicta-h"
    >
      <div
        className={String.raw`container-wide minicta__in max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-6 items-center min-[992px]:[grid-template-columns:auto_minmax(0,1fr)_auto] min-[992px]:[column-gap:4vw]`}
      >
        <div
          className={String.raw`minicta__mark w-14 h-14 rounded-full [border:1px_solid_var(--line)] grid place-items-center [color:var(--green)]`}
          aria-hidden="true"
        >
          <svg
            className={String.raw`brand__mark flex-none [fill:none] [stroke:currentColor] [stroke-width:1.4] [stroke-linejoin:round] [stroke-linecap:round] [transition:transform_.6s_var(--ease)] w-7 [height:18px]`}
            viewBox="0 0 28 18"
          >
            <path d="M1.5 16.5 9.6 4.2l4.6 6.6 3.4-4.4 8.9 10.1z"></path>
            <path d="M7.4 7.6l2.2 1.6 1.9-1.4"></path>
          </svg>
        </div>
        <div>
          <span
            className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)] [margin-bottom:10px]`}
          >
            Stay at Galkanda
          </span>
          <h2
            className={String.raw`h-md [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 [margin-bottom:10px] ml-0 text-inherit text-3xl lg:text-4xl xl:text-5xl [line-height:1.02]`}
            id="minicta-h"
          >
            A Quiet Base for{" "}
            <em className={String.raw`italic font-normal [font-family:var(--f-serif)]`}>
              Exploring.
            </em>
          </h2>
          <p
            className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)] mt-0 mr-0 mb-0 ml-0`}
          >
            Come back to the farm after a day out — tea in the garden, dinner
            from the estate, and a slower pace.
          </p>
        </div>
        <div
          className={String.raw`btn-row minicta__btns flex flex-wrap items-center [gap:14px_28px]`}
        >
          <Link
            className={String.raw`btn-g text-inherit [--bb:var(--dark)] [--bf:#fff] inline-flex items-center gap-1 no-underline text-sm font-medium [line-height:16px]`}
            to="/contact"
          >
            <span
              className={String.raw`btn-g__label [background:var(--bb)] [color:var(--bf)] [padding-top:14px] [padding-right:22px] [padding-bottom:14px] [padding-left:22px] rounded-full [transition:padding_.5s_var(--ease),background-color_.4s_var(--ease)] whitespace-nowrap [.btn-g:hover_&]:[padding-left:27px] [.btn-g:hover_&]:[padding-right:27px] [.btn-g:focus-visible_&]:[padding-left:27px] [.btn-g:focus-visible_&]:[padding-right:27px]`}
            >
              Plan Your Stay
            </span>
            <span
              className={String.raw`btn-g__circle flex-none w-11 h-11 rounded-full [background:var(--bb)] [color:var(--bf)] grid place-items-center [transition:transform_.5s_var(--ease)] [.btn-g:hover_&]:[transform:translateX(3px)]`}
            >
              <svg
                className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-4 h-4`}
                aria-hidden="true"
                focusable="false"
              >
                <use href="#i-right"></use>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
