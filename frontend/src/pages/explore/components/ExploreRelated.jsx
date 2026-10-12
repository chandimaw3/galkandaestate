import { Link } from "react-router-dom";

export default function ExploreRelated({ relatedExperiences }) {
  if (!relatedExperiences || relatedExperiences.length === 0) return null;

  return (
    <section
      className={String.raw`sec sec--tight arel relative [padding-top:calc(var(--sec)_*_.6)] pr-0 [padding-bottom:calc(var(--sec)_*_.6)] pl-0 [border-top:1px_solid_var(--line)]`}
      aria-labelledby="rel-h"
    >
      <div
        className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
      >
        <div
          className={String.raw`arel__head flex justify-between items-end gap-5 [margin-bottom:26px]`}
        >
          <div>
            <span
              className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
            >
              You May Also Like
            </span>
            <h2
              className={String.raw`h-sm [font-family:var(--f-sans)] font-normal text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mt-0 mr-0 mb-0 ml-0`}
              id="rel-h"
            >
              Explore More Nearby
            </h2>
          </div>
          <Link
            className={String.raw`link-u text-inherit [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:origin-left [&::after]:[transition:transform_.5s_var(--ease)] [&:hover::after]:[transform:scaleX(1)] relative inline-flex [gap:6px] items-center text-sm no-underline pt-1 pr-0 pb-1 pl-0 font-medium [&::after]:[transform:scaleX(1)] [&::after]:[opacity:.35] [&:hover::after]:opacity-100`}
            to="/explore"
          >
            All Experiences{" "}
            <i
              className={String.raw`not-italic inline-block [transition:transform_.45s_var(--ease)] [.link-u:hover_&]:[transform:rotate(45deg)]`}
              aria-hidden="true"
            >
              &#8599;
            </i>
          </Link>
        </div>
        <div
          className={String.raw`egrid egrid--related grid [grid-template-columns:1fr] [gap:34px] min-[600px]:[grid-template-columns:repeat(2,minmax(0,1fr))] min-[600px]:[gap:40px_20px] min-[992px]:[grid-template-columns:repeat(3,minmax(0,1fr))] min-[992px]:[gap:48px_clamp(18px,2vw,30px)] max-[599.98px]:flex max-[599.98px]:overflow-x-auto max-[599.98px]:[scroll-snap-type:x_mandatory] max-[599.98px]:[gap:14px] max-[599.98px]:mt-0 max-[599.98px]:[margin-right:calc(var(--gutter)_*_-1)] max-[599.98px]:mb-0 max-[599.98px]:[margin-left:calc(var(--gutter)_*_-1)] max-[599.98px]:pt-0 max-[599.98px]:[padding-right:var(--gutter)] max-[599.98px]:pb-2 max-[599.98px]:[padding-left:var(--gutter)] max-[599.98px]:[scrollbar-width:none] max-[599.98px]:[&::-webkit-scrollbar]:hidden`}
        >
          {relatedExperiences.map((rel) => (
            <article
              key={rel.slug}
              className={String.raw`ecard ecard--sm min-w-0 [&.is-hidden]:hidden max-[599.98px]:[flex:0_0_74vw] max-[599.98px]:[scroll-snap-align:start] max-[599.98px]:[scroll-margin-left:var(--gutter)]`}
              data-cat={rel.categorySlug}
            >
              <Link
                className={String.raw`ecard__link block no-underline text-inherit [border-radius:var(--r)] [transition:transform_.7s_var(--ease)] [-webkit-tap-highlight-color:transparent] hover:[transform:translateY(-4px)] [.ecard.is-inview_&]:[transform:translateY(-4px)] [&:active]:[transform:scale(.985)] [&:active]:[transition-duration:.2s] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:6px] motion-reduce:[transition:none]! motion-reduce:[transform:none]! motion-reduce:[scale:1]!`}
                to={rel.link || `/explore/${rel.slug}`}
              >
                <div
                  className={String.raw`frame ecard__media relative overflow-hidden [background:var(--stone)] mt-0 mr-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:3/2] mb-3`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [scale:1.06] [transition:scale_1.1s_var(--ease)] [.ecard\_\_link:hover_.ecard\_\_media_&]:[scale:1.11] [.ecard.is-inview_.ecard\_\_media_&]:[scale:1.11] motion-reduce:[transition:none]! motion-reduce:[transform:none]! motion-reduce:[scale:1]!`}
                    src={rel.image}
                    alt={rel.imageAlt || rel.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={String.raw`ecard__body`}>
                  <span
                    className={String.raw`ecard__cat block text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--earth)] mb-2`}
                  >
                    {rel.category}
                  </span>
                  <h3
                    className={String.raw`ecard__title [font-family:var(--f-sans)] text-inherit [line-height:1.15] [letter-spacing:-.025em] font-normal mt-0 mr-0 mb-2 ml-0 [transition:transform_.6s_var(--ease)] [.ecard\_\_link:hover_&]:[transform:translateX(3px)] [.ecard.is-inview_&]:[transform:translateX(3px)] text-base 2xl:text-xl motion-reduce:[transition:none]! motion-reduce:[transform:none]! motion-reduce:[scale:1]!`}
                  >
                    {rel.title}
                  </h3>

                  <ul
                    className={String.raw`ecard__meta list-none mt-0 mr-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:6px_16px] text-xs [margin-bottom:10px]`}
                  >
                    {rel.distance && (
                      <li
                        className={String.raw`inline-flex items-center [gap:6px]`}
                      >
                        <svg
                          className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [color:var(--green)]`}
                          aria-hidden="true"
                          focusable="false"
                        >
                          <use href="#i-pin"></use>
                        </svg>
                        <span>{rel.distance}</span>
                      </li>
                    )}
                    {rel.travelTime && (
                      <li
                        className={String.raw`inline-flex items-center [gap:6px]`}
                      >
                        <svg
                          className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [color:var(--green)]`}
                          aria-hidden="true"
                          focusable="false"
                        >
                          <use href="#i-car"></use>
                        </svg>
                        <span>{rel.travelTime}</span>
                      </li>
                    )}
                  </ul>
                  <span
                    className={String.raw`ecard__cta relative inline-flex items-center gap-2 text-sm font-medium pb-1 [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:[transform:scaleX(.35)] [&::after]:origin-left [&::after]:[opacity:.5] [&::after]:[transition:transform_.6s_var(--ease),opacity_.6s] [.ecard\_\_link:hover_&::after]:[transform:scaleX(1)] [.ecard\_\_link:hover_&::after]:opacity-100 [.ecard.is-inview_&::after]:[transform:scaleX(1)] [.ecard.is-inview_&::after]:opacity-100`}
                  >
                    <span>Read More</span>
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [transition:transform_.6s_var(--ease)] [.ecard\_\_link:hover_.ecard\_\_cta_&]:[transform:translateX(4px)] [.ecard.is-inview_.ecard\_\_cta_&]:[transform:translateX(4px)]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-right"></use>
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
