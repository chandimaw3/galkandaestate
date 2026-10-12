import { Link } from "react-router-dom";

export default function ExploreHero({ data }) {
  if (!data) return null;

  return (
    <section
      className={String.raw`atop [padding-top:calc(var(--nav-h)_+_clamp(28px,5vh,56px))] pr-0 [padding-bottom:clamp(28px,4vw,48px)] pl-0`}
      aria-labelledby="a-h1"
    >
      <div
        className={String.raw`container-wide atop__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-8 min-[992px]:[grid-template-columns:minmax(0,8fr)_minmax(0,4fr)] min-[992px]:[column-gap:5vw] min-[992px]:items-end`}
      >
        <div className={String.raw`atop__main`}>
          <nav
            className={String.raw`crumbs`}
            aria-label="Breadcrumb"
            data-anim="top"
          >
            <ol
              className={String.raw`list-none mt-0 mr-0 [margin-bottom:22px] ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:6px] text-xs [color:var(--muted)]`}
            >
              <li
                className={String.raw`[.crumbs_&:not(:last-child)::after]:[content:"/"] [.crumbs_&:not(:last-child)::after]:[margin-left:6px] [.crumbs_&:not(:last-child)::after]:[color:var(--stone)]`}
              >
                <Link
                  className={String.raw`text-inherit no-underline [.crumbs_&:hover]:[color:var(--ink)]`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className={String.raw`[.crumbs_&:not(:last-child)::after]:[content:"/"] [.crumbs_&:not(:last-child)::after]:[margin-left:6px] [.crumbs_&:not(:last-child)::after]:[color:var(--stone)]`}
              >
                <Link
                  className={String.raw`text-inherit no-underline [.crumbs_&:hover]:[color:var(--ink)]`}
                  to="/explore"
                >
                  Explore
                </Link>
              </li>
              <li
                className={String.raw`[color:var(--ink)]`}
                aria-current="page"
              >
                {data.title}
              </li>
            </ol>
          </nav>
          <span
            className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
            data-anim="top"
          >
            {data.category}
          </span>
          <h1
            className={String.raw`h-lg atop__h1 [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-5 [max-width:13em]`}
            id="a-h1"
            data-split="manual"
          >
            {data.title}
          </h1>
          <p
            className={String.raw`lead text-base 2xl:text-lg [line-height:1.6] [color:var(--ink)] mt-0 mr-0 [margin-bottom:26px] ml-0 [max-width:36em] font-light`}
            data-anim="top"
          >
            {data.lead}
          </p>
          <ul
            className={String.raw`kfacts list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [grid-template-columns:repeat(2,minmax(0,1fr))] [gap:14px_18px] [border-top:1px_solid_var(--line)] pt-5 min-[768px]:[grid-template-columns:repeat(3,minmax(0,1fr))]`}
          >
            <li
              className={String.raw`flex [gap:10px] items-start text-sm [line-height:1.4] min-w-0`}
            >
              <svg
                className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:18px] [height:18px] [color:var(--green)] [margin-top:1px]`}
                aria-hidden="true"
                focusable="false"
              >
                <use href="#i-pin"></use>
              </svg>
              <span>
                <em
                  className={String.raw`block not-italic text-xs [letter-spacing:.14em] uppercase [color:var(--muted)] [margin-bottom:2px]`}
                >
                  Distance
                </em>
                {data.distance}
              </span>
            </li>
            <li
              className={String.raw`flex [gap:10px] items-start text-sm [line-height:1.4] min-w-0`}
            >
              <svg
                className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:18px] [height:18px] [color:var(--green)] [margin-top:1px]`}
                aria-hidden="true"
                focusable="false"
              >
                <use href="#i-car"></use>
              </svg>
              <span>
                <em
                  className={String.raw`block not-italic text-xs [letter-spacing:.14em] uppercase [color:var(--muted)] [margin-bottom:2px]`}
                >
                  Travel time
                </em>
                {data.travelTime}
              </span>
            </li>
            <li
              className={String.raw`flex [gap:10px] items-start text-sm [line-height:1.4] min-w-0`}
            >
              <svg
                className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:18px] [height:18px] [color:var(--green)] [margin-top:1px]`}
                aria-hidden="true"
                focusable="false"
              >
                <use href="#i-hourglass"></use>
              </svg>
              <span>
                <em
                  className={String.raw`block not-italic text-xs [letter-spacing:.14em] uppercase [color:var(--muted)] [margin-bottom:2px]`}
                >
                  Duration
                </em>
                {data.duration}
              </span>
            </li>
            <li
              className={String.raw`flex [gap:10px] items-start text-sm [line-height:1.4] min-w-0`}
            >
              <svg
                className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:18px] [height:18px] [color:var(--green)] [margin-top:1px]`}
                aria-hidden="true"
                focusable="false"
              >
                <use href="#i-sun"></use>
              </svg>
              <span>
                <em
                  className={String.raw`block not-italic text-xs [letter-spacing:.14em] uppercase [color:var(--muted)] [margin-bottom:2px]`}
                >
                  Best time
                </em>
                {data.bestTime}
              </span>
            </li>
            <li
              className={String.raw`flex [gap:10px] items-start text-sm [line-height:1.4] min-w-0`}
            >
              <svg
                className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:18px] [height:18px] [color:var(--green)] [margin-top:1px]`}
                aria-hidden="true"
                focusable="false"
              >
                <use href="#i-home"></use>
              </svg>
              <span>
                <em
                  className={String.raw`block not-italic text-xs [letter-spacing:.14em] uppercase [color:var(--muted)] [margin-bottom:2px]`}
                >
                  Location
                </em>
                {data.location}
              </span>
            </li>
            <li
              className={String.raw`flex [gap:10px] items-start text-sm [line-height:1.4] min-w-0`}
            >
              <svg
                className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:18px] [height:18px] [color:var(--green)] [margin-top:1px]`}
                aria-hidden="true"
                focusable="false"
              >
                <use href="#i-cash"></use>
              </svg>
              <span>
                <em
                  className={String.raw`block not-italic text-xs [letter-spacing:.14em] uppercase [color:var(--muted)] [margin-bottom:2px]`}
                >
                  Entry / price
                </em>
                {data.entryPrice}
              </span>
            </li>
          </ul>
        </div>
        <aside
          className={String.raw`plan [background:var(--bg-warm)] [border-radius:var(--r)] [padding-top:22px] [padding-right:22px] [padding-bottom:22px] [padding-left:22px] [align-self:start]`}
          aria-labelledby="plan-h"
          data-anim="plan"
        >
          <span
            className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)] [margin-bottom:10px]`}
          >
            Booking &amp; Contact
          </span>
          <h2
            className={String.raw`plan__h [font-family:var(--f-sans)] [line-height:.98] text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] font-normal mt-0 mr-0 mb-4 ml-0`}
            id="plan-h"
          >
            Plan Your Visit
          </h2>

          <div className={String.raw`plan__links grid gap-2`}>
            <Link
              className={String.raw`plan__btn plan__btn--primary grid [grid-template-columns:1fr_auto] [grid-template-rows:auto_auto] items-center gap-x-3 min-h-13 [padding-top:10px] pr-4 [padding-bottom:10px] pl-4 [border-radius:12px] no-underline [border:1px_solid_var(--line)] [transition:border-color_.4s_var(--ease),transform_.5s_var(--ease),background-color_.4s] hover:[border-color:var(--ink)] hover:[transform:translateY(-2px)] [&:active]:[transform:scale(.985)] [background:var(--dark)] [color:#fff] [border-color:var(--dark)]`}
              to="/contact"
            >
              <span
                className={String.raw`plan__p [grid-column:1] text-xs [letter-spacing:.14em] uppercase [color:rgba(255,255,255,.65)]`}
              >
                Galkanda Estate
              </span>
              <span
                className={String.raw`text-sm font-medium [grid-column:1]`}
              >
                Ask us to help plan this
              </span>
              <svg
                className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [grid-column:2] [grid-row:1_/_span_2] [width:17px] [height:17px] [transition:transform_.5s_var(--ease)] [.plan\_\_btn:hover_&]:[transform:translate(2px,-2px)]`}
                aria-hidden="true"
                focusable="false"
              >
                <use href="#i-right"></use>
              </svg>
            </Link>
            {data.googleMapsUrl && (
              <a
                className={String.raw`plan__btn grid [grid-template-columns:1fr_auto] [grid-template-rows:auto_auto] items-center gap-x-3 min-h-13 [padding-top:10px] pr-4 [padding-bottom:10px] pl-4 [border-radius:12px] [background:var(--bg)] no-underline [color:var(--ink)] [border:1px_solid_var(--line)] [transition:border-color_.4s_var(--ease),transform_.5s_var(--ease),background-color_.4s] hover:[border-color:var(--ink)] hover:[transform:translateY(-2px)] [&:active]:[transform:scale(.985)]`}
                href={data.googleMapsUrl}
                target="_blank"
                rel="noopener"
              >
                <span
                  className={String.raw`plan__p [grid-column:1] text-xs [letter-spacing:.14em] uppercase [color:var(--muted)]`}
                >
                  Google Maps
                </span>
                <span
                  className={String.raw`text-sm font-medium [grid-column:1]`}
                >
                  Get directions
                </span>
                <svg
                  className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [grid-column:2] [grid-row:1_/_span_2] [width:17px] [height:17px] [transition:transform_.5s_var(--ease)] [.plan\_\_btn:hover_&]:[transform:translate(2px,-2px)]`}
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href="#i-ext"></use>
                </svg>
              </a>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
