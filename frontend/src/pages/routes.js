import { lazy } from "react";
const About = lazy(() => import("./About.tsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const Estate = lazy(() => import("./Estate.jsx"));
const Experiences = lazy(() => import("./Experiences.jsx"));
const Explore = lazy(() => import("./Explore.jsx"));
const Food = lazy(() => import("./Food.jsx"));
const Gallery = lazy(() => import("./Gallery.jsx"));
const Home = lazy(() => import("./Home.jsx"));
const AmbuluwawaTower = lazy(() => import("./explore/AmbuluwawaTower.jsx"));
const KandyCentralMarket = lazy(
  () => import("./explore/KandyCentralMarket.jsx"),
);
const KandyLake = lazy(() => import("./explore/KandyLake.jsx"));
const KandyanCulturalShow = lazy(
  () => import("./explore/KandyanCulturalShow.jsx"),
);
const KnucklesMountainRange = lazy(
  () => import("./explore/KnucklesMountainRange.jsx"),
);
const MinneriyaKaudullaSafari = lazy(
  () => import("./explore/MinneriyaKaudullaSafari.jsx"),
);
const RoyalBotanicalGardens = lazy(
  () => import("./explore/RoyalBotanicalGardens.jsx"),
);
const SigiriyaDayTrip = lazy(() => import("./explore/SigiriyaDayTrip.jsx"));
const SriLankanCookingClass = lazy(
  () => import("./explore/SriLankanCookingClass.jsx"),
);
const TeaEstateVisit = lazy(() => import("./explore/TeaEstateVisit.jsx"));
const TempleOfTheTooth = lazy(() => import("./explore/TempleOfTheTooth.jsx"));
const UdawattakeleForest = lazy(
  () => import("./explore/UdawattakeleForest.jsx"),
);

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
    path: "/explore/ambuluwawa-tower",
    Component: AmbuluwawaTower,
    title: "Ambuluwawa Tower | Explore Kandy — Galkanda Estate",
    description:
      "Visit Ambuluwawa Tower from Galkanda Estate — views, the spiral climb, best time to go and safety tips.",
    image:
      "https://images.unsplash.com/photo-1731210719054-1a3a1e3e4c3e?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Ambuluwawa Tower",
        description:
          "A spiralling white tower on a mountaintop, with views across the hill country.",
        image:
          "https://images.unsplash.com/photo-1731210719054-1a3a1e3e4c3e?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/ambuluwawa-tower.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          { "@type": "ListItem", position: 3, name: "Ambuluwawa Tower" },
        ],
      },
    ],
  },
  {
    path: "/explore/kandy-central-market",
    Component: KandyCentralMarket,
    title: "Kandy Central Market | Explore Kandy — Galkanda Estate",
    description:
      "Visit Kandy Central Market from Galkanda Estate — what to buy, when to go and tips for browsing.",
    image:
      "https://images.unsplash.com/photo-1743636521230-15e192f1cfec?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Kandy Central Market",
        description:
          "Tropical fruit, spices and everyday Kandy life under one roof.",
        image:
          "https://images.unsplash.com/photo-1743636521230-15e192f1cfec?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/kandy-central-market.html",
        isAccessibleForFree: true,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          { "@type": "ListItem", position: 3, name: "Kandy Central Market" },
        ],
      },
    ],
  },
  {
    path: "/explore/kandy-lake",
    Component: KandyLake,
    title: "Kandy Lake Walk | Explore Kandy — Galkanda Estate",
    description:
      "Walk Kandy Lake from Galkanda Estate — when to go, what you'll see and how to combine it with the Temple of the Tooth.",
    image:
      "https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Kandy Lake Walk",
        description:
          "An easy loop around the city's lake \u2014 the calmest way to see Kandy.",
        image:
          "https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/kandy-lake.html",
        isAccessibleForFree: true,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          { "@type": "ListItem", position: 3, name: "Kandy Lake Walk" },
        ],
      },
    ],
  },
  {
    path: "/explore/kandyan-cultural-show",
    Component: KandyanCulturalShow,
    title: "Kandyan Cultural Dance Show | Explore Kandy — Galkanda Estate",
    description:
      "See a Kandyan cultural dance show from Galkanda Estate — what to expect, timing and how to plan the evening.",
    image:
      "https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Kandyan Cultural Dance Show",
        description:
          "Drums, costume and fire \u2014 an hour of Kandyan dance in the city.",
        image:
          "https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/kandyan-cultural-show.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Kandyan Cultural Dance Show",
          },
        ],
      },
    ],
  },
  {
    path: "/explore/knuckles-mountain-range",
    Component: KnucklesMountainRange,
    title: "Knuckles Mountain Range | Explore Kandy — Galkanda Estate",
    description:
      "Plan a Knuckles Mountain Range trek from Galkanda Estate — routes, guides, best time and what to bring.",
    image:
      "https://images.unsplash.com/photo-1552055642-554ec085233a?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Knuckles Mountain Range",
        description:
          "Cloud forest, ridgelines and village trails in a UNESCO-listed range.",
        image:
          "https://images.unsplash.com/photo-1552055642-554ec085233a?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/knuckles-mountain-range.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          { "@type": "ListItem", position: 3, name: "Knuckles Mountain Range" },
        ],
      },
    ],
  },
  {
    path: "/explore/minneriya-kaudulla-safari",
    Component: MinneriyaKaudullaSafari,
    title:
      "Minneriya & Kaudulla Elephant Safari | Explore Kandy — Galkanda Estate",
    description:
      "Plan a Minneriya or Kaudulla elephant safari from Galkanda Estate — the best season, timing and how to book a jeep.",
    image:
      "https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Minneriya & Kaudulla Elephant Safari",
        description:
          "Afternoon jeep safaris to see wild elephants gather on the grasslands.",
        image:
          "https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/minneriya-kaudulla-safari.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Minneriya & Kaudulla Elephant Safari",
          },
        ],
      },
    ],
  },
  {
    path: "/explore/royal-botanical-gardens",
    Component: RoyalBotanicalGardens,
    title:
      "Royal Botanical Gardens, Peradeniya | Explore Kandy — Galkanda Estate",
    description:
      "Visit the Royal Botanical Gardens, Peradeniya from Galkanda Estate — highlights, best time to go and how long to allow.",
    image:
      "https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Royal Botanical Gardens, Peradeniya",
        description:
          "Avenues of palms, giant trees and an orchid house just outside Kandy.",
        image:
          "https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/royal-botanical-gardens.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Royal Botanical Gardens, Peradeniya",
          },
        ],
      },
    ],
  },
  {
    path: "/explore/sigiriya-day-trip",
    Component: SigiriyaDayTrip,
    title: "Sigiriya Rock Fortress Day Trip | Explore Kandy — Galkanda Estate",
    description:
      "Plan a Sigiriya rock fortress day trip from Galkanda Estate near Kandy — timing, the climb, tickets and tips.",
    image:
      "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Sigiriya Rock Fortress Day Trip",
        description:
          "Climb the 5th-century fortress of King Kashyapa in the Cultural Triangle.",
        image:
          "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/sigiriya-day-trip.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Sigiriya Rock Fortress Day Trip",
          },
        ],
      },
    ],
  },
  {
    path: "/explore/sri-lankan-cooking-class",
    Component: SriLankanCookingClass,
    title: "Sri Lankan Cooking Class | Explore Kandy — Galkanda Estate",
    description:
      "Take a Sri Lankan cooking class near Kandy or join farm-to-fork cooking at Galkanda Estate — what you'll learn and how to plan it.",
    image:
      "https://images.unsplash.com/photo-1683621284476-549af8467c8d?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Sri Lankan Cooking Class",
        description:
          "Learn rice and curry, sambols and spice blends \u2014 then sit down to eat.",
        image:
          "https://images.unsplash.com/photo-1683621284476-549af8467c8d?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/sri-lankan-cooking-class.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Sri Lankan Cooking Class",
          },
        ],
      },
    ],
  },
  {
    path: "/explore/tea-estate-visit",
    Component: TeaEstateVisit,
    title: "Hill Country Tea Estate Visit | Explore Kandy — Galkanda Estate",
    description:
      "Visit a hill country tea estate near Kandy from Galkanda Estate — the tea process, tastings and practical tips.",
    image:
      "https://images.unsplash.com/photo-1770059406620-7bfa1fda76ed?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Hill Country Tea Estate Visit",
        description:
          "See how Ceylon tea goes from leaf to cup \u2014 then taste it where it's made.",
        image:
          "https://images.unsplash.com/photo-1770059406620-7bfa1fda76ed?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/tea-estate-visit.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hill Country Tea Estate Visit",
          },
        ],
      },
    ],
  },
  {
    path: "/explore/temple-of-the-tooth",
    Component: TempleOfTheTooth,
    title: "Temple of the Tooth, Kandy | Explore Kandy — Galkanda Estate",
    description:
      "Plan a visit to the Temple of the Tooth in Kandy from Galkanda Estate — best time to go, dress code, ceremony tips and practical details.",
    image:
      "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Temple of the Tooth, Kandy",
        description:
          "Sri Lanka's most revered temple, home to the sacred tooth relic of the Buddha.",
        image:
          "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/temple-of-the-tooth.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Temple of the Tooth, Kandy",
          },
        ],
      },
    ],
  },
  {
    path: "/explore/udawattakele-forest",
    Component: UdawattakeleForest,
    title: "Udawattakele Forest Reserve | Explore Kandy — Galkanda Estate",
    description:
      "Explore Udawattakele Forest Reserve in Kandy from Galkanda Estate — trails, wildlife, best time to visit and practical tips.",
    image:
      "https://images.unsplash.com/photo-1687525933572-e5d144fea470?auto=format&fit=crop&w=1200&q=78",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: "Udawattakele Forest Reserve",
        description:
          "Quiet forest trails on the hill right behind the Temple of the Tooth.",
        image:
          "https://images.unsplash.com/photo-1687525933572-e5d144fea470?auto=format&fit=crop&w=1200&q=78",
        url: "https://www.example.com/explore/udawattakele-forest.html",
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.example.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: "https://www.example.com/explore.html",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Udawattakele Forest Reserve",
          },
        ],
      },
    ],
  },
];
