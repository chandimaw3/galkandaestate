export default function ExploreStory({ data }) {
  if (!data) return null;

  return (
    <section
      className={String.raw`sec sec--tight aarticle relative [padding-top:calc(var(--sec)_*_.6)] pr-0 [padding-bottom:calc(var(--sec)_*_.6)] pl-0`}
      aria-labelledby="about-h"
    >
      <div
        className={String.raw`container-wide aarticle__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-9 min-[992px]:[grid-template-columns:minmax(0,7fr)_minmax(0,4fr)] min-[992px]:[column-gap:6vw]`}
      >
        <article className={String.raw`prose [max-width:40em]`}>
          <span
            className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
          >
            The Experience
          </span>
          <h2
            className={String.raw`h-md [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 ml-0 text-inherit text-3xl lg:text-4xl xl:text-5xl [line-height:1.02] [margin-bottom:22px]`}
            id="about-h"
            data-split=""
          >
            {data.aboutTitle}
          </h2>
          {data.aboutParagraph1 && (
            <p
              className={String.raw`text-base [line-height:1.75] mt-0 mr-0 [margin-bottom:18px] ml-0 [color:#2b2b25]`}
              data-fade=""
            >
              {data.aboutParagraph1}
            </p>
          )}
          {data.section2Heading && (
            <>
              <h3
                className={String.raw`h-sm [font-family:var(--f-sans)] font-normal text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] [margin-top:30px] mr-0 mb-3 ml-0`}
                data-fade=""
              >
                {data.section2Heading}
              </h3>
              {data.section2Paragraph && (
                <p
                  className={String.raw`text-base [line-height:1.75] mt-0 mr-0 [margin-bottom:18px] ml-0 [color:#2b2b25]`}
                  data-fade=""
                >
                  {data.section2Paragraph}
                </p>
              )}
            </>
          )}
        </article>
        <aside
          className={String.raw`aarticle__aside min-[992px]:sticky min-[992px]:[top:calc(var(--nav-h)_+_40px)] min-[992px]:[align-self:start]`}
        >
          {data.whyWeRecommend && (
            <div
              className={String.raw`why [padding-top:22px] pr-0 [padding-bottom:22px] pl-0 [border-top:1px_solid_var(--line)]`}
              data-fade=""
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)] [margin-bottom:10px]`}
              >
                Why We Recommend It
              </span>
              <p
                className={String.raw`mt-0 mr-0 mb-0 ml-0 text-base [line-height:1.6]`}
              >
                {data.whyWeRecommend}
              </p>
            </div>
          )}

          {data.galkandaTip && (
            <div
              className={String.raw`gtip flex gap-4 items-start [padding-top:22px] pr-0 [padding-bottom:22px] pl-0 [border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)]`}
              data-fade=""
            >
              <span
                className={String.raw`gtip__mark w-10 h-10 flex-none rounded-full [background:var(--bg-warm)] grid place-items-center [color:var(--green)]`}
                aria-hidden="true"
              >
                <svg
                  className={String.raw`brand__mark flex-none [fill:none] [stroke:currentColor] [stroke-width:1.4] [stroke-linejoin:round] [stroke-linecap:round] [transition:transform_.6s_var(--ease)] w-5 [height:13px]`}
                  viewBox="0 0 28 18"
                >
                  <path d="M1.5 16.5 9.6 4.2l4.6 6.6 3.4-4.4 8.9 10.1z"></path>
                  <path d="M7.4 7.6l2.2 1.6 1.9-1.4"></path>
                </svg>
              </span>
              <div>
                <span
                  className={String.raw`gtip__k block text-xs [letter-spacing:.2em] uppercase font-medium [color:var(--earth)] [margin-bottom:6px]`}
                >
                  Galkanda Tip
                </span>
                <p
                  className={String.raw`mt-0 mr-0 mb-0 ml-0 [font-family:var(--f-serif)] italic text-xl [line-height:1.4]`}
                >
                  {data.galkandaTip}
                </p>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
