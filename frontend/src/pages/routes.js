import { lazy } from "react";
const About = lazy(() => import("./About.tsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const Estate = lazy(() => import("./Estate.jsx"));
const Experiences = lazy(() => import("./Experiences.jsx"));
const Explore = lazy(() => import("./Explore.jsx"));
const Food = lazy(() => import("./Food.jsx"));
const Gallery = lazy(() => import("./Gallery.jsx"));
const Home = lazy(() => import("./Home.jsx"));
const ExploreDetail = lazy(() => import("./explore/ExploreDetail.jsx"));

export const pages = [
  { path: "/about", Component: About, title: "About | Galkanda Estate Eco Farm Stay, Kandy", description: "Meet Galkanda Estate: our family-inspired retreat, sustainable philosophy, farm experiences and warm Sri Lankan hospitality near Kandy.", schema: { "@context": "https://schema.org", "@type": "AboutPage", name: "About Galkanda Estate Eco Farm Stay" } },
  {
    path: "/contact",
    Component: Contact,
    title: "Plan Your Stay | Contact Galkanda Estate, Kandy",
    description:
      "Plan your stay at Galkanda Estate near Kandy — send an enquiry, arrange airport transfers and get help shaping your Sri Lankan itinerary.",
    image:
      "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?auto=format&fit=crop&w=1200&q=78",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Contact — Galkanda Estate",
      description:
        "Plan your stay at Galkanda Estate near Kandy — send an enquiry, arrange airport transfers and get help shaping your Sri Lankan itinerary.",
      url: "https://www.example.com/contact.html",
      isPartOf: {
        "@type": "WebSite",
        name: "Galkanda Estate Eco Farm Stay",
        url: "https://www.example.com/",
      },
      about: {
        "@type": "LodgingBusiness",
        name: "Galkanda Estate Eco Farm Stay",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kandy",
          addressCountry: "LK",
        },
      },
    },
  },
  {
    path: "/estate",
    Component: Estate,
    title:
      "The Estate | 3-Bedroom Countryside Home Near Kandy — Galkanda Estate",
    description:
      "Inside Galkanda Estate: a single-floor countryside home near Kandy with 3 king bedrooms, 2 bathrooms and room for up to 6 guests, plus gardens, terraces and a private kitchen.",
    image:
      "https://images.unsplash.com/photo-1783334418852-0b86d67d4c01?auto=format&fit=crop&w=1200&q=78",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "The Estate — Galkanda Estate",
      description:
        "Inside Galkanda Estate: a single-floor countryside home near Kandy with 3 king bedrooms, 2 bathrooms and room for up to 6 guests, plus gardens, terraces and a private kitchen.",
      url: "https://www.example.com/estate.html",
      isPartOf: {
        "@type": "WebSite",
        name: "Galkanda Estate Eco Farm Stay",
        url: "https://www.example.com/",
      },
      about: {
        "@type": "LodgingBusiness",
        name: "Galkanda Estate Eco Farm Stay",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kandy",
          addressCountry: "LK",
        },
      },
    },
  },
  {
    path: "/experiences",
    Component: Experiences,
    title:
      "Experiences | Farm Activities & Things to Do Near Kandy — Galkanda Estate",
    description:
      "Farm tours, cow milking, paddy field walks, butter and curd making, farm-to-fork cooking and garden tea at Galkanda Estate — plus the best things to do near Kandy.",
    image:
      "https://images.unsplash.com/photo-1642518939037-4652638c17a7?auto=format&fit=crop&w=1200&q=78",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Experiences — Galkanda Estate",
      description:
        "Farm tours, cow milking, paddy field walks, butter and curd making, farm-to-fork cooking and garden tea at Galkanda Estate — plus the best things to do near Kandy.",
      url: "https://www.example.com/experiences.html",
      isPartOf: {
        "@type": "WebSite",
        name: "Galkanda Estate Eco Farm Stay",
        url: "https://www.example.com/",
      },
      about: {
        "@type": "LodgingBusiness",
        name: "Galkanda Estate Eco Farm Stay",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kandy",
          addressCountry: "LK",
        },
      },
    },
  },
  {
    path: "/explore",
    Component: Explore,
    title: "Explore Kandy | Things to Do Near Galkanda Estate",
    description:
      "Things to do near Kandy, curated by Galkanda Estate — the Temple of the Tooth, Kandy Lake, Udawattakele, tea estates, the Knuckles range, Sigiriya and more.",
    image:
      "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1200&q=78",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Explore Kandy — a local travel journal by Galkanda Estate",
      url: "https://www.example.com/explore.html",
      hasPart: [
        {
          "@type": "Article",
          headline: "Temple of the Tooth, Kandy",
          url: "https://www.example.com/explore/temple-of-the-tooth.html",
        },
        {
          "@type": "Article",
          headline: "Kandy Lake Walk",
          url: "https://www.example.com/explore/kandy-lake.html",
        },
        {
          "@type": "Article",
          headline: "Udawattakele Forest Reserve",
          url: "https://www.example.com/explore/udawattakele-forest.html",
        },
        {
          "@type": "Article",
          headline: "Royal Botanical Gardens, Peradeniya",
          url: "https://www.example.com/explore/royal-botanical-gardens.html",
        },
        {
          "@type": "Article",
          headline: "Kandyan Cultural Dance Show",
          url: "https://www.example.com/explore/kandyan-cultural-show.html",
        },
        {
          "@type": "Article",
          headline: "Hill Country Tea Estate Visit",
          url: "https://www.example.com/explore/tea-estate-visit.html",
        },
        {
          "@type": "Article",
          headline: "Kandy Central Market",
          url: "https://www.example.com/explore/kandy-central-market.html",
        },
        {
          "@type": "Article",
          headline: "Knuckles Mountain Range",
          url: "https://www.example.com/explore/knuckles-mountain-range.html",
        },
        {
          "@type": "Article",
          headline: "Ambuluwawa Tower",
          url: "https://www.example.com/explore/ambuluwawa-tower.html",
        },
        {
          "@type": "Article",
          headline: "Sigiriya Rock Fortress Day Trip",
          url: "https://www.example.com/explore/sigiriya-day-trip.html",
        },
        {
          "@type": "Article",
          headline: "Minneriya & Kaudulla Elephant Safari",
          url: "https://www.example.com/explore/minneriya-kaudulla-safari.html",
        },
        {
          "@type": "Article",
          headline: "Sri Lankan Cooking Class",
          url: "https://www.example.com/explore/sri-lankan-cooking-class.html",
        },
      ],
    },
  },
  {
    path: "/food",
    Component: Food,
    title: "Food & Farm | Farm-to-Table at Galkanda Estate, Kandy",
    description:
      "Farm-to-table food at Galkanda Estate near Kandy: home-grown vegetables, fresh dairy, butter and curd, and traditional Sri Lankan cooking.",
    image:
      "https://images.unsplash.com/photo-1743674453123-93356ade2891?auto=format&fit=crop&w=1200&q=78",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Food &amp; Farm — Galkanda Estate",
      description:
        "Farm-to-table food at Galkanda Estate near Kandy: home-grown vegetables, fresh dairy, butter and curd, and traditional Sri Lankan cooking.",
      url: "https://www.example.com/food.html",
      isPartOf: {
        "@type": "WebSite",
        name: "Galkanda Estate Eco Farm Stay",
        url: "https://www.example.com/",
      },
      about: {
        "@type": "LodgingBusiness",
        name: "Galkanda Estate Eco Farm Stay",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kandy",
          addressCountry: "LK",
        },
      },
    },
  },
  {
    path: "/gallery",
    Component: Gallery,
    title: "Gallery | Galkanda Estate Eco Farm Stay, Kandy",
    description:
      "Photographs of Galkanda Estate near Kandy — the house, bedrooms, the organic farm, food, nature and the countryside around Kandy.",
    image:
      "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1200&q=78",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Gallery — Galkanda Estate",
      description:
        "Photographs of Galkanda Estate near Kandy — the house, bedrooms, the organic farm, food, nature and the countryside around Kandy.",
      url: "https://www.example.com/gallery.html",
      isPartOf: {
        "@type": "WebSite",
        name: "Galkanda Estate Eco Farm Stay",
        url: "https://www.example.com/",
      },
      about: {
        "@type": "LodgingBusiness",
        name: "Galkanda Estate Eco Farm Stay",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kandy",
          addressCountry: "LK",
        },
      },
    },
  },
  {
    path: "/",
    Component: Home,
    title:
      "Galkanda Estate Eco Farm Stay | Countryside Stay Near Kandy, Sri Lanka",
    description:
      "A private countryside home on a working organic farm near Kandy, Sri Lanka — farm-to-table food, fields, nature and warm Sri Lankan hospitality.",
    image:
      "https://images.unsplash.com/photo-1676794944553-399cade9cd39?auto=format&fit=crop&w=1200&q=78",
    schema: {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: "Galkanda Estate Eco Farm Stay",
      description:
        "A countryside home on a working organic farm near Kandy, Sri Lanka.",
      url: "https://www.example.com/",
      image:
        "https://images.unsplash.com/photo-1676794944553-399cade9cd39?auto=format&fit=crop&w=1200&q=78",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kandy",
        addressCountry: "LK",
      },
      numberOfRooms: 3,
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
        {
          "@type": "LocationFeatureSpecification",
          name: "Kitchen",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Free parking",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Air conditioning",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Garden",
          value: true,
        },
      ],
    },
  },
  {
    path: "/explore/:slug",
    Component: ExploreDetail,
    title: "Explore Kandy | Galkanda Estate",
    description: "Curated experiences and places to explore near Galkanda Estate, Kandy.",
  },
];
