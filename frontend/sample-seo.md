# Sample Contentful SEO entries for static pages

Use these as starting copy for the `Page SEO` content type. In Contentful, create one entry per section and copy each value into its matching field. Adjust wording to match the final live page content before publishing.

For **Share image**, select the described image from your published Contentful assets. The descriptions below are selection guidance, not text to enter as an image URL. If the exact image is not available, upload a suitable licensed image first. Aim for a landscape 1200 x 630 px crop with the main subject visible near the center.

`Supporting keywords` is optional. If configured as a list, enter each phrase as a separate item. Focus keywords are editorial guidance; do not add a `meta keywords` tag.

## Home

| Contentful field | Sample value |
|---|---|
| Internal name | Home |
| Path | `/` |
| SEO title | Galkanda Estate – Farm Stay Near Kandy, Sri Lanka |
| SEO description | Stay at Galkanda Estate, a private countryside home on an organic farm near Kandy, with farm-to-table food, nature and warm Sri Lankan hospitality. |
| Focus keyword | farm stay near Kandy |
| Supporting keywords | countryside stay in Sri Lanka; Kandy eco farm stay; Sri Lankan farm holiday |
| Share image | Select the published landscape hero photo showing Galkanda Estate and its green countryside. |
| Share image alt text | Galkanda Estate farmhouse surrounded by green countryside near Kandy, Sri Lanka |
| Indexable | `true` |

## About

| Contentful field | Sample value |
|---|---|
| Internal name | About |
| Path | `/about` |
| SEO title | About Galkanda Estate – Eco Farm Stay Near Kandy |
| SEO description | Meet the people and values behind Galkanda Estate, a family-inspired eco farm stay near Kandy rooted in local food, nature and Sri Lankan hospitality. |
| Focus keyword | Galkanda Estate |
| Supporting keywords | eco farm stay near Kandy; Sri Lankan hospitality; sustainable farm stay |
| Share image | Select a published photo of the hosts, team, or estate that represents the story on the About page. |
| Share image alt text | The Galkanda Estate team welcoming guests at the countryside farm near Kandy |
| Indexable | `true` |

## Villa

| Contentful field | Sample value |
|---|---|
| Internal name | Villa |
| Path | `/villa` |
| SEO title | Countryside Villa Near Kandy – Galkanda Estate |
| SEO description | Stay in a private three-bedroom countryside home near Kandy, with a garden, terraces and kitchen, set on the peaceful Galkanda Estate farm. |
| Focus keyword | villa near Kandy |
| Supporting keywords | private villa in Kandy; countryside accommodation near Kandy; Sri Lanka family villa |
| Share image | Select a published wide exterior photo showing the estate home and its garden or surrounding landscape. |
| Share image alt text | The three-bedroom Galkanda Estate countryside villa among gardens near Kandy |
| Indexable | `true` |

## Experiences

| Contentful field | Sample value |
|---|---|
| Internal name | Experiences |
| Path | `/experiences` |
| SEO title | Farm Experiences Near Kandy – Galkanda Estate |
| SEO description | Explore farm life near Kandy with paddy field walks, cow milking, butter and curd making, garden tea and farm-to-table cooking at Galkanda Estate. |
| Focus keyword | farm experiences near Kandy |
| Supporting keywords | things to do at a Sri Lankan farm; Kandy farm tour; farm-to-table cooking Sri Lanka |
| Share image | Select a published photo of a real guest farm activity, such as a field walk or a farm-to-table cooking session. |
| Share image alt text | Guests taking part in a farm experience at Galkanda Estate near Kandy |
| Indexable | `true` |

## Explore index

| Contentful field | Sample value |
|---|---|
| Internal name | Explore Kandy |
| Path | `/explore` |
| SEO title | Things to Do Near Kandy – Local Guide by Galkanda Estate |
| SEO description | Discover places to visit near Kandy, from temples and gardens to forest walks and tea country, with local tips from Galkanda Estate. |
| Focus keyword | things to do near Kandy |
| Supporting keywords | places to visit in Kandy; Kandy travel guide; day trips from Kandy |
| Share image | Select a published landscape photo representing Kandy or a nearby attraction featured in the Explore guide. |
| Share image alt text | Green hills and landscape near Kandy, Sri Lanka |
| Indexable | `true` |

## Food and farm

| Contentful field | Sample value |
|---|---|
| Internal name | Food and farm |
| Path | `/food` |
| SEO title | Farm-to-Table Food Near Kandy – Galkanda Estate |
| SEO description | Taste home-grown vegetables, fresh dairy, butter, curd and traditional Sri Lankan cooking at Galkanda Estate, an organic farm stay near Kandy. |
| Focus keyword | farm-to-table food near Kandy |
| Supporting keywords | Sri Lankan farm food; organic farm near Kandy; traditional Sri Lankan cooking |
| Share image | Select a published photo of a meal or fresh ingredients actually served or grown at Galkanda Estate. |
| Share image alt text | A farm-to-table Sri Lankan meal prepared with fresh ingredients at Galkanda Estate |
| Indexable | `true` |

## Gallery

| Contentful field | Sample value |
|---|---|
| Internal name | Gallery |
| Path | `/gallery` |
| SEO title | Galkanda Estate Photo Gallery – Farm Stay Near Kandy |
| SEO description | View photos of Galkanda Estate near Kandy, including the countryside home, rooms, farm, fresh food, gardens and surrounding nature. |
| Focus keyword | Galkanda Estate photos |
| Supporting keywords | Kandy countryside accommodation photos; Sri Lanka farm stay gallery |
| Share image | Select a strong, representative published estate photograph that remains clear when cropped in a social preview. |
| Share image alt text | View across the Galkanda Estate garden and countryside near Kandy |
| Indexable | `true` |

## Contact

| Contentful field | Sample value |
|---|---|
| Internal name | Contact |
| Path | `/contact` |
| SEO title | Contact Galkanda Estate – Plan Your Stay Near Kandy |
| SEO description | Contact Galkanda Estate to ask about availability, plan your countryside stay near Kandy, or arrange help with transfers and your Sri Lanka itinerary. |
| Focus keyword | contact Galkanda Estate |
| Supporting keywords | book a farm stay near Kandy; Galkanda Estate reservations; Kandy accommodation enquiry |
| Share image | Select a published welcoming photo of the estate, such as the house or garden, rather than a generic contact graphic. |
| Share image alt text | The welcoming entrance to Galkanda Estate near Kandy, Sri Lanka |
| Indexable | `true` |

## Routes not included

- `/estate` redirects to `/villa`; use the `/villa` entry for the destination page.
- `/contact-v2` is another contact route in the current frontend. Do not create a second indexable record unless it becomes a distinct public page with its own content and canonical URL. Otherwise keep `/contact` as the single contact page.

## Generic Explore Experience entry

Use this as a reusable example for one entry in the existing `Explore Experience` (`exploreExperience`) content type. Create one entry per real place or activity. The copy below describes a fictional nearby waterfall walk; replace all example details such as travel time, access, fees, season, and safety guidance with information verified for the specific experience.

### Card fields

| Contentful field | Field ID | Sample value |
|---|---|---|
| Title | `title` | Riverside Waterfall Walk |
| Slug | `slug` | `riverside-waterfall-walk` |
| Order | `order` | `13` (use the next available number in the list) |
| Category | `category` | Nature |
| Card short description | `cardDescription` | Follow a shaded countryside trail to a small waterfall and enjoy a quiet break among the hills near Kandy. |
| Card image | `cardImage` | Select a published landscape photo that clearly shows the actual waterfall or trail. |

### Detail and practical information fields

| Contentful field | Field ID | Sample value |
|---|---|---|
| Lead / intro paragraph | `lead` | Take a relaxed walk through the green hills outside Kandy to reach a peaceful waterfall. Check current access and trail conditions with your host before setting out. |
| Google Maps URL | `googleMapsUrl` | Paste the verified Google Maps share link for the correct trail entrance or destination. |
| Main image | `mainImage` | Select a published landscape image of the destination. |
| Main image caption | `mainImageCaption` | Waterfall among the green hills near Kandy |
| Gallery images | `galleryImages` | Select up to four additional published images of the route, scenery, or destination. |
| Location | `location` | Enter the verified village or area name. |
| Distance from Galkanda | `distance` | `[verified distance]` |
| Driving time | `drivingTime` | `[verified driving time]` |
| Duration | `duration` | `[typical visit duration]` |
| Best time | `bestTime` | `[best time, if known]` |
| Entry fee / cost | `entryPrice` | `[current fee, or “Free” if verified]` |
| Suitable for | `suitableFor` | `[who the route suits; mention mobility limits if relevant]` |
| What to bring | `whatToBring` | Comfortable walking shoes, drinking water, and rain protection; confirm any site-specific needs. |
| Getting there | `gettingThere` | Describe the verified route from Galkanda and the correct arrival point. |
| Season | `season` | `[season or months when access is suitable; verify locally]` |

### Story fields

| Contentful field | Field ID | Sample value |
|---|---|---|
| Story title | `aboutTitle` | About the Riverside Waterfall Walk |
| Story content | `storyContent` | `A short introduction to the place, its setting, and what visitors can expect. Only include details verified by the host or a reliable source.\n\n## The walk\n\nDescribe the route, terrain, approximate effort, and any access considerations. Give visitors practical context without promising conditions that may change.` |
| Why we recommend it | `whyWeRecommend` | A peaceful nature outing for guests who want to spend time in the hills around Kandy. Replace this with the host's genuine reason for recommending this specific place. |
| Galkanda tip | `galkandaTip` | Ask your host about current trail conditions and the best time to visit before leaving. |
| Related experiences | `relatedExperiences` | Select published Explore Experience entries that are genuinely nearby or relevant, if this field exists in the model. |

### SEO and sharing fields

Add these fields to the Explore Experience model as described in `seo-optimizing.md`.

| Contentful field | Field ID | Sample value |
|---|---|---|
| SEO title | `seoTitle` | Waterfall Walk Near Kandy – Galkanda Estate |
| SEO description | `seoDescription` | Discover a peaceful waterfall walk near Kandy with local guidance from Galkanda Estate. Check the current route and access conditions before visiting. |
| Focus keyword | `focusKeyword` | waterfall walk near Kandy |
| Supporting keywords | `supportingKeywords` | waterfall near Kandy; nature walk near Kandy; things to do near Galkanda Estate |
| Share image | `shareImage` | Select a published 1200 x 630 px landscape image that represents this specific experience. |
| Share image alt text | `shareImageAlt` | Waterfall on a green hillside near Kandy, Sri Lanka |

### Before publishing this type of entry

1. Replace the fictional place with a real experience and verify its name, location, map pin, distance, travel time, duration, cost, season, and access details.
2. Replace bracketed values. Do not publish estimates or placeholder text such as `[verified distance]`.
3. Check all selected Contentful image assets are published and use the right subject. Add useful asset titles/descriptions and the SEO share-image alt text.
4. Keep `slug` lowercase and hyphenated. The route will be `/explore/riverside-waterfall-walk` for this sample.
5. Publish the entry only after required content and images are ready. Its SEO fields will be used after the frontend integration in Phase 3 is implemented and deployed.

## Place-specific SEO fields for the 12 Explore experiences

Add these values to the matching existing `exploreExperience` entry. The slug identifies the entry and route; do not change it. Each image should be a published Contentful asset that actually depicts that place or activity. The alt text below is an example and should be adjusted to describe the selected image accurately.

### 1. Temple of the Tooth, Kandy

| Field | Sample value |
|---|---|
| `slug` (existing) | `temple-of-the-tooth` |
| `seoTitle` | Temple of the Tooth in Kandy – Visitor Guide |
| `seoDescription` | Visit Sri Dalada Maligawa, Kandy's sacred Temple of the Tooth. Find local tips on the temple setting, daily ceremonies and planning your visit. |
| `focusKeyword` | Temple of the Tooth Kandy |
| `supportingKeywords` | Sri Dalada Maligawa; Kandy temple; Temple of the Sacred Tooth Relic |
| `shareImage` | Select a published landscape image of the Temple of the Tooth or its setting beside Kandy Lake. |
| `shareImageAlt` | Sri Dalada Maligawa, the Temple of the Tooth in Kandy, Sri Lanka |

### 2. Kandy Lake Walk

| Field | Sample value |
|---|---|
| `slug` (existing) | `kandy-lake` |
| `seoTitle` | Kandy Lake Walk – Local Guide to the Lakeside Path |
| `seoDescription` | Plan a gentle walk beside Kandy Lake, with views of the city and the Temple of the Tooth. Get local tips for enjoying this central Kandy landmark. |
| `focusKeyword` | Kandy Lake walk |
| `supportingKeywords` | walk around Kandy Lake; Kandy city walk; Kandy attractions |
| `shareImage` | Select a published landscape photo of Kandy Lake and its tree-lined shore. |
| `shareImageAlt` | Tree-lined shore and water at Kandy Lake in Sri Lanka |

### 3. Udawattakele Forest Reserve

| Field | Sample value |
|---|---|
| `slug` (existing) | `udawattakele-forest` |
| `seoTitle` | Udawattakele Forest Reserve – Kandy Nature Guide |
| `seoDescription` | Explore the forest trails and green hills of Udawattakele Forest Reserve above Kandy. Read local planning tips before your visit. |
| `focusKeyword` | Udawattakele Forest Reserve |
| `supportingKeywords` | Udawattakele forest Kandy; nature walks in Kandy; Kandy forest trails |
| `shareImage` | Select a published landscape forest photo that represents the reserve and its trails. |
| `shareImageAlt` | Shaded forest trail beneath the trees at Udawattakele near Kandy |

### 4. Royal Botanical Gardens, Peradeniya

| Field | Sample value |
|---|---|
| `slug` (existing) | `royal-botanical-gardens` |
| `seoTitle` | Royal Botanical Gardens Peradeniya – Visitor Guide |
| `seoDescription` | Plan a visit to the Royal Botanical Gardens in Peradeniya near Kandy, known for its landscaped grounds, tropical plants and tree collections. |
| `focusKeyword` | Royal Botanical Gardens Peradeniya |
| `supportingKeywords` | Peradeniya Gardens; botanical garden near Kandy; things to do in Peradeniya |
| `shareImage` | Select a published landscape image of a recognizable garden avenue, lawn, or plant collection. |
| `shareImageAlt` | Landscaped gardens and tropical trees at the Royal Botanical Gardens, Peradeniya |

### 5. Kandyan Cultural Dance Show

| Field | Sample value |
|---|---|
| `slug` (existing) | `kandyan-cultural-show` |
| `seoTitle` | Kandyan Cultural Dance Show in Kandy – Visitor Tips |
| `seoDescription` | Learn what to expect at a Kandyan cultural dance performance in Kandy, including traditional music, costume and practical planning tips. |
| `focusKeyword` | Kandyan cultural dance show |
| `supportingKeywords` | Kandy cultural show; traditional dance in Kandy; Kandyan dance performance |
| `shareImage` | Select a published, permitted performance photo that clearly represents Kandyan dance and costume. |
| `shareImageAlt` | Kandyan dancers performing in traditional costume in Kandy |

### 6. Hill Country Tea Estate Visit

| Field | Sample value |
|---|---|
| `slug` (existing) | `tea-estate-visit` |
| `seoTitle` | Tea Estate Visit Near Kandy – Sri Lanka Hill Country |
| `seoDescription` | Discover what to expect on a visit to a Sri Lankan tea estate near Kandy, from green tea fields to local tea-making traditions. |
| `focusKeyword` | tea estate near Kandy |
| `supportingKeywords` | tea plantation visit Sri Lanka; Sri Lanka tea country; tea fields near Kandy |
| `shareImage` | Select a published landscape photo of tea rows or a tea estate relevant to this visit. |
| `shareImageAlt` | Rows of tea bushes across a green Sri Lankan hill country estate |

### 7. Kandy Central Market

| Field | Sample value |
|---|---|
| `slug` (existing) | `kandy-central-market` |
| `seoTitle` | Kandy Central Market – Local Shopping Guide |
| `seoDescription` | Explore Kandy Central Market, a lively place to see local produce, spices and everyday city life. Find practical tips for a respectful visit. |
| `focusKeyword` | Kandy Central Market |
| `supportingKeywords` | Kandy market; shopping in Kandy; local market in Kandy |
| `shareImage` | Select a published market photo that respects vendors and customers and shows the actual market. |
| `shareImageAlt` | Stalls and local produce inside Kandy Central Market |

### 8. Knuckles Mountain Range

| Field | Sample value |
|---|---|
| `slug` (existing) | `knuckles-mountain-range` |
| `seoTitle` | Knuckles Mountain Range – Hiking and Nature Guide |
| `seoDescription` | Explore the landscapes and outdoor experiences of Sri Lanka's Knuckles Mountain Range. Check route, weather and access conditions before planning a trip. |
| `focusKeyword` | Knuckles Mountain Range Sri Lanka |
| `supportingKeywords` | Knuckles hiking; Knuckles mountain range guide; Sri Lanka nature trails |
| `shareImage` | Select a published wide landscape image of the Knuckles range that accurately represents the destination. |
| `shareImageAlt` | Mountain ridges and forested landscape in Sri Lanka's Knuckles Range |

### 9. Ambuluwawa Tower

| Field | Sample value |
|---|---|
| `slug` (existing) | `ambuluwawa-tower` |
| `seoTitle` | Ambuluwawa Tower – Visitor Guide Near Kandy |
| `seoDescription` | Plan a visit to Ambuluwawa Tower near Gampola, known for its distinctive structure and elevated views. Check access and conditions before you go. |
| `focusKeyword` | Ambuluwawa Tower |
| `supportingKeywords` | Ambuluwawa near Kandy; Gampola tower; places to visit near Kandy |
| `shareImage` | Select a published photo showing the tower clearly, with an accurate view of its surroundings. |
| `shareImageAlt` | Ambuluwawa Tower rising above the surrounding green hills |

### 10. Sigiriya Rock Fortress Day Trip

| Field | Sample value |
|---|---|
| `slug` (existing) | `sigiriya-day-trip` |
| `seoTitle` | Sigiriya Rock Fortress Day Trip from Kandy – Guide |
| `seoDescription` | Plan a day trip to Sigiriya Rock Fortress from Kandy with an overview of the historic site and practical points to check before travelling. |
| `focusKeyword` | Sigiriya day trip from Kandy |
| `supportingKeywords` | Sigiriya Rock Fortress; visit Sigiriya Sri Lanka; Kandy day trips |
| `shareImage` | Select a published landscape image of Sigiriya Rock that your team has permission to share. |
| `shareImageAlt` | Sigiriya Rock rising above the surrounding landscape in Sri Lanka |

### 11. Minneriya and Kaudulla Elephant Safari

| Field | Sample value |
|---|---|
| `slug` (existing) | `minneriya-kaudulla-safari` |
| `seoTitle` | Minneriya and Kaudulla Safari – Planning Guide |
| `seoDescription` | Learn how to plan a responsible wildlife safari at Minneriya or Kaudulla, and check current park access and wildlife conditions before travelling. |
| `focusKeyword` | Minneriya Kaudulla safari |
| `supportingKeywords` | elephant safari Sri Lanka; Minneriya National Park; Kaudulla National Park |
| `shareImage` | Select a published wildlife image from a permitted source, accurately captioned and not staged or misleading. |
| `shareImageAlt` | Wild elephants in their natural habitat in Sri Lanka |

### 12. Sri Lankan Cooking Class

| Field | Sample value |
|---|---|
| `slug` (existing) | `sri-lankan-cooking-class` |
| `seoTitle` | Sri Lankan Cooking Class Near Kandy – Galkanda Estate |
| `seoDescription` | Discover a hands-on introduction to Sri Lankan cooking near Kandy, with local ingredients, traditional flavors and practical details for guests. |
| `focusKeyword` | Sri Lankan cooking class near Kandy |
| `supportingKeywords` | cooking class Kandy; Sri Lankan food experience; traditional cooking in Sri Lanka |
| `shareImage` | Select a published photo of an actual cooking session or prepared Sri Lankan dishes at Galkanda Estate. |
| `shareImageAlt` | Sri Lankan dishes prepared during a cooking experience near Kandy |

For all entries, replace the selected image and alt text if they do not match. Verify location/access claims and current visitor details in the body fields. These titles and descriptions are editorial starting points; review for accuracy and uniqueness before publishing.

## Before publishing

1. Check that each title and description accurately reflects its page and is not duplicated elsewhere.
2. Ensure the chosen Contentful image is published and opens in a private browser window without signing in.
3. Replace any image guidance in this document with an actual selected Contentful asset in the `Share image` field; do not paste the guidance sentence as a URL.
4. Keep every listed path exactly as written, including `/` for Home.
5. Publish each entry. These values will appear on the website after the frontend metadata integration in Phase 3 is implemented and deployed.
