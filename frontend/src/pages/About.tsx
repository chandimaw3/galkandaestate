import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { initExperiences } from "../behaviors/Experiences.js";
import { images } from "../images.js";
import "./About.css";

// Extend the estate’s existing visual system with alternating image-led stories
// and the same interactive experience cards used on the Experiences page.
const stories = [
  {
    "id": "estate",
    "title": "The Estate",
    "image": "Estate.jpg",
    "alt": "The countryside home at Galkanda Estate",
    "link": "/estate#spaces-h",
    "paragraphs": [
      "Galkanda Estate Eco Farm Stay is a family-inspired retreat created to share a slower, more meaningful way of experiencing Sri Lanka.",
      "Set within a working organic farm in the countryside near Kandy, the property brings together comfortable living, traditional food, farming, nature and warm Sri Lankan hospitality. Its location offers the best of both worlds: it is close enough to Kandy city to keep many of the region’s well-known cultural and historical attractions within easy reach, while remaining sufficiently removed from the bustle of the city to offer peace, privacy and tranquility.",
      "This makes Galkanda Estate Eco Farm Stay equally suited to individuals, couples and families looking for a restful base from which to explore the region. Guests can spend the day discovering Kandy and return to the calm of the estate, surrounded by greenery, open spaces and the sounds of nature."
    ]
  },
  {
    "id": "hospitality",
    "title": "A personal connection to the region",
    "image": "gather.jpg",
    "alt": "Shared moments at Galkanda Estate",
    "link": "/explore#journal-h",
    "paragraphs": [
      "Beyond the better-known attractions, we also hope to introduce guests to some of the area’s lesser-known places, local experiences and everyday aspects of rural Sri Lankan life that are often missed on a conventional itinerary. Whether it is exploring nearby villages, discovering local landscapes, experiencing traditional food production or simply spending time around the farm, the aim is to offer a richer and more personal connection to the region.",
      "The property is managed by Punya and lovingly cared for by Ravi, Sarojini and their family, who together help bring the spirit of the estate to life through their warmth, local knowledge and genuine hospitality. Together, they help ensure that guests feel welcomed, comfortable and connected to the place throughout their stay."
    ]
  },
  {
    "id": "life-on-the-farm",
    "title": "Become part of the rhythm",
    "image": "fieldwalk.jpg",
    "alt": "A walk through the estate’s paddy fields",
    "link": "/experiences#estate-activities",
    "paragraphs": [
      "Guests are invited not only to stay, but to become part of the rhythm of the estate, whether through enjoying freshly prepared farm-to-table meals, exploring the gardens and paddy fields, learning about traditional food production, or simply relaxing in the natural surroundings.",
      "Our team believes that the most memorable journeys come from authentic experiences and meaningful connections. At Galkanda Estate Eco Farm Stay, we hope to offer a glimpse into everyday rural life in Sri Lanka while creating a peaceful place where guests can relax, reconnect with nature and feel truly at home."
    ]
  },
  {
    "id": "philosophy",
    "title": "Our Philosophy",
    "image": "Interior.jpg",
    "alt": "Open living spaces at Galkanda Estate",
    "link": "/estate#feat-h",
    "paragraphs": [
      "Galkanda Estate Eco Farm Stay was created as a home shaped by a belief that the way we live should respect the natural world, use resources thoughtfully, and remain closely connected to the land that sustains us.",
      "From the beginning, sustainability guided the way the house and the surrounding estate developed. The open design of the home makes extensive use of natural light and encourages the free movement of air through the living spaces and the indoor open garden. This natural ventilation helps the house remain cool and comfortable, reducing the need for air conditioning and allowing the sounds, light and rhythms of nature to remain part of everyday life."
    ]
  },
  {
    "id": "sustainability",
    "title": "Rooted in the land and community",
    "image": "Farm2.jpg",
    "alt": "Cultivated land on the organic farm",
    "link": "/food#grow-h",
    "paragraphs": [
      "The approach to sustainability extends beyond the architecture. Solar energy supports lighting and hot water, while a biogas system provides an alternative source of energy for cooking. Around the house is a functioning dairy and organic farm where vegetables, fruits and other produce are grown, alongside the production of fresh milk, butter and curd. Wherever possible, the property produces much of what is needed on site.",
      "When something cannot be produced on the estate, it is sourced, where possible, from people within the surrounding community. Sustainability here is not only about reducing environmental impact. It is also about supporting local livelihoods, strengthening relationships with neighbouring communities, and recognising that a truly sustainable way of living should benefit both people and nature.",
      "Biodiversity is equally important. The garden, cultivated areas and natural spaces surrounding the property are managed with the intention of allowing people, agriculture and wildlife to coexist. The estate was developed with the hope of creating an environment where people could understand where food comes from, appreciate the changing seasons, recognise the value of other living things, and develop a genuine connection with nature."
    ]
  },
  {
    "id": "shared-purpose",
    "title": "A way of living, shared with you",
    "image": "Nature.jpg",
    "alt": "Green surroundings at Galkanda Estate",
    "link": "/food#meal-h",
    "paragraphs": [
      "Today, Galkanda Estate Eco Farm Stay has been opened to guests so that this experience can be shared more widely.",
      "It is not intended to be merely a place to stay. It is a place to experience, learn, reconnect and reflect. Guests can enjoy food grown on the land, experience aspects of traditional farming and food production, spend time surrounded by nature, and discover a way of living in which comfort and sustainability do not have to be opposites.",
      "The hope is that every guest leaves with more than memories of a beautiful stay. Ideally, they leave with a deeper appreciation of nature, food, community and the small choices through which we can all live a little more sustainably."
    ],
    "motto": "Live simply. Grow responsibly. Support locally. Stay connected to nature."
  }
];
const questions = [
  [
    "Are children of all ages welcome?",
    "Children of any age are welcome. A feeding chair is available. Please contact us to check cot availability."
  ],
  [
    "Can you arrange airport pickup or local transfers?",
    "We can arrange airport pick-ups and drop-offs at competitive rates. Contact us for a quote and to discuss local transfers."
  ],
  [
    "Is the property on one floor?",
    "The house is on a single floor. Please contact us to discuss any specific accessibility needs before booking."
  ],
  [
    "Does the property have a spa tub?",
    "No, the property does not have a spa tub."
  ],
  [
    "How can I contact you or book a stay?",
    "Use our contact page to enquire about availability and plan your stay."
  ]
];
function ReadMore({ to, label }: { to: string; label: string }) {
  return <Link className="about-link" to={to} aria-label={label}>Read more <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></Link>;
}
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
                src={images["Estate4.jpg"]}
                sizes="100vw"
                alt="The green countryside surrounding Galkanda Estate"
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

        <nav className="about-jump" aria-label="About page sections">{[['estate','The Estate'],['philosophy','Our Philosophy'],['estate-activities','Experiences'],['beyond','Beyond the Estate'],['about-faq','FAQs']].map(([id, label]) => <a key={id} href={'#'+id}>{label}</a>)}</nav>
<div className="about-stories">{stories.map((story, index) => <section className={'about-story' + (index % 2 ? ' about-story--reverse' : '')} id={story.id} key={story.id} aria-labelledby={story.id+'-heading'}><figure className="about-story__image"><img src={images[story.image]} alt={story.alt} loading="lazy" decoding="async" /></figure><div className="about-story__copy"><h2 id={story.id+'-heading'}>{story.title}</h2>{story.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{story.motto && <p className="about-motto"><strong>{story.motto}</strong></p>}<ReadMore to={story.link} label={'Read more about '+story.title} /></div></section>)}</div><section
          className={String.raw`sec sec--tight relative [padding-top:calc(var(--sec)_*_.6)] pr-0 [padding-bottom:calc(var(--sec)_*_.6)] pl-0`}
          id="estate-activities"
          aria-labelledby="on-h"
        >
          <div
            className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
          >
            <div
              className={String.raw`sh sh--row xs-head grid gap-6 min-[992px]:[grid-template-columns:minmax(0,7fr)_minmax(0,4fr)] min-[992px]:items-end min-[992px]:[column-gap:clamp(24px,6vw,120px)] [margin-bottom:clamp(32px,4vw,56px)]`}
            >
              <div>
                
                <h2
                  className={String.raw`h-md [font-family:var(--f-sans)] font-normal [letter-spacing:-.04em] mt-0 mr-0 mb-0 ml-0 text-inherit text-3xl lg:text-4xl xl:text-5xl [line-height:1.02]`}
                  id="on-h"
                  data-split=""
                >
                  Activities Around
                  <br />
                  the{" "}
                  <em
                    className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                  >
                    Estate.
                  </em>
                </h2>
              </div>
              <div data-fade="">
                <p
                  className={String.raw`note-pill inline-flex items-center gap-2 text-sm pt-2 [padding-right:14px] pb-2 [padding-left:14px] rounded-full [background:var(--bg-warm)] [color:var(--deep)] mt-0 mr-0 mb-0 ml-0`}
                >
                  <svg
                    className={String.raw`ic [width:1.15em] [height:1.15em] flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-leaf"></use>
                  </svg>
                  Complimentary for resident guests.
                </p>
                <p
                  className={String.raw`small xs-hint text-sm [color:var(--muted)] [.is-dark_&]:[color:rgba(244,241,234,.66)] mt-3 mr-0 mb-0 ml-0`}
                >
                  Hover a card for times and notice — or tap{" "}
                  <b className={String.raw`font-medium [color:var(--ink)]`}>
                    Details
                  </b>{" "}
                  on mobile.
                </p>
              </div>
            </div>
<div className="about-experience-intro"><p>A stay at Galkanda Estate Eco Farm Stay is designed to be more than accommodation. It is an opportunity to experience the rhythms of a working farm, connect with nature, discover how food is grown and prepared, and explore both the well-known and lesser-known attractions of the wider Kandy region.</p><p>Guests can choose to participate as much or as little as they wish. Some may enjoy taking part in farm activities, preparing a traditional meal or walking through the rice fields, while others may prefer birdwatching, relaxing with tea in the garden, or venturing further afield to discover waterfalls, mountain landscapes, cultural sites and wildlife.</p><p>Many of the experiences offered on the property are complimentary for resident guests. Food-based experiences are linked to lunch or dinner reservations, while off-site excursions can be organised through independent third-party providers.</p><ReadMore to="/experiences#estate-activities" label="Read more about activities around the estate" /></div>            <div
              className={String.raw`cgrid4 grid [grid-template-columns:repeat(2,minmax(0,1fr))] [gap:22px_12px] min-[768px]:[grid-template-columns:repeat(3,minmax(0,1fr))] min-[768px]:[gap:32px_18px] min-[1200px]:[grid-template-columns:repeat(4,minmax(0,1fr))]`}
            >
              <article className={String.raw`xc relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:1/1] [border-radius:var(--r-sm)]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src={images["main3.jpg"]}
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Green fields of the working farm"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-e0"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-clock"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            9:30–11:00 AM or 4:00–6:00 PM
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            About 1 hour
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b> One
                            day's notice
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Farm Tour
                </h3>
                <p
                  className={String.raw`xc__line mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5] [color:var(--muted)]`}
                >
                  Walk the estate with the family who work it.
                </p>

                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-e0"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:1/1] [border-radius:var(--r-sm)]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src={images["cow.jpg"]}
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="A cow being milked by hand"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-e1"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-clock"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            7:00–8:00 AM or 5:30–6:30 PM
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            30–40 minutes
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b> One
                            day's notice
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Cow Milking
                </h3>
                <p
                  className={String.raw`xc__line mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5] [color:var(--muted)]`}
                >
                  Join the morning or evening milking.
                </p>

                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-e1"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:1/1] [border-radius:var(--r-sm)]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src={images["walk.jpg"]}
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="A path through green paddy fields"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-e2"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-clock"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            7:00–9:30 AM or 4:00–6:00 PM
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            At your own pace
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b> No
                            booking needed
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Paddy Field Walks
                </h3>
                <p
                  className={String.raw`xc__line mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5] [color:var(--muted)]`}
                >
                  Narrow bunds, open sky, the sound of water.
                </p>

                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-e2"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:1/1] [border-radius:var(--r-sm)]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src={images["farmwork.jpg"]}
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Hands planting seedlings into soil"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-e3"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-clock"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Seasonal
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            Varies with the work
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            3–4 days' notice
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Vegetable Plots &amp; Rice Fields
                </h3>
                <p
                  className={String.raw`xc__line mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5] [color:var(--muted)]`}
                >
                  Plant, weed or harvest with the season.
                </p>

                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-e3"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:1/1] [border-radius:var(--r-sm)]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src={images["Dairy.jpg"]}
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Clay pots used for setting curd"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-e4"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-clock"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            11:00 AM–12:30 PM
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            About 1½ hours
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b> Two
                            days' notice
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Butter &amp; Curd Making
                </h3>
                <p
                  className={String.raw`xc__line mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5] [color:var(--muted)]`}
                >
                  Fresh milk from the estate, made into butter and curd.
                </p>

                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-e4"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:1/1] [border-radius:var(--r-sm)]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src={images["teamaking.jpg"]}
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Cooking over a traditional clay stove"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-e5"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-clock"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Lunch or dinner
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            Part of your reserved meal
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Advance notice · rates on request
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Farm-to-Fork Cooking
                </h3>
                <p
                  className={String.raw`xc__line mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5] [color:var(--muted)]`}
                >
                  Pick it, cook it, share it.
                </p>

                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-e5"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:1/1] [border-radius:var(--r-sm)]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1507750661290-a8e4f2935d3d?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="A stork-billed kingfisher on a perch"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-e6"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-clock"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            6:00–9:30 AM or 4:00–6:00 PM
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            As long as you like
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Self-guided
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Birdwatching
                </h3>
                <p
                  className={String.raw`xc__line mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5] [color:var(--muted)]`}
                >
                  Self-guided, at the edge of the fields.
                </p>

                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-e6"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [aspect-ratio:1/1] [border-radius:var(--r-sm)]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src={images["tea.jpg"]}
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Tea being poured in the garden"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-e7"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-clock"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Late afternoon
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            Unhurried
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Weather dependent
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Garden Tea
                </h3>
                <p
                  className={String.raw`xc__line mt-0 mr-0 mb-0 ml-0 text-sm [line-height:1.5] [color:var(--muted)]`}
                >
                  Ceylon tea as the light softens.
                </p>

                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-e7"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
            </div>
          </div>
        </section>

        <section
          className={String.raw`sec sec--tight sec--warm relative [padding-top:calc(var(--sec)_*_.6)] pr-0 [padding-bottom:calc(var(--sec)_*_.6)] pl-0 [background:var(--bg-warm)]`}
          id="beyond"
          aria-labelledby="by-h"
        >
          <div
            className={String.raw`container-wide max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)]`}
          >
            <div
              className={String.raw`sh sh--row xs-head grid gap-6 min-[992px]:[grid-template-columns:minmax(0,7fr)_minmax(0,4fr)] min-[992px]:items-end min-[992px]:[column-gap:clamp(24px,6vw,120px)] [margin-bottom:clamp(32px,4vw,56px)]`}
            >
              <div>
                
                <h2
                  className={String.raw`h-md [font-family:var(--f-sans)] font-normal [letter-spacing:-.04em] mt-0 mr-0 mb-0 ml-0 text-inherit text-3xl lg:text-4xl xl:text-5xl [line-height:1.02]`}
                  id="by-h"
                  data-split=""
                >
                  Experiences Beyond
                  <br />
                  the{" "}
                  <em
                    className={String.raw`[font-family:var(--f-serif)] italic font-normal [letter-spacing:-.02em]`}
                  >
                    Estate.
                  </em>
                </h2>
              </div>
              <div data-fade="">
                <p
                  className={String.raw`body text-base [line-height:1.7] [color:var(--muted)] [max-width:32em] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
                >
                  Arranged through independent local providers where applicable,
                  and paid for separately. Distances and times are from Galkanda
                  and vary with traffic.
                </p>
                <Link
                  className={String.raw`link-u text-inherit [&::after]:[content:""] [&::after]:absolute [&::after]:left-0 [&::after]:right-0 [&::after]:bottom-0 [&::after]:[height:1px] [&::after]:[background:currentColor] [&::after]:origin-left [&::after]:[transition:transform_.5s_var(--ease)] [&:hover::after]:[transform:scaleX(1)] relative inline-flex [gap:6px] items-center text-sm no-underline pt-1 pr-0 pb-1 pl-0 font-medium [&::after]:[transform:scaleX(1)] [&::after]:[opacity:.35] [&:hover::after]:opacity-100`}
                  to="/explore"
                >
                  More on Exploring Kandy{" "}
                  <i
                    className={String.raw`not-italic inline-block [transition:transform_.45s_var(--ease)] [.link-u:hover_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                  >
                    &#8599;
                  </i>
                </Link>
              </div>
            </div>
<div className="about-experience-intro"><p>Galkanda Estate Eco Farm Stay offers the tranquillity of a rural setting while remaining close enough to Kandy city for guests to explore many of its best-known cultural attractions with ease.</p><p>Guests can spend part of the day discovering Kandy and return to the peace and quiet of the estate afterwards. The surrounding region also offers waterfalls, scenic countryside, mountain landscapes and cycling experiences, while the property's access to the A9 makes longer day trips to Sigiriya and nearby national parks easier to organise.</p><ReadMore to="/experiences#beyond" label="Read more about experiences beyond the estate" /></div>            <div
              className={String.raw`cgrid3 grid [grid-template-columns:repeat(2,minmax(0,1fr))] [gap:22px_12px] min-[768px]:[grid-template-columns:repeat(3,minmax(0,1fr))] min-[768px]:[gap:32px_18px]`}
            >
              <article className={String.raw`xc xc--wide relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:4/3]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="The Temple of the Tooth beside Kandy lake"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={String.raw`xc__tag absolute [left:10px] [top:10px] [z-index:2] text-xs [letter-spacing:.14em] uppercase [color:var(--ink)] rounded-full [padding-top:5px] [padding-right:10px] [padding-bottom:5px] [padding-left:10px] [background:rgba(255,255,255,.92)]`}
                  >
                    Culture
                  </span>
                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-b0"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-sun"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Early morning or the evening ceremony
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            1–2 hours
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-cash"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Est. price:
                            </b>{" "}
                            [Entry fee]
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Shoulders and knees covered
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Temple of the Tooth
                </h3>

                <ul
                  className={String.raw`xc__face list-none mt-2 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:4px_14px] text-xs [color:var(--ink)]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    [x km]
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-car"></use>
                    </svg>
                    [~x min]
                  </li>
                </ul>
                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-b0"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc xc--wide relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:4/3]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Kandy lake and the old town"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={String.raw`xc__tag absolute [left:10px] [top:10px] [z-index:2] text-xs [letter-spacing:.14em] uppercase [color:var(--ink)] rounded-full [padding-top:5px] [padding-right:10px] [padding-bottom:5px] [padding-left:10px] [background:rgba(255,255,255,.92)]`}
                  >
                    Kandy
                  </span>
                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-b1"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-sun"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Late afternoon
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            2–3 hours
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-cash"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Est. price:
                            </b>{" "}
                            Free to walk
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Pairs well with the temple
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Kandy Lake &amp; City
                </h3>

                <ul
                  className={String.raw`xc__face list-none mt-2 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:4px_14px] text-xs [color:var(--ink)]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    [x km]
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-car"></use>
                    </svg>
                    [~x min]
                  </li>
                </ul>
                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-b1"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc xc--wide relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:4/3]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Great trees on the lawns of the botanical gardens"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={String.raw`xc__tag absolute [left:10px] [top:10px] [z-index:2] text-xs [letter-spacing:.14em] uppercase [color:var(--ink)] rounded-full [padding-top:5px] [padding-right:10px] [padding-bottom:5px] [padding-left:10px] [background:rgba(255,255,255,.92)]`}
                  >
                    Nature
                  </span>
                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-b2"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-sun"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Morning
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            2–3 hours
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-cash"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Est. price:
                            </b>{" "}
                            [Entry fee]
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Large grounds — wear comfortable shoes
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Royal Botanical Gardens
                </h3>

                <ul
                  className={String.raw`xc__face list-none mt-2 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:4px_14px] text-xs [color:var(--ink)]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    [x km]
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-car"></use>
                    </svg>
                    [~x min]
                  </li>
                </ul>
                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-b2"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc xc--wide relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:4/3]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Traditional Kandyan dancers performing"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={String.raw`xc__tag absolute [left:10px] [top:10px] [z-index:2] text-xs [letter-spacing:.14em] uppercase [color:var(--ink)] rounded-full [padding-top:5px] [padding-right:10px] [padding-bottom:5px] [padding-left:10px] [background:rgba(255,255,255,.92)]`}
                  >
                    Culture
                  </span>
                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-b3"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-sun"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Early evening
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            About 1 hour
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-cash"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Est. price:
                            </b>{" "}
                            [Ticket price]
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Arrive early for good seats
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Kandyan Cultural Show
                </h3>

                <ul
                  className={String.raw`xc__face list-none mt-2 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:4px_14px] text-xs [color:var(--ink)]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    [x km]
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-car"></use>
                    </svg>
                    [~x min]
                  </li>
                </ul>
                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-b3"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc xc--wide relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:4/3]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1749527520635-e375ec34c783?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1749527520635-e375ec34c783?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1749527520635-e375ec34c783?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1749527520635-e375ec34c783?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1749527520635-e375ec34c783?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Clouds moving over the Knuckles range"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={String.raw`xc__tag absolute [left:10px] [top:10px] [z-index:2] text-xs [letter-spacing:.14em] uppercase [color:var(--ink)] rounded-full [padding-top:5px] [padding-right:10px] [padding-bottom:5px] [padding-left:10px] [background:rgba(255,255,255,.92)]`}
                  >
                    Nature
                  </span>
                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-b4"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-sun"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Early morning
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            Half or full day
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-cash"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Est. price:
                            </b>{" "}
                            [Guide fee]
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Best with a local guide
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Knuckles Mountain Range
                </h3>

                <ul
                  className={String.raw`xc__face list-none mt-2 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:4px_14px] text-xs [color:var(--ink)]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    [x km]
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-car"></use>
                    </svg>
                    [~x min]
                  </li>
                </ul>
                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-b4"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc xc--wide relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:4/3]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1683604393889-60baf8b7eb15?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1683604393889-60baf8b7eb15?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1683604393889-60baf8b7eb15?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1683604393889-60baf8b7eb15?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1683604393889-60baf8b7eb15?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="A waterfall in lush green forest"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={String.raw`xc__tag absolute [left:10px] [top:10px] [z-index:2] text-xs [letter-spacing:.14em] uppercase [color:var(--ink)] rounded-full [padding-top:5px] [padding-right:10px] [padding-bottom:5px] [padding-left:10px] [background:rgba(255,255,255,.92)]`}
                  >
                    Nature
                  </span>
                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-b5"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-sun"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Morning
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            Half day
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-cash"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Est. price:
                            </b>{" "}
                            [Driver / guide]
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Fuller after the rains
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Waterfalls &amp; Countryside
                </h3>

                <ul
                  className={String.raw`xc__face list-none mt-2 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:4px_14px] text-xs [color:var(--ink)]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    [x km]
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-car"></use>
                    </svg>
                    [~x min]
                  </li>
                </ul>
                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-b5"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc xc--wide relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:4/3]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1786538930987-73aed056ddb8?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Bicycle parked beside a rice field"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={String.raw`xc__tag absolute [left:10px] [top:10px] [z-index:2] text-xs [letter-spacing:.14em] uppercase [color:var(--ink)] rounded-full [padding-top:5px] [padding-right:10px] [padding-bottom:5px] [padding-left:10px] [background:rgba(255,255,255,.92)]`}
                  >
                    Guided tour
                  </span>
                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-b6"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-sun"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Early morning
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            2–4 hours
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-cash"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Est. price:
                            </b>{" "}
                            [Tour price]
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            With an independent cycling guide
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Guided Village Cycling
                </h3>

                <ul
                  className={String.raw`xc__face list-none mt-2 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:4px_14px] text-xs [color:var(--ink)]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    [x km]
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-car"></use>
                    </svg>
                    [~x min]
                  </li>
                </ul>
                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-b6"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc xc--wide relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:4/3]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="Sigiriya rock fortress above the forest"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={String.raw`xc__tag absolute [left:10px] [top:10px] [z-index:2] text-xs [letter-spacing:.14em] uppercase [color:var(--ink)] rounded-full [padding-top:5px] [padding-right:10px] [padding-bottom:5px] [padding-left:10px] [background:rgba(255,255,255,.92)]`}
                  >
                    Day trip
                  </span>
                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-b7"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-sun"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Start early to avoid the heat
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            Full day
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-cash"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Est. price:
                            </b>{" "}
                            [Entry fee]
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Steep climb — bring water
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Sigiriya
                </h3>

                <ul
                  className={String.raw`xc__face list-none mt-2 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:4px_14px] text-xs [color:var(--ink)]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    [x km]
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-car"></use>
                    </svg>
                    [~x min]
                  </li>
                </ul>
                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-b7"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
              <article className={String.raw`xc xc--wide relative min-w-0`}>
                <div className={String.raw`xc__top relative mb-3`}>
                  <div
                    className={String.raw`frame relative overflow-hidden [background:var(--stone)] mt-0 mr-0 mb-0 ml-0 [isolation:isolate] [&.img-missing::after]:[content:attr(data-ph)] [&.img-missing::after]:absolute [&.img-missing::after]:top-0 [&.img-missing::after]:right-0 [&.img-missing::after]:bottom-0 [&.img-missing::after]:left-0 [&.img-missing::after]:grid [&.img-missing::after]:place-items-center [&.img-missing::after]:pt-6 [&.img-missing::after]:pr-6 [&.img-missing::after]:pb-6 [&.img-missing::after]:pl-6 [&.img-missing::after]:text-center [&.img-missing::after]:text-xs [&.img-missing::after]:[letter-spacing:.06em] [&.img-missing::after]:[color:var(--muted)] [&.img-missing::after]:[background:repeating-linear-gradient(135deg,var(--stone)_0_14px,#d5cfc2_14px_15px)] [border-radius:var(--r-sm)] [aspect-ratio:4/3]`}
                  >
                    <img
                      className={String.raw`max-w-full block w-full h-full object-cover [.frame.img-missing_>_&]:opacity-0 [transition:transform_.9s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_.xc\_\_top_.frame_&]:[transform:scale(1.035)]`}
                      src="https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78"
                      srcSet="https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=640&amp;q=78 640w, https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=1024&amp;q=78 1024w, https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=1600&amp;q=78 1600w, https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&amp;fit=crop&amp;w=2400&amp;q=78 2400w"
                      sizes="(min-width: 1200px) 24vw, (min-width: 768px) 32vw, 48vw"
                      alt="A herd of elephants on the grasslands"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span
                    className={String.raw`xc__tag absolute [left:10px] [top:10px] [z-index:2] text-xs [letter-spacing:.14em] uppercase [color:var(--ink)] rounded-full [padding-top:5px] [padding-right:10px] [padding-bottom:5px] [padding-left:10px] [background:rgba(255,255,255,.92)]`}
                  >
                    Wildlife
                  </span>
                  <div
                    className={String.raw`xc__drawer grid [grid-template-rows:0fr] [transition:grid-template-rows_.55s_var(--ease)] [.xc.is-open_&]:[grid-template-rows:1fr] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:absolute [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[left:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[right:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[bottom:10px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[z-index:3] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:block [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[background:rgba(23,26,21,.82)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[-webkit-backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[backdrop-filter:blur(8px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#F4F1EA] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[border-radius:12px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-top:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-right:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pb-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[padding-left:14px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:opacity-0 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transform:translateY(14px)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[transition:opacity_.45s_var(--ease),transform_.55s_var(--ease)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pointer-events-none [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:hover_&]:[transform:none] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:opacity-100 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[.xc:focus-within_&]:[transform:none]`}
                    id="xd-b8"
                  >
                    <div className={String.raw`overflow-hidden`}>
                      <ul
                        className={String.raw`xc__info list-none mt-0 mr-0 mb-0 ml-0 pr-0 pb-0 pl-0 grid [gap:7px] text-xs [line-height:1.4] pt-3 [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:pt-0`}
                      >
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-sun"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Best time:
                            </b>{" "}
                            Afternoon safari, dry season
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-hourglass"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Duration:</b>{" "}
                            Full day with travel
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-cash"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>
                              Est. price:
                            </b>{" "}
                            [Jeep &amp; park fees]
                          </span>
                        </li>
                        <li className={String.raw`flex [gap:9px] items-start`}>
                          <svg
                            className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:15px] [height:15px] [margin-top:1px] [color:var(--earth)] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:[color:#C9A27C]`}
                            aria-hidden="true"
                            focusable="false"
                          >
                            <use href="#i-info"></use>
                          </svg>
                          <span>
                            <b className={String.raw`font-medium`}>Note:</b>{" "}
                            Large elephant gatherings in the dry months
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3
                  className={String.raw`[font-family:var(--f-sans)] text-inherit text-base 2xl:text-xl [letter-spacing:-.02em] [line-height:1.2] mt-0 mr-0 mb-1 ml-0 font-medium`}
                >
                  Minneriya / Kaudulla Safari
                </h3>

                <ul
                  className={String.raw`xc__face list-none mt-2 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-0 flex flex-wrap [gap:4px_14px] text-xs [color:var(--ink)]`}
                >
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-pin"></use>
                    </svg>
                    [x km]
                  </li>
                  <li
                    className={String.raw`inline-flex items-center [gap:6px]`}
                  >
                    <svg
                      className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [color:var(--green)] [width:15px] [height:15px]`}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href="#i-car"></use>
                    </svg>
                    [~x min]
                  </li>
                </ul>
                <button
                  className={String.raw`xc__more cursor-pointer inline-flex items-center [gap:6px] [margin-top:10px] text-xs font-medium [letter-spacing:.04em] [padding-top:6px] pr-0 [padding-bottom:6px] pl-0 [border-bottom:1px_solid_var(--line)] focus-visible:[outline:2px_solid_var(--earth)] focus-visible:[outline-offset:2px] [@media((hover:hover)_and_(pointer:fine)_and_(min-width:992px))]:hidden`}
                  type="button"
                  aria-expanded="false"
                  aria-controls="xd-b8"
                >
                  <span>Details</span>
                  <svg
                    className={String.raw`ic flex-none [stroke:currentColor] [fill:none] [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round] [vertical-align:-.2em] [width:14px] [height:14px] [transition:transform_.5s_var(--ease)] [.xc.is-open_.xc\_\_more_&]:[transform:rotate(45deg)]`}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use href="#i-plus"></use>
                  </svg>
                </button>
              </article>
            </div>
          </div>
        </section><section className="about-pace" id="your-pace" aria-labelledby="pace-heading"><div><h2 id="pace-heading">Experience the Region<br /><em>at Your Own Pace.</em></h2><ReadMore to="/explore#journal-h" label="Read more about exploring the region" /></div><div><p>The aim is not to create a fixed itinerary, but to give guests the freedom to shape their stay around their own interests.</p><p>Some may prefer to spend most of their time at the estate, enjoying farm activities, birdwatching and quiet walks. Others may wish to combine these experiences with waterfalls, cycling, mountain scenery, Kandy's cultural attractions, Sigiriya or a wildlife excursion.</p><p>For individuals, couples and families alike, Galkanda Estate Eco Farm Stay offers a base from which to experience both the familiar and lesser-known sides of Sri Lanka.</p><p>The hope is that guests leave with more than photographs and memories of the places they visited. They leave having experienced something of the region's food, farming, nature, culture, wildlife, landscapes and local communities.</p></div></section>
<section className="about-faq" id="about-faq" aria-labelledby="about-faq-heading"><div><h2 id="about-faq-heading">A few things<br /><em>before you stay.</em></h2><p>Frequently asked questions</p><Link className="about-link" to="/contact#enquiry">Ask us a question</Link></div><div>{questions.map(([question, answer], index) => <details key={question}><summary>{question}<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-7-7v14" /></svg></summary><p>{answer}{index === 4 && <> <Link to="/contact#enquiry">Contact us to book.</Link></>}</p></details>)}</div></section>
<section className="about-holiday" id="planning" aria-labelledby="holiday-heading"><h2 id="holiday-heading">Planning Your<br /><em>Sri Lankan Holiday?</em></h2><p>Considering Sri Lanka for your next holiday but not sure where to begin? We would be happy to help.</p><p>Whether you are interested in culture, wildlife, nature, food, relaxation or a combination of experiences, we can help put together a suggested itinerary based on your budget, available time and holiday priorities.</p><Link className="about-link" to="/contact#enquiry">Plan your holiday <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></Link></section></main>      <footer
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
