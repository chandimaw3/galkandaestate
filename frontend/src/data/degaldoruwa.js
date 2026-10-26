import { images } from "../images.js";

const slug = "degaldoruwa-raja-maha-vihara";
const title = "Degaldoruwa Raja Maha Vihara";
const description = "Discover a Buddhist rock temple in Amunugama near Kandy, known for its traditional Kandyan murals.";
// Photo source: https://commons.wikimedia.org/wiki/File:SL_Kandy_asv2020-01_img49_Degaldoruwa_Temple.jpg
// A.Savin, Wikipedia — Free Art License: https://artlibre.org/licence/lal/en/
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
  drivingTime: degaldoruwaCard.travelTime,
  duration: "Allow approximately 45–60 minutes for the visit, plus travel",
  bestTime: "Morning or late afternoon; confirm access before setting out",
  entryFee: "Check current entry arrangements and any requested donation on arrival",
  suitableFor: "Travellers interested in Buddhist heritage, Kandyan art and quiet cultural visits",
  whatToBring: "Clothing covering shoulders and knees, easily removable footwear and drinking water",
  gettingThere: "Arrange a car or tuk-tuk from Galkanda and follow directions to the temple in Amunugama",
  season: "Visits are possible year-round; rain and religious observances may affect access",
  bookingInfo: "Ask your hosts to help confirm access and arrange transport before your visit",
  whyWeRecommend: "A chance to discover Kandyan mural painting and a quieter place of worship close to the estate.",
  galkandaTip: "Ask the monk or caretaker before photographing the murals. Remove footwear where required and avoid touching the paintings.",
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=7.3193061,80.6859989&destination=Degaldoruwa+Raja+Maha+Vihara&travelmode=driving",
  mainImage: {
    url: image, full: image,
    alt: degaldoruwaCard.imageAlt,
    caption: "Degaldoruwa Temple. Photo: A.Savin, Wikipedia (Free Art License).",
  },
  galleryImages: [],
  aboutTitle: "Discover Degaldoruwa",
  storyContent: `Degaldoruwa Raja Maha Vihara is a Buddhist rock temple in Amunugama, near Kandy. Its murals offer a chance to explore traditional Kandyan religious art.

As this is a place of worship, dress modestly and respect any guidance on photography and access. Ask your hosts for help planning your visit.`,
  relatedExperiences: [],
};
