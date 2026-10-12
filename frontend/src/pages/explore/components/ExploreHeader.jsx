import { Link } from "react-router-dom";

export default function ExploreHeader() {
  return (
    <>
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
            className={String.raw`nav-links hidden list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 [gap:clamp(14px,1.8vw,28px)] min-[992px]:flex`}
          >
            <li>
              <Link
                className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)]`}
                to="/about"
              >
                About
              </Link>
            </li>
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
                className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)] [.nav-links_&[aria-current="page"]::after]:[transform:scaleX(1)]`}
                to="/explore"
                aria-current="page"
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
              to="/about"
            >
              <span className={String.raw`block`}>About</span>
            </Link>
          </li>
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
              aria-current="page"
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
      </div>
    </>
  );
}
