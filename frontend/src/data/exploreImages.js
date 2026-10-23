import { images } from "../images.js";

// Local photos for individual Explore pages.
// Put photos in src/img and fill in the filenames below, e.g. images["tooth-1.webp"].
// The key must match the last part of the page URL (/explore/temple-of-the-tooth).
// Copy this entry with another page's URL slug to change its photos too.
export const exploreImages = {
  "temple-of-the-tooth": {
    // The large photo stays as supplied by Contentful.
    galleryImages: [
      images["temple1.webp"], // Top-left small photo.
      images["temple2.webp"], // Top-right small photo.
      images["temple3.webp"], // Bottom-left small photo.
      images["temple4.webp"], // Bottom-right small photo.
    ],
  },
  // Kandyan Cultural Dance Show
  "kandyan-cultural-show": {
    thumbnail: images["c-main.webp"],
    mainImage: images["c-main.webp"],
    galleryImages: [
      images["cu1.webp"], // Top-left: blank keeps existing photo.
      images["cu2.webp"], // Top-right: blank keeps existing photo.
      images["cu3.webp"], // Bottom-left: blank keeps existing photo.
      images["cu4.webp"], // Bottom-right: blank keeps existing photo.
    ],
  },
  // Hill Country Tea Estate Visit
  "tea-estate-visit": {
    title: "Tea Estate Visit",
    galleryImages: [
      images[""], // Top-left: blank keeps existing photo.
      images[""], // Top-right: blank keeps existing photo.
      images[""], // Bottom-left: blank keeps existing photo.
      images[""], // Bottom-right: blank keeps existing photo.
    ],
  },
  // Royal Botanical Gardens, Peradeniya
  "royal-botanical-gardens": {
    thumbnail: images["bot-main.webp"],
    mainImage: images["bot-main.webp"],
    galleryImages: [
      images["bot1.webp"], // Top-left: blank keeps existing photo.
      images["bot2.webp"], // Top-right: blank keeps existing photo.
      images["bot3.webp"], // Bottom-left: blank keeps existing photo.
      images["bot4.webp"], // Bottom-right: blank keeps existing photo.
    ],
  },
  // Kandy Lake Walk
  "kandy-lake": {
    galleryImages: [
      images["kandy1.webp"], // Top-left: blank keeps existing photo.
      images["kandy2.webp"], // Top-right: blank keeps existing photo.
      images["kandy3.webp"], // Bottom-left: blank keeps existing photo.
      images["kandy4.webp"], // Bottom-right: blank keeps existing photo.
    ],
  },
  // Udawattakele Forest Reserve
  "udawattakele-forest": {
    thumbnail: images["uda-main.webp"],
    mainImage: images["uda-main.webp"],
    galleryImages: [
      images["uda1.webp"], // Top-left: blank keeps existing photo.
      images["uda2.webp"], // Top-right: blank keeps existing photo.
      images["uda3.png"], // Bottom-left: blank keeps existing photo.
      images["uda4.png"], // Bottom-right: blank keeps existing photo.
    ],
  },
  // Degaldoruwa Raja Maha Vihara
  "degaldoruwa-raja-maha-vihara": {
    galleryImages: [
      images["d1.webp"], // Top-left: blank keeps existing photo.
      images["d2.webp"], // Top-right: blank keeps existing photo.
      images["d3.webp"], // Bottom-left: blank keeps existing photo.
      images["d4.webp"], // Bottom-right: blank keeps existing photo.
    ],
  },
};

export function applyLocalExploreImages(data) {
  const local = exploreImages[data.slug];
  if (!local) return data;
  const gallery = local.galleryImages?.map((url, index) =>
    url
      ? { url, full: url, alt: data.title, caption: "" }
      : data.galleryImages?.[index]
  ).filter(Boolean) || [];
  return {
    ...data,
    title: local.title || data.title,
    mainImage: local.mainImage
      ? { url: local.mainImage, full: local.mainImage, alt: data.title, caption: "" }
      : data.mainImage,
    galleryImages: gallery.length
      ? gallery
      : data.galleryImages,
  };
}
