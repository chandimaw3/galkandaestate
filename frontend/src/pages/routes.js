import { lazy } from "react";

const About = lazy(() => import("./About.tsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const ContactV2 = lazy(() => import("./ContactV2.jsx"));
const Estate = lazy(() => import("./Estate.jsx"));
const Experiences = lazy(() => import("./Experiences.jsx"));
const Explore = lazy(() => import("./Explore.jsx"));
const Food = lazy(() => import("./Food.jsx"));
const Gallery = lazy(() => import("./Gallery.jsx"));
const Home = lazy(() => import("./Home.jsx"));
const ExploreDetail = lazy(() => import("./explore/ExploreDetail.jsx"));

// These local values are used as a browser-side fallback if Contentful is
// temporarily unavailable. Published pageSeo entries are the source of truth.
export const pages = [
  {
    path: "/contact-v2",
    Component: ContactV2,
    title: "Contact Galkanda Estate | Plan Your Stay",
    description: "Contact Galkanda Estate to ask about planning your stay near Kandy.",
  },
  {
    path: "/about",
    Component: About,
    title: "About Galkanda Estate Eco Farm Stay, Kandy",
    description: "Meet the people and values behind Galkanda Estate, a family-inspired retreat near Kandy.",
  },
  {
    path: "/contact",
    Component: Contact,
    title: "Plan Your Stay | Contact Galkanda Estate, Kandy",
    description: "Contact Galkanda Estate near Kandy to plan your stay and get help with your Sri Lankan itinerary.",
    image: "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?auto=format&fit=crop&w=1200&q=78",
  },
  {
    path: "/villa",
    Component: Estate,
    title: "The Estate | Countryside Home Near Kandy — Galkanda Estate",
    description: "Stay in a countryside home near Kandy, with bedrooms, gardens, terraces and a private kitchen at Galkanda Estate.",
    image: "https://images.unsplash.com/photo-1783334418852-0b86d67d4c01?auto=format&fit=crop&w=1200&q=78",
  },
  {
    path: "/experiences",
    Component: Experiences,
    title: "Farm Activities and Experiences Near Kandy | Galkanda Estate",
    description: "Discover farm tours, field walks, dairy making, cooking and garden tea at Galkanda Estate near Kandy.",
    image: "https://images.unsplash.com/photo-1642518939037-4652638c17a7?auto=format&fit=crop&w=1200&q=78",
  },
  {
    path: "/explore",
    Component: Explore,
    title: "Explore Kandy | Things to Do Near Galkanda Estate",
    description: "Discover places to visit near Kandy, with local tips from Galkanda Estate.",
    image: "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1200&q=78",
  },
  {
    path: "/food",
    Component: Food,
    title: "Food and Farm | Galkanda Estate Near Kandy",
    description: "Discover home-grown vegetables, fresh dairy and traditional Sri Lankan cooking at Galkanda Estate.",
    image: "https://images.unsplash.com/photo-1743674453123-93356ade2891?auto=format&fit=crop&w=1200&q=78",
  },
  {
    path: "/gallery",
    Component: Gallery,
    title: "Galkanda Estate Photo Gallery | Farm Stay Near Kandy",
    description: "View photos of the house, rooms, farm, food, gardens and countryside at Galkanda Estate near Kandy.",
    image: "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1200&q=78",
  },
  {
    path: "/",
    Component: Home,
    title: "Galkanda Estate Eco Farm Stay | Near Kandy, Sri Lanka",
    description: "Stay in a countryside home on a working farm near Kandy, with farm-to-table food, nature and Sri Lankan hospitality.",
    image: "https://images.unsplash.com/photo-1676794944553-399cade9cd39?auto=format&fit=crop&w=1200&q=78",
  },
  {
    path: "/explore/:slug",
    Component: ExploreDetail,
    title: "Explore Kandy | Galkanda Estate",
    description: "Explore places and experiences near Galkanda Estate, Kandy.",
  },
];
