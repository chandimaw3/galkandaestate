import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { initExperiences } from "../behaviors/Experiences.js";
import { images } from "../images.js";
import "./About.css";

const storyParagraphs = [
  "Galkanda Estate Eco Farm Stay is a family-inspired retreat created to share a slower, more meaningful way of experiencing Sri Lanka \u2014 one that brings together nature, traditional food, farming, sustainability and warm Sri Lankan hospitality.",
  "Set within a working organic farm in the countryside near Kandy, the estate offers the best of both worlds. It is close enough to the city for guests to easily explore Kandy\u2019s cultural and historical attractions, yet sufficiently removed from the bustle to offer peace, privacy and tranquillity.",
  "The idea behind the estate has always been about more than creating a comfortable home. It grew from a belief that the way we live should respect the natural world, use resources thoughtfully and remain connected to the land that sustains us.",
  "That philosophy shaped both the house and the farm around it.",
  "The open design of the home makes extensive use of natural light and encourages air to move freely through the living spaces and indoor open garden. Natural ventilation helps keep the house cool and comfortable while allowing the sounds, light and rhythms of nature to remain part of everyday life.",
  "Sustainability extends throughout the estate. Solar energy supports lighting and hot water, while a biogas system provides an alternative source of energy for cooking. Around the house is a functioning dairy and organic farm producing vegetables, fruits, fresh milk, butter and curd. Wherever possible, what is needed is grown or produced on the estate.",
  "What cannot be produced here is sourced, wherever possible, from people in the surrounding community. For us, sustainability is not simply about reducing environmental impact. It is also about supporting local livelihoods, strengthening relationships with neighbouring communities and recognising that a sustainable way of living should benefit both people and nature.",
  "Biodiversity is equally important. The gardens, cultivated areas and natural spaces around the property are managed with the hope that agriculture, people and wildlife can coexist. The estate offers an opportunity to understand where food comes from, observe the changing seasons, appreciate other living things and rediscover a connection with the natural world.",
  "Today, we have opened Galkanda Estate to guests so that this way of life can be shared.",
  "Guests are invited not simply to stay, but to become part of the rhythm of the estate. They may enjoy freshly prepared farm-to-table meals, walk through the gardens and paddy fields, experience aspects of traditional farming and food production, watch birds and other wildlife, or simply find a quiet place to relax surrounded by nature.",
  "The experience can also extend beyond the estate. While Kandy\u2019s well-known attractions are within easy reach, we hope to introduce guests to some of the region\u2019s lesser-known places, local landscapes, villages and everyday aspects of rural Sri Lankan life that can easily be missed on a conventional itinerary.",
  "The property is managed by Punya and lovingly cared for by Ravi, Sarojini and their family. Their warmth, local knowledge and genuine hospitality are an important part of the Galkanda experience, helping guests feel welcomed, comfortable and connected to the place throughout their stay.",
  "Ultimately, Galkanda Estate Eco Farm Stay is not intended to be merely a place to sleep while visiting Kandy. It is a place to experience, learn, reconnect and slow down.",
  "We hope guests leave not only with memories of a peaceful stay, but with a deeper appreciation of nature, food, community and the small choices through which all of us can live a little more sustainably."
];
const team = [
  { name: "Ravi", role: "Estate care & hospitality", initial: "R", photo: "https://i.pravatar.cc/600?img=12", text: "Ravi lovingly cares for the estate alongside Sarojini and their family, helping guests feel welcomed and connected to the place.", value: "Local knowledge" },
  { name: "Sarojini", role: "Estate care & hospitality", initial: "S", photo: "https://i.pravatar.cc/600?img=47", text: "Sarojini and her family bring warmth and genuine Sri Lankan hospitality to everyday life at Galkanda.", value: "Warm hospitality" },
  { name: "Their family", role: "The heart of the estate", initial: "G", photo: "https://i.pravatar.cc/600?img=49", text: "Together, the family helps make Galkanda a comfortable, welcoming place to slow down and share the rhythm of the estate.", value: "A personal welcome" }
];

export default function About() {
  useLayoutEffect(initExperiences, []);
  return (<>
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
          className={String.raw`nav-links hidden list-none mt-0 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 [gap:clamp(14px,1.8vw,28px)] min-[992px]:flex`}
        >
          <li>
            <Link
              className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)]`}
              to="/about" aria-current="page"
            >About</Link>
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
              className={String.raw`text-inherit relative no-underline text-sm [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [.nav-links_&::after]:[content:""] [.nav-links_&::after]:absolute [.nav-links_&::after]:left-0 [.nav-links_&::after]:right-0 [.nav-links_&::after]:bottom-0 [.nav-links_&::after]:[height:1px] [.nav-links_&::after]:[background:currentColor] [.nav-links_&::after]:[transform:scaleX(0)] [.nav-links_&::after]:origin-left [.nav-links_&::after]:[transition:transform_.5s_var(--ease)] [.nav-links_&:hover::after]:[transform:scaleX(1)] [.nav-links_&[]::after]:[transform:scaleX(1)]`}
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
            to="/about" aria-current="page"
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
            className={String.raw`block overflow-hidden no-underline text-4xl md:text-7xl [letter-spacing:-.045em] [line-height:1.06] [padding-top:.04em] pr-0 [padding-bottom:.04em] pl-0 [color:var(--earth)]`}
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

    <main id="main" className="about-page"><section
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
            src={images["Interior.jpg"]}
            sizes="100vw"
            alt="Open living spaces overlooking the gardens at Galkanda Estate"
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

            <h1
              className={String.raw`h-xl [font-family:var(--f-sans)] font-normal [letter-spacing:-.04em] mt-0 mr-0 mb-0 ml-0 text-inherit [line-height:.94] text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl`}
            >
              A Slower Way<br />to Experience{" "}
              <em
                className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
              > Sri Lanka. </em>
            </h1>
          </div>
          <div
            className={String.raw`phero__aside text-base [line-height:1.6] [max-width:24em] [color:rgba(255,255,255,.86)]`}
            data-hero-fade=""
          >
            About Galkanda Estate Eco Farm Stay — a family-inspired retreat where farming, nature and warm Sri Lankan hospitality come together.
          </div>
        </div>
      </div>
    </section>

      <section className="about-story" id="estate" aria-labelledby="story-heading">
        <h2 id="story-heading">Our Story &amp; Philosophy</h2>
        <div className="about-story__columns">
          <div>{storyParagraphs.slice(0, 7).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          <div>{storyParagraphs.slice(7).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>
      <section className="about-philosophy" id="philosophy" aria-label="Our philosophy">
        <p>Live simply.<br />Grow responsibly.<br />Support locally.<br />Stay connected to <em>nature.</em></p>
      </section>
      <section className="about-team" id="team" aria-labelledby="team-heading">
        <div className="about-team__heading">
          <span className="about-team__eyebrow" data-fade="">A personal welcome</span>
          <h2 id="team-heading" data-split="">The people behind <em>your stay.</em></h2>
          <p data-fade="">Meet the team at Galkanda Estate.</p>
        </div>
        <article className="about-team__host" aria-labelledby="host-name">
          <div className="about-team__portrait about-team__host-portrait" data-reveal="">
            <img className="about-team__photo" src="https://i.pravatar.cc/600?img=11" alt="Temporary host portrait; not a photo of Punya" loading="lazy" decoding="async" />
            <span className="about-team__placeholder">Temporary photo</span>
          </div>
          <div className="about-team__host-copy" data-fade="">
            <span className="about-team__host-label">Your host</span>
            <h3 id="host-name">Meet <em>Punya.</em></h3>
            <span className="about-team__role">Property manager</span>
            <p>Punya manages Galkanda Estate, where a family-inspired way of life brings nature, farming and warm Sri Lankan hospitality together.</p>
            <Link className="about-team__host-link" to="/contact">Plan your stay <span aria-hidden="true">&#8599;</span></Link>
          </div>
        </article>
        <div className="about-team__cards">
          {team.map((member) => (
            <article className="about-team__card" key={member.name}>
              <div className="about-team__portrait" data-reveal="">
                <img className="about-team__photo" src={member.photo} alt={`Temporary portrait placeholder for ${member.name}`} loading="lazy" decoding="async" />
                <span className="about-team__placeholder">Temporary photo</span>
              </div>
              <div className="about-team__card-copy" data-fade="">
                <h3>{member.name}</h3>
                <span className="about-team__role">{member.role}</span>
                <p>{member.text}</p>
              </div>
            </article>
          ))}
        </div>      </section>
      <section className="about-stay" aria-labelledby="stay-heading" data-header="light">
        <img src={images["Estate.jpg"]} alt="The countryside home at Galkanda Estate" loading="lazy" decoding="async" />
        <div className="about-stay__copy"><h2 id="stay-heading">Make Galkanda<br />Your Home in <em>Kandy.</em></h2><p>Enquire about dates, guests and the experiences you&#8217;d like.</p><div className="about-stay__actions"><Link to="/contact#enquiry">Plan Your Stay <span aria-hidden="true">&#8599;</span></Link><a href="tel:+94711659004">Call now <span aria-hidden="true">&#8599;</span></a></div></div>
      </section>
    </main>      <footer
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
                to="/about" aria-current="page"
              >About</Link>
            </li>
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
  </>);
}
