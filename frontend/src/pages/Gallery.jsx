import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { initGallery } from "../behaviors/Gallery.js";
import { images } from "../images.js";

export default function Gallery() {
  useLayoutEffect(initGallery, []);
  return (
    <>
      <svg
        className={String.raw`absolute!`}
        width="0"
        height="0"
        aria-hidden="true"
      >
        <defs>
          <symbol id="i-bed" viewBox="0 0 24 24">
            <path d="M3 18v-6.5A2.5 2.5 0 0 1 5.5 9h13a2.5 2.5 0 0 1 2.5 2.5V18M3 14.5h18M3 18v2M21 18v2M6 9V7a1.5 1.5 0 0 1 1.5-1.5h2.5A1.5 1.5 0 0 1 11.5 7v2M12.5 9V7A1.5 1.5 0 0 1 14 5.5h2.5A1.5 1.5 0 0 1 18 7v2"></path>
          </symbol>
          <symbol id="i-shower" viewBox="0 0 24 24">
            <path d="M4.5 21V6.5A3.5 3.5 0 0 1 11 4.8V7"></path>
            <path d="M7.5 10.5a3.5 3.5 0 0 1 7 0z"></path>
            <path d="M8.5 14v1M11 15v1M13.5 14v1M8.5 18v1M11 19v1M13.5 18v1"></path>
          </symbol>
          <symbol id="i-guests" viewBox="0 0 24 24">
            <circle cx="9" cy="8" r="3"></circle>
            <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"></path>
            <path d="M16 5.3a3 3 0 0 1 0 5.6M17.5 14.2a5 5 0 0 1 3 5.3"></path>
          </symbol>
          <symbol id="i-door" viewBox="0 0 24 24">
            <path d="M6 21V4h12v17M4 21h16M14.5 12.5v.5"></path>
          </symbol>
          <symbol id="i-home" viewBox="0 0 24 24">
            <path d="M3 11l9-7 9 7M5 9.5V20h14V9.5M10 20v-5h4v5"></path>
          </symbol>
          <symbol id="i-wifi" viewBox="0 0 24 24">
            <path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0M12 19.5v.01"></path>
          </symbol>
          <symbol id="i-pot" viewBox="0 0 24 24">
            <path d="M4 10h16M5 10v6.5a3.5 3.5 0 0 0 3.5 3.5h7a3.5 3.5 0 0 0 3.5-3.5V10M2 10h2M20 10h2M9 6.5c0-1 1-1 1-2.2M12 6.5c0-1 1-1 1-2.2M15 6.5c0-1 1-1 1-2.2"></path>
          </symbol>
          <symbol id="i-dining" viewBox="0 0 24 24">
            <path d="M7 3v7.5M5 3v5a2 2 0 0 0 4 0V3M7 10.5V21M17 21V3c-2.2 1.4-3.5 4-3.5 7.2V13H17"></path>
          </symbol>
          <symbol id="i-parking" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="3"></rect>
            <path d="M10 16.5V7.5h3.2a2.6 2.6 0 0 1 0 5.2H10"></path>
          </symbol>
          <symbol id="i-snow" viewBox="0 0 24 24">
            <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9M9.5 4.5 12 6l2.5-1.5M9.5 19.5 12 18l2.5 1.5"></path>
          </symbol>
          <symbol id="i-leaf" viewBox="0 0 24 24">
            <path d="M5 19c0-8.5 5.5-13.5 14-14 0 9-5.5 14-13 14z"></path>
            <path d="M5 19l7.5-7.5"></path>
          </symbol>
          <symbol id="i-sun" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"></path>
          </symbol>
          <symbol id="i-terrace" viewBox="0 0 24 24">
            <path d="M3 17h18M6.5 17a5.5 5.5 0 0 1 11 0M12 6.5v3M5 9.8l1.5 1.5M19 9.8l-1.5 1.5M5 21h14"></path>
          </symbol>
          <symbol id="i-laptop" viewBox="0 0 24 24">
            <rect x="4" y="5" width="16" height="11" rx="1.5"></rect>
            <path d="M2 19.5h20"></path>
          </symbol>
          <symbol id="i-wind" viewBox="0 0 24 24">
            <path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7"></path>
          </symbol>
          <symbol id="i-flame" viewBox="0 0 24 24">
            <path d="M12 21a6 6 0 0 0 6-6c0-4-3-6.2-4-10-2 2-3 4-3 6-1-.8-1.6-2-1.6-3.2C7.6 9.5 6 12 6 15a6 6 0 0 0 6 6z"></path>
          </symbol>
          <symbol id="i-sprout" viewBox="0 0 24 24">
            <path d="M12 21v-9M12 12c0-4-3-6-7-6 0 4 3 6 7 6zM12 14.5c0-4 3-6 7-6 0 4-3 6-7 6z"></path>
          </symbol>
          <symbol id="i-clock" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 7v5l3.2 2"></path>
          </symbol>
          <symbol id="i-hourglass" viewBox="0 0 24 24">
            <path d="M6.5 3h11M6.5 21h11M7.5 3v3l4.5 6 4.5-6V3M7.5 21v-3l4.5-6 4.5 6v3"></path>
          </symbol>
          <symbol id="i-info" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9"></circle>
            <path d="M12 11v6M12 7.5v.01"></path>
          </symbol>
          <symbol id="i-pin" viewBox="0 0 24 24">
            <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"></path>
            <circle cx="12" cy="9.5" r="2.5"></circle>
          </symbol>
          <symbol id="i-car" viewBox="0 0 24 24">
            <path d="M4.5 16.5V12l2-5h11l2 5v4.5M3 16.5h18V19H3zM6.5 19v1.5M17.5 19v1.5M4.5 12h15"></path>
          </symbol>
          <symbol id="i-cash" viewBox="0 0 24 24">
            <rect x="3" y="6" width="18" height="12" rx="2"></rect>
            <circle cx="12" cy="12" r="2.5"></circle>
            <path d="M6.5 9.5v.01M17.5 14.5v.01"></path>
          </symbol>
          <symbol id="i-star" viewBox="0 0 24 24">
            <path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"></path>
          </symbol>
          <symbol id="i-calendar" viewBox="0 0 24 24">
            <rect x="3.5" y="5" width="17" height="15" rx="2"></rect>
            <path d="M3.5 10h17M8 3v4M16 3v4"></path>
          </symbol>
          <symbol id="i-child" viewBox="0 0 24 24">
            <circle cx="12" cy="5.5" r="2.5"></circle>
            <path d="M7.5 11h9M12 9v6.5M12 15.5l-3 5M12 15.5l3 5"></path>
          </symbol>
          <symbol id="i-plane" viewBox="0 0 24 24">
            <path d="M21 15.5l-8-4V5.5a1.5 1.5 0 0 0-3 0v6l-8 4v2l8-2v3.8l-2 1.5V22l3.5-1 3.5 1v-1.2l-2-1.5v-3.8l8 2z"></path>
          </symbol>
          <symbol id="i-plus" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14"></path>
          </symbol>
          <symbol id="i-left" viewBox="0 0 24 24">
            <path d="M19 12H5M11 6l-6 6 6 6"></path>
          </symbol>
          <symbol id="i-right" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </symbol>
          <symbol id="i-access" viewBox="0 0 24 24">
            <circle cx="12" cy="4.5" r="1.6"></circle>
            <path d="M5 8.5l7 1.5 7-1.5M12 10v4l-3 6.5M12 14l3 6.5"></path>
          </symbol>
          <symbol id="i-cup" viewBox="0 0 24 24">
            <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 10.5h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5c0 1-1 1-1 2M11 3.5c0 1-1 1-1 2"></path>
          </symbol>
          <symbol id="i-mail" viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
            <path d="M3.5 6.5 12 13l8.5-6.5"></path>
          </symbol>
          <symbol id="i-chat" viewBox="0 0 24 24">
            <path d="M4 20l1.4-3.7A8 8 0 1 1 8.7 19.4z"></path>
          </symbol>
          <symbol id="i-camera" viewBox="0 0 24 24">
            <rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect>
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M17 7v.01"></path>
          </symbol>
          <symbol id="i-washer" viewBox="0 0 24 24">
            <rect x="4" y="3" width="16" height="18" rx="2"></rect>
            <circle cx="12" cy="13" r="4.5"></circle>
            <path d="M7.5 6.5h.01M10.5 6.5h4.5"></path>
          </symbol>
          <symbol id="i-drop" viewBox="0 0 24 24">
            <path d="M12 3.5s6 6.5 6 10.5a6 6 0 0 1-12 0c0-4 6-10.5 6-10.5z"></path>
          </symbol>
          <symbol id="i-iron" viewBox="0 0 24 24">
            <path d="M3 17.5h17v-3a5.5 5.5 0 0 0-5.5-5.5H7.5M3 17.5l2.2-8.5H8M9 9V6.5h6.5"></path>
          </symbol>
          <symbol id="i-ext" viewBox="0 0 24 24">
            <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"></path>
          </symbol>
          <symbol id="i-quote" viewBox="0 0 24 24">
            <path d="M9.5 7C6.5 8 5 10.3 5 13.5V17h4.5v-4.5H7c0-2 .9-3.3 2.5-4zM18.5 7c-3 1-4.5 3.3-4.5 6.5V17h4.5v-4.5H16c0-2 .9-3.3 2.5-4z"></path>
          </symbol>
        </defs>
      </svg>

      <a
        className={String.raw`skip-link fixed left-3 [top:-60px] [z-index:300] [background:var(--dark)] [color:#fff] [padding-top:10px] pr-4 [padding-bottom:10px] pl-4 rounded-full text-sm no-underline [transition:top_.3s] [&:focus]:top-3`}
        href="#main"
      >
        Skip to content
      </a>

      <header
        className={String.raw`site-header is-solid fixed top-0 right-0 [bottom:auto] left-0 [z-index:120] [height:var(--nav-h)] [color:var(--ink)] [border-bottom:1px_solid_transparent] [transition:background-color_.6s_var(--ease),color_.6s_var(--ease),border-color_.6s_var(--ease)] [&.is-solid]:[background:rgba(244,241,234,.92)] [&.is-solid]:[-webkit-backdrop-filter:blur(10px)] [&.is-solid]:[backdrop-filter:blur(10px)] [&.is-solid]:[border-bottom-color:var(--line)] [&.is-light]:[color:#fff] [&.is-light]:bg-transparent [&.is-light]:[border-bottom-color:transparent] [&.menu-open]:[color:var(--bg)] [&.menu-open]:bg-transparent [&.menu-open]:[border-bottom-color:transparent] [&.menu-open]:[-webkit-backdrop-filter:none] [&.menu-open]:[backdrop-filter:none]`}
        id="siteHeader"
      >
        <nav
          className={String.raw`site-header__inner navbar h-full max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid [grid-template-columns:1fr_auto_1fr] items-center flex-nowrap max-[991.98px]:[grid-template-columns:1fr_auto]`}
          aria-label="Main"
        >
          <Link
            className={String.raw`brand inline-flex items-center [gap:11px] text-sm [letter-spacing:.2em] uppercase font-medium no-underline text-inherit whitespace-nowrap max-[389.98px]:gap-2 max-[389.98px]:[letter-spacing:.16em] max-[389.98px]:text-xs`}
            to="/"
            aria-label="Galkanda Estate — home"
          >
            <svg
              className={String.raw`brand__mark [width:26px] [height:17px] flex-none [fill:none] [stroke:currentColor] [stroke-width:1.4] [stroke-linejoin:round] [stroke-linecap:round] [transition:transform_.6s_var(--ease)] [.brand:hover_&]:[transform:translateY(-1px)] max-[389.98px]:[width:22px] max-[389.98px]:[height:15px]`}
              viewBox="0 0 28 18"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M1.5 16.5 9.6 4.2l4.6 6.6 3.4-4.4 8.9 10.1z"></path>
              <path d="M7.4 7.6l2.2 1.6 1.9-1.4"></path>
            </svg>
            <span>Galkanda Estate</span>
          </Link>
          <ul
            className={String.raw`nav-links hidden list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 [gap:clamp(20px,2.3vw,36px)] min-[992px]:flex`}
          >
            <li>
              <Link
                className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)]`}
                to="/estate"
              >
                Estate
              </Link>
            </li>
            <li>
              <Link
                className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)]`}
                to="/experiences"
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)]`}
                to="/food"
              >
                Food &amp; Farm
              </Link>
            </li>
            <li>
              <Link
                className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)]`}
                to="/explore"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)] [.nav-links_&[aria-current="page"]::after]:[transform:scaleX(1)]`}
                to="/gallery"
                aria-current="page"
              >
                Gallery
              </Link>
            </li>
          </ul>
          <div
            className={String.raw`header-end justify-self-end flex items-center [gap:14px]`}
          >
            <Link
              className={String.raw`pill text-inherit hidden items-center gap-2 no-underline text-sm [padding-top:10px] [padding-right:18px] [padding-bottom:10px] [padding-left:18px] [border:1px_solid_currentColor] rounded-full [transition:background-color_.4s_var(--ease),color_.4s_var(--ease)] [.site-header.is-solid_&:hover]:[background:var(--dark)] [.site-header.is-solid_&:hover]:[color:#fff] [.site-header.is-solid_&:hover]:[border-color:var(--dark)] [.site-header.is-light_&:hover]:[background:#fff] [.site-header.is-light_&:hover]:[color:var(--ink)] min-[992px]:inline-flex`}
              to="/contact"
            >
              <span>Plan Your Stay</span>
              <i
                className={String.raw`not-italic inline-block [transition:transform_.45s_var(--ease)] [.pill:hover_&]:[transform:rotate(45deg)]`}
                aria-hidden="true"
              >
                &#8599;
              </i>
            </Link>
            <button
              className={String.raw`menu-toggle w-11 h-11 border-0 bg-transparent text-inherit relative pt-0 pr-0 pb-0 pl-0 [margin-right:-10px] min-[992px]:hidden`}
              type="button"
              aria-controls="siteMenu"
              aria-expanded="false"
              aria-label="Open menu"
            >
              <span
                className={String.raw`absolute [left:11px] [right:11px] [height:1.5px] [background:currentColor] [transition:transform_.5s_var(--ease)] [top:18px]`}
              ></span>
              <span
                className={String.raw`absolute [left:11px] [right:11px] [height:1.5px] [background:currentColor] [transition:transform_.5s_var(--ease)] [top:25px]`}
              ></span>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={String.raw`menu fixed top-0 right-0 bottom-0 left-0 [z-index:110] [background:var(--dark)] [color:var(--bg)] flex flex-col justify-between [padding-top:calc(var(--nav-h)_+_4vh)] [padding-right:var(--gutter)] pb-7 [padding-left:var(--gutter)] invisible [clip-path:inset(0_0_100%_0)] [&.is-open]:visible [&.is-open]:[clip-path:inset(0_0_0_0)]`}
        id="siteMenu"
        aria-hidden="true"
        role="dialog"
        aria-label="Site menu"
      >
        <ul
          className={String.raw`menu__links list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0`}
        >
          <li>
            <Link
              className={String.raw`text-inherit block overflow-hidden no-underline text-4xl md:text-7xl [letter-spacing:-.045em] [line-height:1.06] [padding-top:.04em] pr-0 [padding-bottom:.04em] pl-0`}
              to="/estate"
            >
              <span className={String.raw`block`}>Estate</span>
            </Link>
          </li>
          <li>
            <Link
              className={String.raw`text-inherit block overflow-hidden no-underline text-4xl md:text-7xl [letter-spacing:-.045em] [line-height:1.06] [padding-top:.04em] pr-0 [padding-bottom:.04em] pl-0`}
              to="/experiences"
            >
              <span className={String.raw`block`}>Experiences</span>
            </Link>
          </li>
          <li>
            <Link
              className={String.raw`text-inherit block overflow-hidden no-underline text-4xl md:text-7xl [letter-spacing:-.045em] [line-height:1.06] [padding-top:.04em] pr-0 [padding-bottom:.04em] pl-0`}
              to="/food"
            >
              <span className={String.raw`block`}>Food &amp; Farm</span>
            </Link>
          </li>
          <li>
            <Link
              className={String.raw`text-inherit block overflow-hidden no-underline text-4xl md:text-7xl [letter-spacing:-.045em] [line-height:1.06] [padding-top:.04em] pr-0 [padding-bottom:.04em] pl-0`}
              to="/explore"
            >
              <span className={String.raw`block`}>Explore</span>
            </Link>
          </li>
          <li>
            <Link
              className={String.raw`block overflow-hidden no-underline text-4xl md:text-7xl [letter-spacing:-.045em] [line-height:1.06] [padding-top:.04em] pr-0 [padding-bottom:.04em] pl-0 [color:var(--earth)]`}
              to="/gallery"
              aria-current="page"
            >
              <span className={String.raw`block`}>Gallery</span>
            </Link>
          </li>
          <li>
            <Link
              className={String.raw`text-inherit block overflow-hidden no-underline text-4xl md:text-7xl [letter-spacing:-.045em] [line-height:1.06] [padding-top:.04em] pr-0 [padding-bottom:.04em] pl-0`}
              to="/contact"
            >
              <span className={String.raw`block`}>Contact</span>
            </Link>
          </li>
        </ul>
        <div
          className={String.raw`menu__foot flex justify-between items-center text-sm [color:rgba(244,241,234,.66)] [border-top:1px_solid_var(--line-light)] pt-5`}
        >
          <span>Kandy, Sri Lanka</span>
          <Link
            className={String.raw`link-u link-u--light [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:origin-left [&::after]:[transition:transform_.5s_var(--ease)] [&:hover::after]:[transform:scaleX(1)] relative inline-flex [gap:6px] items-center text-sm no-underline pt-1 pr-0 pb-1 pl-0 font-medium [&::after]:[transform:scaleX(1)] [&::after]:[opacity:.35] [&:hover::after]:opacity-100 [color:var(--bg)]`}
            to="/contact"
          >
            Plan Your Stay{" "}
            <i
              className={String.raw`not-italic inline-block [transition:transform_.45s_var(--ease)] [.link-u:hover_&]:[transform:rotate(45deg)]`}
              aria-hidden="true"
            >
              &#8599;
            </i>
          </Link>
        </div>
      </div>

      <main className={String.raw`block`} id="main">
        <section
          className={String.raw`phero relative [height:78svh] min-h-135 [color:#fff] overflow-hidden flex items-end [background:var(--dark)]`}
          data-header="light"
        >
          <div
            className={String.raw`phero__media absolute top-0 right-0 bottom-0 left-0`}
          >
            <div
              className={String.raw`phero__intro absolute top-0 right-0 bottom-0 left-0 overflow-hidden`}
            >
              <img
                className={String.raw`max-w-full block w-full h-full object-cover`}
                src={images["HeroGallery.jpg"]}
                sizes="100vw"
                alt="Mist drifting over the hill country near Kandy"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div
              className={String.raw`phero__shade absolute top-0 right-0 bottom-0 left-0 [background:linear-gradient(180deg,rgba(14,16,11,.38)_0%,rgba(14,16,11,.05)_35%,rgba(14,16,11,.55)_100%)]`}
              aria-hidden="true"
            ></div>
          </div>
          <div
            className={String.raw`phero__copy relative [z-index:2] w-full [padding-bottom:clamp(36px,7vh,80px)]`}
          >
            <div
              className={String.raw`container-wide phero__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-7 min-[992px]:[grid-template-columns:minmax(0,1fr)_minmax(0,22em)] min-[992px]:items-end min-[992px]:[column-gap:5vw]`}
            >
              <div>
                <span
                  className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)] [color:rgba(255,255,255,.8)]`}
                  data-hero-fade=""
                >
                  Gallery
                </span>
                <h1
                  className={String.raw`h-xl [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 mb-0 ml-0 text-inherit [line-height:.94] text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`}
                >
                  Galkanda
                  <br />
                  in{" "}
                  <em
                    className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                  >
                    Moments.
                  </em>
                </h1>
              </div>
              <div
                className={String.raw`phero__aside text-base [line-height:1.6] [max-width:24em] [color:rgba(255,255,255,.86)]`}
                data-hero-fade=""
              >
                A few glimpses of the house, the farm, the food and the country
                around it.
              </div>
            </div>
          </div>
        </section>

        <section
          className={String.raw`sec gpage [padding-top:var(--sec)] pr-0 [padding-bottom:var(--sec)] pl-0 relative`}
          aria-label="Photo gallery"
        >
          <div
            className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
          >
            <div
              className={String.raw`gbar flex flex-wrap gap-2 [margin-bottom:clamp(32px,4vw,56px)] sticky [top:calc(var(--nav-h)_+_12px)] [z-index:5]`}
              role="group"
              aria-label="Filter photographs"
            >
              <button
                className={String.raw`filter is-active [border:1px_solid_var(--line)] [background:rgba(244,241,234,.9)] [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)] [color:var(--ink)] text-sm [padding-top:9px] pr-4 [padding-bottom:9px] pl-4 rounded-full [transition:background-color_.4s_var(--ease),color_.4s_var(--ease),border-color_.4s] hover:[border-color:var(--ink)] [&.is-active]:[background:var(--dark)] [&.is-active]:[color:#fff] [&.is-active]:[border-color:var(--dark)]`}
                type="button"
                data-filter="all"
                aria-pressed="true"
              >
                All
                <sup
                  className={String.raw`text-xs ml-1 [color:var(--muted)] [top:-.6em] [.filter.is-active_&]:[color:rgba(255,255,255,.6)]`}
                ></sup>
              </button>
              <button
                className={String.raw`filter [border:1px_solid_var(--line)] [background:rgba(244,241,234,.9)] [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)] [color:var(--ink)] text-sm [padding-top:9px] pr-4 [padding-bottom:9px] pl-4 rounded-full [transition:background-color_.4s_var(--ease),color_.4s_var(--ease),border-color_.4s] hover:[border-color:var(--ink)] [&.is-active]:[background:var(--dark)] [&.is-active]:[color:#fff] [&.is-active]:[border-color:var(--dark)]`}
                type="button"
                data-filter="estate"
                aria-pressed="false"
              >
                Estate
                <sup
                  className={String.raw`text-xs ml-1 [color:var(--muted)] [top:-.6em] [.filter.is-active_&]:[color:rgba(255,255,255,.6)]`}
                ></sup>
              </button>
              <button
                className={String.raw`filter [border:1px_solid_var(--line)] [background:rgba(244,241,234,.9)] [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)] [color:var(--ink)] text-sm [padding-top:9px] pr-4 [padding-bottom:9px] pl-4 rounded-full [transition:background-color_.4s_var(--ease),color_.4s_var(--ease),border-color_.4s] hover:[border-color:var(--ink)] [&.is-active]:[background:var(--dark)] [&.is-active]:[color:#fff] [&.is-active]:[border-color:var(--dark)]`}
                type="button"
                data-filter="rooms"
                aria-pressed="false"
              >
                Rooms
                <sup
                  className={String.raw`text-xs ml-1 [color:var(--muted)] [top:-.6em] [.filter.is-active_&]:[color:rgba(255,255,255,.6)]`}
                ></sup>
              </button>
              <button
                className={String.raw`filter [border:1px_solid_var(--line)] [background:rgba(244,241,234,.9)] [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)] [color:var(--ink)] text-sm [padding-top:9px] pr-4 [padding-bottom:9px] pl-4 rounded-full [transition:background-color_.4s_var(--ease),color_.4s_var(--ease),border-color_.4s] hover:[border-color:var(--ink)] [&.is-active]:[background:var(--dark)] [&.is-active]:[color:#fff] [&.is-active]:[border-color:var(--dark)]`}
                type="button"
                data-filter="farm"
                aria-pressed="false"
              >
                Farm
                <sup
                  className={String.raw`text-xs ml-1 [color:var(--muted)] [top:-.6em] [.filter.is-active_&]:[color:rgba(255,255,255,.6)]`}
                ></sup>
              </button>
              <button
                className={String.raw`filter [border:1px_solid_var(--line)] [background:rgba(244,241,234,.9)] [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)] [color:var(--ink)] text-sm [padding-top:9px] pr-4 [padding-bottom:9px] pl-4 rounded-full [transition:background-color_.4s_var(--ease),color_.4s_var(--ease),border-color_.4s] hover:[border-color:var(--ink)] [&.is-active]:[background:var(--dark)] [&.is-active]:[color:#fff] [&.is-active]:[border-color:var(--dark)]`}
                type="button"
                data-filter="food"
                aria-pressed="false"
              >
                Food
                <sup
                  className={String.raw`text-xs ml-1 [color:var(--muted)] [top:-.6em] [.filter.is-active_&]:[color:rgba(255,255,255,.6)]`}
                ></sup>
              </button>
              <button
                className={String.raw`filter [border:1px_solid_var(--line)] [background:rgba(244,241,234,.9)] [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)] [color:var(--ink)] text-sm [padding-top:9px] pr-4 [padding-bottom:9px] pl-4 rounded-full [transition:background-color_.4s_var(--ease),color_.4s_var(--ease),border-color_.4s] hover:[border-color:var(--ink)] [&.is-active]:[background:var(--dark)] [&.is-active]:[color:#fff] [&.is-active]:[border-color:var(--dark)]`}
                type="button"
                data-filter="nature"
                aria-pressed="false"
              >
                Nature
                <sup
                  className={String.raw`text-xs ml-1 [color:var(--muted)] [top:-.6em] [.filter.is-active_&]:[color:rgba(255,255,255,.6)]`}
                ></sup>
              </button>
              <button
                className={String.raw`filter [border:1px_solid_var(--line)] [background:rgba(244,241,234,.9)] [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)] [color:var(--ink)] text-sm [padding-top:9px] pr-4 [padding-bottom:9px] pl-4 rounded-full [transition:background-color_.4s_var(--ease),color_.4s_var(--ease),border-color_.4s] hover:[border-color:var(--ink)] [&.is-active]:[background:var(--dark)] [&.is-active]:[color:#fff] [&.is-active]:[border-color:var(--dark)]`}
                type="button"
                data-filter="kandy"
                aria-pressed="false"
              >
                Around Kandy
                <sup
                  className={String.raw`text-xs ml-1 [color:var(--muted)] [top:-.6em] [.filter.is-active_&]:[color:rgba(255,255,255,.6)]`}
                ></sup>
              </button>
            </div>
            <p
              className={String.raw`visually-hidden absolute! [width:1px] [height:1px] overflow-hidden [clip:rect(0_0_0_0)] whitespace-nowrap -m-px p-0 border-0`}
              id="gstatus"
              aria-live="polite"
            ></p>
            <div
              className={String.raw`mosaic gmosaic grid [grid-template-columns:repeat(2,minmax(0,1fr))] [gap:10px] [grid-auto-flow:dense] min-[768px]:[grid-template-columns:repeat(12,minmax(0,1fr))] min-[768px]:[grid-auto-rows:clamp(52px,6.4vw,104px)] min-[768px]:[gap:clamp(10px,1.2vw,20px)]`}
              data-lightbox-group=""
            >
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="estate"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: The house among trees and garden"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Estate.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="The house among trees and garden"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Estate.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Estate
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="rooms"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Bedroom with forest view"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Bed.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Bedroom with forest view"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Bed.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Rooms
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="farm"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Paddy fields in the morning"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Rich Field1.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Paddy fields in the morning"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Rich Field1.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Farm
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="food"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Rice and curries served on leaf"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Mome55.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Rice and curries served on leaf"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Mome55.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Food
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="nature"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Peafowl on a branch"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["6.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Peafowl on a branch"
                    loading="lazy"
                    decoding="async"
                    data-full={images["6.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Nature
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="kandy"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Temple of the Tooth across the water"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["kandy.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Temple of the Tooth across the water"
                    loading="lazy"
                    decoding="async"
                    data-full={images["kandy.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Around Kandy
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="estate"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Tiled roof and palm"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Estate2.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Tiled roof and palm"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Estate2.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Estate
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="farm"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Morning milking"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Herd.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Morning milking"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Herd.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Farm
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="rooms"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Living room in warm timber"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Interior.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Living room in warm timber"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Interior.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Rooms
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="nature"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Mist over the hills"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Nature.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Mist over the hills"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Nature.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Nature
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="food"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Curries from the kitchen"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["FooterF.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Curries from the kitchen"
                    loading="lazy"
                    decoding="async"
                    data-full={images["FooterF.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Food
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="kandy"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Kandyan fire dancers"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src="https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Kandyan fire dancers"
                    loading="lazy"
                    decoding="async"
                    data-full="https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=max&amp;w=2400&amp;q=80"
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Around Kandy
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="estate"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Shaded terrace"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Estate3.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Shaded terrace"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Estate3.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Estate
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="farm"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Planting seedlings"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Farm2.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Planting seedlings"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Farm2.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Farm
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="rooms"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Bedroom with tall windows"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Bed.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Bedroom with tall windows"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Bed.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Rooms
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="nature"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Stork-billed kingfisher"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Nature3.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Stork-billed kingfisher"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Nature3.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Nature
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="food"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Cooking on a clay stove"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Cook.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Cooking on a clay stove"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Cook.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Food
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="kandy"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: The botanical gardens"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src="https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="The botanical gardens"
                    loading="lazy"
                    decoding="async"
                    data-full="https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=max&amp;w=2400&amp;q=80"
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Around Kandy
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="estate"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: A seat in the garden"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Estate4.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="A seat in the garden"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Estate4.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Estate
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="farm"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Walking the fields"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Farm3.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Walking the fields"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Farm3.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Farm
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="food"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Tea in the garden"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Food1.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Tea in the garden"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Food1.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Food
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="nature"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Waterfall in the hills"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Nature5.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Waterfall in the hills"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Nature5.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Nature
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="rooms"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Living room with ceiling fan"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Room1.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Living room with ceiling fan"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Room1.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Rooms
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="kandy"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Kandy lake"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src="https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Kandy lake"
                    loading="lazy"
                    decoding="async"
                    data-full="https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=max&amp;w=2400&amp;q=80"
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Around Kandy
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="farm"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Grazing in the fields"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Farm4.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Grazing in the fields"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Farm4.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Farm
                  </span>
                </button>
              </figure>
              <figure
                className={String.raw`m-item relative mt-0 mr-0 mb-0 ml-0 [grid-column:span_1] [aspect-ratio:4/5] [&.w-full]:[grid-column:span_2] [&.w-full]:[aspect-ratio:16/10] min-[768px]:[aspect-ratio:auto] min-[768px]:[&.w-full]:[aspect-ratio:auto] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [&.is-hidden]:hidden`}
                data-cat="nature"
              >
                <button
                  className={String.raw`m-btn absolute top-0 right-0 bottom-0 left-0 cursor-pointer overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)] block focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:3px] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_&[data-cursor]]:[cursor:none]`}
                  type="button"
                  data-cursor="view"
                  aria-label="View photo: Evening over the hills"
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [transition:transform_1.1s_var(--ease)] [.m-btn:hover_&]:[transform:scale(1.035)] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                    src={images["Nature7.jpg"]}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    alt="Evening over the hills"
                    loading="lazy"
                    decoding="async"
                    data-full={images["Nature7.jpg"]}
                  />
                  <span
                    className={String.raw`m-tag absolute [left:14px] bottom-3 text-xs [letter-spacing:.14em] uppercase [color:#fff] opacity-0 [transform:translateY(6px)] [transition:opacity_.45s_var(--ease),transform_.45s_var(--ease)] [text-shadow:0_1px_12px_rgba(0,0,0,.35)] pointer-events-none [.m-btn:hover_&]:opacity-100 [.m-btn:hover_&]:[transform:none] [.m-btn:focus-visible_&]:opacity-100 [.m-btn:focus-visible_&]:[transform:none] [@media((hover:none))]:opacity-100 [@media((hover:none))]:[transform:none] min-[768px]:[.mosaic_&.c3]:[grid-column:span_3] min-[768px]:[.mosaic_&.c4]:[grid-column:span_4] min-[768px]:[.mosaic_&.c5]:[grid-column:span_5] min-[768px]:[.mosaic_&.c6]:[grid-column:span_6] min-[768px]:[.mosaic_&.c7]:[grid-column:span_7] min-[768px]:[.mosaic_&.c8]:[grid-column:span_8] min-[768px]:[.mosaic_&.c12]:[grid-column:span_12] min-[768px]:[.mosaic_&.r2]:[grid-row:span_2] min-[768px]:[.mosaic_&.r3]:[grid-row:span_3] min-[768px]:[.mosaic_&.r4]:[grid-row:span_4] min-[768px]:[.mosaic_&.r5]:[grid-row:span_5] min-[768px]:[.mosaic_&.r6]:[grid-row:span_6] [.has-cursor_[data-cursor]_&]:[cursor:none]`}
                  >
                    Nature
                  </span>
                </button>
              </figure>
            </div>
          </div>
        </section>

        <section
          className={String.raw`cta-band relative [min-height:68svh] flex items-center justify-center text-center [color:#fff] overflow-hidden [&::after]:[content:""] [&::after]:absolute [&::after]:top-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:left-0 [&::after]:[background:rgba(14,16,11,.42)] [&::after]:[z-index:1]`}
          data-header="light"
        >
          <div
            className={String.raw`frame frame--flat overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] absolute top-0 right-0 bottom-0 left-0 [border-radius:0]`}
            data-parallax="6"
          >
            <img
              className={String.raw`max-w-full block w-full object-cover absolute left-0 [top:-8%] [height:116%] [.frame.img-missing_>_&]:opacity-0`}
              src={images["Estate7.jpg"]}
              sizes="100vw"
              alt="The house at Galkanda among the trees"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            className={String.raw`cta-band__copy relative [z-index:2] pt-24 [padding-right:var(--gutter)] pb-24 [padding-left:var(--gutter)] flex flex-col items-center [gap:30px]`}
          >
            <h2
              className={String.raw`h-lg [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 mb-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl`}
              data-split=""
            >
              The Rest Is Better
              <br />
              <em
                className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
              >
                Experienced.
              </em>
            </h2>
            <p
              className={String.raw`small text-sm [.is-dark_&]:[color:rgba(244,241,234,.66)] [color:rgba(255,255,255,.75)] mt-0 mr-0 mb-0 ml-0`}
            >
              Galkanda Estate · Kandy, Sri Lanka
            </p>
            <div
              className={String.raw`btn-row flex flex-wrap items-center [gap:14px_28px] justify-center`}
            >
              <Link
                className={String.raw`btn-g btn-g--light text-inherit inline-flex items-center gap-1 no-underline text-sm font-medium [line-height:16px] [--bb:#fff] [--bf:var(--ink)]`}
                to="/contact"
              >
                <span
                  className={String.raw`btn-g__label [background:var(--bb)] [color:var(--bf)] [padding-top:14px] [padding-right:22px] [padding-bottom:14px] [padding-left:22px] rounded-full [transition:padding_.5s_var(--ease),background-color_.4s_var(--ease)] whitespace-nowrap [.btn-g:hover_&]:[padding-left:27px] [.btn-g:hover_&]:[padding-right:27px] [.btn-g:focus-visible_&]:[padding-left:27px] [.btn-g:focus-visible_&]:[padding-right:27px]`}
                >
                  Plan Your Stay
                </span>
                <span
                  className={String.raw`btn-g__arrow w-11 h-11 [flex:0_0_44px] rounded-full [background:var(--bb)] [color:var(--bf)] grid place-items-center text-base [transition:background-color_.4s_var(--ease)]`}
                  aria-hidden="true"
                >
                  <span
                    className={String.raw`inline-block [transition:transform_.5s_var(--ease)] [.btn-g:hover_.btn-g\_\_arrow_&]:[transform:rotate(45deg)] [.btn-g:focus-visible_.btn-g\_\_arrow_&]:[transform:rotate(45deg)]`}
                  >
                    &#8599;
                  </span>
                </span>
              </Link>
              <Link
                className={String.raw`btn-g btn-g--line [--bb:var(--dark)] [--bf:#fff] inline-flex items-center gap-1 no-underline text-sm font-medium [line-height:16px] [color:#fff]`}
                to="/estate"
              >
                <span
                  className={String.raw`btn-g__label [padding-top:14px] [padding-right:22px] [padding-bottom:14px] [padding-left:22px] rounded-full [transition:padding_.5s_var(--ease),background-color_.4s_var(--ease)] whitespace-nowrap [.btn-g:hover_&]:[padding-left:27px] [.btn-g:hover_&]:[padding-right:27px] [.btn-g:focus-visible_&]:[padding-left:27px] [.btn-g:focus-visible_&]:[padding-right:27px] bg-transparent [box-shadow:inset_0_0_0_1px_currentColor] text-inherit`}
                >
                  Explore the Estate
                </span>
                <span
                  className={String.raw`btn-g__arrow w-11 h-11 [flex:0_0_44px] rounded-full grid place-items-center text-base [transition:background-color_.4s_var(--ease)] bg-transparent [box-shadow:inset_0_0_0_1px_currentColor] text-inherit`}
                  aria-hidden="true"
                >
                  <span
                    className={String.raw`inline-block [transition:transform_.5s_var(--ease)] [.btn-g:hover_.btn-g\_\_arrow_&]:[transform:rotate(45deg)] [.btn-g:focus-visible_.btn-g\_\_arrow_&]:[transform:rotate(45deg)]`}
                  >
                    &#8599;
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={String.raw`site-footer [background:var(--dark)] [color:var(--bg)] [padding-top:clamp(72px,10vw,120px)] pr-0 pb-7 pl-0`}
        data-header="light"
      >
        <div
          className={String.raw`container-xxl max-w-375 [padding-left:var(--gutter)] [padding-right:var(--gutter)] w-full mx-auto`}
        >
          <div
            className={String.raw`footer-grid grid gap-11 [padding-bottom:clamp(56px,8vw,110px)] min-[768px]:[grid-template-columns:2fr_1fr_1fr] min-[992px]:[grid-template-columns:1.3fr_1fr_.6fr]`}
          >
            <div className={String.raw`footer-brand`}>
              <Link
                className={String.raw`brand brand--lg inline-flex items-center [gap:11px] [letter-spacing:.2em] uppercase font-medium no-underline text-inherit whitespace-nowrap max-[389.98px]:gap-2 max-[389.98px]:[letter-spacing:.16em] text-sm`}
                to="/"
              >
                <svg
                  className={String.raw`brand__mark [width:26px] [height:17px] flex-none [fill:none] [stroke:currentColor] [stroke-width:1.4] [stroke-linejoin:round] [stroke-linecap:round] [transition:transform_.6s_var(--ease)] [.brand:hover_&]:[transform:translateY(-1px)] max-[389.98px]:[width:22px] max-[389.98px]:[height:15px]`}
                  viewBox="0 0 28 18"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M1.5 16.5 9.6 4.2l4.6 6.6 3.4-4.4 8.9 10.1z"></path>
                  <path d="M7.4 7.6l2.2 1.6 1.9-1.4"></path>
                </svg>
                <span>Galkanda Estate</span>
              </Link>
              <p
                className={String.raw`mt-4 mr-0 mb-0 ml-0 [font-family:var(--f-serif)] italic text-2xl xl:text-4xl [line-height:1.1] [letter-spacing:-.01em] [color:rgba(244,241,234,.9)] [max-width:12em]`}
              >
                A slower way to experience Sri Lanka.
              </p>
            </div>
            <ul
              className={String.raw`footer-links list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 grid gap-2 [align-content:start] min-[992px]:[grid-template-columns:1fr_1fr] min-[992px]:gap-x-10`}
              aria-label="Pages"
            >
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/estate"
                >
                  Estate
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/experiences"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/food"
                >
                  Food &amp; Farm
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/explore"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul
              className={String.raw`footer-links footer-links--end list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 grid gap-2 [align-content:start] min-[992px]:gap-x-10 min-[992px]:[grid-template-columns:1fr]`}
              aria-label="Contact"
            >
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/contact"
                >
                  Plan Your Stay{" "}
                  <i
                    className={String.raw`not-italic text-xs`}
                    aria-hidden="true"
                  >
                    &#8599;
                  </i>
                </Link>
              </li>
              <li>
                <a
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  href="#"
                  rel="noopener"
                >
                  Instagram{" "}
                  <i
                    className={String.raw`not-italic text-xs`}
                    aria-hidden="true"
                  >
                    &#8599;
                  </i>
                </a>
              </li>
              <li>
                <a
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  href="https://maps.google.com/?q=Kandy,Sri+Lanka"
                  target="_blank"
                  rel="noopener"
                >
                  Location{" "}
                  <i
                    className={String.raw`not-italic text-xs`}
                    aria-hidden="true"
                  >
                    &#8599;
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div
            className={String.raw`footer-bottom flex flex-wrap [gap:10px_32px] justify-between pt-6 [border-top:1px_solid_var(--line-light)] text-xs [color:rgba(244,241,234,.55)]`}
          >
            <span>Galkanda Estate Eco Farm Stay · Kandy, Sri Lanka</span>
            <span>
              © <span data-year="">2026</span> Galkanda Estate
            </span>
            <a className={String.raw`text-inherit no-underline`} href="#">
              Privacy
            </a>
          </div>
        </div>
      </footer>

      <div
        className={String.raw`lightbox fixed top-0 right-0 bottom-0 left-0 [z-index:500] [background:rgba(16,18,13,.97)] [color:var(--bg)] hidden [&.is-open]:block`}
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
        aria-hidden="true"
      >
        <div
          className={String.raw`lightbox__stage absolute top-18 right-16 bottom-22 left-16 grid place-items-center max-[767.98px]:[top:70px] max-[767.98px]:right-3 max-[767.98px]:bottom-30 max-[767.98px]:left-3`}
        >
          <img
            className={String.raw`lightbox__img block max-w-full [max-height:calc(100vh_-_160px)] [width:auto] [height:auto] object-contain [border-radius:8px]`}
            src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
            alt=""
          />
        </div>
        <div
          className={String.raw`lightbox__bar absolute [left:var(--gutter)] [right:var(--gutter)] bottom-6 flex justify-between gap-6 text-sm [color:rgba(244,241,234,.75)]`}
        >
          <p
            className={String.raw`lightbox__caption mt-0 mr-0 mb-0 ml-0 flex [gap:14px] [align-items:baseline]`}
          >
            <span
              className={String.raw`lightbox__cat text-xs [letter-spacing:.16em] uppercase [color:var(--earth)] hidden`}
            ></span>
            <span className={String.raw`lightbox__text`}></span>
          </p>
          <span className={String.raw`lightbox__count`}></span>
        </div>
        <button
          className={String.raw`lightbox__btn lightbox__prev absolute bg-transparent [border:1px_solid_var(--line-light)] [color:var(--bg)] rounded-full [transition:background-color_.3s,border-color_.3s] [top:50%] w-10 h-10 [margin-top:-20px] text-sm left-3 hover:[background:rgba(244,241,234,.1)] hover:[border-color:rgba(244,241,234,.6)] max-[767.98px]:[top:auto] max-[767.98px]:bottom-15 max-[767.98px]:mt-0 max-[767.98px]:mr-0 max-[767.98px]:mb-0 max-[767.98px]:ml-0 max-[767.98px]:[left:var(--gutter)]`}
          type="button"
          aria-label="Previous photo"
        >
          &#8592;
        </button>
        <button
          className={String.raw`lightbox__btn lightbox__next absolute bg-transparent [border:1px_solid_var(--line-light)] [color:var(--bg)] rounded-full [transition:background-color_.3s,border-color_.3s] [top:50%] w-10 h-10 [margin-top:-20px] text-sm right-3 hover:[background:rgba(244,241,234,.1)] hover:[border-color:rgba(244,241,234,.6)] max-[767.98px]:[top:auto] max-[767.98px]:bottom-15 max-[767.98px]:mt-0 max-[767.98px]:mr-0 max-[767.98px]:mb-0 max-[767.98px]:ml-0 max-[767.98px]:[right:var(--gutter)]`}
          type="button"
          aria-label="Next photo"
        >
          &#8594;
        </button>
        <button
          className={String.raw`lightbox__close absolute bg-transparent [border:1px_solid_var(--line-light)] [color:var(--bg)] rounded-full [transition:background-color_.3s,border-color_.3s] [top:18px] [right:var(--gutter)] [padding-top:10px] [padding-right:18px] [padding-bottom:10px] [padding-left:18px] text-sm hover:[background:rgba(244,241,234,.1)] hover:[border-color:rgba(244,241,234,.6)]`}
          type="button"
          aria-label="Close photo viewer"
        >
          Close{" "}
          <i
            className={String.raw`not-italic [margin-left:6px]`}
            aria-hidden="true"
          >
            ×
          </i>
        </button>
      </div>

      <div
        className={String.raw`cursor fixed left-0 top-0 [z-index:400] pointer-events-none hidden opacity-0 [.has-cursor_&]:block`}
        aria-hidden="true"
      >
        <div
          className={String.raw`cursor__ring absolute [width:34px] [height:34px] [margin-top:-17px] mr-0 mb-0 [margin-left:-17px] rounded-full [border:1px_solid_rgba(21,21,16,.35)] grid place-items-center [transition:width_.45s_var(--ease),height_.45s_var(--ease),margin_.45s_var(--ease),background-color_.45s_var(--ease),border-color_.45s_var(--ease)] [.cursor.is-view_&]:[width:86px] [.cursor.is-view_&]:[height:86px] [.cursor.is-view_&]:[margin-top:-43px] [.cursor.is-view_&]:mr-0 [.cursor.is-view_&]:mb-0 [.cursor.is-view_&]:[margin-left:-43px] [.cursor.is-view_&]:[background:rgba(244,241,234,.92)] [.cursor.is-view_&]:[border-color:transparent] [.cursor.is-link_&]:w-13 [.cursor.is-link_&]:h-13 [.cursor.is-link_&]:[margin-top:-26px] [.cursor.is-link_&]:mr-0 [.cursor.is-link_&]:mb-0 [.cursor.is-link_&]:[margin-left:-26px] [.cursor.is-link_&]:[border-color:rgba(21,21,16,.55)] [.cursor.is-light_&]:[border-color:rgba(255,255,255,.55)]`}
        >
          <span
            className={String.raw`text-xs [letter-spacing:.14em] whitespace-nowrap uppercase [color:var(--ink)] opacity-0 [transition:opacity_.3s] [.cursor.is-view_.cursor\_\_ring_&]:opacity-100`}
          >
            View &#8599;
          </span>
        </div>
        <div
          className={String.raw`cursor__dot absolute [width:6px] [height:6px] [margin-top:-3px] mr-0 mb-0 [margin-left:-3px] rounded-full [background:var(--ink)] [transition:opacity_.3s] [.cursor.is-view_&]:opacity-0 [.cursor.is-light_&]:[background:#fff]`}
        ></div>
      </div>
    </>
  );
}
