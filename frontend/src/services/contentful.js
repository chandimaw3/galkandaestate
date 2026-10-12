import { createClient } from "contentful";

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master";

export const isContentfulConfigured = Boolean(space && accessToken);

export const contentfulClient = isContentfulConfigured
  ? createClient({
      space,
      accessToken,
      environment,
    })
  : null;

export const DEFAULT_EXPLORE_CATEGORIES = [
  { slug: "all", name: "All" },
  { slug: "culture-heritage", name: "Culture & Heritage" },
  { slug: "scenic-places", name: "Scenic Places" },
  { slug: "nature", name: "Nature" },
  { slug: "local-experiences", name: "Local Experiences" },
  { slug: "shopping", name: "Shopping" },
  { slug: "adventure", name: "Adventure" },
  { slug: "day-trips", name: "Day Trips" },
  { slug: "food-dining", name: "Food & Dining" },
];

export const DEFAULT_EXPLORE_PAGE = {
  hero: {
    eyebrow: "Explore Kandy",
    title: "A Local Travel Journal",
    subtitle: "by Galkanda",
    accent: "Estate.",
    description:
      "Places we love near the estate — temples and forests, tea country, markets and day trips — each with the practical details to plan your visit.",
    image:
      "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "The Temple of the Tooth across Kandy Lake",
  },
  section: {
    eyebrow: "Things to Do Near Kandy",
    title: "Curated Experiences Around",
    accent: "Galkanda.",
    description:
      "Galkanda is a base for exploring, not a tour company. Off-site experiences are arranged with independent providers where applicable — we're always happy to help you plan.",
  },
  cta: {
    eyebrow: "Stay at Galkanda",
    title: "A Quiet Base for",
    accent: "Exploring.",
    description:
      "Come back to the farm after a day out — tea in the garden, dinner from the estate, and a slower pace.",
    primaryButtonText: "Plan Your Stay",
    primaryButtonLink: "/contact",
    secondaryButtonText: "See the Estate",
    secondaryButtonLink: "/estate",
  },
};

export const DEFAULT_EXPERIENCES = [
  {
    id: "temple-of-the-tooth",
    categorySlug: "culture-heritage",
    categoryName: "Culture & Heritage",
    link: "/explore/temple-of-the-tooth",
    title: "Temple of the Tooth, Kandy",
    description:
      "Sri Lanka's most revered temple, home to the sacred tooth relic of the Buddha.",
    image:
      "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "The Temple of the Sacred Tooth Relic seen across Kandy Lake",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    ctaText: "View Details",
  },
  {
    id: "kandy-lake",
    categorySlug: "scenic-places",
    categoryName: "Scenic Places",
    link: "/explore/kandy-lake",
    title: "Kandy Lake Walk",
    description:
      "An easy loop around the city's lake — the calmest way to see Kandy.",
    image:
      "https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Buildings on the edge of Kandy Lake",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    ctaText: "View Details",
  },
  {
    id: "udawattakele-forest",
    categorySlug: "nature",
    categoryName: "Nature",
    link: "/explore/udawattakele-forest",
    title: "Udawattakele Forest Reserve",
    description:
      "Quiet forest trails on the hill right behind the Temple of the Tooth.",
    image:
      "https://images.unsplash.com/photo-1687525933572-e5d144fea470?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Dense green forest canopy",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    ctaText: "View Details",
  },
  {
    id: "royal-botanical-gardens",
    categorySlug: "nature",
    categoryName: "Nature",
    link: "/explore/royal-botanical-gardens",
    title: "Royal Botanical Gardens, Peradeniya",
    description:
      "Avenues of palms, giant trees and an orchid house just outside Kandy.",
    image:
      "https://images.unsplash.com/photo-1562835593-fead16b5ea19?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Great trees on open lawns at the botanical gardens",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    ctaText: "View Details",
  },
  {
    id: "kandyan-cultural-show",
    categorySlug: "culture-heritage",
    categoryName: "Culture & Heritage",
    link: "/explore/kandyan-cultural-show",
    title: "Kandyan Cultural Dance Show",
    description:
      "Traditional drumming, acrobatic dancing and fire-walking along the lake.",
    image:
      "https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Traditional Kandyan dancers in costume",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    ctaText: "View Details",
  },
  {
    id: "tea-estate-visit",
    categorySlug: "local-experiences",
    categoryName: "Local Experiences",
    link: "/explore/tea-estate-visit",
    title: "Tea Estate & Factory Visit",
    description:
      "Walk tea trails and see how Ceylon orthodox tea is made.",
    image:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Tea pluckers working on green hillside rows",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    ctaText: "View Details",
  },
  {
    id: "kandy-central-market",
    categorySlug: "shopping",
    categoryName: "Shopping",
    link: "/explore/kandy-central-market",
    title: "Kandy Central Market",
    description:
      "Spices, tea, fruits, vegetables and everyday Kandyan life under one roof.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Colorful piles of spices and goods in an indoor market",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    ctaText: "View Details",
  },
  {
    id: "knuckles-mountain-range",
    categorySlug: "adventure",
    categoryName: "Adventure",
    link: "/explore/knuckles-mountain-range",
    title: "Knuckles Mountain Range Trek",
    description:
      "Cloud forests, waterfalls and panoramic ridges in a UNESCO World Heritage site.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Misty mountain peaks and green ridges",
    distance: "[x km]",
    travelTime: "[~x hrs by car]",
    ctaText: "View Details",
  },
  {
    id: "ambuluwawa-tower",
    categorySlug: "scenic-places",
    categoryName: "Scenic Places",
    link: "/explore/ambuluwawa-tower",
    title: "Ambuluwawa Tower",
    description:
      "A spiralling white tower on a mountaintop, with views across the hill country.",
    image:
      "https://images.unsplash.com/photo-1731210719054-1a3a1e3e4c3e?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Ambuluwawa's tall white tower against the sky",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    ctaText: "View Details",
  },
  {
    id: "sigiriya-day-trip",
    categorySlug: "day-trips",
    categoryName: "Day Trips",
    link: "/explore/sigiriya-day-trip",
    title: "Sigiriya Rock Fortress Day Trip",
    description:
      "Climb the 5th-century fortress of King Kashyapa in the Cultural Triangle.",
    image:
      "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Sigiriya rock fortress rising above the forest",
    distance: "[x km]",
    travelTime: "[~x hrs by car]",
    ctaText: "View Details",
  },
  {
    id: "minneriya-kaudulla-safari",
    categorySlug: "day-trips",
    categoryName: "Day Trips",
    link: "/explore/minneriya-kaudulla-safari",
    title: "Minneriya & Kaudulla Elephant Safari",
    description:
      "Afternoon jeep safaris to see wild elephants gather on the grasslands.",
    image:
      "https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "A herd of elephants on green grassland",
    distance: "[x km]",
    travelTime: "[~x hrs by car]",
    ctaText: "View Details",
  },
  {
    id: "sri-lankan-cooking-class",
    categorySlug: "food-dining",
    categoryName: "Food & Dining",
    link: "/explore/sri-lankan-cooking-class",
    title: "Sri Lankan Cooking Class",
    description:
      "Learn rice and curry, sambols and spice blends — then sit down to eat.",
    image:
      "https://images.unsplash.com/photo-1683621284476-549af8467c8d?auto=format&fit=crop&w=1600&q=78",
    imageAlt: "Cooking together around a stove",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    ctaText: "View Details",
  },
];

// Helper to resolve Contentful Asset image URLs
function resolveAssetUrl(asset) {
  if (!asset) return null;
  const fileUrl = asset.fields?.file?.url;
  if (!fileUrl) return null;
  return fileUrl.startsWith("//") ? `https:${fileUrl}` : fileUrl;
}

// Fetch Explore Page main metadata and content
export async function getExplorePageContent() {
  if (!isContentfulConfigured || !contentfulClient) {
    return DEFAULT_EXPLORE_PAGE;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: "explorePage",
      limit: 1,
    });

    if (!response.items || response.items.length === 0) {
      return DEFAULT_EXPLORE_PAGE;
    }

    const fields = response.items[0].fields;

    return {
      hero: {
        eyebrow: fields.heroEyebrow || DEFAULT_EXPLORE_PAGE.hero.eyebrow,
        title: fields.heroTitle || DEFAULT_EXPLORE_PAGE.hero.title,
        subtitle: fields.heroSubtitle || DEFAULT_EXPLORE_PAGE.hero.subtitle,
        accent: fields.heroAccent || DEFAULT_EXPLORE_PAGE.hero.accent,
        description: fields.heroDescription || DEFAULT_EXPLORE_PAGE.hero.description,
        image: resolveAssetUrl(fields.heroImage) || DEFAULT_EXPLORE_PAGE.hero.image,
        imageAlt:
          fields.heroImage?.fields?.title ||
          fields.heroImageAlt ||
          DEFAULT_EXPLORE_PAGE.hero.imageAlt,
      },
      section: {
        eyebrow: fields.sectionEyebrow || DEFAULT_EXPLORE_PAGE.section.eyebrow,
        title: fields.sectionTitle || DEFAULT_EXPLORE_PAGE.section.title,
        accent: fields.sectionAccent || DEFAULT_EXPLORE_PAGE.section.accent,
        description:
          fields.sectionDescription || DEFAULT_EXPLORE_PAGE.section.description,
      },
      cta: {
        eyebrow: fields.ctaEyebrow || DEFAULT_EXPLORE_PAGE.cta.eyebrow,
        title: fields.ctaTitle || DEFAULT_EXPLORE_PAGE.cta.title,
        accent: fields.ctaAccent || DEFAULT_EXPLORE_PAGE.cta.accent,
        description: fields.ctaDescription || DEFAULT_EXPLORE_PAGE.cta.description,
        primaryButtonText:
          fields.ctaPrimaryButtonText || DEFAULT_EXPLORE_PAGE.cta.primaryButtonText,
        primaryButtonLink:
          fields.ctaPrimaryButtonLink || DEFAULT_EXPLORE_PAGE.cta.primaryButtonLink,
        secondaryButtonText:
          fields.ctaSecondaryButtonText ||
          DEFAULT_EXPLORE_PAGE.cta.secondaryButtonText,
        secondaryButtonLink:
          fields.ctaSecondaryButtonLink ||
          DEFAULT_EXPLORE_PAGE.cta.secondaryButtonLink,
      },
    };
  } catch (err) {
    console.warn("Failed to fetch explore page from Contentful, using fallback data:", err);
    return DEFAULT_EXPLORE_PAGE;
  }
}

// Fetch Explore Experiences (cards)
export async function getExploreExperiences() {
  if (!isContentfulConfigured || !contentfulClient) {
    return DEFAULT_EXPERIENCES;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: "exploreExperience",
      order: "fields.order",
    });

    if (!response.items || response.items.length === 0) {
      return DEFAULT_EXPERIENCES;
    }

    return response.items.map((item, index) => {
      const f = item.fields;
      const rawSlug = f.slug || `exp-${index}`;
      const link = rawSlug.startsWith("/explore/")
        ? rawSlug
        : rawSlug.startsWith("/")
        ? rawSlug
        : `/explore/${rawSlug}`;

      return {
        id: item.sys.id || rawSlug,
        categorySlug: f.categorySlug || "culture-heritage",
        categoryName: f.categoryName || f.category || "Culture & Heritage",
        link,
        title: f.title || "Experience",
        description: f.cardDescription || f.shortDescription || f.description || "",
        image: resolveAssetUrl(f.cardImage) || resolveAssetUrl(f.image) || resolveAssetUrl(f.mainImage) || DEFAULT_EXPERIENCES[index % DEFAULT_EXPERIENCES.length]?.image,
        imageAlt: f.cardImage?.fields?.title || f.title || "",
        distance: f.distance || "[x km]",
        travelTime: f.travelTime || "[~x min by car]",
        ctaText: f.ctaText || "View Details",
      };
    });
  } catch (err) {
    console.warn("Failed to fetch experiences from Contentful, using fallback data:", err);
    return DEFAULT_EXPERIENCES;
  }
}

// Fallback details for explore pages
export const DEFAULT_EXPERIENCE_DETAILS = {
  "kandyan-cultural-show": {
    slug: "kandyan-cultural-show",
    title: "Kandyan Cultural Dance Show",
    category: "Culture & Heritage",
    categorySlug: "culture-heritage",
    lead: "Kandyan dance is one of Sri Lanka's great performing traditions. Early-evening shows in the city bring together drummers, dancers and a dramatic finale.",
    distance: "[x km]",
    travelTime: "[~x min by car]",
    duration: "About 1 hour",
    bestTime: "Early evening",
    location: "Kandy city",
    entryPrice: "[Ticket price — confirm]",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kandyan+dance+show+Kandy",
    suitableFor: "All ages",
    bookingInfo: "Tickets usually bought on the day; arrive early for good seats",
    mainImage: {
      url: "https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&fit=crop&w=1600&q=78",
      alt: "Traditional fire dancers performing",
      caption: "Traditional fire dancers performing",
      full: "https://images.unsplash.com/photo-1566766188646-5d0310191714?auto=format&fit=max&w=2400&q=80",
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1663471984093-5925e87e72d5?auto=format&fit=crop&w=1600&q=78",
        alt: "A group of dancers in traditional dress",
        caption: "A group of dancers in traditional dress",
        full: "https://images.unsplash.com/photo-1663471984093-5925e87e72d5?auto=format&fit=max&w=2400&q=80",
      },
      {
        url: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=1600&q=78",
        alt: "Kandy's temple roofs at dusk",
        caption: "Kandy's temple roofs at dusk",
        full: "https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=max&w=2400&q=80",
      },
      {
        url: "https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&fit=crop&w=1600&q=78",
        alt: "Kandy Lake in the evening",
        caption: "Kandy Lake in the evening",
        full: "https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&fit=max&w=2400&q=80",
      },
      {
        url: "https://images.unsplash.com/photo-1581420455468-e748ad82ff50?auto=format&fit=crop&w=1600&q=78",
        alt: "Kandy town at the end of the day",
        caption: "Kandy town at the end of the day",
        full: "https://images.unsplash.com/photo-1581420455468-e748ad82ff50?auto=format&fit=max&w=2400&q=80",
      },
    ],
    aboutTitle: "About Kandyan Cultural Dance Show",
    aboutParagraph1: "Kandyan dance grew from ritual performances in the hill country and remains closely tied to the city's festivals. Shows present a sequence of dances, each with its own costume and rhythm.",
    section2Heading: "Make an evening of it",
    section2Paragraph: "Shows start in the early evening, which makes them easy to combine with the temple ceremony and a lakeside walk.",
    whyWeRecommend: "A vivid, joyful hour that gives context to everything else you'll see in Kandy.",
    galkandaTip: "Sit towards the front and to one side — you'll see the drummers and the finale best.",
    relatedExperiences: [
      {
        slug: "temple-of-the-tooth",
        link: "/explore/temple-of-the-tooth",
        title: "Temple of the Sacred Tooth Relic",
        category: "Culture & Heritage",
        categorySlug: "culture-heritage",
        image: "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1600&q=78",
        imageAlt: "The Temple of the Sacred Tooth Relic seen across Kandy Lake",
        distance: "[x km]",
        travelTime: "[~x min by car]",
        description: "Sri Lanka's most revered temple, home to the sacred tooth relic of the Buddha.",
      },
      {
        slug: "kandy-lake",
        link: "/explore/kandy-lake",
        title: "Kandy Lake Walk",
        category: "Scenic Places",
        categorySlug: "scenic-places",
        image: "https://images.unsplash.com/photo-1626091022888-485eb96c494a?auto=format&fit=crop&w=1600&q=78",
        imageAlt: "Buildings on the edge of Kandy Lake",
        distance: "[x km]",
        travelTime: "[~x min by car]",
        description: "An easy loop around the city's lake — the calmest way to see Kandy.",
      },
      {
        slug: "kandy-central-market",
        link: "/explore/kandy-central-market",
        title: "Kandy Central Market",
        category: "Shopping",
        categorySlug: "shopping",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=78",
        imageAlt: "Colorful piles of spices and goods in an indoor market",
        distance: "[x km]",
        travelTime: "[~x min by car]",
        description: "Spices, tea, fruits, vegetables and everyday Kandyan life under one roof.",
      },
    ],
  },
  "ambuluwawa-tower": {
    "slug": "ambuluwawa-tower",
    "title": "Ambuluwawa Tower",
    "category": "Scenic Places",
    "categorySlug": "scenic-places",
    "lead": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ambuluwawa+Tower",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Ambuluwawa Tower",
    "aboutParagraph1": "The complex brings together places of worship for several faiths around a biodiversity area on the mountain. The tower itself is the landmark everyone comes to see.",
    "section2Heading": "Before you climb",
    "section2Paragraph": "The upper sections of the stairway are very narrow and open to the air. You don't have to go to the top — the views from the lower levels are already superb.",
    "whyWeRecommend": "A memorable half-day with some of the widest views in the region.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      },
      {
        "slug": "knuckles-mountain-range",
        "link": "/explore/knuckles-mountain-range",
        "title": "Knuckles Mountain Range",
        "category": "Adventure",
        "categorySlug": "adventure",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Named for peaks that resemble the knuckles of a clenched fist, the Knuckles range is part of the Central Highlands World Heritage Site — wild, misty and wonderful to walk."
      }
    ]
  },
  "kandy-central-market": {
    "slug": "kandy-central-market",
    "title": "Kandy Central Market",
    "category": "Shopping",
    "categorySlug": "shopping",
    "lead": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Kandy+Municipal+Central+Market",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Kandy Central Market",
    "aboutParagraph1": "Stalls are piled with rambutan, mangosteen, bananas and pineapples depending on the season, alongside spices, dried fish and household goods.",
    "section2Heading": "How to enjoy it",
    "section2Paragraph": "Wander first, buy second. Prices are usually fair, and many stallholders are happy to let you taste before you buy.",
    "whyWeRecommend": "A colourful, unscripted glimpse of everyday Kandy.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      },
      {
        "slug": "knuckles-mountain-range",
        "link": "/explore/knuckles-mountain-range",
        "title": "Knuckles Mountain Range",
        "category": "Adventure",
        "categorySlug": "adventure",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Named for peaks that resemble the knuckles of a clenched fist, the Knuckles range is part of the Central Highlands World Heritage Site — wild, misty and wonderful to walk."
      }
    ]
  },
  "kandy-lake": {
    "slug": "kandy-lake",
    "title": "Kandy Lake Walk",
    "category": "Scenic Places",
    "categorySlug": "scenic-places",
    "lead": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Kandy+Lake",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Kandy Lake Walk",
    "aboutParagraph1": "Kandy Lake was created in the early nineteenth century by King Sri Vikrama Rajasinghe, the last ruler of the Kandyan kingdom. Today its tree-lined edge is where the city slows down.",
    "section2Heading": "The walk",
    "section2Paragraph": "Follow the path at your own pace. You'll pass the Temple of the Tooth, the old royal buildings and views up to the hills that ring the town. Benches and shade make it easy to stop.",
    "whyWeRecommend": "It's the gentlest introduction to Kandy and pairs perfectly with the temple.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "knuckles-mountain-range",
        "link": "/explore/knuckles-mountain-range",
        "title": "Knuckles Mountain Range",
        "category": "Adventure",
        "categorySlug": "adventure",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Named for peaks that resemble the knuckles of a clenched fist, the Knuckles range is part of the Central Highlands World Heritage Site — wild, misty and wonderful to walk."
      }
    ]
  },
  "knuckles-mountain-range": {
    "slug": "knuckles-mountain-range",
    "title": "Knuckles Mountain Range",
    "category": "Adventure",
    "categorySlug": "adventure",
    "lead": "Named for peaks that resemble the knuckles of a clenched fist, the Knuckles range is part of the Central Highlands World Heritage Site — wild, misty and wonderful to walk.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Knuckles+Mountain+Range",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Knuckles Mountain Range",
    "aboutParagraph1": "The Knuckles Conservation Forest protects cloud forest, grassland and streams at the northern edge of the hill country. Trails pass small villages, viewpoints and waterfalls.",
    "section2Heading": "Choosing a walk",
    "section2Paragraph": "Routes range from gentle half-day walks to long treks. A local guide will match the route to your fitness and the weather — conditions change quickly in the mountains.",
    "whyWeRecommend": "The most dramatic landscapes near Kandy, and still wonderfully uncrowded.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      }
    ]
  },
  "minneriya-kaudulla-safari": {
    "slug": "minneriya-kaudulla-safari",
    "title": "Minneriya & Kaudulla Elephant Safari",
    "category": "Day Trips",
    "categorySlug": "day-trips",
    "lead": "In the dry months, elephants come to the grasslands around the ancient reservoirs of Minneriya and Kaudulla — one of the great wildlife sights of Asia.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Minneriya+National+Park",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Minneriya & Kaudulla Elephant Safari",
    "aboutParagraph1": "As the reservoirs shrink in the dry season, fresh grass appears on their banks and elephants arrive in large numbers to feed and bathe. Guides move between Minneriya and Kaudulla depending on where the herds are.",
    "section2Heading": "On safari",
    "section2Paragraph": "Safaris usually run in the afternoon. Keep your voice low, never ask a driver to approach too closely, and let the elephants set the pace.",
    "whyWeRecommend": "Watching a herd cross the grassland at golden hour is unforgettable.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      }
    ]
  },
  "royal-botanical-gardens": {
    "slug": "royal-botanical-gardens",
    "title": "Royal Botanical Gardens, Peradeniya",
    "category": "Nature",
    "categorySlug": "nature",
    "lead": "On a bend of the Mahaweli River, Peradeniya's historic gardens are among the finest in Asia — wide lawns, avenues of royal palms and a celebrated orchid collection.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Royal+Botanical+Gardens+Peradeniya",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Royal Botanical Gardens, Peradeniya",
    "aboutParagraph1": "The gardens began as a royal pleasure garden and became a botanical garden in the nineteenth century. Today they cover a large estate beside the Mahaweli, Sri Lanka's longest river.",
    "section2Heading": "Don't miss",
    "section2Paragraph": "The palm avenues, the orchid house, the spice garden and the giant fig whose branches spread across the lawn. Allow time simply to sit in the shade.",
    "whyWeRecommend": "A gentle, beautiful half-day that works for every age and every kind of traveller.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      }
    ]
  },
  "sigiriya-day-trip": {
    "slug": "sigiriya-day-trip",
    "title": "Sigiriya Rock Fortress Day Trip",
    "category": "Day Trips",
    "categorySlug": "day-trips",
    "lead": "Rising sheer from the plains, Sigiriya was a royal citadel built in the fifth century. Gardens, frescoes and the great lion's paw gateway lead to ruins on the summit.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sigiriya+Rock+Fortress",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Sigiriya Rock Fortress Day Trip",
    "aboutParagraph1": "Sigiriya is one of Sri Lanka's eight UNESCO World Heritage Sites. King Kashyapa built his palace on the summit, surrounded by water gardens and defensive walls.",
    "section2Heading": "The climb",
    "section2Paragraph": "Paths and stairways pass the famous painted maidens and the Mirror Wall before reaching the lion's paws and the final ascent. Take your time and rest in the shade.",
    "whyWeRecommend": "A once-in-a-lifetime site, and an easy day trip to plan from the estate.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      }
    ]
  },
  "sri-lankan-cooking-class": {
    "slug": "sri-lankan-cooking-class",
    "title": "Sri Lankan Cooking Class",
    "category": "Food & Dining",
    "categorySlug": "food-dining",
    "lead": "A Sri Lankan cooking class is one of the best ways to understand the island. Learn how spices, coconut and fresh vegetables come together in everyday dishes.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Sri%20Lankan%20Cooking%20Class%20Kandy",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Sri Lankan Cooking Class",
    "aboutParagraph1": "Classes usually cover a rice and curry meal: a dhal, a vegetable curry, a fresh sambol and rice, with tips on tempering spices and making coconut milk.",
    "section2Heading": "Prefer to stay in?",
    "section2Paragraph": "At Galkanda you can also join our own farm-to-fork cooking — gathering produce from the estate and cooking with the family as part of a reserved lunch or dinner.",
    "whyWeRecommend": "You'll leave with recipes you can actually cook at home — and a real taste of Sri Lankan hospitality.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      }
    ]
  },
  "tea-estate-visit": {
    "slug": "tea-estate-visit",
    "title": "Hill Country Tea Estate Visit",
    "category": "Local Experiences",
    "categorySlug": "local-experiences",
    "lead": "The hills around Kandy are tea country. A visit to a working estate and factory shows plucking, withering, rolling and drying, usually finishing with a tasting.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=tea+factory+Kandy",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Hill Country Tea Estate Visit",
    "aboutParagraph1": "Ceylon tea is grown at different elevations across the hill country, and each region has its own character. Around Kandy you'll find estates producing bright, well-rounded teas.",
    "section2Heading": "What happens on a visit",
    "section2Paragraph": "You'll walk the slopes where leaves are plucked by hand, then follow the leaf through the factory before a tasting of different grades.",
    "whyWeRecommend": "It connects the landscape you see every day with the cup of tea you drink every afternoon at Galkanda.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      }
    ]
  },
  "temple-of-the-tooth": {
    "slug": "temple-of-the-tooth",
    "title": "Temple of the Tooth, Kandy",
    "category": "Culture & Heritage",
    "categorySlug": "culture-heritage",
    "lead": "Sri Dalada Maligawa sits beside Kandy Lake within the old royal palace complex. Visit for the evening ceremony, when drums echo across the water.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Temple+of+the+Sacred+Tooth+Relic+Kandy",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Temple of the Tooth, Kandy",
    "aboutParagraph1": "The Temple of the Sacred Tooth Relic is the spiritual heart of Kandy and one of the most important places of pilgrimage in the Buddhist world. It forms part of the Sacred City of Kandy, a UNESCO World Heritage Site.",
    "section2Heading": "What to expect",
    "section2Paragraph": "Inside, carved wooden doors, painted ceilings and the scent of jasmine offerings lead to the inner shrine. Daily ceremonies are accompanied by traditional drummers, and the temple is at its most atmospheric as the light fades.",
    "whyWeRecommend": "It is the one place that explains Kandy. Even if you are not religious, the ceremony and the setting stay with you.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      }
    ]
  },
  "udawattakele-forest": {
    "slug": "udawattakele-forest",
    "title": "Udawattakele Forest Reserve",
    "category": "Nature",
    "categorySlug": "nature",
    "lead": "Once the royal forest of the Kandyan kings, Udawattakele is a protected reserve of old trees, birdsong and shaded footpaths minutes from the city.",
    "distance": "[x km]",
    "travelTime": "[~x min by car]",
    "duration": "1–2 hours",
    "bestTime": "Morning or late afternoon",
    "location": "Near Kandy",
    "entryPrice": "[Ticket price — confirm]",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Udawattakele+Forest+Reserve+Kandy",
    "suitableFor": "All ages",
    "bookingInfo": "Tickets bought on arrival or arranged with our team.",
    "mainImage": null,
    "galleryImages": [],
    "aboutTitle": "About Udawattakele Forest Reserve",
    "aboutParagraph1": "The name means 'the forest above the royal palace'. For centuries it was reserved for the kings of Kandy; today it is a forest reserve threaded with walking trails.",
    "section2Heading": "What you'll see",
    "section2Paragraph": "Expect huge trees, climbing vines, monkeys moving through the canopy and plenty of birdlife. The paths are mostly gentle, though some sections climb.",
    "whyWeRecommend": "Green, cool and quiet — the perfect counterpoint to the busy city below.",
    "galkandaTip": "",
    "relatedExperiences": [
      {
        "slug": "ambuluwawa-tower",
        "link": "/explore/ambuluwawa-tower",
        "title": "Ambuluwawa Tower",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Crowning a hill near Gampola, Ambuluwawa's distinctive tower is part of a multi-faith complex. The narrow spiral stairway rewards climbers with sweeping views."
      },
      {
        "slug": "kandy-central-market",
        "link": "/explore/kandy-central-market",
        "title": "Kandy Central Market",
        "category": "Shopping",
        "categorySlug": "shopping",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Kandy's central market is a lively, local place to buy fruit, spices and snacks, and to watch the city go about its day."
      },
      {
        "slug": "kandy-lake",
        "link": "/explore/kandy-lake",
        "title": "Kandy Lake Walk",
        "category": "Scenic Places",
        "categorySlug": "scenic-places",
        "image": "",
        "imageAlt": "",
        "distance": "[x km]",
        "travelTime": "[~x min by car]",
        "description": "Built by the last king of Kandy in the early 1800s, the lake sits at the centre of the city. A flat path follows its shore past the temple and old colonial buildings."
      }
    ]
  },
};

// Generates generic fallback detail for any experience slug
export function getFallbackExperienceDetail(slug) {
  if (DEFAULT_EXPERIENCE_DETAILS[slug]) {
    const d = DEFAULT_EXPERIENCE_DETAILS[slug];
    return {
      ...d,
      drivingTime: d.drivingTime || d.travelTime || "",
      entryFee: d.entryFee || d.entryPrice || "",
      whatToBring: d.whatToBring || "",
      gettingThere: d.gettingThere || "",
      season: d.season || "",
    };
  }
  const exp = DEFAULT_EXPERIENCES.find((e) => e.id === slug) || DEFAULT_EXPERIENCES[0];
  return {
    slug,
    title: exp.title,
    category: exp.categoryName,
    categorySlug: exp.categorySlug,
    lead: exp.description,
    distance: exp.distance || "",
    travelTime: exp.travelTime || "",
    drivingTime: exp.travelTime || "",
    duration: exp.duration || "",
    bestTime: exp.bestTime || "",
    location: exp.location || "",
    entryPrice: exp.entryPrice || "",
    entryFee: exp.entryFee || "",
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(exp.title + " Kandy")}`,
    suitableFor: exp.suitableFor || "",
    whatToBring: exp.whatToBring || "",
    gettingThere: exp.gettingThere || "",
    season: exp.season || "",
    bookingInfo: exp.bookingInfo || "",
    mainImage: {
      url: exp.image,
      alt: exp.imageAlt || exp.title,
      caption: exp.title,
      full: exp.image,
    },
    galleryImages: [
      { url: exp.image, alt: exp.title, caption: exp.title, full: exp.image },
      { url: exp.image, alt: exp.title, caption: exp.title, full: exp.image },
      { url: exp.image, alt: exp.title, caption: exp.title, full: exp.image },
      { url: exp.image, alt: exp.title, caption: exp.title, full: exp.image },
    ],
    aboutTitle: `About ${exp.title}`,
    aboutParagraph1: exp.description,
    section2Heading: "How to Visit",
    section2Paragraph: "Reach out to our team at Galkanda Estate to arrange private transport or driving directions.",
    whyWeRecommend: `An essential destination to understand the landscape and culture around Kandy.`,
    galkandaTip: "Ask our hosts for the best local time of day to avoid crowds.",
    relatedExperiences: DEFAULT_EXPERIENCES.filter((e) => e.id !== slug).slice(0, 3).map((e) => ({
      slug: e.id,
      link: e.link,
      title: e.title,
      category: e.categoryName,
      categorySlug: e.categorySlug,
      image: e.image,
      imageAlt: e.imageAlt,
      distance: e.distance,
      travelTime: e.travelTime,
      description: e.description,
    })),
  };
}

// Fetch single experience detail from Contentful by slug
export async function getExperienceDetail(slug, options = {}) {
  const fallback = getFallbackExperienceDetail(slug);
  if (options.synchronousFallbackOnly || !isContentfulConfigured || !contentfulClient) {
    return fallback;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: "exploreExperience",
      "fields.slug": slug,
      limit: 1,
    });

    if (!response.items || response.items.length === 0) {
      return fallback;
    }

    const f = response.items[0].fields;

    // Gallery images parsing
    let galleryImages = [];
    if (Array.isArray(f.galleryImages) && f.galleryImages.length > 0) {
      galleryImages = f.galleryImages.map((asset, i) => ({
        url: resolveAssetUrl(asset) || fallback.galleryImages[i]?.url,
        alt: asset.fields?.title || asset.fields?.description || fallback.galleryImages[i]?.alt,
        caption: asset.fields?.description || asset.fields?.title || fallback.galleryImages[i]?.caption,
        full: resolveAssetUrl(asset) || fallback.galleryImages[i]?.full,
      }));
    } else {
      galleryImages = fallback.galleryImages;
    }

    // Main image
    const mainImgUrl = resolveAssetUrl(f.mainImage) || resolveAssetUrl(f.cardImage) || fallback.mainImage.url;

    // Related experiences
    let related = fallback.relatedExperiences;
    if (Array.isArray(f.relatedExperiences) && f.relatedExperiences.length > 0) {
      related = f.relatedExperiences.map((rel) => {
        const rf = rel.fields || {};
        return {
          slug: rf.slug || "",
          link: `/explore/${rf.slug || ""}`,
          title: rf.title || "Experience",
          category: rf.category || rf.categoryName || "Experience",
          categorySlug: rf.categorySlug || "culture-heritage",
          image: resolveAssetUrl(rf.cardImage) || resolveAssetUrl(rf.image) || fallback.mainImage.url,
          imageAlt: rf.title || "",
          distance: rf.distance || "",
          travelTime: rf.travelTime || "",
          description: rf.cardDescription || rf.shortDescription || "",
        };
      });
    }

    return {
      slug: f.slug || slug,
      title: f.title || fallback.title,
      category: f.category || f.categoryName || fallback.category,
      categorySlug: f.categorySlug || fallback.categorySlug,
      lead: f.lead || f.cardDescription || fallback.lead,
      distance: f.distance || "",
      travelTime: f.travelTime || f.drivingTime || "",
      drivingTime: f.drivingTime || f.travelTime || "",
      duration: f.duration || "",
      bestTime: f.bestTime || "",
      location: f.location || "",
      entryPrice: f.entryPrice || f.entryFee || f.cost || "",
      entryFee: f.entryFee || f.entryPrice || f.cost || "",
      googleMapsUrl: f.googleMapsUrl || fallback.googleMapsUrl,
      suitableFor: f.suitableFor || "",
      whatToBring: f.whatToBring || "",
      gettingThere: f.gettingThere || "",
      season: f.season || "",
      bookingInfo: f.bookingInfo || "",
      mainImage: {
        url: mainImgUrl,
        alt: f.mainImage?.fields?.title || f.mainImageCaption || fallback.mainImage.alt,
        caption: f.mainImageCaption || f.mainImage?.fields?.description || fallback.mainImage.caption,
        full: mainImgUrl,
      },
      galleryImages,
      aboutTitle: f.aboutTitle || fallback.aboutTitle,
      aboutParagraph1: f.aboutParagraph1 || fallback.aboutParagraph1,
      section2Heading: f.section2Heading || fallback.section2Heading,
      section2Paragraph: f.section2Paragraph || fallback.section2Paragraph,
      storyContent: f.storyContent || f.body || f.storyText || f.story || "",
      whyWeRecommend: f.whyWeRecommend || fallback.whyWeRecommend,
      galkandaTip: f.galkandaTip || fallback.galkandaTip,
      relatedExperiences: related,
    };
  } catch (err) {
    console.warn(`Failed to fetch detail for ${slug} from Contentful, using fallback:`, err);
    return fallback;
  }
}

