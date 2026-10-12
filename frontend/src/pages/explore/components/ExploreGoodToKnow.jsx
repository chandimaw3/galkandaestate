export default function ExploreGoodToKnow({ data }) {
  if (!data) return null;

  const items = [
    {
      key: "location",
      label: "Location",
      icon: "#i-home",
      val: data.location,
    },
    {
      key: "distance",
      label: "Distance from Galkanda",
      icon: "#i-pin",
      val: data.distance,
    },
    {
      key: "drivingTime",
      label: "Driving time",
      icon: "#i-car",
      val: data.drivingTime || data.travelTime,
    },
    {
      key: "duration",
      label: "Duration",
      icon: "#i-hourglass",
      val: data.duration,
    },
    {
      key: "bestTime",
      label: "Best time",
      icon: "#i-sun",
      val: data.bestTime,
    },
    {
      key: "entryFee",
      label: "Entry fee / cost",
      icon: "#i-cash",
      val: data.entryFee || data.entryPrice || data.cost,
    },
    {
      key: "suitableFor",
      label: "Suitable for",
      icon: "#i-guests",
      val: data.suitableFor,
    },
    {
      key: "whatToBring",
      label: "What to bring",
      icon: "#i-bag",
      val: data.whatToBring,
    },
    {
      key: "gettingThere",
      label: "Getting there",
      icon: "#i-compass",
      val: data.gettingThere,
    },
    {
      key: "season",
      label: "Season",
      icon: "#i-calendar",
      val: data.season,
    },
  ];

  const activeItems = items.filter((item) => {
    if (!item.val) return false;
    if (typeof item.val === "string" && item.val.trim().length === 0) return false;
    return true;
  });

  if (activeItems.length === 0) return null;

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
          {activeItems.map((item) => (
            <div
              key={item.key}
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
                  <use href={item.icon}></use>
                </svg>
                {item.label}
              </dt>
              <dd
                className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5]`}
              >
                {item.val}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
