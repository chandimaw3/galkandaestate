import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { initHome } from "../behaviors/Home.js";
import { images } from "../images.js";
console.log("gather:", images["gather.jpg"]);

export default function Home() {
  useLayoutEffect(initHome, []);

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

      <div
        className={String.raw`loader fixed top-0 right-0 bottom-0 left-0 [z-index:600] [background:var(--bg)] grid place-items-center [html:not(.has-motion)_&]:hidden`}
        aria-hidden="true"
      >
        <div
          className={String.raw`loader__inner [width:min(260px,60vw)] text-center`}
        >
          <span
            className={String.raw`loader__word text-xs [letter-spacing:.32em] uppercase font-medium [margin-bottom:18px] block`}
          >
            Galkanda Estate
          </span>
          <div
            className={String.raw`loader__line [height:1px] [background:var(--line)] overflow-hidden`}
          >
            <i
              className={String.raw`block h-full [background:var(--ink)] [transform:scaleX(0)] origin-left`}
            ></i>
          </div>
        </div>
      </div>

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
                className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)]`}
                to="/gallery"
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
              className={String.raw`text-inherit block overflow-hidden no-underline text-4xl md:text-7xl [letter-spacing:-.045em] [line-height:1.06] [padding-top:.04em] pr-0 [padding-bottom:.04em] pl-0`}
              to="/gallery"
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
          className={String.raw`hx relative [&.is-pinned]:h-screen [&.is-pinned]:overflow-hidden`}
          id="hero"
          aria-label="Welcome to Galkanda Estate"
        >
          <div
            className={String.raw`hx__stage relative [height:100svh] min-h-155 [color:#fff] [.hx.is-pinned_&]:absolute [.hx.is-pinned_&]:top-0 [.hx.is-pinned_&]:right-0 [.hx.is-pinned_&]:bottom-0 [.hx.is-pinned_&]:left-0 [.hx.is-pinned_&]:[height:auto] [.hx.is-pinned_&]:min-h-0`}
            data-header="light"
          >
            <div
              className={String.raw`hx__cream absolute top-0 right-0 bottom-0 left-0 [background:var(--bg)] opacity-0`}
              aria-hidden="true"
            ></div>
            <div
              className={String.raw`hx__media absolute top-0 right-0 bottom-0 left-0 overflow-hidden [z-index:2] [background:var(--dark)]`}
            >
              <div
                className={String.raw`hx__intro absolute top-0 right-0 bottom-0 left-0 overflow-hidden`}
              >
                <div
                  className={String.raw`hx__zoom absolute top-0 right-0 bottom-0 left-0 overflow-visible`}
                >
                  <img
                    className="max-w-full block w-full h-full object-cover"
                    src={images["main1.jpg"]}
                    alt="Galkanda Estate villa surrounded by tropical greenery near Kandy"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div
                    className={String.raw`hx__next absolute top-0 right-0 bottom-0 left-0 opacity-0 overflow-hidden pointer-events-none [html:not(.has-motion)_&]:hidden`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover`}
                      src={images["mainsec2.jpg"]}
                      sizes="100vw"
                      alt="Timber house with a shaded deck among tropical trees — arriving at Galkanda"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
              <div
                className={String.raw`hx__shade absolute top-0 right-0 bottom-0 left-0 [background:linear-gradient(180deg,rgba(13,15,10,.42)_0%,rgba(13,15,10,.08)_34%,rgba(13,15,10,.18)_60%,rgba(13,15,10,.62)_100%)]`}
                aria-hidden="true"
              ></div>
            </div>
            <div
              className={String.raw`hx__copy absolute top-0 right-0 bottom-0 left-0 [z-index:3] flex items-end pointer-events-none`}
            >
              <div
                className={String.raw`container-wide hx__copy-in max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] [padding-left:var(--gutter)] w-full [padding-bottom:clamp(36px,7vh,84px)] grid [gap:26px] min-[992px]:[grid-template-columns:minmax(0,1fr)_auto] min-[992px]:items-end min-[992px]:[column-gap:5vw]`}
              >
                <p
                  className={String.raw`eyebrow hx__eyebrow text-xs [letter-spacing:.2em] uppercase font-medium [color:rgba(255,255,255,.82)] mt-0 mr-0 mb-0 ml-0 min-[992px]:[grid-column:1_/_-1]`}
                  data-hero-fade=""
                >
                  Galkanda Estate · Kandy, Sri Lanka
                </p>
                <h1
                  className={String.raw`h-xl hx__title [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 mb-0 ml-0 text-inherit text-5xl lg:text-7xl xl:text-8xl [line-height:.94] [max-width:11.5em]`}
                  data-split="manual"
                >
                  A Slower Way <br />
                  to Experience
                  <br />
                  Sri{" "}
                  <em
                    className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                  >
                    Lanka.
                  </em>
                </h1>
                <div
                  className={String.raw`hx__aside min-[992px]:pb-3`}
                  data-hero-fade=""
                >
                  <p
                    className={String.raw`text-base [line-height:1.55] [max-width:23em] [color:rgba(255,255,255,.88)] mt-0 mr-0 mb-6 ml-0`}
                  >
                    A countryside home shaped by nature, food, farming and warm
                    Sri Lankan hospitality.
                  </p>
                  <div
                    className={String.raw`btn-row flex flex-wrap items-center [gap:14px_28px]`}
                  >
                    <a
                      className={String.raw`btn-g btn-g--light btn-g--down text-inherit inline-flex items-center gap-1 no-underline text-sm font-medium [line-height:16px] [--bb:#fff] [--bf:var(--ink)] pointer-events-auto`}
                      href="#about"
                      data-discover=""
                    >
                      <span
                        className={String.raw`btn-g__label [background:var(--bb)] [color:var(--bf)] [padding-top:14px] [padding-right:22px] [padding-bottom:14px] [padding-left:22px] rounded-full [transition:padding_.5s_var(--ease),background-color_.4s_var(--ease)] whitespace-nowrap [.btn-g:hover_&]:[padding-left:27px] [.btn-g:hover_&]:[padding-right:27px] [.btn-g:focus-visible_&]:[padding-left:27px] [.btn-g:focus-visible_&]:[padding-right:27px]`}
                      >
                        Discover the Estate
                      </span>
                      <span
                        className={String.raw`btn-g__arrow w-11 h-11 [flex:0_0_44px] rounded-full [background:var(--bb)] [color:var(--bf)] grid place-items-center text-base [transition:background-color_.4s_var(--ease)]`}
                        aria-hidden="true"
                      >
                        <span
                          className={String.raw`inline-block [transition:transform_.5s_var(--ease)] [.btn-g:hover_.btn-g\_\_arrow_&]:[transform:rotate(45deg)] [.btn-g:focus-visible_.btn-g\_\_arrow_&]:[transform:rotate(45deg)] [.btn-g--down:hover_.btn-g\_\_arrow_&]:[transform:translateY(3px)]`}
                        >
                          &#8595;
                        </span>
                      </span>
                    </a>
                    <Link
                      className={String.raw`link-u link-u--light [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:origin-left [&::after]:[transition:transform_.5s_var(--ease)] [&:hover::after]:[transform:scaleX(1)] relative inline-flex [gap:6px] items-center text-sm no-underline pt-1 pr-0 pb-1 pl-0 font-medium [&::after]:[transform:scaleX(1)] [&::after]:[opacity:.35] [&:hover::after]:opacity-100 [color:var(--bg)] pointer-events-auto`}
                      to="/gallery"
                    >
                      View Gallery{" "}
                      <i
                        className={String.raw`not-italic inline-block [transition:transform_.45s_var(--ease)] [.link-u:hover_&]:[transform:rotate(45deg)]`}
                        aria-hidden="true"
                      >
                        &#8599;
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={String.raw`hx__about [padding-top:var(--sec)] pr-0 pb-0 pl-0 [.hx.is-pinned_&]:absolute [.hx.is-pinned_&]:top-0 [.hx.is-pinned_&]:right-0 [.hx.is-pinned_&]:bottom-0 [.hx.is-pinned_&]:left-0 [.hx.is-pinned_&]:[z-index:1] [.hx.is-pinned_&]:[padding-top:calc(var(--nav-h)_+_5vh)] [.hx.is-pinned_&]:pr-0 [.hx.is-pinned_&]:[padding-bottom:7vh] [.hx.is-pinned_&]:pl-0`}
            id="about"
          >
            <div
              className={String.raw`container-wide hx__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-7 [@media((min-width:768px)_and_(max-width:991.98px))]:[grid-template-columns:1fr_1fr] [@media((min-width:768px)_and_(max-width:991.98px))]:gap-x-8 min-[992px]:[grid-template-columns:minmax(0,1fr)_38vw_minmax(0,1.2fr)] min-[992px]:[grid-template-rows:auto_1fr] min-[992px]:[column-gap:clamp(24px,2.6vw,48px)] min-[992px]:gap-y-0 min-[992px]:h-full`}
            >
              <div
                className={String.raw`hx__head [@media((min-width:768px)_and_(max-width:991.98px))]:[grid-column:1_/_-1] min-[992px]:[grid-column:1_/_-1]`}
              >
                <span
                  className={String.raw`label hx__a inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  About Galkanda
                </span>
                <h2
                  className={String.raw`h-lg hx__h2 [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 mb-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl [max-width:12em]`}
                >
                  A Home Shaped by
                  <br />
                  Land, Food and{" "}
                  <em
                    className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                  >
                    Life.
                  </em>
                </h2>
              </div>
              <div
                className={String.raw`hx__left hx__a [@media((min-width:768px)_and_(max-width:991.98px))]:[grid-column:1_/_-1] min-[992px]:[grid-column:1] min-[992px]:[grid-row:2] min-[992px]:[align-self:end] min-[992px]:[padding-bottom:2px]`}
              >
                <span
                  className={String.raw`small text-sm [color:var(--muted)] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Near Kandy
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] [margin-top:10px] mr-0 mb-3 ml-0`}
                >
                  Countryside Living
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)] mb-5`}
                >
                  Peaceful enough to slow down.
                  <br />
                  Close enough to explore.
                </p>
                <ul
                  className={String.raw`keywords flex flex-wrap [gap:6px_18px] pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0 list-none text-xs [letter-spacing:.06em] uppercase [color:var(--green)]`}
                >
                  <li
                    className={String.raw`[.keywords_&::before]:[content:"·"] [.keywords_&::before]:mr-2 [.keywords_&::before]:[color:var(--earth)]`}
                  >
                    Organic Farm
                  </li>
                  <li
                    className={String.raw`[.keywords_&::before]:[content:"·"] [.keywords_&::before]:mr-2 [.keywords_&::before]:[color:var(--earth)]`}
                  >
                    Home-Grown Food
                  </li>
                  <li
                    className={String.raw`[.keywords_&::before]:[content:"·"] [.keywords_&::before]:mr-2 [.keywords_&::before]:[color:var(--earth)]`}
                  >
                    Nature
                  </li>
                  <li
                    className={String.raw`[.keywords_&::before]:[content:"·"] [.keywords_&::before]:mr-2 [.keywords_&::before]:[color:var(--earth)]`}
                  >
                    Local Life
                  </li>
                </ul>
              </div>
              <div
                className={String.raw`hx__slot [@media((min-width:768px)_and_(max-width:991.98px))]:[grid-row:2] [@media((min-width:768px)_and_(max-width:991.98px))]:[grid-column:1] min-[992px]:[grid-column:2] min-[992px]:[grid-row:2] min-[992px]:[align-self:end]`}
              >
                <div
                  className={String.raw`frame relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] min-[992px]:[aspect-ratio:auto] min-[992px]:[height:48vh] [.hx.is-pinned_.hx\_\_slot_&]:invisible`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                    src="https://images.unsplash.com/photo-1676794944553-399cade9cd39?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1676794944553-399cade9cd39?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1676794944553-399cade9cd39?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1676794944553-399cade9cd39?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1676794944553-399cade9cd39?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 992px) 38vw, 100vw"
                    alt="Galkanda Estate villa among the trees"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className={String.raw`hx__slotnext absolute top-0 right-0 bottom-0 left-0 opacity-0 overflow-hidden pointer-events-none [html:not(.has-motion)_&]:hidden`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover`}
                      src="https://images.unsplash.com/photo-1783334418852-0b86d67d4c01?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1783334418852-0b86d67d4c01?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1783334418852-0b86d67d4c01?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1783334418852-0b86d67d4c01?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1783334418852-0b86d67d4c01?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="100vw"
                      alt="Timber house with a shaded deck among tropical trees — arriving at Galkanda"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
              <div
                className={String.raw`hx__right grid gap-6 [@media((min-width:768px)_and_(max-width:991.98px))]:[grid-row:2] [@media((min-width:768px)_and_(max-width:991.98px))]:[grid-column:2] [@media((min-width:768px)_and_(max-width:991.98px))]:[align-content:end] min-[992px]:[grid-column:3] min-[992px]:[grid-row:2] min-[992px]:[align-self:end] min-[992px]:[gap:22px]`}
              >
                <div
                  className={String.raw`frame hx__img2 relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/3] min-[992px]:[aspect-ratio:auto] min-[992px]:[height:30vh] min-[992px]:[width:78%]`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                    src={images["main3.jpg"]}
                    sizes="(min-width: 992px) 24vw, 100vw"
                    alt="Green paddy fields of the organic farm at Galkanda"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div
                  className={String.raw`hx__a hx__copy2 min-[992px]:[max-width:26em]`}
                >
                  <p
                    className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)] [margin-bottom:18px]`}
                  >
                    Set within a working organic farm near Kandy, Galkanda
                    Estate brings together comfortable living, traditional food,
                    farming, nature and warm Sri Lankan hospitality.
                  </p>
                  <Link
                    className={String.raw`link-u text-inherit [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:origin-left [&::after]:[transition:transform_.5s_var(--ease)] [&:hover::after]:[transform:scaleX(1)] relative inline-flex [gap:6px] items-center text-sm no-underline pt-1 pr-0 pb-1 pl-0 font-medium [&::after]:[transform:scaleX(1)] [&::after]:[opacity:.35] [&:hover::after]:opacity-100`}
                    to="/estate"
                  >
                    Explore the Estate{" "}
                    <i
                      className={String.raw`not-italic inline-block [transition:transform_.45s_var(--ease)] [.link-u:hover_&]:[transform:rotate(45deg)]`}
                      aria-hidden="true"
                    >
                      &#8599;
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className={String.raw`hx__house hidden [.hx.is-pinned_&]:block [.hx.is-pinned_&]:absolute [.hx.is-pinned_&]:top-0 [.hx.is-pinned_&]:right-0 [.hx.is-pinned_&]:bottom-0 [.hx.is-pinned_&]:left-0 [.hx.is-pinned_&]:[z-index:1] [.hx.is-pinned_&]:pointer-events-none [.hx.is-pinned_&]:[padding-top:calc(var(--nav-h)_+_5vh)] [.hx.is-pinned_&]:pr-0 [.hx.is-pinned_&]:[padding-bottom:4vh] [.hx.is-pinned_&]:pl-0`}
            aria-hidden="true"
          >
            <div
              className={String.raw`container-wide hx__hgrid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] h-full grid [grid-template-columns:62vw_minmax(0,1fr)] [grid-template-rows:auto_1fr] [column-gap:clamp(24px,3vw,56px)] [row-gap:4vh]`}
            >
              <div
                className={String.raw`hx__hhead [grid-column:1] [grid-row:1]`}
              >
                <span
                  className={String.raw`label hx__hb inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)] mb-4`}
                >
                  Around the House
                </span>
                <p
                  className={String.raw`h-lg hx__hh [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 mb-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl [max-width:12em]`}
                >
                  Spaces Made for
                  <br />
                  Unhurried <em>Days.</em>
                </p>
              </div>
              <p
                className={String.raw`body hx__hb hx__hintro text-base [line-height:1.7] [color:var(--muted)] [.is-dark_&]:[color:rgba(244,241,234,.66)] [grid-column:2] [grid-row:1] [align-self:end] [max-width:24em] mt-0 mr-0 mb-0 ml-0`}
              >
                From the gate to the garden — the rooms, corners and terraces
                where days at Galkanda unfold.
              </p>
              <div
                className={String.raw`hx__hslot [grid-column:1] [grid-row:2]`}
              ></div>
              <p
                className={String.raw`cap hx__hb hx__hcap flex justify-between gap-4 text-xs [letter-spacing:.02em] [color:var(--muted)] [grid-column:2] [grid-row:2] [align-self:end] mt-0 mr-0 mb-0 ml-0 max-w-55`}
              >
                <b className={String.raw`font-medium [color:var(--ink)]`}>
                  Arrive
                </b>
                <span>00</span>
              </p>
            </div>
          </div>
        </section>

        <section
          className={String.raw`sec house pr-0 pl-0 relative [padding-top:clamp(40px,6vh,80px)] [padding-bottom:calc(var(--sec)_*_.7)]`}
          id="house"
          aria-labelledby="house-h"
        >
          <div
            className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
          >
            <div
              className={String.raw`sh sh--row house__sh [margin-bottom:clamp(48px,7vw,96px)] grid gap-6 min-[992px]:[grid-template-columns:minmax(0,7fr)_minmax(0,4fr)] min-[992px]:items-end min-[992px]:[column-gap:clamp(24px,6vw,120px)]`}
            >
              <div>
                <span
                  className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Around the House
                </span>
                <h2
                  className={String.raw`h-lg [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 mb-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl`}
                  id="house-h"
                  data-split=""
                >
                  Spaces Made for
                  <br />
                  Unhurried{" "}
                  <em
                    className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                  >
                    Days.
                  </em>
                </h2>
              </div>
              <p
                className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                data-fade=""
              >
                From the gate to the garden — the rooms, corners and terraces
                where days at Galkanda unfold.
              </p>
            </div>
            <div
              className={String.raw`house__grid grid [grid-template-columns:repeat(2,minmax(0,1fr))] [grid-auto-rows:clamp(120px,36vw,240px)] [gap:10px] min-[768px]:[grid-template-columns:repeat(12,minmax(0,1fr))] min-[768px]:[grid-auto-rows:clamp(150px,14.5vw,230px)] min-[768px]:[gap:clamp(10px,1.2vw,18px)]`}
            >
              <figure
                className={String.raw`hp hp--a mt-0 mr-0 mb-0 ml-0 relative min-w-0 [grid-column:1_/_-1] [grid-row:span_2] min-[768px]:[grid-column:1_/_span_5] min-[768px]:[grid-row:1_/_span_2]`}
              >
                <div
                  className={String.raw`frame hp__frame overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] absolute top-0 right-0 bottom-0 left-0 [border-radius:var(--r-sm)] [&::after]:[content:""] [&::after]:absolute [&::after]:[top:auto] [&::after]:right-0 [&::after]:bottom-0 [&::after]:left-0 [&::after]:[height:40%] [&::after]:[background:linear-gradient(0deg,rgba(14,16,11,.45),transparent)] [&::after]:pointer-events-none min-[768px]:[border-radius:var(--r)]`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 absolute top-0 right-0 bottom-0 left-0`}
                    src={images["sleep.jpg"]}                    
                    sizes="(min-width: 992px) 42vw, 60vw"
                    alt="Bedroom with a king bed and large windows looking onto the trees"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption
                    className={String.raw`hp__cap absolute [left:14px] [right:14px] bottom-3 [z-index:2] flex justify-between text-xs [letter-spacing:.14em] uppercase [color:#fff] [text-shadow:0_1px_14px_rgba(0,0,0,.45)] pointer-events-none min-[768px]:[left:18px] min-[768px]:[right:18px] min-[768px]:bottom-4`}
                  >
                    <b className={String.raw`font-medium`}>Sleep</b>
                    <span>01</span>
                  </figcaption>
                </div>
              </figure>
              <figure
                className={String.raw`hp hp--b mt-0 mr-0 mb-0 ml-0 relative min-w-0 [grid-column:1] min-[768px]:[grid-column:6_/_span_4] min-[768px]:[grid-row:1]`}
              >
                <div
                  className={String.raw`frame hp__frame overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] absolute top-0 right-0 bottom-0 left-0 [border-radius:var(--r-sm)] [&::after]:[content:""] [&::after]:absolute [&::after]:[top:auto] [&::after]:right-0 [&::after]:bottom-0 [&::after]:left-0 [&::after]:[height:40%] [&::after]:[background:linear-gradient(0deg,rgba(14,16,11,.45),transparent)] [&::after]:pointer-events-none min-[768px]:[border-radius:var(--r)]`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 absolute top-0 right-0 bottom-0 left-0`}
                    src={images["gather.jpg"]}
                    sizes="(min-width: 992px) 42vw, 60vw"
                    alt="Living room with timber panelling and garden views"
                    loading="lazy"
                    decoding="eager"
                  />
                  <figcaption
                    className={String.raw`hp__cap absolute [left:14px] [right:14px] bottom-3 [z-index:2] flex justify-between text-xs [letter-spacing:.14em] uppercase [color:#fff] [text-shadow:0_1px_14px_rgba(0,0,0,.45)] pointer-events-none min-[768px]:[left:18px] min-[768px]:[right:18px] min-[768px]:bottom-4`}
                  >
                    <b className={String.raw`font-medium`}>Gather</b>
                    <span>02</span>
                  </figcaption>
                </div>
              </figure>
              <figure
                className={String.raw`hp hp--c mt-0 mr-0 mb-0 ml-0 relative min-w-0 [grid-column:2] [grid-row:span_2] min-[768px]:[grid-column:10_/_span_3] min-[768px]:[grid-row:1_/_span_3]`}
              >
                <div
                  className={String.raw`frame hp__frame overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] absolute top-0 right-0 bottom-0 left-0 [border-radius:var(--r-sm)] [&::after]:[content:""] [&::after]:absolute [&::after]:[top:auto] [&::after]:right-0 [&::after]:bottom-0 [&::after]:left-0 [&::after]:[height:40%] [&::after]:[background:linear-gradient(0deg,rgba(14,16,11,.45),transparent)] [&::after]:pointer-events-none min-[768px]:[border-radius:var(--r)]`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 absolute top-0 right-0 bottom-0 left-0`}
                    src={images["outside.jpg"]}
                    sizes="(min-width: 992px) 42vw, 60vw"
                    alt="Seating tucked into the garden beside the house"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption
                    className={String.raw`hp__cap absolute [left:14px] [right:14px] bottom-3 [z-index:2] flex justify-between text-xs [letter-spacing:.14em] uppercase [color:#fff] [text-shadow:0_1px_14px_rgba(0,0,0,.45)] pointer-events-none min-[768px]:[left:18px] min-[768px]:[right:18px] min-[768px]:bottom-4`}
                  >
                    <b className={String.raw`font-medium`}>Step Outside</b>
                    <span>03</span>
                  </figcaption>
                </div>
              </figure>
              <figure
                className={String.raw`hp hp--d mt-0 mr-0 mb-0 ml-0 relative min-w-0 [grid-column:1] min-[768px]:[grid-column:6_/_span_4] min-[768px]:[grid-row:2_/_span_2]`}
              >
                <div
                  className={String.raw`frame hp__frame overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] absolute top-0 right-0 bottom-0 left-0 [border-radius:var(--r-sm)] [&::after]:[content:""] [&::after]:absolute [&::after]:[top:auto] [&::after]:right-0 [&::after]:bottom-0 [&::after]:left-0 [&::after]:[height:40%] [&::after]:[background:linear-gradient(0deg,rgba(14,16,11,.45),transparent)] [&::after]:pointer-events-none min-[768px]:[border-radius:var(--r)]`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 absolute top-0 right-0 bottom-0 left-0`}
                    src={images["cookingarea.jpg"]}
                    sizes="(min-width: 992px) 42vw, 60vw"
                    alt="The kitchen with wooden cabinets"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption
                    className={String.raw`hp__cap absolute [left:14px] [right:14px] bottom-3 [z-index:2] flex justify-between text-xs [letter-spacing:.14em] uppercase [color:#fff] [text-shadow:0_1px_14px_rgba(0,0,0,.45)] pointer-events-none min-[768px]:[left:18px] min-[768px]:[right:18px] min-[768px]:bottom-4`}
                  >
                    <b className={String.raw`font-medium`}>Cook</b>
                    <span>04</span>
                  </figcaption>
                </div>
              </figure>
              <figure
                className={String.raw`hp hp--e mt-0 mr-0 mb-0 ml-0 relative min-w-0 [grid-column:1_/_-1] min-[768px]:[grid-column:1_/_span_5] min-[768px]:[grid-row:3]`}
              >
                <div
                  className={String.raw`frame hp__frame overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] absolute top-0 right-0 bottom-0 left-0 [border-radius:var(--r-sm)] [&::after]:[content:""] [&::after]:absolute [&::after]:[top:auto] [&::after]:right-0 [&::after]:bottom-0 [&::after]:left-0 [&::after]:[height:40%] [&::after]:[background:linear-gradient(0deg,rgba(14,16,11,.45),transparent)] [&::after]:pointer-events-none min-[768px]:[border-radius:var(--r)]`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 absolute top-0 right-0 bottom-0 left-0`}
                    src={images["share.jpg"]}
                    sizes="(min-width: 992px) 42vw, 60vw"
                    alt="Dining table on the shaded terrace"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption
                    className={String.raw`hp__cap absolute [left:14px] [right:14px] bottom-3 [z-index:2] flex justify-between text-xs [letter-spacing:.14em] uppercase [color:#fff] [text-shadow:0_1px_14px_rgba(0,0,0,.45)] pointer-events-none min-[768px]:[left:18px] min-[768px]:[right:18px] min-[768px]:bottom-4`}
                  >
                    <b className={String.raw`font-medium`}>Share</b>
                    <span>05</span>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section
          className={String.raw`facts pt-0 pr-0 [padding-bottom:var(--sec)] pl-0`}
          aria-label="Property facts"
        >
          <div
            className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
          >
            <ul
              className={String.raw`facts__row list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 grid [grid-template-columns:repeat(2,minmax(0,1fr))] [border-top:1px_solid_var(--line)] min-[768px]:[grid-template-columns:repeat(4,minmax(0,1fr))]`}
            >
              <li
                className={String.raw`[padding-top:22px] pr-4 [padding-bottom:22px] pl-0 [border-bottom:1px_solid_var(--line)] flex flex-col [gap:10px] min-[768px]:[border-bottom:0] min-[768px]:pt-8`}
                data-fade=""
              >
                <span
                  className={String.raw`ic-badge w-11 h-11 rounded-full [border:1px_solid_var(--line)] [display:inline-grid] place-items-center [color:var(--green)] flex-none [.is-dark_&]:[border-color:var(--line-light)] [.is-dark_&]:[color:var(--earth)] [margin-bottom:6px]`}
                >
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-5 h-5`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-door"></use>
                  </svg>
                </span>
                <span
                  className={String.raw`facts__num text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl [line-height:.9] [letter-spacing:-.05em] [font-weight:300]`}
                >
                  03
                </span>
                <span
                  className={String.raw`facts__lbl text-sm [color:var(--muted)]`}
                >
                  Bedrooms
                </span>
              </li>
              <li
                className={String.raw`[padding-top:22px] pr-4 [padding-bottom:22px] pl-0 [border-bottom:1px_solid_var(--line)] flex flex-col [gap:10px] min-[768px]:[border-bottom:0] min-[768px]:pt-8 min-[768px]:pl-6 min-[768px]:[border-left:1px_solid_var(--line)]`}
                data-fade=""
              >
                <span
                  className={String.raw`ic-badge w-11 h-11 rounded-full [border:1px_solid_var(--line)] [display:inline-grid] place-items-center [color:var(--green)] flex-none [.is-dark_&]:[border-color:var(--line-light)] [.is-dark_&]:[color:var(--earth)] [margin-bottom:6px]`}
                >
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-5 h-5`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-bed"></use>
                  </svg>
                </span>
                <span
                  className={String.raw`facts__num text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl [line-height:.9] [letter-spacing:-.05em] [font-weight:300]`}
                >
                  03
                </span>
                <span
                  className={String.raw`facts__lbl text-sm [color:var(--muted)]`}
                >
                  King Beds
                </span>
              </li>
              <li
                className={String.raw`[padding-top:22px] pr-4 [padding-bottom:22px] pl-0 [border-bottom:1px_solid_var(--line)] flex flex-col [gap:10px] min-[768px]:[border-bottom:0] min-[768px]:pt-8 min-[768px]:pl-6 min-[768px]:[border-left:1px_solid_var(--line)]`}
                data-fade=""
              >
                <span
                  className={String.raw`ic-badge w-11 h-11 rounded-full [border:1px_solid_var(--line)] [display:inline-grid] place-items-center [color:var(--green)] flex-none [.is-dark_&]:[border-color:var(--line-light)] [.is-dark_&]:[color:var(--earth)] [margin-bottom:6px]`}
                >
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-5 h-5`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-shower"></use>
                  </svg>
                </span>
                <span
                  className={String.raw`facts__num text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl [line-height:.9] [letter-spacing:-.05em] [font-weight:300]`}
                >
                  02
                </span>
                <span
                  className={String.raw`facts__lbl text-sm [color:var(--muted)]`}
                >
                  Bathrooms
                </span>
              </li>
              <li
                className={String.raw`[padding-top:22px] pr-4 [padding-bottom:22px] pl-0 [border-bottom:1px_solid_var(--line)] flex flex-col [gap:10px] min-[768px]:[border-bottom:0] min-[768px]:pt-8 min-[768px]:pl-6 min-[768px]:[border-left:1px_solid_var(--line)]`}
                data-fade=""
              >
                <span
                  className={String.raw`ic-badge w-11 h-11 rounded-full [border:1px_solid_var(--line)] [display:inline-grid] place-items-center [color:var(--green)] flex-none [.is-dark_&]:[border-color:var(--line-light)] [.is-dark_&]:[color:var(--earth)] [margin-bottom:6px]`}
                >
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-5 h-5`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-guests"></use>
                  </svg>
                </span>
                <span
                  className={String.raw`facts__num text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl [line-height:.9] [letter-spacing:-.05em] [font-weight:300]`}
                >
                  06
                </span>
                <span
                  className={String.raw`facts__lbl text-sm [color:var(--muted)]`}
                >
                  Guests
                </span>
              </li>
            </ul>
            <div
              className={String.raw`facts__amen grid [gap:10px] mt-9 min-[768px]:[grid-template-columns:180px_1fr] min-[768px]:items-center min-[768px]:mt-11`}
              data-fade=""
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)] mt-0 mr-0 mb-0 ml-0`}
              >
                In the House
              </span>
              <ul
                className={String.raw`ic-list list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:10px_26px] text-sm`}
              >
                <li className={String.raw`inline-flex items-center [gap:9px]`}>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-wifi"></use>
                  </svg>
                  Wi-Fi
                </li>
                <li className={String.raw`inline-flex items-center [gap:9px]`}>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-pot"></use>
                  </svg>
                  Kitchen
                </li>
                <li className={String.raw`inline-flex items-center [gap:9px]`}>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-dining"></use>
                  </svg>
                  Dining Area
                </li>
                <li className={String.raw`inline-flex items-center [gap:9px]`}>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-laptop"></use>
                  </svg>
                  Workspace
                </li>
                <li className={String.raw`inline-flex items-center [gap:9px]`}>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-parking"></use>
                  </svg>
                  Free Parking
                </li>
                <li className={String.raw`inline-flex items-center [gap:9px]`}>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-snow"></use>
                  </svg>
                  Air Conditioning
                </li>
                <li className={String.raw`inline-flex items-center [gap:9px]`}>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-leaf"></use>
                  </svg>
                  Garden
                </li>
                <li className={String.raw`inline-flex items-center [gap:9px]`}>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-terrace"></use>
                  </svg>
                  Terraces
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={String.raw`mf mb-0`}
          id="farm-life"
          aria-label="Morning and life on the farm"
        >
          <div
            className={String.raw`mf__stage relative [height:100svh] min-h-140 overflow-hidden [color:#fff] [.mf.is-pinned_&]:h-screen`}
            data-header="light"
          >
            <div
              className={String.raw`mf__cream absolute top-0 right-0 bottom-0 left-0 [background:var(--bg)] opacity-0`}
              aria-hidden="true"
            ></div>
            <div
              className={String.raw`mf__panel hidden [.mf.is-pinned_&]:flex [.mf.is-pinned_&]:flex-col [.mf.is-pinned_&]:justify-center [.mf.is-pinned_&]:absolute [.mf.is-pinned_&]:[z-index:1] [.mf.is-pinned_&]:[top:var(--nav-h)] [.mf.is-pinned_&]:[bottom:5vh] [.mf.is-pinned_&]:left-0 [.mf.is-pinned_&]:[width:36vw] [.mf.is-pinned_&]:[padding-top:2vh] [.mf.is-pinned_&]:[padding-right:var(--gutter)] [.mf.is-pinned_&]:[padding-bottom:2vh] [.mf.is-pinned_&]:[padding-left:var(--gutter)] [.mf.is-pinned_&]:[color:var(--ink)] [.mf.is-pinned_&]:overflow-hidden`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)] [margin-bottom:2vh]`}
              >
                Life at Galkanda
              </span>
              <h2
                className={String.raw`h-md [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 ml-0 text-inherit [line-height:1.02] [margin-bottom:3vh] text-3xl xl:text-4xl 2xl:text-5xl`}
              >
                Become Part of
                <br />
                the Rhythm of the{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Estate.
                </em>
              </h2>
              <ol
                className={String.raw`mf__list list-none mt-0 mr-0 [margin-bottom:3vh] ml-0 pt-0 pr-0 pb-0 pl-0 flex-none`}
              >
                <li
                  className={String.raw`mf__item is-active relative [border-top:1px_solid_var(--line)] [opacity:.28] [transition:opacity_.6s_var(--ease)] [&.is-active]:opacity-100`}
                >
                  <button
                    className={String.raw`mf__btn cursor-pointer flex [gap:18px] [align-items:baseline] w-full [padding-top:min(1.1vh,12px)] pr-0 [padding-bottom:min(1.1vh,12px)] pl-0 text-base 2xl:text-xl [letter-spacing:-.02em] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px]`}
                    type="button"
                    data-i="0"
                  >
                    <span
                      className={String.raw`mf__n text-xs [letter-spacing:.06em] [color:var(--earth)] min-w-5`}
                    >
                      01
                    </span>
                    <span className={String.raw`mf__t`}>Farm Tour</span>
                  </button>
                  <div
                    className={String.raw`mf__d grid [grid-template-rows:0fr] [transition:grid-template-rows_.7s_var(--ease)] [.mf\_\_item.is-active_&]:[grid-template-rows:1fr]`}
                  >
                    <p
                      className={String.raw`overflow-hidden mt-0 mr-0 mb-0 ml-0 [padding-left:38px] text-sm [color:var(--muted)] [max-width:28em] [.mf\_\_item.is-active_.mf\_\_d_&]:[padding-bottom:1.4vh]`}
                    >
                      Walk the estate with the people who work it — fields,
                      plots and animals.
                    </p>
                  </div>
                  <span
                    className={String.raw`mf__bar absolute left-0 right-0 [bottom:-1px] [height:1px] overflow-hidden`}
                    aria-hidden="true"
                  >
                    <i
                      className={String.raw`block h-full [background:var(--ink)] [transform:scaleX(0)] origin-left`}
                    ></i>
                  </span>
                </li>
                <li
                  className={String.raw`mf__item relative [border-top:1px_solid_var(--line)] [opacity:.28] [transition:opacity_.6s_var(--ease)] [&.is-active]:opacity-100`}
                >
                  <button
                    className={String.raw`mf__btn cursor-pointer flex [gap:18px] [align-items:baseline] w-full [padding-top:min(1.1vh,12px)] pr-0 [padding-bottom:min(1.1vh,12px)] pl-0 text-base 2xl:text-xl [letter-spacing:-.02em] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px]`}
                    type="button"
                    data-i="1"
                  >
                    <span
                      className={String.raw`mf__n text-xs [letter-spacing:.06em] [color:var(--earth)] min-w-5`}
                    >
                      02
                    </span>
                    <span className={String.raw`mf__t`}>
                      Morning Cow Milking
                    </span>
                  </button>
                  <div
                    className={String.raw`mf__d grid [grid-template-rows:0fr] [transition:grid-template-rows_.7s_var(--ease)] [.mf\_\_item.is-active_&]:[grid-template-rows:1fr]`}
                  >
                    <p
                      className={String.raw`overflow-hidden mt-0 mr-0 mb-0 ml-0 [padding-left:38px] text-sm [color:var(--muted)] [max-width:28em] [.mf\_\_item.is-active_.mf\_\_d_&]:[padding-bottom:1.4vh]`}
                    >
                      Join the first task of the day, gently and at the cows'
                      pace.
                    </p>
                  </div>
                  <span
                    className={String.raw`mf__bar absolute left-0 right-0 [bottom:-1px] [height:1px] overflow-hidden`}
                    aria-hidden="true"
                  >
                    <i
                      className={String.raw`block h-full [background:var(--ink)] [transform:scaleX(0)] origin-left`}
                    ></i>
                  </span>
                </li>
                <li
                  className={String.raw`mf__item relative [border-top:1px_solid_var(--line)] [opacity:.28] [transition:opacity_.6s_var(--ease)] [&.is-active]:opacity-100`}
                >
                  <button
                    className={String.raw`mf__btn cursor-pointer flex [gap:18px] [align-items:baseline] w-full [padding-top:min(1.1vh,12px)] pr-0 [padding-bottom:min(1.1vh,12px)] pl-0 text-base 2xl:text-xl [letter-spacing:-.02em] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px]`}
                    type="button"
                    data-i="2"
                  >
                    <span
                      className={String.raw`mf__n text-xs [letter-spacing:.06em] [color:var(--earth)] min-w-5`}
                    >
                      03
                    </span>
                    <span className={String.raw`mf__t`}>Rice Field Walks</span>
                  </button>
                  <div
                    className={String.raw`mf__d grid [grid-template-rows:0fr] [transition:grid-template-rows_.7s_var(--ease)] [.mf\_\_item.is-active_&]:[grid-template-rows:1fr]`}
                  >
                    <p
                      className={String.raw`overflow-hidden mt-0 mr-0 mb-0 ml-0 [padding-left:38px] text-sm [color:var(--muted)] [max-width:28em] [.mf\_\_item.is-active_.mf\_\_d_&]:[padding-bottom:1.4vh]`}
                    >
                      Narrow bunds, open sky and the sound of water between the
                      paddy.
                    </p>
                  </div>
                  <span
                    className={String.raw`mf__bar absolute left-0 right-0 [bottom:-1px] [height:1px] overflow-hidden`}
                    aria-hidden="true"
                  >
                    <i
                      className={String.raw`block h-full [background:var(--ink)] [transform:scaleX(0)] origin-left`}
                    ></i>
                  </span>
                </li>
                <li
                  className={String.raw`mf__item relative [border-top:1px_solid_var(--line)] [opacity:.28] [transition:opacity_.6s_var(--ease)] [&.is-active]:opacity-100`}
                >
                  <button
                    className={String.raw`mf__btn cursor-pointer flex [gap:18px] [align-items:baseline] w-full [padding-top:min(1.1vh,12px)] pr-0 [padding-bottom:min(1.1vh,12px)] pl-0 text-base 2xl:text-xl [letter-spacing:-.02em] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px]`}
                    type="button"
                    data-i="3"
                  >
                    <span
                      className={String.raw`mf__n text-xs [letter-spacing:.06em] [color:var(--earth)] min-w-5`}
                    >
                      04
                    </span>
                    <span className={String.raw`mf__t`}>
                      Seasonal Farm Work
                    </span>
                  </button>
                  <div
                    className={String.raw`mf__d grid [grid-template-rows:0fr] [transition:grid-template-rows_.7s_var(--ease)] [.mf\_\_item.is-active_&]:[grid-template-rows:1fr]`}
                  >
                    <p
                      className={String.raw`overflow-hidden mt-0 mr-0 mb-0 ml-0 [padding-left:38px] text-sm [color:var(--muted)] [max-width:28em] [.mf\_\_item.is-active_.mf\_\_d_&]:[padding-bottom:1.4vh]`}
                    >
                      Plant, weed or harvest — whatever the season is asking
                      for.
                    </p>
                  </div>
                  <span
                    className={String.raw`mf__bar absolute left-0 right-0 [bottom:-1px] [height:1px] overflow-hidden`}
                    aria-hidden="true"
                  >
                    <i
                      className={String.raw`block h-full [background:var(--ink)] [transform:scaleX(0)] origin-left`}
                    ></i>
                  </span>
                </li>
                <li
                  className={String.raw`mf__item relative [border-top:1px_solid_var(--line)] [opacity:.28] [transition:opacity_.6s_var(--ease)] [&.is-active]:opacity-100`}
                >
                  <button
                    className={String.raw`mf__btn cursor-pointer flex [gap:18px] [align-items:baseline] w-full [padding-top:min(1.1vh,12px)] pr-0 [padding-bottom:min(1.1vh,12px)] pl-0 text-base 2xl:text-xl [letter-spacing:-.02em] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px]`}
                    type="button"
                    data-i="4"
                  >
                    <span
                      className={String.raw`mf__n text-xs [letter-spacing:.06em] [color:var(--earth)] min-w-5`}
                    >
                      05
                    </span>
                    <span className={String.raw`mf__t`}>
                      Butter &amp; Curd Making
                    </span>
                  </button>
                  <div
                    className={String.raw`mf__d grid [grid-template-rows:0fr] [transition:grid-template-rows_.7s_var(--ease)] [.mf\_\_item.is-active_&]:[grid-template-rows:1fr]`}
                  >
                    <p
                      className={String.raw`overflow-hidden mt-0 mr-0 mb-0 ml-0 [padding-left:38px] text-sm [color:var(--muted)] [max-width:28em] [.mf\_\_item.is-active_.mf\_\_d_&]:[padding-bottom:1.4vh]`}
                    >
                      Fresh milk from the estate becomes butter and traditional
                      curd.
                    </p>
                  </div>
                  <span
                    className={String.raw`mf__bar absolute left-0 right-0 [bottom:-1px] [height:1px] overflow-hidden`}
                    aria-hidden="true"
                  >
                    <i
                      className={String.raw`block h-full [background:var(--ink)] [transform:scaleX(0)] origin-left`}
                    ></i>
                  </span>
                </li>
                <li
                  className={String.raw`mf__item relative [border-top:1px_solid_var(--line)] [opacity:.28] [transition:opacity_.6s_var(--ease)] [&.is-active]:opacity-100`}
                >
                  <button
                    className={String.raw`mf__btn cursor-pointer flex [gap:18px] [align-items:baseline] w-full [padding-top:min(1.1vh,12px)] pr-0 [padding-bottom:min(1.1vh,12px)] pl-0 text-base 2xl:text-xl [letter-spacing:-.02em] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px]`}
                    type="button"
                    data-i="5"
                  >
                    <span
                      className={String.raw`mf__n text-xs [letter-spacing:.06em] [color:var(--earth)] min-w-5`}
                    >
                      06
                    </span>
                    <span className={String.raw`mf__t`}>Birdwatching</span>
                  </button>
                  <div
                    className={String.raw`mf__d grid [grid-template-rows:0fr] [transition:grid-template-rows_.7s_var(--ease)] [.mf\_\_item.is-active_&]:[grid-template-rows:1fr]`}
                  >
                    <p
                      className={String.raw`overflow-hidden mt-0 mr-0 mb-0 ml-0 [padding-left:38px] text-sm [color:var(--muted)] [max-width:28em] [.mf\_\_item.is-active_.mf\_\_d_&]:[padding-bottom:1.4vh]`}
                    >
                      Birdlife around the fields and trees at dawn and dusk.
                    </p>
                  </div>
                  <span
                    className={String.raw`mf__bar absolute left-0 right-0 [bottom:-1px] [height:1px] overflow-hidden`}
                    aria-hidden="true"
                  >
                    <i
                      className={String.raw`block h-full [background:var(--ink)] [transform:scaleX(0)] origin-left`}
                    ></i>
                  </span>
                </li>
                <li
                  className={String.raw`mf__item relative [border-top:1px_solid_var(--line)] [opacity:.28] [transition:opacity_.6s_var(--ease)] [border-bottom:1px_solid_var(--line)] [&.is-active]:opacity-100`}
                >
                  <button
                    className={String.raw`mf__btn cursor-pointer flex [gap:18px] [align-items:baseline] w-full [padding-top:min(1.1vh,12px)] pr-0 [padding-bottom:min(1.1vh,12px)] pl-0 text-base 2xl:text-xl [letter-spacing:-.02em] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px]`}
                    type="button"
                    data-i="6"
                  >
                    <span
                      className={String.raw`mf__n text-xs [letter-spacing:.06em] [color:var(--earth)] min-w-5`}
                    >
                      07
                    </span>
                    <span className={String.raw`mf__t`}>Garden Tea</span>
                  </button>
                  <div
                    className={String.raw`mf__d grid [grid-template-rows:0fr] [transition:grid-template-rows_.7s_var(--ease)] [.mf\_\_item.is-active_&]:[grid-template-rows:1fr]`}
                  >
                    <p
                      className={String.raw`overflow-hidden mt-0 mr-0 mb-0 ml-0 [padding-left:38px] text-sm [color:var(--muted)] [max-width:28em] [.mf\_\_item.is-active_.mf\_\_d_&]:[padding-bottom:1.4vh]`}
                    >
                      Ceylon tea in the garden as the light softens.
                    </p>
                  </div>
                  <span
                    className={String.raw`mf__bar absolute left-0 right-0 [bottom:-1px] [height:1px] overflow-hidden`}
                    aria-hidden="true"
                  >
                    <i
                      className={String.raw`block h-full [background:var(--ink)] [transform:scaleX(0)] origin-left`}
                    ></i>
                  </span>
                </li>
              </ol>
              <Link
                className={String.raw`link-u text-inherit [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:origin-left [&::after]:[transition:transform_.5s_var(--ease)] [&:hover::after]:[transform:scaleX(1)] relative inline-flex [gap:6px] items-center text-sm no-underline pt-1 pr-0 pb-1 pl-0 font-medium [&::after]:[transform:scaleX(1)] [&::after]:[opacity:.35] [&:hover::after]:opacity-100 [align-self:flex-start] flex-none`}
                to="/experiences"
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
              className={String.raw`mf__slot hidden [.mf.is-pinned_&]:block [.mf.is-pinned_&]:absolute [.mf.is-pinned_&]:[top:calc(var(--nav-h)_+_3vh)] [.mf.is-pinned_&]:[bottom:5vh] [.mf.is-pinned_&]:[right:var(--gutter)] [.mf.is-pinned_&]:[left:38vw]`}
              aria-hidden="true"
            ></div>
            <div
              className={String.raw`mf__frame absolute top-0 right-0 bottom-0 left-0 [z-index:2] overflow-hidden [background:var(--dark)]`}
            >
              <figure
                className={String.raw`mf__img absolute top-0 right-0 bottom-0 left-0 mt-0 mr-0 mb-0 ml-0 opacity-100`}
                data-i="0"
              >
                <div
                  className={String.raw`mf__z absolute top-0 right-0 bottom-0 left-0`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover`}
                    src={images["main3.jpg"]}
                    sizes="100vw"
                    alt="Morning fields of the working farm at Galkanda"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </figure>
              <figure
                className={String.raw`mf__img absolute top-0 right-0 bottom-0 left-0 mt-0 mr-0 mb-0 ml-0 opacity-0`}
                data-i="1"
              >
                <div
                  className={String.raw`mf__z absolute top-0 right-0 bottom-0 left-0`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover`}
                    src={images["cow.jpg"]}
                    sizes="100vw"
                    alt="Cow being milked by hand in the early morning"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
              <figure
                className={String.raw`mf__img absolute top-0 right-0 bottom-0 left-0 mt-0 mr-0 mb-0 ml-0 opacity-0`}
                data-i="2"
              >
                <div
                  className={String.raw`mf__z absolute top-0 right-0 bottom-0 left-0`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover`}
                    src={images["walk.jpg"]}
                    sizes="100vw"
                    alt="Walking along a path through green paddy fields"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
              <figure
                className={String.raw`mf__img absolute top-0 right-0 bottom-0 left-0 mt-0 mr-0 mb-0 ml-0 opacity-0`}
                data-i="3"
              >
                <div
                  className={String.raw`mf__z absolute top-0 right-0 bottom-0 left-0`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover`}
                    src={images["farmwork.jpg"]}
                    sizes="100vw"
                    alt="Hands planting seedlings into garden soil"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
              <figure
                className={String.raw`mf__img absolute top-0 right-0 bottom-0 left-0 mt-0 mr-0 mb-0 ml-0 opacity-0`}
                data-i="4"
              >
                <div
                  className={String.raw`mf__z absolute top-0 right-0 bottom-0 left-0`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover`}
                    src={images["curdnbutter.jpg"]}
                    sizes="100vw"
                    alt="Traditional red clay pots used for setting curd"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
              <figure
                className={String.raw`mf__img absolute top-0 right-0 bottom-0 left-0 mt-0 mr-0 mb-0 ml-0 opacity-0`}
                data-i="5"
              >
                <div
                  className={String.raw`mf__z absolute top-0 right-0 bottom-0 left-0`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover`}
                    src="https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="100vw"
                    alt="Stork-billed kingfisher perched near the estate"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
              <figure
                className={String.raw`mf__img absolute top-0 right-0 bottom-0 left-0 mt-0 mr-0 mb-0 ml-0 opacity-0`}
                data-i="6"
              >
                <div
                  className={String.raw`mf__z absolute top-0 right-0 bottom-0 left-0`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover`}
                    src={images["tea.jpg"]}
                    sizes="100vw"
                    alt="Tea being poured at a garden table"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
              <div
                className={String.raw`mf__shade absolute top-0 right-0 bottom-0 left-0 [background:rgba(12,14,9,.34)]`}
                aria-hidden="true"
              ></div>
            </div>
            <div
              className={String.raw`mf__morning absolute top-0 right-0 bottom-0 left-0 [z-index:3] grid place-items-center text-center pointer-events-none pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
            >
              <h2
                className={String.raw`h-lg mf__mh [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 mb-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl`}
              >
                <span className={String.raw`mf__l1 block`}>Morning Begins</span>
                <span className={String.raw`mf__l2 block`}>
                  Differently{" "}
                  <em
                    className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                  >
                    Here.
                  </em>
                </span>
              </h2>
            </div>
          </div>

          <div
            className={String.raw`mf__mobile sec [padding-top:var(--sec)] pr-0 pl-0 relative [padding-bottom:calc(var(--sec)_*_.8)] [.mf.is-pinned_&]:hidden`}
          >
            <div
              className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] mb-7`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
              >
                Life at Galkanda
              </span>
              <h2
                className={String.raw`h-md [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 mb-0 ml-0 text-inherit text-3xl lg:text-4xl xl:text-5xl [line-height:1.02]`}
                data-split=""
              >
                Become Part of
                <br />
                the Rhythm of the{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Estate.
                </em>
              </h2>
            </div>
            <div
              className={String.raw`snap mb-7 flex [gap:14px] overflow-x-auto [scroll-snap-type:x_mandatory] pt-0 [padding-right:var(--gutter)] pb-7 [padding-left:var(--gutter)] [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden`}
              tabIndex="0"
              aria-label="Farm experiences, swipe to see more"
            >
              <article
                className={String.raw`snap__card [flex:0_0_min(64vw,340px)] [scroll-snap-align:start] [scroll-margin-left:var(--gutter)]`}
              >
                <div
                  className={String.raw`frame ar-4x5 relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 ml-0 [isolation:isolate] [aspect-ratio:4/5] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mb-4`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                    src={images["main3.jpg"]}
                    alt="Morning fields of the working farm at Galkanda"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span
                  className={String.raw`chapter__num text-xs [color:var(--earth)] [letter-spacing:.06em] block [margin-bottom:6px]`}
                >
                  01
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2`}
                >
                  Farm Tour
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Walk the estate with the people who work it — fields, plots
                  and animals.
                </p>
              </article>
              <article
                className={String.raw`snap__card [flex:0_0_min(64vw,340px)] [scroll-snap-align:start] [scroll-margin-left:var(--gutter)]`}
              >
                <div
                  className={String.raw`frame ar-4x5 relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 ml-0 [isolation:isolate] [aspect-ratio:4/5] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mb-4`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                    src={images["cow.jpg"]}
                    sizes="80vw"
                    alt="Cow being milked by hand in the early morning"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span
                  className={String.raw`chapter__num text-xs [color:var(--earth)] [letter-spacing:.06em] block [margin-bottom:6px]`}
                >
                  02
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2`}
                >
                  Morning Cow Milking
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Join the first task of the day, gently and at the cows' pace.
                </p>
              </article>
              <article
                className={String.raw`snap__card [flex:0_0_min(64vw,340px)] [scroll-snap-align:start] [scroll-margin-left:var(--gutter)]`}
              >
                <div
                  className={String.raw`frame ar-4x5 relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 ml-0 [isolation:isolate] [aspect-ratio:4/5] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mb-4`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                    src={images["walk.jpg"]}
                    sizes="80vw"
                    alt="Walking along a path through green paddy fields"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span
                  className={String.raw`chapter__num text-xs [color:var(--earth)] [letter-spacing:.06em] block [margin-bottom:6px]`}
                >
                  03
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2`}
                >
                  Rice Field Walks
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Narrow bunds, open sky and the sound of water between the
                  paddy.
                </p>
              </article>
              <article
                className={String.raw`snap__card [flex:0_0_min(64vw,340px)] [scroll-snap-align:start] [scroll-margin-left:var(--gutter)]`}
              >
                <div
                  className={String.raw`frame ar-4x5 relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 ml-0 [isolation:isolate] [aspect-ratio:4/5] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mb-4`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                    src={images["farmwork.jpg"]}
                    sizes="80vw"
                    alt="Hands planting seedlings into garden soil"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span
                  className={String.raw`chapter__num text-xs [color:var(--earth)] [letter-spacing:.06em] block [margin-bottom:6px]`}
                >
                  04
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2`}
                >
                  Seasonal Farm Work
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Plant, weed or harvest — whatever the season is asking for.
                </p>
              </article>
              <article
                className={String.raw`snap__card [flex:0_0_min(64vw,340px)] [scroll-snap-align:start] [scroll-margin-left:var(--gutter)]`}
              >
                <div
                  className={String.raw`frame ar-4x5 relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 ml-0 [isolation:isolate] [aspect-ratio:4/5] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mb-4`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                    src={images["curdbutter.jpg"]}
                    sizes="80vw"
                    alt="Traditional red clay pots used for setting curd"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span
                  className={String.raw`chapter__num text-xs [color:var(--earth)] [letter-spacing:.06em] block [margin-bottom:6px]`}
                >
                  05
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2`}
                >
                  Butter &amp; Curd Making
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Fresh milk from the estate becomes butter and traditional
                  curd.
                </p>
              </article>
              <article
                className={String.raw`snap__card [flex:0_0_min(64vw,340px)] [scroll-snap-align:start] [scroll-margin-left:var(--gutter)]`}
              >
                <div
                  className={String.raw`frame ar-4x5 relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 ml-0 [isolation:isolate] [aspect-ratio:4/5] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mb-4`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                    src="https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="80vw"
                    alt="Stork-billed kingfisher perched near the estate"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span
                  className={String.raw`chapter__num text-xs [color:var(--earth)] [letter-spacing:.06em] block [margin-bottom:6px]`}
                >
                  06
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2`}
                >
                  Birdwatching
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Birdlife around the fields and trees at dawn and dusk.
                </p>
              </article>
              <article
                className={String.raw`snap__card [flex:0_0_min(64vw,340px)] [scroll-snap-align:start] [scroll-margin-left:var(--gutter)]`}
              >
                <div
                  className={String.raw`frame ar-4x5 relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 ml-0 [isolation:isolate] [aspect-ratio:4/5] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mb-4`}
                >
                  <img
                    className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                    src={images["tea.jpg"]}
                    alt="Tea being poured at a garden table"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span
                  className={String.raw`chapter__num text-xs [color:var(--earth)] [letter-spacing:.06em] block [margin-bottom:6px]`}
                >
                  07
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2`}
                >
                  Garden Tea
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Ceylon tea in the garden as the light softens.
                </p>
              </article>
            </div>
            <div
              className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
            >
              <Link
                className={String.raw`link-u text-inherit [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:origin-left [&::after]:[transition:transform_.5s_var(--ease)] [&:hover::after]:[transform:scaleX(1)] relative inline-flex [gap:6px] items-center text-sm no-underline pt-1 pr-0 pb-1 pl-0 font-medium [&::after]:[transform:scaleX(1)] [&::after]:[opacity:.35] [&:hover::after]:opacity-100`}
                to="/experiences"
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
          </div>
        </section>

        <section
          className={String.raw`sec sec--warm ftt [padding-top:var(--sec)] pr-0 [padding-bottom:var(--sec)] pl-0 relative [background:var(--bg-warm)] [.mf.is-pinned_+_&]:[padding-top:calc(var(--sec)_*_1.1)]`}
          id="food"
          aria-labelledby="ftt-h"
        >
          <div
            className={String.raw`container-wide ftt__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-18 min-[992px]:[grid-template-columns:repeat(12,minmax(0,1fr))] min-[992px]:[column-gap:clamp(16px,2vw,32px)] min-[992px]:items-center`}
          >
            <div
              className={String.raw`ftt__media relative min-[992px]:[grid-column:1_/_span_7]`}
            >
              <div
                className={String.raw`frame frame--lg ftt__main relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [border-radius:var(--r-lg)] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] [@media((min-width:768px)_and_(max-width:991.98px))]:[aspect-ratio:16/11] min-[992px]:[aspect-ratio:auto] min-[992px]:[height:min(78vh,760px)]`}
              >
                <img
                  className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transform-origin:50%_50%]`}
                  src={images["food.jpg"]}
                  sizes="(min-width: 992px) 55vw, 100vw"
                  alt="A traditional Sri Lankan meal of rice and curries served on a leaf"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className={String.raw`ftt__cover absolute top-0 right-0 bottom-0 left-0 [background:var(--bg-warm)] [transform-origin:right] [z-index:2] [html:not(.has-motion)_&]:hidden`}
                  aria-hidden="true"
                ></div>
              </div>
              <div
                className={String.raw`frame ftt__inset overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] absolute [width:36%] [aspect-ratio:3/4] [right:5%] [bottom:-34px] [border:6px_solid_var(--bg-warm)] [border-radius:var(--r)] [z-index:3] [@media((min-width:768px)_and_(max-width:991.98px))]:[width:28%] min-[992px]:[width:30%] min-[992px]:[right:6%] min-[992px]:[bottom:-6vh] min-[992px]:[border-width:8px]`}
                data-reveal=""
              >
                <img
                  className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                  src={images["food2.jpg"]}
                  sizes="(min-width: 992px) 20vw, 45vw"
                  alt="Hands preparing fresh produce on a wooden table"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div
              className={String.raw`ftt__text relative [z-index:4] min-w-0 min-[992px]:[grid-column:9_/_span_4]`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
              >
                From the Farm
              </span>
              <h2
                className={String.raw`h-lg [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 ml-0 text-inherit mb-7 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl min-[992px]:text-4xl min-[992px]:xl:text-5xl min-[992px]:2xl:text-6xl`}
                id="ftt-h"
                data-split=""
              >
                What Grows Here
                <br />
                Finds Its Way
                <br />
                to the{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Table.
                </em>
              </h2>
              <p
                className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)] mb-6`}
                data-fade=""
              >
                Seasonal produce from the estate becomes part of traditional Sri
                Lankan meals prepared and shared here.
              </p>
              <p
                className={String.raw`ftt__verbs text-2xl xl:text-3xl 2xl:text-4xl [letter-spacing:-.03em] [line-height:1.15] mt-0 mr-0 [margin-bottom:34px] ml-0 [color:var(--deep)]`}
                data-fade=""
              >
                Pick. Prepare. Cook. <em>Share.</em>
              </p>
              <div data-fade="">
                <Link
                  className={String.raw`btn-g text-inherit [--bb:var(--dark)] [--bf:#fff] inline-flex items-center gap-1 no-underline text-sm font-medium [line-height:16px]`}
                  to="/food"
                >
                  <span
                    className={String.raw`btn-g__label [background:var(--bb)] [color:var(--bf)] [padding-top:14px] [padding-right:22px] [padding-bottom:14px] [padding-left:22px] rounded-full [transition:padding_.5s_var(--ease),background-color_.4s_var(--ease)] whitespace-nowrap [.btn-g:hover_&]:[padding-left:27px] [.btn-g:hover_&]:[padding-right:27px] [.btn-g:focus-visible_&]:[padding-left:27px] [.btn-g:focus-visible_&]:[padding-right:27px]`}
                  >
                    Discover the Food Experience
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
              </div>
            </div>
          </div>
        </section>

        <section
          className={String.raw`sec sec--deep is-dark sus [padding-top:var(--sec)] pr-0 [padding-bottom:var(--sec)] pl-0 relative [background:var(--deep)] [color:var(--bg)]`}
          aria-labelledby="sus-h"
        >
          <div
            className={String.raw`container-wide sus__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-14 min-[992px]:[grid-template-columns:minmax(0,5fr)_minmax(0,7fr)] min-[992px]:[column-gap:6vw]`}
          >
            <div
              className={String.raw`sus__head min-[992px]:sticky min-[992px]:[top:calc(var(--nav-h)_+_8vh)] min-[992px]:[align-self:start]`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
              >
                Living Lightly
              </span>
              <h2
                className={String.raw`h-lg [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 mb-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl [max-width:9em]`}
                id="sus-h"
                data-split=""
              >
                Built With Nature.
                <br />
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Not Against It.
                </em>
              </h2>
            </div>
            <div
              className={String.raw`sus__items grid gap-11 min-[768px]:[grid-template-columns:1fr_1fr] min-[768px]:[column-gap:4vw] min-[992px]:[padding-top:18vh] min-[992px]:[row-gap:16vh]`}
            >
              <article
                className={String.raw`sus__item [border-top:1px_solid_var(--line-light)] [padding-top:22px] [max-width:24em]`}
              >
                <span
                  className={String.raw`ic-badge sus__ic w-11 h-11 rounded-full [border:1px_solid_var(--line)] [display:inline-grid] place-items-center [color:var(--green)] flex-none [.is-dark_&]:[border-color:var(--line-light)] [.is-dark_&]:[color:var(--earth)] mb-5`}
                >
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-5 h-5`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-wind"></use>
                  </svg>
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-3`}
                >
                  Natural Air
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Open architecture encourages natural airflow and daylight.
                </p>
              </article>
              <article
                className={String.raw`sus__item [border-top:1px_solid_var(--line-light)] [padding-top:22px] [max-width:24em] min-[768px]:[margin-top:22vh]`}
              >
                <span
                  className={String.raw`ic-badge sus__ic w-11 h-11 rounded-full [border:1px_solid_var(--line)] [display:inline-grid] place-items-center [color:var(--green)] flex-none [.is-dark_&]:[border-color:var(--line-light)] [.is-dark_&]:[color:var(--earth)] mb-5`}
                >
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-5 h-5`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-sun"></use>
                  </svg>
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-3`}
                >
                  Solar Energy
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Solar energy supports lighting and hot water.
                </p>
              </article>
              <article
                className={String.raw`sus__item [border-top:1px_solid_var(--line-light)] [padding-top:22px] [max-width:24em]`}
              >
                <span
                  className={String.raw`ic-badge sus__ic w-11 h-11 rounded-full [border:1px_solid_var(--line)] [display:inline-grid] place-items-center [color:var(--green)] flex-none [.is-dark_&]:[border-color:var(--line-light)] [.is-dark_&]:[color:var(--earth)] mb-5`}
                >
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-5 h-5`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-flame"></use>
                  </svg>
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-3`}
                >
                  Biogas
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  An alternative energy source supports cooking.
                </p>
              </article>
              <article
                className={String.raw`sus__item [border-top:1px_solid_var(--line-light)] [padding-top:22px] [max-width:24em] min-[768px]:[margin-top:22vh]`}
              >
                <span
                  className={String.raw`ic-badge sus__ic w-11 h-11 rounded-full [border:1px_solid_var(--line)] [display:inline-grid] place-items-center [color:var(--green)] flex-none [.is-dark_&]:[border-color:var(--line-light)] [.is-dark_&]:[color:var(--earth)] mb-5`}
                >
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-5 h-5`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-sprout"></use>
                  </svg>
                </span>
                <h3
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-3`}
                >
                  Grow Locally
                </h3>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Food is grown on the estate wherever possible and sourced
                  locally when needed.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className={String.raw`philo [min-height:100vh] grid place-items-center text-center [padding-top:var(--sec)] [padding-right:var(--gutter)] [padding-bottom:var(--sec)] [padding-left:var(--gutter)]`}
          aria-label="Our philosophy"
        >
          <div className={String.raw`philo__in`}>
            <span
              className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)] [margin-bottom:5vh]`}
            >
              What We Believe
            </span>
            <p
              className={String.raw`philo__lines mt-0 mr-0 mb-0 ml-0 [font-family:var(--f-serif)] text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl [line-height:1.04] [letter-spacing:-.02em]`}
            >
              <span className={String.raw`block`}>Live simply.</span>
              <span className={String.raw`block`}>Grow responsibly.</span>
              <span className={String.raw`block`}>Support locally.</span>
              <span className={String.raw`block`}>
                Stay connected to{" "}
                <em className={String.raw`[color:var(--green)]`}>nature.</em>
              </span>
            </p>
          </div>
        </section>

        <section
          className={String.raw`sec people [padding-top:var(--sec)] pr-0 [padding-bottom:var(--sec)] pl-0 relative`}
          aria-labelledby="people-h"
        >
          <div
            className={String.raw`container-wide people__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-10 min-[992px]:[grid-template-columns:repeat(12,minmax(0,1fr))] min-[992px]:[column-gap:clamp(16px,2vw,32px)] min-[992px]:items-center`}
          >
            <div
              className={String.raw`frame frame--lg ar-4x5 people__media relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [border-radius:var(--r-lg)] [aspect-ratio:4/5] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] min-[992px]:[grid-column:1_/_span_6] min-[992px]:[aspect-ratio:auto] min-[992px]:[height:86vh]`}
              data-parallax="5"
            >
              <img
                className={String.raw`max-w-full block w-full object-cover absolute left-0 [top:-8%] [height:116%] [.frame.img-missing_>_&]:opacity-0`}
                src="https://images.unsplash.com/photo-1739519261478-e626c0ebd8c3?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                srcSet="https://images.unsplash.com/photo-1739519261478-e626c0ebd8c3?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1739519261478-e626c0ebd8c3?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1739519261478-e626c0ebd8c3?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1739519261478-e626c0ebd8c3?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                sizes="(min-width: 992px) 46vw, 100vw"
                alt="Candid photograph of the family who care for Galkanda, in the fields (placeholder image)"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className={String.raw`people__text min-[992px]:[grid-column:8_/_span_5]`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
              >
                The People
              </span>
              <h2
                className={String.raw`h-lg [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-7`}
                id="people-h"
              >
                Cared for Like
                <br />a Home Should{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Be.
                </em>
              </h2>
              <p
                className={String.raw`lead text-base 2xl:text-lg [line-height:1.6] [color:var(--ink)] [max-width:34em] mb-8 font-light`}
              >
                Galkanda Estate is managed by Punya and cared for by Ravi,
                Sarojini and their family, whose warmth, knowledge and
                hospitality help bring the estate to life.
              </p>
              <dl
                className={String.raw`meta grid [grid-template-columns:repeat(2,minmax(0,1fr))] [border-top:1px_solid_var(--line)] mt-0 mr-0 ml-0 [.is-dark_&]:[border-color:var(--line-light)] mb-8 [max-width:30em]`}
              >
                <div
                  className={String.raw`[padding-top:14px] [padding-right:14px] [padding-bottom:14px] pl-0 [border-bottom:1px_solid_var(--line)] [.is-dark_.meta_>_&]:[border-color:var(--line-light)]`}
                >
                  <dt
                    className={String.raw`text-xs [letter-spacing:.14em] uppercase font-medium [color:var(--muted)] mb-1`}
                  >
                    Managed by
                  </dt>
                  <dd
                    className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.4]`}
                  >
                    Punya
                  </dd>
                </div>
                <div
                  className={String.raw`[padding-top:14px] [padding-right:14px] [padding-bottom:14px] pl-0 [border-bottom:1px_solid_var(--line)] [.is-dark_.meta_>_&]:[border-color:var(--line-light)]`}
                >
                  <dt
                    className={String.raw`text-xs [letter-spacing:.14em] uppercase font-medium [color:var(--muted)] mb-1`}
                  >
                    Cared for by
                  </dt>
                  <dd
                    className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.4]`}
                  >
                    Ravi, Sarojini &amp; family
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          className={String.raw`beyond [padding-top:var(--sec)] pr-0 [padding-bottom:var(--sec)] pl-0 overflow-hidden [&.is-h]:pt-0 [&.is-h]:pr-0 [&.is-h]:pb-0 [&.is-h]:pl-0`}
          id="beyond"
          aria-labelledby="beyond-h"
        >
          <div
            className={String.raw`beyond__pin [.beyond.is-h_&]:relative [.beyond.is-h_&]:h-screen [.beyond.is-h_&]:flex [.beyond.is-h_&]:items-center [.beyond.is-h_&]:[padding-top:var(--nav-h)]`}
          >
            <div
              className={String.raw`beyond__intro pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] mb-10 [.beyond.is-h_&]:absolute [.beyond.is-h_&]:left-0 [.beyond.is-h_&]:[top:var(--nav-h)] [.beyond.is-h_&]:bottom-0 [.beyond.is-h_&]:[width:calc(30vw_+_var(--gutter))] [.beyond.is-h_&]:flex [.beyond.is-h_&]:flex-col [.beyond.is-h_&]:justify-center [.beyond.is-h_&]:mt-0 [.beyond.is-h_&]:mr-0 [.beyond.is-h_&]:mb-0 [.beyond.is-h_&]:ml-0 [.beyond.is-h_&]:[z-index:2]`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
              >
                Beyond Galkanda
              </span>
              <h2
                className={String.raw`h-lg [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-5`}
                id="beyond-h"
              >
                Step Beyond
                <br />
                the{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Estate.
                </em>
              </h2>
              <p
                className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)] [margin-bottom:22px]`}
              >
                Kandy, mountains, waterfalls and Sri Lanka's cultural landscapes
                are all within reach.
              </p>
              <Link
                className={String.raw`link-u text-inherit [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:origin-left [&::after]:[transition:transform_.5s_var(--ease)] [&:hover::after]:[transform:scaleX(1)] relative inline-flex [gap:6px] items-center text-sm no-underline pt-1 pr-0 pb-1 pl-0 font-medium [&::after]:[transform:scaleX(1)] [&::after]:[opacity:.35] [&:hover::after]:opacity-100`}
                to="/explore"
              >
                Explore Kandy &amp; Beyond{" "}
                <i
                  className={String.raw`not-italic inline-block [transition:transform_.45s_var(--ease)] [.link-u:hover_&]:[transform:rotate(45deg)]`}
                  aria-hidden="true"
                >
                  &#8599;
                </i>
              </Link>
            </div>
            <div
              className={String.raw`beyond__track flex [gap:14px] overflow-x-auto [scroll-snap-type:x_mandatory] pt-0 [padding-right:var(--gutter)] [padding-bottom:10px] [padding-left:var(--gutter)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [.beyond.is-h_&]:overflow-visible [.beyond.is-h_&]:pt-0 [.beyond.is-h_&]:[padding-right:var(--gutter)] [.beyond.is-h_&]:pb-0 [.beyond.is-h_&]:[padding-left:calc(30vw_+_var(--gutter)_*_2)] [.beyond.is-h_&]:[gap:3vw] [.beyond.is-h_&]:[scroll-snap-type:none] [.beyond.is-h_&]:[will-change:transform]`}
              tabIndex="0"
              aria-label="Places to explore, scroll or swipe"
            >
              <figure
                className={String.raw`bcard [flex:0_0_min(80vw,420px)] mt-0 mr-0 mb-0 ml-0 [scroll-snap-align:start] [scroll-margin-left:var(--gutter)] [.beyond.is-h_&]:[flex:0_0_44vw]`}
              >
                <div
                  className={String.raw`frame bcard__frame relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] [.beyond.is-h_&]:[aspect-ratio:auto] [.beyond.is-h_&]:[height:60vh]`}
                >
                  <img
                    className={String.raw`bcard__img max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [.beyond.is-h_&]:absolute [.beyond.is-h_&]:top-0 [.beyond.is-h_&]:[left:-8%] [.beyond.is-h_&]:[width:116%] [.beyond.is-h_&]:[max-width:none] [.beyond.is-h_&]:h-full`}
                    src="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 992px) 46vw, 80vw"
                    alt="Temple of the Sacred Tooth Relic across the water in Kandy"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption
                  className={String.raw`flex gap-4 [padding-top:14px] text-sm`}
                >
                  <span
                    className={String.raw`bcard__n text-xs [color:var(--earth)] pt-1`}
                  >
                    01
                  </span>
                  <span>
                    <b
                      className={String.raw`block font-medium [letter-spacing:-.01em] text-base 2xl:text-lg`}
                    >
                      Temple of the Tooth
                    </b>
                    <em
                      className={String.raw`not-italic [color:var(--muted)] text-sm`}
                    >
                      Kandy's revered temple, beside the lake.
                    </em>
                  </span>
                </figcaption>
              </figure>
              <figure
                className={String.raw`bcard [flex:0_0_min(80vw,420px)] mt-0 mr-0 mb-0 ml-0 [scroll-snap-align:start] [scroll-margin-left:var(--gutter)] [.beyond.is-h_&]:[flex:0_0_44vw]`}
              >
                <div
                  className={String.raw`frame bcard__frame relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] [.beyond.is-h_&]:[aspect-ratio:auto] [.beyond.is-h_&]:[height:60vh]`}
                >
                  <img
                    className={String.raw`bcard__img max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [.beyond.is-h_&]:absolute [.beyond.is-h_&]:top-0 [.beyond.is-h_&]:[left:-8%] [.beyond.is-h_&]:[width:116%] [.beyond.is-h_&]:[max-width:none] [.beyond.is-h_&]:h-full`}
                    src="https://images.unsplash.com/photo-1609515286252-3429567a66fd?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1609515286252-3429567a66fd?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1609515286252-3429567a66fd?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1609515286252-3429567a66fd?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1609515286252-3429567a66fd?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 992px) 46vw, 80vw"
                    alt="Waterfall falling through green countryside"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption
                  className={String.raw`flex gap-4 [padding-top:14px] text-sm`}
                >
                  <span
                    className={String.raw`bcard__n text-xs [color:var(--earth)] pt-1`}
                  >
                    02
                  </span>
                  <span>
                    <b
                      className={String.raw`block font-medium [letter-spacing:-.01em] text-base 2xl:text-lg`}
                    >
                      Waterfalls &amp; Scenic Countryside
                    </b>
                    <em
                      className={String.raw`not-italic [color:var(--muted)] text-sm`}
                    >
                      Cascades and green valleys in the hill country.
                    </em>
                  </span>
                </figcaption>
              </figure>
              <figure
                className={String.raw`bcard [flex:0_0_min(80vw,420px)] mt-0 mr-0 mb-0 ml-0 [scroll-snap-align:start] [scroll-margin-left:var(--gutter)] [.beyond.is-h_&]:[flex:0_0_44vw]`}
              >
                <div
                  className={String.raw`frame bcard__frame relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] [.beyond.is-h_&]:[aspect-ratio:auto] [.beyond.is-h_&]:[height:60vh]`}
                >
                  <img
                    className={String.raw`bcard__img max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [.beyond.is-h_&]:absolute [.beyond.is-h_&]:top-0 [.beyond.is-h_&]:[left:-8%] [.beyond.is-h_&]:[width:116%] [.beyond.is-h_&]:[max-width:none] [.beyond.is-h_&]:h-full`}
                    src="https://images.unsplash.com/photo-1552055642-554ec085233a?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1552055642-554ec085233a?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1552055642-554ec085233a?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1552055642-554ec085233a?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1552055642-554ec085233a?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 992px) 46vw, 80vw"
                    alt="Mountain road winding through the Knuckles range"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption
                  className={String.raw`flex gap-4 [padding-top:14px] text-sm`}
                >
                  <span
                    className={String.raw`bcard__n text-xs [color:var(--earth)] pt-1`}
                  >
                    03
                  </span>
                  <span>
                    <b
                      className={String.raw`block font-medium [letter-spacing:-.01em] text-base 2xl:text-lg`}
                    >
                      Knuckles Mountain Range
                    </b>
                    <em
                      className={String.raw`not-italic [color:var(--muted)] text-sm`}
                    >
                      Mist, ridgelines and forest trails.
                    </em>
                  </span>
                </figcaption>
              </figure>
              <figure
                className={String.raw`bcard [flex:0_0_min(80vw,420px)] mt-0 mr-0 mb-0 ml-0 [scroll-snap-align:start] [scroll-margin-left:var(--gutter)] [.beyond.is-h_&]:[flex:0_0_44vw]`}
              >
                <div
                  className={String.raw`frame bcard__frame relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] [.beyond.is-h_&]:[aspect-ratio:auto] [.beyond.is-h_&]:[height:60vh]`}
                >
                  <img
                    className={String.raw`bcard__img max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [.beyond.is-h_&]:absolute [.beyond.is-h_&]:top-0 [.beyond.is-h_&]:[left:-8%] [.beyond.is-h_&]:[width:116%] [.beyond.is-h_&]:[max-width:none] [.beyond.is-h_&]:h-full`}
                    src="https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 992px) 46vw, 80vw"
                    alt="Bicycle parked beside a rice field"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption
                  className={String.raw`flex gap-4 [padding-top:14px] text-sm`}
                >
                  <span
                    className={String.raw`bcard__n text-xs [color:var(--earth)] pt-1`}
                  >
                    04
                  </span>
                  <span>
                    <b
                      className={String.raw`block font-medium [letter-spacing:-.01em] text-base 2xl:text-lg`}
                    >
                      Guided Cycling
                    </b>
                    <em
                      className={String.raw`not-italic [color:var(--muted)] text-sm`}
                    >
                      Quiet village roads, paddy and plantation.
                    </em>
                  </span>
                </figcaption>
              </figure>
              <figure
                className={String.raw`bcard [flex:0_0_min(80vw,420px)] mt-0 mr-0 mb-0 ml-0 [scroll-snap-align:start] [scroll-margin-left:var(--gutter)] [.beyond.is-h_&]:[flex:0_0_44vw]`}
              >
                <div
                  className={String.raw`frame bcard__frame relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] [.beyond.is-h_&]:[aspect-ratio:auto] [.beyond.is-h_&]:[height:60vh]`}
                >
                  <img
                    className={String.raw`bcard__img max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [.beyond.is-h_&]:absolute [.beyond.is-h_&]:top-0 [.beyond.is-h_&]:[left:-8%] [.beyond.is-h_&]:[width:116%] [.beyond.is-h_&]:[max-width:none] [.beyond.is-h_&]:h-full`}
                    src="https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 992px) 46vw, 80vw"
                    alt="Great trees on open lawns at the botanical gardens"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption
                  className={String.raw`flex gap-4 [padding-top:14px] text-sm`}
                >
                  <span
                    className={String.raw`bcard__n text-xs [color:var(--earth)] pt-1`}
                  >
                    05
                  </span>
                  <span>
                    <b
                      className={String.raw`block font-medium [letter-spacing:-.01em] text-base 2xl:text-lg`}
                    >
                      Royal Botanical Gardens
                    </b>
                    <em
                      className={String.raw`not-italic [color:var(--muted)] text-sm`}
                    >
                      The historic gardens at Peradeniya.
                    </em>
                  </span>
                </figcaption>
              </figure>
              <figure
                className={String.raw`bcard [flex:0_0_min(80vw,420px)] mt-0 mr-0 mb-0 ml-0 [scroll-snap-align:start] [scroll-margin-left:var(--gutter)] [.beyond.is-h_&]:[flex:0_0_44vw]`}
              >
                <div
                  className={String.raw`frame bcard__frame relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] [.beyond.is-h_&]:[aspect-ratio:auto] [.beyond.is-h_&]:[height:60vh]`}
                >
                  <img
                    className={String.raw`bcard__img max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [.beyond.is-h_&]:absolute [.beyond.is-h_&]:top-0 [.beyond.is-h_&]:[left:-8%] [.beyond.is-h_&]:[width:116%] [.beyond.is-h_&]:[max-width:none] [.beyond.is-h_&]:h-full`}
                    src="https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 992px) 46vw, 80vw"
                    alt="Traditional fire dancers performing in Kandy"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption
                  className={String.raw`flex gap-4 [padding-top:14px] text-sm`}
                >
                  <span
                    className={String.raw`bcard__n text-xs [color:var(--earth)] pt-1`}
                  >
                    06
                  </span>
                  <span>
                    <b
                      className={String.raw`block font-medium [letter-spacing:-.01em] text-base 2xl:text-lg`}
                    >
                      Traditional Cultural Shows
                    </b>
                    <em
                      className={String.raw`not-italic [color:var(--muted)] text-sm`}
                    >
                      Kandyan drumming, dance and fire.
                    </em>
                  </span>
                </figcaption>
              </figure>
              <figure
                className={String.raw`bcard [flex:0_0_min(80vw,420px)] mt-0 mr-0 mb-0 ml-0 [scroll-snap-align:start] [scroll-margin-left:var(--gutter)] [.beyond.is-h_&]:[flex:0_0_44vw]`}
              >
                <div
                  className={String.raw`frame bcard__frame relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] [.beyond.is-h_&]:[aspect-ratio:auto] [.beyond.is-h_&]:[height:60vh]`}
                >
                  <img
                    className={String.raw`bcard__img max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [.beyond.is-h_&]:absolute [.beyond.is-h_&]:top-0 [.beyond.is-h_&]:[left:-8%] [.beyond.is-h_&]:[width:116%] [.beyond.is-h_&]:[max-width:none] [.beyond.is-h_&]:h-full`}
                    src="https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 992px) 46vw, 80vw"
                    alt="Sigiriya rock fortress rising above forest"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption
                  className={String.raw`flex gap-4 [padding-top:14px] text-sm`}
                >
                  <span
                    className={String.raw`bcard__n text-xs [color:var(--earth)] pt-1`}
                  >
                    07
                  </span>
                  <span>
                    <b
                      className={String.raw`block font-medium [letter-spacing:-.01em] text-base 2xl:text-lg`}
                    >
                      Sigiriya
                    </b>
                    <em
                      className={String.raw`not-italic [color:var(--muted)] text-sm`}
                    >
                      The ancient rock fortress of the Cultural Triangle.
                    </em>
                  </span>
                </figcaption>
              </figure>
              <figure
                className={String.raw`bcard [flex:0_0_min(80vw,420px)] mt-0 mr-0 mb-0 ml-0 [scroll-snap-align:start] [scroll-margin-left:var(--gutter)] [.beyond.is-h_&]:[flex:0_0_44vw]`}
              >
                <div
                  className={String.raw`frame bcard__frame relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] [.beyond.is-h_&]:[aspect-ratio:auto] [.beyond.is-h_&]:[height:60vh]`}
                >
                  <img
                    className={String.raw`bcard__img max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [.beyond.is-h_&]:absolute [.beyond.is-h_&]:top-0 [.beyond.is-h_&]:[left:-8%] [.beyond.is-h_&]:[width:116%] [.beyond.is-h_&]:[max-width:none] [.beyond.is-h_&]:h-full`}
                    src="https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                    srcSet="https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                    sizes="(min-width: 992px) 46vw, 80vw"
                    alt="Herd of wild elephants on green grassland"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption
                  className={String.raw`flex gap-4 [padding-top:14px] text-sm`}
                >
                  <span
                    className={String.raw`bcard__n text-xs [color:var(--earth)] pt-1`}
                  >
                    08
                  </span>
                  <span>
                    <b
                      className={String.raw`block font-medium [letter-spacing:-.01em] text-base 2xl:text-lg`}
                    >
                      Minneriya / Kaudulla Wildlife
                    </b>
                    <em
                      className={String.raw`not-italic [color:var(--muted)] text-sm`}
                    >
                      Elephant herds on the dry-zone grasslands.
                    </em>
                  </span>
                </figcaption>
              </figure>
            </div>
            <div
              className={String.raw`beyond__progress hidden [.beyond.is-h_&]:flex [.beyond.is-h_&]:absolute [.beyond.is-h_&]:[left:var(--gutter)] [.beyond.is-h_&]:[bottom:4.5vh] [.beyond.is-h_&]:[z-index:3] [.beyond.is-h_&]:items-center [.beyond.is-h_&]:gap-3 [.beyond.is-h_&]:text-xs [.beyond.is-h_&]:[color:var(--muted)] [.beyond.is-h_&]:[letter-spacing:.06em]`}
              aria-hidden="true"
            >
              <span className={String.raw`beyond__count`}>01</span>
              <span
                className={String.raw`beyond__bar w-30 [height:1px] [background:var(--line)] overflow-hidden`}
              >
                <i
                  className={String.raw`block h-full [background:var(--ink)] [transform:scaleX(0)] origin-left`}
                ></i>
              </span>
              <span>08</span>
            </div>
          </div>
        </section>

        <section
          className={String.raw`sec day [padding-top:var(--sec)] pr-0 [padding-bottom:var(--sec)] pl-0 relative`}
          aria-labelledby="day-h"
        >
          <div
            className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
          >
            <div
              className={String.raw`sh [margin-bottom:clamp(48px,7vw,96px)]`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
              >
                A Day Here
              </span>
              <h2
                className={String.raw`h-lg [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 mb-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl`}
                id="day-h"
                data-split=""
              >
                Let the Day
                <br />
                Find Its Own{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Pace.
                </em>
              </h2>
            </div>
            <div
              className={String.raw`day__grid grid gap-10 min-[992px]:[grid-template-columns:minmax(0,5fr)_minmax(0,7fr)] min-[992px]:[column-gap:6vw]`}
            >
              <div
                className={String.raw`day__col relative [padding-left:34px]`}
              >
                <div
                  className={String.raw`day__track absolute [left:5px] top-2 bottom-0 [width:1px] [background:var(--line)]`}
                  aria-hidden="true"
                >
                  <i
                    className={String.raw`absolute top-0 right-0 bottom-0 left-0 [background:var(--earth)] [transform:scaleY(0)] origin-top [html:not(.has-motion)_.day\_\_track_&]:[transform:none]`}
                  ></i>
                </div>
                <ol
                  className={String.raw`day__list list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0`}
                >
                  <li
                    className={String.raw`day__item is-active relative pb-14 min-[992px]:[min-height:46vh] min-[992px]:pb-0 min-[992px]:[opacity:.32] min-[992px]:[transition:opacity_.7s_var(--ease)] min-[992px]:[&.is-active]:opacity-100 [html:not(.has-motion)_&]:opacity-100`}
                    data-i="0"
                  >
                    <span
                      className={String.raw`day__dot absolute [left:-34px] [top:7px] [width:11px] [height:11px] rounded-full [background:var(--bg)] [border:1px_solid_var(--muted)] [transition:background-color_.5s,border-color_.5s] [.day\_\_item.is-active_&]:[background:var(--earth)] [.day\_\_item.is-active_&]:[border-color:var(--earth)]`}
                      aria-hidden="true"
                    ></span>
                    <time
                      className={String.raw`day__time block text-xs [letter-spacing:.08em] [color:var(--earth)] [margin-bottom:10px]`}
                    >
                      06:30
                    </time>
                    <h3
                      className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2 min-[992px]:text-2xl min-[992px]:xl:text-3xl min-[992px]:2xl:text-4xl`}
                    >
                      Wake with the estate.
                    </h3>
                    <p
                      className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                    >
                      Birdsong, mist over the paddy, the first tea.
                    </p>
                    <div
                      className={String.raw`frame ar-4x3 day__mimg relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mr-0 mb-0 ml-0 [isolation:isolate] [aspect-ratio:4/3] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mt-5 min-[992px]:hidden`}
                    >
                      <img
                        className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                        src={images["teastate.jpg"]}
                        sizes="90vw"
                        alt="Misty morning view over fields and hills"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </li>
                  <li
                    className={String.raw`day__item relative pb-14 min-[992px]:[min-height:46vh] min-[992px]:pb-0 min-[992px]:[opacity:.32] min-[992px]:[transition:opacity_.7s_var(--ease)] min-[992px]:[&.is-active]:opacity-100 [html:not(.has-motion)_&]:opacity-100`}
                    data-i="1"
                  >
                    <span
                      className={String.raw`day__dot absolute [left:-34px] [top:7px] [width:11px] [height:11px] rounded-full [background:var(--bg)] [border:1px_solid_var(--muted)] [transition:background-color_.5s,border-color_.5s] [.day\_\_item.is-active_&]:[background:var(--earth)] [.day\_\_item.is-active_&]:[border-color:var(--earth)]`}
                      aria-hidden="true"
                    ></span>
                    <time
                      className={String.raw`day__time block text-xs [letter-spacing:.08em] [color:var(--earth)] [margin-bottom:10px]`}
                    >
                      08:00
                    </time>
                    <h3
                      className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2 min-[992px]:text-2xl min-[992px]:xl:text-3xl min-[992px]:2xl:text-4xl`}
                    >
                      Step into farm life.
                    </h3>
                    <p
                      className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                    >
                      Milking, feeding, and whatever the season brings.
                    </p>
                    <div
                      className={String.raw`frame ar-4x3 day__mimg relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mr-0 mb-0 ml-0 [isolation:isolate] [aspect-ratio:4/3] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mt-5 min-[992px]:hidden`}
                    >
                      <img
                        className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                        src={images["cow.jpg"]}
                        sizes="90vw"
                        alt="Morning milking on the farm"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </li>
                  <li
                    className={String.raw`day__item relative pb-14 min-[992px]:[min-height:46vh] min-[992px]:pb-0 min-[992px]:[opacity:.32] min-[992px]:[transition:opacity_.7s_var(--ease)] min-[992px]:[&.is-active]:opacity-100 [html:not(.has-motion)_&]:opacity-100`}
                    data-i="2"
                  >
                    <span
                      className={String.raw`day__dot absolute [left:-34px] [top:7px] [width:11px] [height:11px] rounded-full [background:var(--bg)] [border:1px_solid_var(--muted)] [transition:background-color_.5s,border-color_.5s] [.day\_\_item.is-active_&]:[background:var(--earth)] [.day\_\_item.is-active_&]:[border-color:var(--earth)]`}
                      aria-hidden="true"
                    ></span>
                    <time
                      className={String.raw`day__time block text-xs [letter-spacing:.08em] [color:var(--earth)] [margin-bottom:10px]`}
                    >
                      11:00
                    </time>
                    <h3
                      className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2 min-[992px]:text-2xl min-[992px]:xl:text-3xl min-[992px]:2xl:text-4xl`}
                    >
                      Explore beyond the gate.
                    </h3>
                    <p
                      className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                    >
                      Kandy, the hills, or nowhere at all.
                    </p>
                    <div
                      className={String.raw`frame ar-4x3 day__mimg relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mr-0 mb-0 ml-0 [isolation:isolate] [aspect-ratio:4/3] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mt-5 min-[992px]:hidden`}
                    >
                      <img
                        className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                        src={images["walk.jpg"]}
                        alt="Temple of the Tooth in Kandy"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </li>
                  <li
                    className={String.raw`day__item relative pb-14 min-[992px]:[min-height:46vh] min-[992px]:pb-0 min-[992px]:[opacity:.32] min-[992px]:[transition:opacity_.7s_var(--ease)] min-[992px]:[&.is-active]:opacity-100 [html:not(.has-motion)_&]:opacity-100`}
                    data-i="3"
                  >
                    <span
                      className={String.raw`day__dot absolute [left:-34px] [top:7px] [width:11px] [height:11px] rounded-full [background:var(--bg)] [border:1px_solid_var(--muted)] [transition:background-color_.5s,border-color_.5s] [.day\_\_item.is-active_&]:[background:var(--earth)] [.day\_\_item.is-active_&]:[border-color:var(--earth)]`}
                      aria-hidden="true"
                    ></span>
                    <time
                      className={String.raw`day__time block text-xs [letter-spacing:.08em] [color:var(--earth)] [margin-bottom:10px]`}
                    >
                      16:30
                    </time>
                    <h3
                      className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2 min-[992px]:text-2xl min-[992px]:xl:text-3xl min-[992px]:2xl:text-4xl`}
                    >
                      Walk through the fields.
                    </h3>
                    <p
                      className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                    >
                      Late light across the rice and vegetable plots.
                    </p>
                    <div
                      className={String.raw`frame ar-4x3 day__mimg relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mr-0 mb-0 ml-0 [isolation:isolate] [aspect-ratio:4/3] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mt-5 min-[992px]:hidden`}
                    >
                      <img
                        className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                        src={images["walk.jpg"]}
                        sizes="90vw"
                        alt="Walking through the fields in the late afternoon"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </li>
                  <li
                    className={String.raw`day__item relative pb-14 min-[992px]:[min-height:46vh] min-[992px]:pb-0 min-[992px]:[opacity:.32] min-[992px]:[transition:opacity_.7s_var(--ease)] min-[992px]:[&.is-active]:opacity-100 [html:not(.has-motion)_&]:opacity-100`}
                    data-i="4"
                  >
                    <span
                      className={String.raw`day__dot absolute [left:-34px] [top:7px] [width:11px] [height:11px] rounded-full [background:var(--bg)] [border:1px_solid_var(--muted)] [transition:background-color_.5s,border-color_.5s] [.day\_\_item.is-active_&]:[background:var(--earth)] [.day\_\_item.is-active_&]:[border-color:var(--earth)]`}
                      aria-hidden="true"
                    ></span>
                    <time
                      className={String.raw`day__time block text-xs [letter-spacing:.08em] [color:var(--earth)] [margin-bottom:10px]`}
                    >
                      18:00
                    </time>
                    <h3
                      className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2 min-[992px]:text-2xl min-[992px]:xl:text-3xl min-[992px]:2xl:text-4xl`}
                    >
                      Tea while the day slows.
                    </h3>
                    <p
                      className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                    >
                      On the terrace, as the valley turns gold.
                    </p>
                    <div
                      className={String.raw`frame ar-4x3 day__mimg relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mr-0 mb-0 ml-0 [isolation:isolate] [aspect-ratio:4/3] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mt-5 min-[992px]:hidden`}
                    >
                      <img
                        className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                        src={images["tea.jpg"]}
                        sizes="90vw"
                        alt="Tea being poured as evening falls"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </li>
                  <li
                    className={String.raw`day__item relative pb-14 min-[992px]:pb-0 min-[992px]:[opacity:.32] min-[992px]:[transition:opacity_.7s_var(--ease)] min-[992px]:[&.is-active]:opacity-100 min-[992px]:[min-height:30vh] [html:not(.has-motion)_&]:opacity-100`}
                    data-i="5"
                  >
                    <span
                      className={String.raw`day__dot absolute [left:-34px] [top:7px] [width:11px] [height:11px] rounded-full [background:var(--bg)] [border:1px_solid_var(--muted)] [transition:background-color_.5s,border-color_.5s] [.day\_\_item.is-active_&]:[background:var(--earth)] [.day\_\_item.is-active_&]:[border-color:var(--earth)]`}
                      aria-hidden="true"
                    ></span>
                    <time
                      className={String.raw`day__time block text-xs [letter-spacing:.08em] [color:var(--earth)] [margin-bottom:10px]`}
                    >
                      19:30
                    </time>
                    <h3
                      className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] mb-2 min-[992px]:text-2xl min-[992px]:xl:text-3xl min-[992px]:2xl:text-4xl`}
                    >
                      Gather around the table.
                    </h3>
                    <p
                      className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                    >
                      Home-cooked Sri Lankan food, shared.
                    </p>
                    <div
                      className={String.raw`frame ar-4x3 day__mimg relative overflow-hidden [border-radius:var(--r)] [background:var(--stone)] mr-0 mb-0 ml-0 [isolation:isolate] [aspect-ratio:4/3] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] mt-5 min-[992px]:hidden`}
                    >
                      <img
                        className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                        src={images["room.jpg"]}
                        alt="Wooden table set with Sri Lankan dishes"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </li>
                </ol>
              </div>
              <div
                className={String.raw`day__media hidden min-[992px]:block`}
                aria-hidden="true"
              >
                <div
                  className={String.raw`day__frames frame frame--lg relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [border-radius:var(--r-lg)] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] min-[992px]:sticky min-[992px]:[top:calc(var(--nav-h)_+_4vh)] min-[992px]:[height:calc(100vh_-_var(--nav-h)_-_9vh)]`}
                >
                  <figure
                    className={String.raw`day__frame is-active min-[992px]:absolute min-[992px]:top-0 min-[992px]:right-0 min-[992px]:bottom-0 min-[992px]:left-0 min-[992px]:mt-0 min-[992px]:mr-0 min-[992px]:mb-0 min-[992px]:ml-0 min-[992px]:opacity-0 min-[992px]:[&.is-active]:opacity-100`}
                    data-i="0"
                  >
                    <img
                      className={String.raw`max-w-full block min-[992px]:w-full min-[992px]:h-full min-[992px]:object-cover`}
                      src={images["teastate.jpg"]}
                      sizes="45vw"
                      alt="Misty morning view over fields and hills"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <figure
                    className={String.raw`day__frame min-[992px]:absolute min-[992px]:top-0 min-[992px]:right-0 min-[992px]:bottom-0 min-[992px]:left-0 min-[992px]:mt-0 min-[992px]:mr-0 min-[992px]:mb-0 min-[992px]:ml-0 min-[992px]:opacity-0 min-[992px]:[&.is-active]:opacity-100`}
                    data-i="1"
                  >
                    <img
                      className={String.raw`max-w-full block min-[992px]:w-full min-[992px]:h-full min-[992px]:object-cover`}
                      src={images["cow.jpg"]}
                      sizes="45vw"
                      alt="Morning milking on the farm"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <figure
                    className={String.raw`day__frame min-[992px]:absolute min-[992px]:top-0 min-[992px]:right-0 min-[992px]:bottom-0 min-[992px]:left-0 min-[992px]:mt-0 min-[992px]:mr-0 min-[992px]:mb-0 min-[992px]:ml-0 min-[992px]:opacity-0 min-[992px]:[&.is-active]:opacity-100`}
                    data-i="2"
                  >
                    <img
                      className={String.raw`max-w-full block min-[992px]:w-full min-[992px]:h-full min-[992px]:object-cover`}
                      src="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="45vw"
                      alt="Temple of the Tooth in Kandy"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <figure
                    className={String.raw`day__frame min-[992px]:absolute min-[992px]:top-0 min-[992px]:right-0 min-[992px]:bottom-0 min-[992px]:left-0 min-[992px]:mt-0 min-[992px]:mr-0 min-[992px]:mb-0 min-[992px]:ml-0 min-[992px]:opacity-0 min-[992px]:[&.is-active]:opacity-100`}
                    data-i="3"
                  >
                    <img
                      className={String.raw`max-w-full block min-[992px]:w-full min-[992px]:h-full min-[992px]:object-cover`}
                      src={images["walk.jpg"]}
                      sizes="45vw"
                      alt="Walking through the fields in the late afternoon"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <figure
                    className={String.raw`day__frame min-[992px]:absolute min-[992px]:top-0 min-[992px]:right-0 min-[992px]:bottom-0 min-[992px]:left-0 min-[992px]:mt-0 min-[992px]:mr-0 min-[992px]:mb-0 min-[992px]:ml-0 min-[992px]:opacity-0 min-[992px]:[&.is-active]:opacity-100`}
                    data-i="4"
                  >
                    <img
                      className={String.raw`max-w-full block min-[992px]:w-full min-[992px]:h-full min-[992px]:object-cover`}
                      src={images["tea.jpg"]}
                      sizes="45vw"
                      alt="Tea being poured as evening falls"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <figure
                    className={String.raw`day__frame min-[992px]:absolute min-[992px]:top-0 min-[992px]:right-0 min-[992px]:bottom-0 min-[992px]:left-0 min-[992px]:mt-0 min-[992px]:mr-0 min-[992px]:mb-0 min-[992px]:ml-0 min-[992px]:opacity-0 min-[992px]:[&.is-active]:opacity-100`}
                    data-i="5"
                  >
                    <img
                      className={String.raw`max-w-full block min-[992px]:w-full min-[992px]:h-full min-[992px]:object-cover`}
                      src={images["gather2.jpg"]}
                      sizes="45vw"
                      alt="Wooden table set with Sri Lankan dishes"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <span
                    className={String.raw`day__badge min-[992px]:absolute min-[992px]:[left:22px] min-[992px]:bottom-5 min-[992px]:[z-index:3] min-[992px]:[color:#fff] min-[992px]:text-sm min-[992px]:[letter-spacing:.1em] min-[992px]:[background:rgba(16,18,13,.4)] min-[992px]:[-webkit-backdrop-filter:blur(6px)] min-[992px]:[backdrop-filter:blur(6px)] min-[992px]:rounded-full min-[992px]:pt-2 min-[992px]:[padding-right:14px] min-[992px]:pb-2 min-[992px]:[padding-left:14px]`}
                  >
                    06:30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={String.raw`pace`} aria-labelledby="pace-h">
          <div
            className={String.raw`pace__stage relative [min-height:100vh] flex items-start overflow-hidden [color:#fff] [.pace.is-anim_&]:[background:var(--bg)] [.pace.is-anim_&]:[color:var(--ink)] [.pace.is-anim_&]:h-screen`}
          >
            <div
              className={String.raw`pace__media absolute top-0 right-0 bottom-0 left-0 overflow-hidden`}
            >
              <img
                className={String.raw`max-w-full block w-full h-full object-cover`}
                src={images["testate2.jpg"]}
                sizes="100vw"
                alt="Mist drifting over the hill country near Kandy"
                loading="lazy"
                decoding="async"
              />
              <div
                className={String.raw`pace__shade absolute top-0 right-0 bottom-0 left-0 [background:linear-gradient(180deg,rgba(14,16,11,.5),rgba(14,16,11,.18)_60%,rgba(14,16,11,.3))]`}
                aria-hidden="true"
              ></div>
            </div>
            <div
              className={String.raw`pace__copy container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] [padding-right:var(--gutter)] [padding-left:var(--gutter)] relative [z-index:2] [padding-top:calc(var(--nav-h)_+_8vh)] [padding-bottom:12vh] text-center flex flex-col items-center`}
            >
              <h2
                className={String.raw`h-lg [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] [line-height:.98] mt-0 mr-0 ml-0 text-inherit text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl [margin-bottom:26px]`}
                id="pace-h"
              >
                No Fixed Itinerary.
                <br />
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  No Need to Rush.
                </em>
              </h2>
              <p
                className={String.raw`lead text-base 2xl:text-lg [line-height:1.6] text-inherit [opacity:.9] [max-width:31em] font-light`}
              >
                Stay close to the estate, explore Kandy, head into the mountains
                or simply do very little. Shape the day around what feels right.
              </p>
            </div>
          </div>
        </section>

        <section
          className={String.raw`sec testi relative [padding-top:calc(var(--sec)_*_.75)] pr-0 [padding-bottom:calc(var(--sec)_*_.75)] pl-0`}
          aria-labelledby="testi-h"
        >
          <div
            className={String.raw`container-wide testi__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-8 items-center min-[992px]:[grid-template-columns:repeat(12,minmax(0,1fr))] min-[992px]:[column-gap:clamp(16px,2vw,32px)]`}
          >
            <div
              className={String.raw`frame frame--lg testi__media relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [border-radius:var(--r-lg)] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:16/10] min-[992px]:[grid-column:1_/_span_4] min-[992px]:[aspect-ratio:4/5] min-[992px]:[max-height:66vh]`}
              data-reveal=""
              data-parallax="5"
            >
              <img
                className={String.raw`max-w-full block w-full object-cover absolute left-0 [top:-8%] [height:116%] [.frame.img-missing_>_&]:opacity-0`}
                src={images["house.jpg"]} 
                sizes="(min-width: 992px) 34vw, 100vw"
                alt="Guests gathered around a table under a tree at Galkanda (placeholder photo)"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className={String.raw`testi__body min-[992px]:[grid-column:6_/_span_7]`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
              >
                Guest Reviews
              </span>
              <h2
                className={String.raw`h-md [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 ml-0 text-inherit text-3xl lg:text-4xl xl:text-5xl [line-height:1.02] mb-7`}
                id="testi-h"
                data-split=""
              >
                Words From Our{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Guests.
                </em>
              </h2>
              <div
                className={String.raw`testi__slides grid [touch-action:pan-y]`}
                aria-live="polite"
              >
                <figure
                  className={String.raw`testi__slide is-active [grid-area:1_/_1] mt-0 mr-0 mb-0 ml-0 opacity-0 invisible [&.is-active]:opacity-100 [&.is-active]:visible`}
                  data-i="0"
                  aria-hidden="false"
                >
                  <div
                    className={String.raw`testi__stars flex gap-1 [color:var(--earth)] mb-4`}
                    aria-label="Rating placeholder — set the guest's real rating"
                  >
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                  </div>
                  <blockquote
                    className={String.raw`testi__quote mt-0 mr-0 [margin-bottom:22px] ml-0`}
                  >
                    <p
                      className={String.raw`mt-0 mr-0 mb-0 ml-0 [font-family:var(--f-serif)] text-2xl xl:text-3xl 2xl:text-4xl [line-height:1.2] [letter-spacing:-.01em] [max-width:22em]`}
                    >
                      “[Short guest review — one or two sentences from a real
                      stay at Galkanda.]”
                    </p>
                  </blockquote>
                  <figcaption
                    className={String.raw`testi__who flex items-center [gap:14px] text-sm`}
                  >
                    <span
                      className={String.raw`testi__avatar w-11 h-11 rounded-full [background:var(--stone)] grid place-items-center [color:var(--deep)]`}
                      aria-hidden="true"
                    >
                      <svg
                        className={String.raw`ic [width:1.15em] [height:1.15em] flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em]`}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href="#i-guests"></use>
                      </svg>
                    </span>
                    <span>
                      <b className={String.raw`block font-medium`}>
                        [Guest name]
                      </b>
                      <em
                        className={String.raw`not-italic text-xs [color:var(--muted)]`}
                      >
                        [Country] · Family stay
                      </em>
                    </span>
                  </figcaption>
                </figure>
                <figure
                  className={String.raw`testi__slide [grid-area:1_/_1] mt-0 mr-0 mb-0 ml-0 opacity-0 invisible [&.is-active]:opacity-100 [&.is-active]:visible`}
                  data-i="1"
                  aria-hidden="true"
                >
                  <div
                    className={String.raw`testi__stars flex gap-1 [color:var(--earth)] mb-4`}
                    aria-label="Rating placeholder — set the guest's real rating"
                  >
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                  </div>
                  <blockquote
                    className={String.raw`testi__quote mt-0 mr-0 [margin-bottom:22px] ml-0`}
                  >
                    <p
                      className={String.raw`mt-0 mr-0 mb-0 ml-0 [font-family:var(--f-serif)] text-2xl xl:text-3xl 2xl:text-4xl [line-height:1.2] [letter-spacing:-.01em] [max-width:22em]`}
                    >
                      “[Short guest review — e.g. what they loved about the
                      farm, food or hosts.]”
                    </p>
                  </blockquote>
                  <figcaption
                    className={String.raw`testi__who flex items-center [gap:14px] text-sm`}
                  >
                    <span
                      className={String.raw`testi__avatar w-11 h-11 rounded-full [background:var(--stone)] grid place-items-center [color:var(--deep)]`}
                      aria-hidden="true"
                    >
                      <svg
                        className={String.raw`ic [width:1.15em] [height:1.15em] flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em]`}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href="#i-guests"></use>
                      </svg>
                    </span>
                    <span>
                      <b className={String.raw`block font-medium`}>
                        [Guest name]
                      </b>
                      <em
                        className={String.raw`not-italic text-xs [color:var(--muted)]`}
                      >
                        [Country] · Couple
                      </em>
                    </span>
                  </figcaption>
                </figure>
                <figure
                  className={String.raw`testi__slide [grid-area:1_/_1] mt-0 mr-0 mb-0 ml-0 opacity-0 invisible [&.is-active]:opacity-100 [&.is-active]:visible`}
                  data-i="2"
                  aria-hidden="true"
                >
                  <div
                    className={String.raw`testi__stars flex gap-1 [color:var(--earth)] mb-4`}
                    aria-label="Rating placeholder — set the guest's real rating"
                  >
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <svg
                      className={String.raw`ic ic--fill flex-none [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [fill:currentColor] [stroke:none] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-star"></use>
                    </svg>
                  </div>
                  <blockquote
                    className={String.raw`testi__quote mt-0 mr-0 [margin-bottom:22px] ml-0`}
                  >
                    <p
                      className={String.raw`mt-0 mr-0 mb-0 ml-0 [font-family:var(--f-serif)] text-2xl xl:text-3xl 2xl:text-4xl [line-height:1.2] [letter-spacing:-.01em] [max-width:22em]`}
                    >
                      “[Short guest review — keep it under 30 words for the
                      cleanest layout.]”
                    </p>
                  </blockquote>
                  <figcaption
                    className={String.raw`testi__who flex items-center [gap:14px] text-sm`}
                  >
                    <span
                      className={String.raw`testi__avatar w-11 h-11 rounded-full [background:var(--stone)] grid place-items-center [color:var(--deep)]`}
                      aria-hidden="true"
                    >
                      <svg
                        className={String.raw`ic [width:1.15em] [height:1.15em] flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em]`}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <use href="#i-guests"></use>
                      </svg>
                    </span>
                    <span>
                      <b className={String.raw`block font-medium`}>
                        [Guest name]
                      </b>
                      <em
                        className={String.raw`not-italic text-xs [color:var(--muted)]`}
                      >
                        [Country] · Friends
                      </em>
                    </span>
                  </figcaption>
                </figure>
              </div>
              <div
                className={String.raw`testi__nav flex items-center [gap:14px] [margin-top:30px] pt-5 [border-top:1px_solid_var(--line)] flex-wrap`}
              >
                <button
                  className={String.raw`testi__btn w-11 h-11 rounded-full [border:1px_solid_var(--line)] bg-transparent [color:var(--ink)] grid place-items-center [transition:background-color_.4s_var(--ease),color_.4s,border-color_.4s] hover:[background:var(--dark)] hover:[color:#fff] hover:[border-color:var(--dark)]`}
                  type="button"
                  data-dir="-1"
                  aria-label="Previous review"
                >
                  <svg
                    className={String.raw`ic [width:1.15em] [height:1.15em] flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-left"></use>
                  </svg>
                </button>
                <span
                  className={String.raw`testi__count text-xs [color:var(--muted)] [letter-spacing:.06em]`}
                >
                  <b className={String.raw`[color:var(--ink)] font-medium`}>
                    01
                  </b>{" "}
                  / 03
                </span>
                <button
                  className={String.raw`testi__btn w-11 h-11 rounded-full [border:1px_solid_var(--line)] bg-transparent [color:var(--ink)] grid place-items-center [transition:background-color_.4s_var(--ease),color_.4s,border-color_.4s] hover:[background:var(--dark)] hover:[color:#fff] hover:[border-color:var(--dark)]`}
                  type="button"
                  data-dir="1"
                  aria-label="Next review"
                >
                  <svg
                    className={String.raw`ic [width:1.15em] [height:1.15em] flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-right"></use>
                  </svg>
                </button>
                <span
                  className={String.raw`testi__src [margin-left:auto] text-xs [color:var(--muted)]`}
                >
                  [Overall rating · source, e.g. Airbnb]
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className={String.raw`sec trip [padding-top:var(--sec)] pr-0 [padding-bottom:var(--sec)] pl-0 relative`}
          aria-labelledby="trip-h"
        >
          <div
            className={String.raw`container-wide trip__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-10 min-[992px]:[grid-template-columns:repeat(12,minmax(0,1fr))] min-[992px]:[column-gap:clamp(16px,2vw,32px)] min-[992px]:items-center`}
          >
            <div
              className={String.raw`frame frame--lg trip__media relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [border-radius:var(--r-lg)] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] min-[992px]:[grid-column:1_/_span_6] min-[992px]:[aspect-ratio:auto] min-[992px]:[height:80vh]`}
              data-reveal=""
              data-parallax="6"
            >
              <img
                className={String.raw`max-w-full block w-full object-cover absolute left-0 [top:-8%] [height:116%] [.frame.img-missing_>_&]:opacity-0`}
                src="https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                srcSet="https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                sizes="(min-width: 992px) 50vw, 100vw"
                alt="Train crossing a bridge through Sri Lanka's green hill country"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className={String.raw`trip__text min-[992px]:[grid-column:8_/_span_5]`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
              >
                Your Sri Lankan Journey
              </span>
              <h2
                className={String.raw`h-md [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 ml-0 text-inherit text-3xl lg:text-4xl xl:text-5xl [line-height:1.02] [margin-bottom:26px]`}
                id="trip-h"
                data-split=""
              >
                Planning More Than
                <br />
                Just Your{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Stay?
                </em>
              </h2>
              <p
                className={String.raw`lead text-base 2xl:text-lg [line-height:1.6] [color:var(--ink)] [max-width:34em] [margin-bottom:34px] font-light`}
                data-fade=""
              >
                Tell us how much time you have and what you love — culture,
                wildlife, nature, food or simply slowing down — and we can help
                suggest how Galkanda fits into your Sri Lankan journey.
              </p>
              <div
                className={String.raw`btn-row flex flex-wrap items-center [gap:14px_28px]`}
                data-fade=""
              >
                <Link
                  className={String.raw`btn-g text-inherit [--bb:var(--dark)] [--bf:#fff] inline-flex items-center gap-1 no-underline text-sm font-medium [line-height:16px]`}
                  to="/contact"
                >
                  <span
                    className={String.raw`btn-g__label [background:var(--bb)] [color:var(--bf)] [padding-top:14px] [padding-right:22px] [padding-bottom:14px] [padding-left:22px] rounded-full [transition:padding_.5s_var(--ease),background-color_.4s_var(--ease)] whitespace-nowrap [.btn-g:hover_&]:[padding-left:27px] [.btn-g:hover_&]:[padding-right:27px] [.btn-g:focus-visible_&]:[padding-left:27px] [.btn-g:focus-visible_&]:[padding-right:27px]`}
                  >
                    Plan Your Journey
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
                  className={String.raw`link-u text-inherit [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:origin-left [&::after]:[transition:transform_.5s_var(--ease)] [&:hover::after]:[transform:scaleX(1)] relative inline-flex [gap:6px] items-center text-sm no-underline pt-1 pr-0 pb-1 pl-0 font-medium [&::after]:[transform:scaleX(1)] [&::after]:[opacity:.35] [&:hover::after]:opacity-100`}
                  to="/contact"
                >
                  Contact Galkanda{" "}
                  <i
                    className={String.raw`not-italic inline-block [transition:transform_.45s_var(--ease)] [.link-u:hover_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                  >
                    &#8599;
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className={String.raw`fin relative [min-height:100vh] grid place-items-center overflow-hidden [color:#fff] text-center`}
          data-header="light"
          aria-labelledby="fin-h"
        >
          <div
            className={String.raw`fin__media absolute top-0 right-0 bottom-0 left-0`}
          >
            <img
              className={String.raw`max-w-full block w-full h-full object-cover`}
              src={images["mountains.jpg"]}
              sizes="100vw"
              alt="Golden evening light over the hills around Kandy"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            className={String.raw`fin__shade absolute top-0 right-0 bottom-0 left-0 [background:radial-gradient(ellipse_at_center,rgba(14,16,11,.25),rgba(14,16,11,.55))]`}
            aria-hidden="true"
          ></div>
          <div
            className={String.raw`fin__copy relative [z-index:2] [padding-top:calc(var(--nav-h)_+_60px)] [padding-right:var(--gutter)] pb-20 [padding-left:var(--gutter)] flex flex-col items-center`}
          >
            <h2
              className={String.raw`fin__title [font-family:var(--f-sans)] font-normal mt-0 mr-0 ml-0 text-inherit text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl [line-height:.95] [letter-spacing:-.05em] mb-7`}
              id="fin-h"
            >
              <span className={String.raw`fin__l block whitespace-nowrap`}>
                Come See a
              </span>
              <span className={String.raw`fin__l block whitespace-nowrap`}>
                Different Side
              </span>
              <span className={String.raw`fin__l block whitespace-nowrap`}>
                of Sri{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Lanka.
                </em>
              </span>
            </h2>
            <p
              className={String.raw`fin__sub eyebrow text-xs [letter-spacing:.2em] uppercase font-medium [color:rgba(255,255,255,.8)] [margin-bottom:34px]`}
            >
              Galkanda Estate · Kandy
            </p>
            <div
              className={String.raw`btn-row fin__btns flex flex-wrap items-center [gap:14px_28px] justify-center mb-7`}
            >
              <Link
                className={String.raw`btn-g btn-g--light text-inherit inline-flex items-center gap-1 no-underline text-sm font-medium [line-height:16px] [--bb:#fff] [--bf:var(--ink)]`}
                to="/contact"
              >
                <span
                  className={String.raw`btn-g__label [background:var(--bb)] [color:var(--bf)] [padding-top:14px] [padding-right:22px] [padding-bottom:14px] [padding-left:22px] rounded-full [transition:padding_.5s_var(--ease),background-color_.4s_var(--ease)] whitespace-nowrap [.btn-g:hover_&]:[padding-left:27px] [.btn-g:hover_&]:[padding-right:27px] [.btn-g:focus-visible_&]:[padding-left:27px] [.btn-g:focus-visible_&]:[padding-right:27px]`}
                >
                  Get in Touch
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
            <p
              className={String.raw`fin__note text-sm [color:rgba(255,255,255,.72)] mt-0 mr-0 mb-0 ml-0`}
            >
              Airport transfers can be arranged on request.
            </p>
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
