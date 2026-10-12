export default function ExploreGallery({ data }) {
  if (!data) return null;

  return (
    <section className={String.raw`agal-wrap`} aria-label="Photo gallery">
      <div
        className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
      >
        <div
          className={String.raw`agal grid [gap:10px] min-[768px]:[grid-template-columns:minmax(0,8fr)_minmax(0,5fr)] min-[768px]:[gap:clamp(10px,1.2vw,18px)]`}
          data-lightbox-group=""
        >
          {data.mainImage && (
            <button
              className={String.raw`lb-btn agal__main [.has-cursor_&[data-cursor]]:[cursor:none] cursor-pointer block relative [border-radius:var(--r-sm)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] [aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[height:min(62vh,600px)]`}
              type="button"
              data-cursor="view"
              data-cat={data.category}
              data-caption={data.mainImage.caption}
              aria-label={`View photo: ${data.mainImage.caption}`}
            >
              <span
                className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [.has-cursor_[data-cursor]_&]:[cursor:none] block w-full h-full [border-radius:var(--r-sm)]`}
              >
                <img
                  className={String.raw`max-w-full block [.frame.img-missing_>_&]:opacity-0 [.has-cursor_[data-cursor]_&]:[cursor:none] w-full h-full object-cover [scale:1.02] [transition:scale_.7s_cubic-bezier(.33,1,.68,1)] [.lb-btn:hover_&]:[scale:1.06]`}
                  src={data.mainImage.url}
                  alt={data.mainImage.alt}
                  loading="lazy"
                  decoding="async"
                  data-full={data.mainImage.full}
                />
              </span>
            </button>
          )}

          <div
            className={String.raw`agal__thumbs flex [gap:10px] overflow-x-auto [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[768px]:grid min-[768px]:[grid-template-columns:1fr_1fr] min-[768px]:[grid-template-rows:1fr_1fr] min-[768px]:[height:min(62vh,600px)] min-[768px]:overflow-visible min-[768px]:[gap:clamp(10px,1.2vw,18px)]`}
          >
            {data.galleryImages &&
              data.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  className={String.raw`lb-btn agal__t [.has-cursor_&[data-cursor]]:[cursor:none] cursor-pointer block relative [border-radius:var(--r-sm)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] [flex:0_0_40%] [aspect-ratio:4/3] [scroll-snap-align:start] min-[768px]:[aspect-ratio:auto] min-[768px]:h-full min-[768px]:min-h-0 min-[768px]:overflow-hidden`}
                  type="button"
                  data-cursor="view"
                  data-cat={data.category}
                  data-caption={img.caption}
                  aria-label={`View photo: ${img.caption}`}
                >
                  <span
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [.has-cursor_[data-cursor]_&]:[cursor:none] block w-full h-full [border-radius:var(--r-sm)]`}
                  >
                    <img
                      className={String.raw`max-w-full block [.frame.img-missing_>_&]:opacity-0 [.has-cursor_[data-cursor]_&]:[cursor:none] w-full h-full object-cover [scale:1.02] [transition:scale_.7s_cubic-bezier(.33,1,.68,1)] [.lb-btn:hover_&]:[scale:1.06]`}
                      src={img.url}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      data-full={img.full}
                    />
                  </span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
