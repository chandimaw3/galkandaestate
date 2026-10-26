import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { initContact } from "../behaviors/Contact.js";
import { images } from "../images.js";

export default function Contact() {
  useLayoutEffect(initContact, []);
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

      <Header />

      <main className={String.raw`block`} id="main">
        <section
          className={String.raw`chero [padding-top:calc(var(--nav-h)_+_clamp(48px,8vh,96px))] pr-0 [padding-bottom:clamp(48px,8vw,110px)] pl-0`}
          aria-labelledby="contact-h"
        >
          <div
            className={String.raw`container-wide chero__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-10 min-[992px]:[grid-template-columns:repeat(12,minmax(0,1fr))] min-[992px]:[column-gap:clamp(16px,2vw,32px)] min-[992px]:items-end`}
          >
            <div
              className={String.raw`chero__text min-[992px]:[grid-column:1_/_span_7] min-[992px]:[padding-bottom:2vw]`}
            >
              <span
                className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                data-fade=""
              >
                Plan Your Stay
              </span>
              <h1
                className={String.raw`h-xl [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 ml-0 text-inherit [line-height:.94] text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-7`}
                id="contact-h"
                data-split=""
              >
                Come Experience
                <br />
                Galkanda for{" "}
                <em
                  className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                >
                  Yourself.
                </em>
              </h1>
              <p
                className={String.raw`lead text-base 2xl:text-lg [line-height:1.6] [color:var(--ink)] [max-width:34em] font-light`}
                data-fade=""
              >
                Plan your escape to Galkanda Estate. Check availability and book
                your stay through Airbnb or Booking.com.
              </p>
            </div>
            <div
              className={String.raw`chero__media frame frame--lg relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [border-radius:var(--r-lg)] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:4/5] min-[992px]:[grid-column:9_/_span_4] min-[992px]:[aspect-ratio:3/4]`}
              data-reveal=""
              data-parallax="5"
            >
              <img
                className={String.raw`max-w-full block w-full object-cover absolute left-0 [top:-8%] [height:116%] [.frame.img-missing_>_&]:opacity-0`}
                src={images["ct2.webp"]}
                sizes="(min-width: 992px) 40vw, 100vw"
                alt="A quiet corner of the terrace at Galkanda"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section
          className={String.raw`sec cform-sec pr-0 [padding-bottom:var(--sec)] pl-0 relative [padding-top:clamp(40px,6vw,90px)]`}
          aria-label="Book your stay"
        >
          <div
            className={String.raw`container-wide cgrid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-18 min-[992px]:[grid-template-columns:minmax(0,7fr)_minmax(0,4fr)] min-[992px]:[column-gap:7vw]`}
          >
            <div className="min-w-0">
              <h2 className="[font-family:var(--f-serif)] text-4xl min-[768px]:text-5xl font-normal [letter-spacing:-.02em] mb-4">Your stay starts here.</h2>
              <p className="text-base mb-10 [color:var(--muted)]">
                Check availability, choose your dates and book with Airbnb or Booking.com.
              </p>
              <div className="mb-8 pb-6 [border-bottom:1px_solid_var(--line)]">
                <h3 className="text-xl font-normal mb-2 [letter-spacing:-.03em]">Galkanda Estate Eco Farm Villa</h3>
                <p className="text-sm [color:var(--muted)]">3 bedrooms &nbsp;·&nbsp; 3 beds &nbsp;·&nbsp; 2 baths</p>
              </div>
              <div className="grid grid-cols-1 min-[540px]:grid-cols-2 gap-5 min-[1200px]:gap-7">
                {[
                  { name: "Airbnb", image: "house.webp", imageAlt: "Galkanda Estate villa", accent: "#b93849", tint: "#f5e6e3", radius: "28px", tagline: "A place to feel at home", href: "https://www.airbnb.com.au/rooms/1625391951294267587" },
                  { name: "Booking.com", image: "estate-garden.webp", imageAlt: "Galkanda Estate living room opening onto the garden", accent: "#003b95", tint: "#e5edf7", radius: "12px", tagline: "Your next escape awaits", href: "https://www.booking.com/Share-0PNEE0" },
                ].map((platform) => (
                  <article key={platform.name} style={{ "--platform-accent": platform.accent, "--platform-tint": platform.tint, "--platform-radius": platform.radius }} className="min-w-0 flex flex-col">
                    <div data-fade="" className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-xl font-bold [color:var(--platform-accent)] [letter-spacing:-.04em]">{platform.name}</span>

                    </div>
                    <a
                      className="group block flex-1 text-inherit no-underline"
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Book Galkanda Estate with ${platform.name}`}
                    >
                      <div data-reveal="" className="relative overflow-hidden rounded-[var(--r-lg)] [aspect-ratio:4/5]">
                        <img
                          src={images[platform.image]}
                          alt={platform.imageAlt}
                          className="w-full h-full object-cover [transition:scale_1.8s_cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025] group-focus-visible:scale-[1.025] motion-reduce:transition-none motion-reduce:scale-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 motion-reduce:transition-none" aria-hidden="true">
                          <span className="inline-flex flex-wrap items-center gap-2 rounded-full min-h-14 w-[90%] justify-center [background:var(--platform-tint)] [color:var(--platform-accent)] px-3 py-3 text-xs font-medium translate-y-3 transition-transform duration-500 group-hover:translate-y-0 group-focus-visible:translate-y-0 [@media(hover:none)]:translate-y-0 motion-reduce:transition-none motion-reduce:transform-none">
                            Book with
                            {platform.name === "Airbnb" ? (
                              <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Airbnb%20Logo%20B%C3%A9lo.svg" alt="" className="w-20 h-6 object-contain" />
                            ) : (
                              <span className="font-bold [color:#003b95]">Booking.com</span>
                            )}
                            <span className="text-lg">&#8599;</span>
                          </span>
                        </div>
                        <span className="absolute bottom-4 left-3 rounded-full px-3 py-2 text-[10px] uppercase tracking-widest [background:var(--bg)] [color:var(--ink)]">Entire home · Kandy</span>
                      </div>
                    </a>
                    <a data-fade="" className="inline-flex items-center justify-between gap-2 mt-6 rounded-full w-full h-14 [background:var(--platform-accent)] text-white px-4 py-4 no-underline text-sm font-medium transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none" href={platform.href} target="_blank" rel="noopener noreferrer">
                      Book with {platform.name} <span aria-hidden="true">&#8599;</span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
            <aside
              className={String.raw`cinfo grid gap-12 [align-content:start]`}
            >
              <div className={String.raw`cinfo__block`} data-fade="">
                <span
                  className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Getting Here
                </span>
                <span
                  className={String.raw`ic-badge cinfo__ic w-11 h-11 rounded-full [border:1px_solid_var(--line)] [display:inline-grid] place-items-center [color:var(--green)] flex-none [.is-dark_&]:[border-color:var(--line-light)] [.is-dark_&]:[color:var(--earth)] [margin-bottom:14px]`}
                >
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] w-5 h-5`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plane"></use>
                  </svg>
                </span>
                <h2
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal mt-0 mr-0 mb-0 ml-0 text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] [max-width:16em]`}
                >
                  Airport pickup &amp; drop off can be arranged at competitive
                  rates.
                </h2>
              </div>
              <div className={String.raw`cinfo__block`} data-fade="">
                <span
                  className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Planning a Sri Lankan Holiday?
                </span>
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  We can help suggest an itinerary based on:
                </p>
                <ul
                  className={String.raw`ic-list cinfo__list list-none mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap text-sm [margin-top:14px] [gap:10px_20px]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:9px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-calendar"></use>
                    </svg>
                    Available time
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:9px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-cash"></use>
                    </svg>
                    Budget
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:9px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-home"></use>
                    </svg>
                    Culture
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:9px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    Wildlife
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:9px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-leaf"></use>
                    </svg>
                    Nature
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:9px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-dining"></use>
                    </svg>
                    Food
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:9px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:18px] [height:18px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-sun"></use>
                    </svg>
                    Relaxation
                  </li>
                </ul>
              </div>
              <dl
                className={String.raw`meta cinfo__meta grid [border-top:1px_solid_var(--line)] mt-0 mr-0 mb-0 ml-0 [.is-dark_&]:[border-color:var(--line-light)] [grid-template-columns:1fr_1fr]`}
                data-fade=""
              >
                <div
                  className={String.raw`[padding-top:14px] [padding-right:14px] [padding-bottom:14px] pl-0 [border-bottom:1px_solid_var(--line)] [.is-dark_.meta_>_&]:[border-color:var(--line-light)]`}
                >
                  <dt
                    className={String.raw`text-xs [letter-spacing:.14em] uppercase font-medium [color:var(--muted)] mb-1 flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [color:var(--green)]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>{" "}
                    Location
                  </dt>
                  <dd
                    className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.4]`}
                  >
                    Near Kandy, Sri Lanka
                  </dd>
                </div>
                <div
                  className={String.raw`[padding-top:14px] [padding-right:14px] [padding-bottom:14px] pl-0 [border-bottom:1px_solid_var(--line)] [.is-dark_.meta_>_&]:[border-color:var(--line-light)]`}
                >
                  <dt
                    className={String.raw`text-xs [letter-spacing:.14em] uppercase font-medium [color:var(--muted)] mb-1 flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [color:var(--green)]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-mail"></use>
                    </svg>{" "}
                    Email
                  </dt>
                  <dd
                    className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.4]`}
                  >
                    <a href="mailto:vandercone@gmail.com" className="text-inherit no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">vandercone@gmail.com</a>
                  </dd>
                </div>
                <div
                  className={String.raw`[padding-top:14px] [padding-right:14px] [padding-bottom:14px] pl-0 [border-bottom:1px_solid_var(--line)] [.is-dark_.meta_>_&]:[border-color:var(--line-light)]`}
                >
                  <dt
                    className={String.raw`text-xs [letter-spacing:.14em] uppercase font-medium [color:var(--muted)] mb-1 flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [color:var(--green)]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-chat"></use>
                    </svg>{" "}
                    Phone
                  </dt>
                  <dd
                    className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.4]`}
                  >
                    <a href="tel:+94778072329" className="text-inherit no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">+94 77 807 2329</a>
                  </dd>
                </div>
                <div
                  className={String.raw`[padding-top:14px] [padding-right:14px] [padding-bottom:14px] pl-0 [border-bottom:1px_solid_var(--line)] [.is-dark_.meta_>_&]:[border-color:var(--line-light)]`}
                >
                  <dt
                    className={String.raw`text-xs [letter-spacing:.14em] uppercase font-medium [color:var(--muted)] mb-1 flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [color:var(--green)]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-camera"></use>
                    </svg>{" "}
                    Instagram
                  </dt>
                  <dd
                    className={String.raw`mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.4]`}
                  >
                    <a
                      className={String.raw`text-inherit`}
                      href="https://www.instagram.com/galkanda_eco/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @galkanda_eco
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section
          className={String.raw`cstrip grid [grid-template-columns:repeat(3,minmax(0,1fr))] [gap:clamp(8px,1.2vw,20px)] pt-0 [padding-right:var(--gutter)] [padding-bottom:var(--sec)] [padding-left:var(--gutter)] max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto]`}
          aria-hidden="true"
        >
          <div
            className={String.raw`frame frame--lg relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [border-radius:var(--r-lg)] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:3/4]`}
            data-reveal=""
          >
            <img
              className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
                src={images["ctt1.webp"]}
              sizes="33vw"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            className={String.raw`frame frame--lg relative overflow-hidden [background:var(--stone)] mr-0 mb-0 ml-0 [isolation:isolate] [border-radius:var(--r-lg)] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:3/4] [margin-top:6vw]`}
            data-reveal=""
          >
            <img
              className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
              src={images["ctt2.webp"]}
              sizes="33vw"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            className={String.raw`frame frame--lg relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [border-radius:var(--r-lg)] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:3/4]`}
            data-reveal=""
          >
            <img
              className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0`}
              src={images["ctt3.webp"]}
              sizes="33vw"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      </main>

      <Footer />

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
