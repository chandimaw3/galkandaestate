export default function ExploreLightbox() {
  return (
    <div
      className={String.raw`lightbox fixed top-0 right-0 bottom-0 left-0 [z-index:500] [background:rgba(16,18,13,.96)] [-webkit-backdrop-filter:blur(12px)] [backdrop-filter:blur(12px)] [color:var(--bg)] hidden [&.is-open]:block select-none`}
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      aria-hidden="true"
    >
      <div
        className={String.raw`lightbox__stage absolute top-18 right-16 bottom-22 left-16 grid place-items-center max-[767.98px]:[top:70px] max-[767.98px]:right-4 max-[767.98px]:bottom-28 max-[767.98px]:left-4`}
      >
        <img
          className={String.raw`lightbox__img block max-w-full [max-height:calc(100vh_-_160px)] [width:auto] [height:auto] object-contain [border-radius:12px] shadow-2xl pointer-events-auto`}
          src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
          alt=""
        />
      </div>

      <div
        className={String.raw`lightbox__bar absolute [left:var(--gutter)] [right:var(--gutter)] bottom-6 flex justify-between items-center gap-6 text-sm [color:rgba(244,241,234,.85)] pointer-events-none`}
      >
        <div
          className={String.raw`lightbox__caption mt-0 mr-0 mb-0 ml-0 flex items-center [gap:12px] pointer-events-auto`}
        >
          <span
            className={String.raw`lightbox__cat text-xs [letter-spacing:.16em] uppercase [color:var(--earth)] hidden font-medium [padding:3px_10px] [border-radius:999px] [background:rgba(244,241,234,.1)] [border:1px_solid_rgba(244,241,234,.15)]`}
          ></span>
          <span
            className={String.raw`lightbox__text font-light text-sm md:text-base [color:rgba(244,241,234,.95)]`}
          ></span>
        </div>
        <span
          className={String.raw`lightbox__count text-xs [letter-spacing:.18em] font-mono [color:rgba(244,241,234,.6)] pointer-events-auto`}
        ></span>
      </div>

      <button
        className={String.raw`lightbox__btn lightbox__prev cursor-pointer absolute bg-transparent [border:1px_solid_var(--line-light)] [color:var(--bg)] rounded-full [transition:all_.3s_var(--ease)] [top:50%] w-12 h-12 [margin-top:-24px] text-lg left-4 hover:[background:rgba(244,241,234,.15)] hover:[border-color:rgba(244,241,234,.7)] hover:[transform:scale(1.08)] active:[transform:scale(.95)] max-[767.98px]:[top:auto] max-[767.98px]:bottom-12 max-[767.98px]:mt-0 max-[767.98px]:left-6 flex items-center justify-center`}
        type="button"
        aria-label="Previous photo (Left Arrow)"
      >
        &#8592;
      </button>

      <button
        className={String.raw`lightbox__btn lightbox__next cursor-pointer absolute bg-transparent [border:1px_solid_var(--line-light)] [color:var(--bg)] rounded-full [transition:all_.3s_var(--ease)] [top:50%] w-12 h-12 [margin-top:-24px] text-lg right-4 hover:[background:rgba(244,241,234,.15)] hover:[border-color:rgba(244,241,234,.7)] hover:[transform:scale(1.08)] active:[transform:scale(.95)] max-[767.98px]:[top:auto] max-[767.98px]:bottom-12 max-[767.98px]:mt-0 max-[767.98px]:right-6 flex items-center justify-center`}
        type="button"
        aria-label="Next photo (Right Arrow)"
      >
        &#8594;
      </button>

      <button
        className={String.raw`lightbox__close cursor-pointer absolute bg-transparent [border:1px_solid_var(--line-light)] [color:var(--bg)] rounded-full [transition:all_.3s_var(--ease)] [top:18px] [right:var(--gutter)] [padding:10px_20px] text-xs [letter-spacing:.14em] uppercase hover:[background:rgba(244,241,234,.15)] hover:[border-color:rgba(244,241,234,.7)] hover:[transform:scale(1.04)] active:[transform:scale(.96)] flex items-center gap-2`}
        type="button"
        aria-label="Close photo viewer (Esc)"
      >
        <span>Close</span>
        <span
          className={String.raw`not-italic text-sm font-light`}
          aria-hidden="true"
        >
          [Esc]
        </span>
      </button>
    </div>
  );
}
