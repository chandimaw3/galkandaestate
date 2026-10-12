import { Link, useLocation } from "react-router-dom";
import { images } from "../images.js";

export default function Footer() {
  const { pathname } = useLocation();
  return (
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
                className="inline-block max-w-full no-underline"
                to="/"
                aria-label="Galkanda Estate home"
              >
                <img
                  className="block w-28 sm:w-32 max-w-full h-auto object-contain"
                  src={images["Transparent Galkanda Estate Farm Emblem.png"]}
                  alt="Galkanda Estate Eco Farm Stay"
                  width="1280"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
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
                  to="/about" aria-current={pathname === "/about" ? "page" : undefined}
                >About</Link>
</li>
<li>
<Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/estate" aria-current={pathname === "/estate" ? "page" : undefined}
                >
                  Estate
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/experiences" aria-current={pathname === "/experiences" ? "page" : undefined}
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/food" aria-current={pathname === "/food" ? "page" : undefined}
                >
                  Food &amp; Farm
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/explore" aria-current={pathname === "/explore" ? "page" : undefined}
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/gallery" aria-current={pathname === "/gallery" ? "page" : undefined}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className={String.raw`relative no-underline [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.footer-links_&::after]:[content:""] [.footer-links_&::after]:absolute [.footer-links_&::after]:left-0 [.footer-links_&::after]:right-0 [.footer-links_&::after]:bottom-0 [.footer-links_&::after]:[height:1px] [.footer-links_&::after]:[background:currentColor] [.footer-links_&::after]:[transform:scaleX(0)] [.footer-links_&::after]:origin-left [.footer-links_&::after]:[transition:transform_.5s_var(--ease)] [.footer-links_&:hover::after]:[transform:scaleX(1)] text-sm [color:rgba(244,241,234,.82)]`}
                  to="/contact" aria-current={pathname === "/contact" ? "page" : undefined}
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
                  to="/contact" aria-current={pathname === "/contact" ? "page" : undefined}
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
              © <span data-year="">{new Date().getFullYear()}</span> Galkanda Estate
            </span>
            <a className={String.raw`text-inherit no-underline`} href="#">
              Privacy
            </a>
          </div>
        </div>
      </footer>
  );
}
