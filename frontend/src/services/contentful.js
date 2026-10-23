import { degaldoruwaCard, degaldoruwaDetail } from "../data/degaldoruwa.js";
import { applyLocalExploreImages, exploreImages } from "../data/exploreImages.js";
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

export const CATEGORY_SLUG_MAP = {
  "Culture & Heritage": "culture-heritage",
  "Scenic Places": "scenic-places",
  "Nature": "nature",
  "Local Experiences": "local-experiences",
  "Shopping": "shopping",
  "Adventure": "adventure",
  "Day Trips": "day-trips",
  "Food & Dining": "food-dining",
};

export function toCategorySlug(name) {
  if (!name) return "culture-heritage";
  if (CATEGORY_SLUG_MAP[name]) return CATEGORY_SLUG_MAP[name];
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function resolveCategory(rawCategory, rawCategorySlug) {
  // If it's a Contentful Reference entry (Taxonomy model)
  if (rawCategory && typeof rawCategory === "object" && rawCategory.fields) {
    const name =
      rawCategory.fields.name ||
      rawCategory.fields.title ||
      "Culture & Heritage";
    const slug = rawCategory.fields.slug || toCategorySlug(name);
    return { name, slug };
  }

  // If it's a string (e.g. from a dropdown or text)
  const name =
    typeof rawCategory === "string" && rawCategory.trim()
      ? rawCategory.trim()
      : "Culture & Heritage";

  const slug =
    rawCategorySlug &&
      typeof rawCategorySlug === "string" &&
      rawCategorySlug.trim()
      ? rawCategorySlug.trim()
      : toCategorySlug(name);

  return { name, slug };
}

// Helper to resolve Contentful Asset image URLs
function resolveAssetUrl(asset) {
  if (!asset) return null;
  const fileUrl = asset.fields?.file?.url;
  if (!fileUrl) return null;
  return fileUrl.startsWith("//") ? `https:${fileUrl}` : fileUrl;
}



// In-memory caches to eliminate double-loading and repeated network fetches
let cachedExploreExperiences = null;
const cachedExperienceDetails = new Map();

// Fetch Explore Experiences (cards)
export async function getExploreExperiences() {
  if (cachedExploreExperiences) {
    return cachedExploreExperiences;
  }

  if (!isContentfulConfigured || !contentfulClient) {
    return [degaldoruwaCard];
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: "exploreExperience",
      order: "fields.order",
    });

    if (!response.items || response.items.length === 0) {
      return [degaldoruwaCard];
    }

    const items = response.items.map((item, index) => {
      const f = item.fields;
      const rawSlug = f.slug || `exp-${index}`;
      const link = rawSlug.startsWith("/explore/")
        ? rawSlug
        : rawSlug.startsWith("/")
          ? rawSlug
          : `/explore/${rawSlug}`;

      const { name: categoryName, slug: categorySlug } = resolveCategory(
        f.category || f.categoryName,
        f.categorySlug
      );

      const cardImg =
        exploreImages[rawSlug]?.thumbnail ||
        resolveAssetUrl(f.cardImage) ||
        resolveAssetUrl(f.mainHeroImage) ||
        resolveAssetUrl(f.mainImage) ||
        "";

      return {
        id: item.sys.id || rawSlug,
        slug: rawSlug,
        categorySlug,
        categoryName,
        link,
        title: exploreImages[rawSlug]?.title || f.title || "Experience",
        description: f.shortDescription || f.cardDescription || f.description || "",
        image: cardImg,
        imageAlt: f.cardImage?.fields?.title || f.mainHeroImage?.fields?.title || f.title || "",
        distance: f.distance || "",
        travelTime: f.travelTime || f.drivingTime || "",
        ctaText: f.ctaText || "View Details",
      };
    });

    if (!items.some((item) => item.slug === degaldoruwaCard.slug || item.title.toLowerCase().includes("degaldoruwa"))) {
      items.push(degaldoruwaCard);
    }
    cachedExploreExperiences = items;
    return items;
  } catch (err) {
    console.warn("Failed to fetch experiences from Contentful:", err);
    return [degaldoruwaCard];
  }
}

// Fetch experience details, including the locally maintained Degaldoruwa entry.
export async function getExperienceDetail(slug) {
  if (slug === degaldoruwaDetail.slug) return applyLocalExploreImages(degaldoruwaDetail);
  if (!slug) return null;

  if (cachedExperienceDetails.has(slug)) {
    return cachedExperienceDetails.get(slug);
  }

  if (!isContentfulConfigured || !contentfulClient) {
    return null;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: "exploreExperience",
      "fields.slug": slug,
      limit: 1,
    });

    if (!response.items || response.items.length === 0) {
      return null;
    }

    const f = response.items[0].fields;

    // Gallery images parsing - strictly from Contentful assets
    let galleryImages = [];
    if (Array.isArray(f.galleryImages) && f.galleryImages.length > 0) {
      galleryImages = f.galleryImages
        .map((asset) => {
          const url = resolveAssetUrl(asset);
          if (!url) return null;
          return {
            url,
            alt: asset.fields?.title || asset.fields?.description || f.title || "",
            caption: asset.fields?.description || asset.fields?.title || "",
            full: url,
          };
        })
        .filter(Boolean);
    }

    // Main image (supports mainHeroImage, mainImage, or cardImage)
    const heroAsset = f.mainHeroImage || f.mainImage || f.cardImage;
    const heroUrl = resolveAssetUrl(heroAsset);
    const mainImage = heroUrl
      ? {
        url: heroUrl,
        alt: heroAsset?.fields?.title || f.mainImageCaption || f.title || "",
        caption: f.mainImageCaption || heroAsset?.fields?.description || "",
        full: heroUrl,
      }
      : null;

    // Related experiences - strictly from Contentful references
    let related = [];
    if (Array.isArray(f.relatedExperiences) && f.relatedExperiences.length > 0) {
      related = f.relatedExperiences
        .map((rel) => {
          const rf = rel?.fields;
          if (!rf) return null;
          const relHero = rf.cardImage || rf.mainHeroImage || rf.mainImage || rf.image;
          const imgUrl = resolveAssetUrl(relHero) || "";
          return {
            slug: rf.slug || "",
            link: `/explore/${rf.slug || ""}`,
            title: rf.title || "Experience",
            category: rf.category || rf.categoryName || "",
            categorySlug: toCategorySlug(rf.category || rf.categoryName),
            image: imgUrl,
            imageAlt: rf.title || "",
            distance: rf.distance || "",
            travelTime: rf.travelTime || rf.drivingTime || "",
            description: rf.shortDescription || rf.cardDescription || rf.lead || "",
          };
        })
        .filter((r) => Boolean(r && r.slug));
    }

    const { name: categoryName, slug: categorySlug } = resolveCategory(
      f.category || f.categoryName,
      f.categorySlug
    );

    const expData = {
      slug: f.slug || slug,
      title: f.title || "",
      category: categoryName || "",
      categorySlug: categorySlug || "",
      lead: f.shortDescription || f.cardDescription || f.lead || "",
      distance: f.distance || "",
      travelTime: f.travelTime || f.drivingTime || "",
      drivingTime: f.drivingTime || f.travelTime || "",
      duration: f.duration || "",
      bestTime: f.bestTime || "",
      location: f.location || "",
      entryPrice: f.entryPrice || f.entryFee || f.cost || "",
      entryFee: f.entryFee || f.entryPrice || f.cost || "",
      googleMapsUrl: f.googleMapsUrl || "",
      suitableFor: f.suitableFor || "",
      whatToBring: f.whatToBring || "",
      gettingThere: f.gettingThere || "",
      season: f.season || "",
      bookingInfo: f.bookingInfo || "",
      mainImage,
      galleryImages,
      aboutTitle: f.storyTitle || f.aboutTitle || "",
      storyContent: f.storyContent || f.body || f.storyText || f.story || "",
      whyWeRecommend: f.whyWeRecommend || "",
      galkandaTip: f.galkandaTip || "",
      relatedExperiences: related,
    };

    const detail = applyLocalExploreImages(expData);
    cachedExperienceDetails.set(slug, detail);
    return detail;
  } catch (err) {
    console.warn(`Failed to fetch detail for ${slug} from Contentful:`, err);
    return null;
  }
}

let cachedAboutTeam = null;
let cachedTeamMembers = null;

// Fetch both Host (Property Manager) and Team Members from Contentful
export async function getAboutTeamData() {
  if (cachedAboutTeam) {
    return cachedAboutTeam;
  }

  if (!isContentfulConfigured || !contentfulClient) {
    return { host: null, team: [] };
  }

  try {
    const candidateTypes = [
      "teamMember",
      "teamMembers",
      "team",
      "aboutTeam",
      "member",
    ];
    let matchedType = null;

    try {
      const ctRes = await contentfulClient.getContentTypes();
      const found = ctRes.items.find(
        (ct) =>
          candidateTypes.includes(ct.sys.id) ||
          /team|member/i.test(ct.sys.id) ||
          /team|member/i.test(ct.name)
      );
      if (found) matchedType = found.sys.id;
    } catch {
      // Content type inspection not available, proceed to direct query
    }

    let response = null;
    if (matchedType) {
      try {
        response = await contentfulClient.getEntries({
          content_type: matchedType,
          order: "fields.order",
        });
      } catch {
        response = await contentfulClient.getEntries({
          content_type: matchedType,
        });
      }
    } else {
      try {
        response = await contentfulClient.getEntries({
          content_type: "teamMember",
          order: "fields.order",
        });
      } catch {
        try {
          response = await contentfulClient.getEntries({
            content_type: "teamMember",
          });
        } catch {
          return { host: null, team: [] };
        }
      }
    }

    if (!response || !response.items || response.items.length === 0) {
      return { host: null, team: [] };
    }

    let rawItems = [];
    const firstEntry = response.items[0];
    if (
      Array.isArray(firstEntry.fields?.teamMembers) ||
      Array.isArray(firstEntry.fields?.team)
    ) {
      rawItems = (
        firstEntry.fields.teamMembers || firstEntry.fields.team
      )
        .map((ref) => (ref?.fields ? ref : null))
        .filter(Boolean);
    } else {
      rawItems = response.items;
    }

    const allMembers = rawItems
      .map((item, index) => {
        const f = item.fields || {};
        const name = f.name || f.fullName || f.title || "";
        if (!name) return null;
        const photoUrl =
          resolveAssetUrl(f.photo || f.image || f.portrait || f.avatar) ||
          (typeof f.photo === "string" ? f.photo : "") ||
          "";
        const initial =
          f.initial || (name ? name.trim().charAt(0).toUpperCase() : "");
        const role =
          f.role ||
          f.position ||
          f.designation ||
          f.jobTitle ||
          "Estate care & hospitality";

        const isHost =
          Boolean(f.isHost || f.host) ||
          /property manager|host/i.test(role) ||
          /punya/i.test(name);

        return {
          id: item.sys?.id || `member-${index}`,
          name,
          role,
          initial,
          photo: photoUrl,
          text: f.text || f.bio || f.description || f.about || "",
          value: f.value || f.highlight || f.tagline || "",
          label: f.label || "Your host",
          linkText: f.linkText || "Plan your stay",
          linkUrl: f.linkUrl || "/contact",
          phone: f.phone || f.phoneNumber || f.telephone || "",
          isHost,
          isPlaceholder: !photoUrl,
        };
      })
      .filter(Boolean);

    // Separate host (Property Manager) from general team cards
    const hostEntry = allMembers.find((m) => m.isHost);
    const host = hostEntry
      ? {
        name: hostEntry.name,
        title: `Meet ${hostEntry.name}.`,
        role: hostEntry.role,
        label: hostEntry.label || "Your host",
        photo: hostEntry.photo,
        text: hostEntry.text,
        linkText: hostEntry.linkText || "Plan your stay",
        linkUrl: hostEntry.linkUrl || "/contact",
        phone: hostEntry.phone,
        isPlaceholder: hostEntry.isPlaceholder,
      }
      : null;

    const teamMembers = allMembers.filter((m) => m !== hostEntry);
    const team = teamMembers;

    const result = { host, team };
    cachedAboutTeam = result;
    cachedTeamMembers = team;
    return result;
  } catch (err) {
    console.warn("Failed to fetch team members from Contentful:", err);
    return { host: null, team: [] };
  }
}

// Fetch Team Members from Contentful.
export async function getTeamMembers() {
  if (cachedTeamMembers) {
    return cachedTeamMembers;
  }
  const data = await getAboutTeamData();
  return data.team;
}

