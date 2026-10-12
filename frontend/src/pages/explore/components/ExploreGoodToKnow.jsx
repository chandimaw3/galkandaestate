export default function ExploreGoodToKnow({ data }) {
  if (!data) return null;

  return (
    <section
      className={String.raw`sec sec--tight adetails relative [padding-top:calc(var(--sec)_*_.6)] pr-0 [padding-bottom:calc(var(--sec)_*_.6)] pl-0`}
      aria-labelledby="det-h"
    >
      <div
        className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
      >
        <span
          className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
        >
          Practical Information
        </span>
        <h2
          className={String.raw`h-sm [font-family:var(--f-sans)] font-normal text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mt-0 mr-0 [margin-bottom:22px] ml-0`}
          id="det-h"
        >
          Good to Know
        </h2>
        <dl
          className={String.raw`adet mt-0 mr-0 mb-0 ml-0 grid [grid-template-columns:1fr] [border-top:1px_solid_var(--line)] min-[992px]:[grid-template-columns:1fr_1fr] min-[992px]:[column-gap:4vw]`}
        >
          {data.location && (
            <div
              className={String.raw`grid [grid-template-columns:minmax(0,11em)_1fr] [gap:14px] [padding-top:13px] pr-0 [padding-bottom:13px] pl-0 [border-bottom:1px_solid_var(--line)]`}
            >
              <dt
                className={String.raw`flex items-center [gap:9px] text-xs [letter-spacing:.06em] [color:var(--muted)]`}
              >
                <svg
                  className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-4 h-4 [color:var(--green)]`}
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href="#i-home"></use>
                </svg>
                Location
              </dt>
              <dd className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5]`}>
                {data.location}
              </dd>
            </div>
          )}

          {data.distance && (
            <div
              className={String.raw`grid [grid-template-columns:minmax(0,11em)_1fr] [gap:14px] [padding-top:13px] pr-0 [padding-bottom:13px] pl-0 [border-bottom:1px_solid_var(--line)]`}
            >
              <dt
                className={String.raw`flex items-center [gap:9px] text-xs [letter-spacing:.06em] [color:var(--muted)]`}
              >
                <svg
                  className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-4 h-4 [color:var(--green)]`}
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href="#i-pin"></use>
                </svg>
                Distance from Galkanda
              </dt>
              <dd className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5]`}>
                {data.distance}
              </dd>
            </div>
          )}

          {data.travelTime && (
            <div
              className={String.raw`grid [grid-template-columns:minmax(0,11em)_1fr] [gap:14px] [padding-top:13px] pr-0 [padding-bottom:13px] pl-0 [border-bottom:1px_solid_var(--line)]`}
            >
              <dt
                className={String.raw`flex items-center [gap:9px] text-xs [letter-spacing:.06em] [color:var(--muted)]`}
              >
                <svg
                  className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-4 h-4 [color:var(--green)]`}
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href="#i-car"></use>
                </svg>
                Driving time
              </dt>
              <dd className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5]`}>
                {data.travelTime}
              </dd>
            </div>
          )}

          {data.duration && (
            <div
              className={String.raw`grid [grid-template-columns:minmax(0,11em)_1fr] [gap:14px] [padding-top:13px] pr-0 [padding-bottom:13px] pl-0 [border-bottom:1px_solid_var(--line)]`}
            >
              <dt
                className={String.raw`flex items-center [gap:9px] text-xs [letter-spacing:.06em] [color:var(--muted)]`}
              >
                <svg
                  className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-4 h-4 [color:var(--green)]`}
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href="#i-hourglass"></use>
                </svg>
                Duration
              </dt>
              <dd className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5]`}>
                {data.duration}
              </dd>
            </div>
          )}

          {data.bestTime && (
            <div
              className={String.raw`grid [grid-template-columns:minmax(0,11em)_1fr] [gap:14px] [padding-top:13px] pr-0 [padding-bottom:13px] pl-0 [border-bottom:1px_solid_var(--line)]`}
            >
              <dt
                className={String.raw`flex items-center [gap:9px] text-xs [letter-spacing:.06em] [color:var(--muted)]`}
              >
                <svg
                  className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-4 h-4 [color:var(--green)]`}
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href="#i-sun"></use>
                </svg>
                Best time
              </dt>
              <dd className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5]`}>
                {data.bestTime}
              </dd>
            </div>
          )}

          {data.entryPrice && (
            <div
              className={String.raw`grid [grid-template-columns:minmax(0,11em)_1fr] [gap:14px] [padding-top:13px] pr-0 [padding-bottom:13px] pl-0 [border-bottom:1px_solid_var(--line)]`}
            >
              <dt
                className={String.raw`flex items-center [gap:9px] text-xs [letter-spacing:.06em] [color:var(--muted)]`}
              >
                <svg
                  className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-4 h-4 [color:var(--green)]`}
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href="#i-cash"></use>
                </svg>
                Entry fee / cost
              </dt>
              <dd className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5]`}>
                {data.entryPrice}
              </dd>
            </div>
          )}

          {data.suitableFor && (
            <div
              className={String.raw`grid [grid-template-columns:minmax(0,11em)_1fr] [gap:14px] [padding-top:13px] pr-0 [padding-bottom:13px] pl-0 [border-bottom:1px_solid_var(--line)]`}
            >
              <dt
                className={String.raw`flex items-center [gap:9px] text-xs [letter-spacing:.06em] [color:var(--muted)]`}
              >
                <svg
                  className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-4 h-4 [color:var(--green)]`}
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href="#i-guests"></use>
                </svg>
                Suitable for
              </dt>
              <dd className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5]`}>
                {data.suitableFor}
              </dd>
            </div>
          )}

          {data.bookingInfo && (
            <div
              className={String.raw`grid [grid-template-columns:minmax(0,11em)_1fr] [gap:14px] [padding-top:13px] pr-0 [padding-bottom:13px] pl-0 [border-bottom:1px_solid_var(--line)]`}
            >
              <dt
                className={String.raw`flex items-center [gap:9px] text-xs [letter-spacing:.06em] [color:var(--muted)]`}
              >
                <svg
                  className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-4 h-4 [color:var(--green)]`}
                  aria-hidden="true"
                  focusable="false"
                >
                  <use href="#i-calendar"></use>
                </svg>
                Booking
              </dt>
              <dd className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5]`}>
                {data.bookingInfo}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </section>
  );
}
