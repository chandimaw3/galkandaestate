import { Link } from "react-router-dom";

export default function ExploreFooter() {
  return (
    <footer
      className={String.raw`site-footer relative [background:var(--dark)] [color:rgba(244,241,234,.78)] [padding-top:clamp(56px,8vw,100px)] pr-0 pb-10 pl-0 overflow-hidden`}
    >
      <div
        className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-12 [border-bottom:1px_solid_rgba(244,241,234,.12)] [padding-bottom:clamp(40px,6vw,72px)] min-[992px]:[grid-template-columns:1.4fr_2fr]`}
      >
        <div>
          <Link
            className={String.raw`brand inline-flex items-center [gap:11px] text-sm [letter-spacing:.2em] uppercase font-medium no-underline text-inherit whitespace-nowrap [color:#fff] [margin-bottom:22px]`}
            to="/"
            aria-label="Galkanda Estate"
          >
            <svg
              className={String.raw`brand__mark [width:26px] [height:17px] flex-none [fill:none] [stroke:currentColor] [stroke-width:1.4] [stroke-linejoin:round] [stroke-linecap:round] [transition:transform_.6s_var(--ease)]`}
              viewBox="0 0 28 18"
            >
              <path d="M1.5 16.5 9.6 4.2l4.6 6.6 3.4-4.4 8.9 10.1z"></path>
              <path d="M7.4 7.6l2.2 1.6 1.9-1.4"></path>
            </svg>
            <span>Galkanda Estate</span>
          </Link>
          <p
            className={String.raw`text-sm [line-height:1.7] [color:rgba(244,241,234,.6)] [max-width:28em] mt-0 mr-0 mb-6 ml-0`}
          >
            A private hillside home and working organic farm near Kandy, Sri
            Lanka.
          </p>
        </div>
        <div
          className={String.raw`grid [grid-template-columns:repeat(2,minmax(0,1fr))] gap-8 min-[600px]:[grid-template-columns:repeat(3,minmax(0,1fr))]`}
        >
          <div>
            <span
              className={String.raw`block text-xs [letter-spacing:.18em] uppercase font-medium [color:#fff] mb-4`}
            >
              Explore
            </span>
            <ul
              className={String.raw`list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 grid gap-2 text-sm`}
            >
              <li>
                <Link
                  className={String.raw`text-inherit no-underline hover:[color:#fff]`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`text-inherit no-underline hover:[color:#fff]`}
                  to="/estate"
                >
                  The Estate
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`text-inherit no-underline hover:[color:#fff]`}
                  to="/experiences"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`text-inherit no-underline hover:[color:#fff]`}
                  to="/food"
                >
                  Food &amp; Farm
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`text-inherit no-underline hover:[color:#fff]`}
                  to="/explore"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`text-inherit no-underline hover:[color:#fff]`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span
              className={String.raw`block text-xs [letter-spacing:.18em] uppercase font-medium [color:#fff] mb-4`}
            >
              Contact
            </span>
            <ul
              className={String.raw`list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 grid gap-2 text-sm`}
            >
              <li>
                <Link
                  className={String.raw`text-inherit no-underline hover:[color:#fff]`}
                  to="/contact"
                >
                  Plan Your Stay
                </Link>
              </li>
              <li>
                <a
                  className={String.raw`text-inherit no-underline hover:[color:#fff]`}
                  href="mailto:stay@galkanda.com"
                >
                  stay@galkanda.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-6 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] flex flex-wrap justify-between items-center gap-4 text-xs [color:rgba(244,241,234,.45)]`}
      >
        <p className={String.raw`mt-0 mr-0 mb-0 ml-0`}>
          &copy; {new Date().getFullYear()} Galkanda Estate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
