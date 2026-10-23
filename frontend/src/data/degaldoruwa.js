import { images } from "../images.js";

const slug = "degaldoruwa-raja-maha-vihara";
const title = "Degaldoruwa Raja Maha Vihara";
const description = "Discover a Buddhist rock temple in Amunugama near Kandy, known for its traditional Kandyan murals.";
const source = "https://commons.wikimedia.org/wiki/File:SL_Kandy_asv2020-01_img49_Degaldoruwa_Temple.jpg";
const image = images["degaldoruwa-temple.jpg"];

export const degaldoruwaCard = {
  id: slug, slug, title,
  link: `/explore/${slug}`,
  categorySlug: "culture-heritage",
  categoryName: "Culture & Heritage",
  description, image,
  distance: "Approximately 4.9 km",
  travelTime: "Around 12–20 minutes",
  imageAlt: "Degaldoruwa Raja Maha Vihara temple in Kandy, photographed by A.Savin",
  ctaText: "View Details",
};

export const degaldoruwaDetail = {
  ...degaldoruwaCard,
  category: "Culture & Heritage",
  lead: description,
  location: "Amunugama, near Kandy",
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=7.3193061,80.6859989&destination=Degaldoruwa+Raja+Maha+Vihara&travelmode=driving",
  mainImage: {
    url: image, full: image,
    alt: degaldoruwaCard.imageAlt,
    caption: "Degaldoruwa Temple. Photo: A.Savin, Wikipedia (Free Art License).",
  },
  galleryImages: [],
  aboutTitle: "Discover Degaldoruwa",
  storyContent: `Degaldoruwa Raja Maha Vihara is a Buddhist rock temple in Amunugama, near Kandy. Its murals offer a chance to explore traditional Kandyan religious art.

As this is a place of worship, dress modestly and respect any guidance on photography and access. Ask your hosts for help planning your visit.

Photo: [A.Savin, Wikipedia](${source}), used under the [Free Art License](https://artlibre.org/licence/lal/en/).`,
  relatedExperiences: [],
};
