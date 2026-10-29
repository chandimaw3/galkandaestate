# SEO and share previews: phased implementation plan

This guide describes how to make every public frontend page editable for SEO in Contentful and ensure shared links show the right preview in WhatsApp and other social apps.

Complete these phases in order. Each phase ends with a check so the team can confirm its output before moving on.

## Phase 1 — Audit the current frontend and choose rendering

### Current state

- `src/pages/routes.js` lists the routes and contains hard-coded title, description, image and schema values for most static pages.
- `src/App.jsx` updates `document.title`, description and a few Open Graph tags after React loads. The Explore detail page also updates its description in `src/pages/explore/ExploreDetail.jsx`.
- `src/services/contentful.js` fetches `exploreExperience` entries in the browser. Other page SEO is not currently managed in Contentful.
- `index.html` is the single HTML document returned for routes. `vercel.json` and `frontend/vercel.json` send unknown paths to that document.
- Consequently, browser inspection may show the React-updated metadata, but a scraper that only reads the first HTML response may see the same generic metadata for every URL. Client-side metadata alone is not a reliable WhatsApp preview solution.

Social crawlers need page-specific tags in the initial response HTML. Keep the current Vite/React app and add **build-time prerendering** for every public route (including each published Explore slug), or move page rendering to a server-side rendering setup. For this static site, prerendering is the smaller change. Verify the selected tool supports the project's Vite and React versions before installing it.

Do not rely on `useEffect`, `useLayoutEffect`, or browser-side Contentful calls to create tags for WhatsApp. A CMS field model without server/prerender integration will make the metadata editable but won't make its values available to a scraper on first response.

With build-time prerendering, Contentful changes become visible after a deployment rebuild. Configure a Contentful publish webhook to trigger the site's existing deployment/build hook if updates should publish without a manual deployment. If page metadata must update immediately without a rebuild, use server-side rendering instead.

### Decision for this project

Use **build-time prerendering** as the first implementation target. The site is already a Vite static deployment on Vercel, and its public page routes are known at build time. Prerender the static routes and fetch the published `exploreExperience` slugs from Contentful during the build so each detail page can also get its own HTML. Keep the existing React client for navigation and interactions.

For this site's WhatsApp and social previews, the build generates a separate HTML file for each route and inserts that route's Contentful SEO tags into `<head>` before Vercel serves it. React still renders the page body in the browser. This gives link scrapers the route-specific Open Graph tags in the initial response without changing the current SPA rendering model. If search engines must also receive fully rendered page body content without running JavaScript, move to full React prerendering or server-side rendering as a separate rendering upgrade.

With this choice, published Contentful changes require a new build/deployment. Add a Contentful publish webhook that triggers the Vercel deployment hook during Phase 7. This keeps deployment static and gives crawlers route-specific metadata in the first HTML response.

**Phase 1 completion check:** audit is complete; route-specific metadata generation at build time is selected; static routes and published Explore slugs are identified; and the acceptance requirement is route-specific metadata in the initial response HTML.

## Phase 2 — Create the Contentful SEO model

Create one `pageSeo` record for each static URL and add the matching SEO fields directly to the existing `exploreExperience` model. Static URLs match `path`; Explore URLs are formed from `slug`.

### A. Create the static-page model

1. Sign in to Contentful and select the same **Space** and **Environment** used by the frontend (`master` unless `VITE_CONTENTFUL_ENVIRONMENT` is set differently).
2. Open **Content model** and select **Add content type**.
3. Set **Name** to `Page SEO` and **API Identifier** to `pageSeo`. Save the model.
4. Add the following fields. In each field's settings, set the field ID exactly as shown. Mark required fields required and apply the listed validations.

| Display name | Field ID | Contentful field type | Required / validation |
|---|---|---|---|
| Internal name | `internalName` | Short text | Required. Editor-facing entry label. |
| Path | `path` | Short text | Required; add **unique** validation if available. Starts with `/`, no domain/query/trailing slash except `/`. |
| SEO title | `seoTitle` | Short text | Required; consider a 60-character maximum. Unique, descriptive title for this page. |
| SEO description | `seoDescription` | Short text | Required; consider a 160-character maximum. Accurate summary of this page. |
| Focus keyword | `focusKeyword` | Short text | Required; one primary phrase for the editor's content checklist. |
| Supporting keywords | `supportingKeywords` | Short text | Optional. Select **List / Array of short text** if entering several phrases. |
| Share image | `shareImage` | Media | Required; one image asset, ideally landscape at 1200 x 630 px. |
| Share image alt text | `shareImageAlt` | Short text | Required; describe meaningful image content. |
| Indexable | `indexable` | Boolean | Required; true for public pages intended for search. |

5. Arrange the fields in a useful editor order, then **Save** and **Publish** the content type. Publishing the model makes it available for entries; it does not publish page metadata yet.

### B. Add SEO fields to Explore entries

1. In **Content model**, open the existing **Explore Experience** model. Its API ID should be `exploreExperience`, which is the ID queried by `src/services/contentful.js`.
2. Add these fields with the exact IDs: `seoTitle` (Short text), `seoDescription` (Short text), `focusKeyword` (Short text), `supportingKeywords` (optional Short text or list), `shareImage` (one Media asset), and `shareImageAlt` (Short text). Make title, description, focus keyword, image, and alt text required for published entries.
3. Keep the existing `slug` field required and unique if available. It forms `/explore/{slug}`; enter lowercase words separated by hyphens, without `/explore/`.
4. Save and **Publish** the updated content type. Existing entries may need editing and republishing before newly required fields are populated.

### C. Create static page SEO entries

1. Open **Content** → **Add entry** → **Page SEO**.
2. Create one entry for each path below. Use the path exactly as shown. Write a distinct SEO title, page-specific description, one focus keyword, select a public share image, and write matching alt text.
3. Set `indexable` to true for pages intended for search. Save and **Publish** every entry.

| Internal name | Path |
|---|---|
| Home | `/` |
| About | `/about` |
| Villa | `/villa` |
| Experiences | `/experiences` |
| Explore index | `/explore` |
| Food and farm | `/food` |
| Gallery | `/gallery` |
| Contact | `/contact` |

`/estate` redirects to `/villa`; do not create a separate SEO entry for it. `/contact-v2` currently exists as another contact route. Leave it out of indexable entries unless it is intended as a separate public page. If it is only a variant, use `/contact` as the canonical page.

### D. Update Explore entries

1. In **Content**, filter by **Explore Experience** and open every entry intended to be public.
2. Fill in its SEO title, description, focus keyword, share image, and image alt text. Keep the existing `slug`; changing a live slug requires a redirect plan.
3. Save and **Publish** each entry. Confirm the image asset itself is published and publicly accessible.

### E. Check the Contentful setup

- Confirm the content model IDs are exactly `pageSeo` and `exploreExperience`, and field IDs use the spelling above.
- Confirm all static `path` values are unique and exactly match the routes. Use `/`, not a blank path, for Home.
- Confirm every intended public Explore entry has a unique slug and complete SEO fields.
- Confirm image assets are published. Open each asset URL in a private browser window and check it loads without signing in.
- Confirm entries are published in the same Space and Environment used by the deployed frontend.
- Once Phase 3's loader is implemented, verify it retrieves one `pageSeo` record and one Explore record through the Delivery API. The Contentful setup by itself does not yet change live page metadata.

**Phase 2 completion check:** both content models and their fields are published; the eight static records and all intended Explore records are populated and published; paths and slugs are unique; and images are public. The frontend starts using these values in Phase 3.
## Phase 3 — Load CMS metadata and generate page tags

1. In `src/services/contentful.js`, add a loader for all published `pageSeo` entries and map them by normalized `path`. Normalize routes consistently (remove a trailing slash except for `/`). Fail visibly in the build if a public route has no SEO record or has a duplicate path.
2. Add a shared metadata mapping/helper that produces: document title, description, canonical URL, `robots`, Open Graph title/description/type/url/image, and Twitter card/title/description/image. Use the Contentful share image's full HTTPS asset URL, not a relative path or a local `src/img` import. Include `og:image:width` and `og:image:height` when known.
3. Set a stable production origin, `https://www.galkandaestate.lk`, in deployment configuration. Build canonical and `og:url` values from that origin plus the normalized route. Do not copy the current `example.com` URLs in the hard-coded schema objects; replace those with the real canonical URL as part of the metadata/schema migration.
4. Use the page-specific Contentful SEO fields first, then sensible fallbacks from the page title, page summary, and hero image. Never emit empty `og:image` or a `null` URL. Keep `focusKeyword` for editor guidance; do not emit a `meta name="keywords"` tag as a substitute for useful page content.
5. In prerender/SSR rendering, load metadata before HTML is returned, and write it into the rendered `<head>`. The route-specific metadata must be present in each generated route's HTML file/response. Retain a client-side metadata update for in-app navigation if needed, using the same shared mapping to avoid different values.
6. Keep the public Contentful delivery token only in the frontend's existing public-delivery configuration. Never put a Content Management API token in browser code. Ensure the build can access the Contentful space/environment and document required environment variables in `.env.example`.
7. Add every canonical public route to `public/sitemap.xml`, including all published Explore slugs. Remove unpublished/redirect routes and keep `robots.txt`'s sitemap URL aligned with the production domain. Regenerate sitemap routes from the same published route data during build if possible.
8. Review the structured data in `src/pages/routes.js` as a separate SEO step: use valid JSON-LD, accurate business information, and real canonical URLs. Do not make up ratings, prices, or amenities. Structured data does not replace social tags.

### Phase 3 implementation status

The frontend now has a shared metadata mapper in `src/seo/metadata.js`, Contentful loaders in `src/services/contentful.js`, and `scripts/prerender-seo.js`, which runs after Vite builds. The generator writes one route-specific HTML file for each required static page and each published Explore slug. The local Degaldoruwa page gets its local copy and bundled image when there is no matching CMS entry. Client-side navigation reuses the same metadata mapping.

The build requires `VITE_CONTENTFUL_SPACE_ID` and `VITE_CONTENTFUL_ACCESS_TOKEN`; configure these in Vercel's project environment as well as locally. Set `VITE_CONTENTFUL_ENVIRONMENT` if the site uses an environment other than `master`, and `VITE_SITE_URL` if the production origin changes. The generator checks for missing/duplicate paths, slugs, required SEO fields, and a public HTTPS share image, and fails the build with an actionable message when an entry is incomplete. See `.env.example` for the variable names.

**Phase 3 completion check:** completed locally. `npm run build --workspace frontend` succeeded and generated route HTML for all eight static routes and seven published/local Explore routes. The initial HTML was inspected for Home, About, Temple of the Tooth, and Degaldoruwa; each had a distinct title, canonical URL, Open Graph image, description, and Twitter tags before JavaScript runs. The generated HTML includes metadata in `<head>`; the visible page body remains client-rendered.

## Phase 4 — Add canonical URLs, sitemap, and structured data

The build now generates `dist/sitemap.xml` from the same published SEO records used for page metadata. It includes the required static routes and published Explore slugs marked indexable, excludes any record with `indexable: false`, and uses the configured production origin. `/estate` is not emitted because it redirects to `/villa`. The generator also writes `dist/robots.txt` with the sitemap URL; the checked-in `public/robots.txt` already points to the production sitemap.

Canonical tags and `og:url` are built from `VITE_SITE_URL` plus each normalized route. The default is `https://www.galkandaestate.lk`.

The old hard-coded JSON-LD entries with `example.com` URLs have been removed. The build and client navigation now emit a small `WebSite`, `WebPage`, and `BreadcrumbList` graph from the same resolved metadata and canonical URL. It does not assert lodging amenities, prices, ratings, or visitor details that are not part of the SEO entry.

**Phase 4 completion check:** completed locally. The frontend build succeeded; generated output contains 15 indexable canonical URLs (eight static pages and seven Explore pages), the sitemap points to `https://www.galkandaestate.lk`, `/estate` is absent, and every generated route HTML contains a canonical URL and JSON-LD. The Explore schema uses `WebSite`, `WebPage`, and `BreadcrumbList`; no `example.com` URLs remain in the generated output. Confirm these same files after deployment, especially if `VITE_SITE_URL` is overridden.

## Phase 5 — Prepare and publish SEO content

### Content and image guidance

- Write a unique title and description for each indexable route. Match the actual page content and searcher's intent; avoid repeating the same phrase on every page.
- Use the focus keyword naturally in the title, opening copy, and a relevant heading when it fits. Google does not use the `meta keywords` tag for ranking; the focus keyword is a planning aid, not a guaranteed ranking signal.
- Ensure the visible page has useful text, descriptive headings, internal links, and descriptive `alt` attributes for meaningful images. SEO metadata cannot compensate for missing or duplicate page content.
- Choose a high quality landscape share image with the subject centered safely for crops. Upload it to Contentful so it has a public, stable HTTPS URL. Confirm the asset is published and doesn't require authentication.
- Set `og:type` to `website` for ordinary pages and `article` only for editorial articles if appropriate. Set `og:site_name` once globally. Every route must have its own `og:title`, `og:description`, `og:url`, and `og:image`.
- If a route is intentionally non-indexable, output `noindex` and keep it out of the sitemap. Do not block a page in `robots.txt` if crawlers need to read its `noindex` tag.

**Phase 5 completion check:** review each page's title, description, focus keyword, visible copy, and image. Confirm metadata is unique and accurate, assets are public HTTPS images, and no page relies on a `meta keywords` tag.

## Phase 6 — Run local and deployment tests

Run from `frontend/`:

```powershell
npm run build
npm run preview
```

Run these commands from the `frontend/` directory. The preview server will be available at `http://localhost:4173/`. Do not append `-- --host 0.0.0.0` with the current npm workspace setup: npm forwards that argument in a way that makes Vite treat `0.0.0.0` as the project root, so Vite looks for `dist` in the wrong location. If preview reports that `dist` is missing, confirm `frontend/dist/index.html` exists and rerun `npm run build` from `frontend/` before starting preview.

Use the preview URL to verify the following:

1. **Rendered source check:** Open `/`, `/about`, `/villa`, `/food`, `/contact`, and a real `/explore/{slug}` route. Use View Page Source (not only the Elements panel) and confirm the initial HTML contains distinct title, description, canonical URL, `og:title`, `og:description`, `og:url`, `og:image`, and Twitter card tags. If these only appear after JavaScript runs, prerendering/SSR is not wired correctly.
2. **Contentful checks:** Change a test entry's title, description, focus keyword, and share image; publish it and rebuild. Confirm only its route reflects the new values. Confirm missing required fields fail the build or use the documented fallback rather than outputting empty metadata.
3. **HTTP checks:** Request each route directly, not only by navigating from the home page. Verify a successful response, the correct canonical URL, and that the HTML image URL is absolute HTTPS and publicly fetchable. For example:

   ```powershell
   curl.exe -L https://www.galkandaestate.lk/explore/temple-of-the-tooth
   ```

   Search the returned HTML for its unique title and `og:image`. Do the same against the local preview origin during local checks.
4. **Image checks:** Open the exact `og:image` URL in a private browser window. Check it returns successfully without cookies, is not blocked, and has a suitable landscape aspect ratio and useful subject. Avoid formats/crops that the target share app cannot display.
5. **Social preview checks:** Use Meta Sharing Debugger for Facebook/Meta Open Graph parsing and the LinkedIn Post Inspector where relevant. These help inspect tags but do not guarantee WhatsApp's exact rendering. Send a deployed, public URL to a WhatsApp chat and inspect the generated card. If an old card persists, WhatsApp may have cached it; correct the URL/tags first, then test with a new URL query string or wait for the cache to refresh. Query strings are for cache diagnosis only; canonical URLs should remain clean.
6. **Search checks:** Validate important pages with Google Search Console URL Inspection after deployment and request recrawling when needed. Use Rich Results Test only for structured data types it supports. Search snippets may use page text instead of the meta description, and indexing/ranking is not guaranteed.
7. **Sitemap and robots:** Open `/sitemap.xml` and `/robots.txt` on the deployed host. Confirm every canonical public page appears in the sitemap and its URLs use `https://www.galkandaestate.lk`.
8. **Regression check:** Test React navigation between routes, back/forward navigation, direct loads of nested Explore paths, and the `/estate` to `/villa` redirect. Confirm the browser title and tags update on navigation while the initial response also has the right tags.

### Phase 6 test checklist

- [ ] Every indexable static page has one published `pageSeo` entry.
- [ ] Every published Explore slug has complete SEO/share fields.
- [ ] Prerender or SSR writes route-specific metadata into the initial HTML.
- [ ] Titles/descriptions are unique, accurate, and not empty; focus keywords are used naturally in page copy.
- [ ] Canonical, Open Graph, and sitemap URLs use the real production domain.
- [ ] Share images are public HTTPS assets with correct crops and useful alt text.
- [ ] Direct URL, source HTML, social preview, sitemap, and navigation checks pass.
- [ ] Contentful publishing triggers a rebuild, or the site uses SSR for immediate metadata updates.

**Phase 6 completion check:** all source HTML, direct HTTP, Contentful update, image, sitemap, navigation, and WhatsApp preview checks pass on a deployed public URL.

## Phase 7 — Publish and maintain

1. Deploy the tested implementation and Contentful entries.
2. Confirm the Contentful publish webhook triggers the configured rebuild, or verify the SSR route returns fresh metadata after publishing.
3. Submit/refresh the sitemap in Google Search Console and inspect priority routes after deployment.
4. When editors change a title, description, focus keyword, slug, or share image, repeat the relevant Phase 5 and Phase 6 checks.
5. Recheck WhatsApp previews after changes. Social platforms can cache previous previews, so allow time for refresh or use a temporary query string to diagnose cache behavior; keep canonical URLs query-free.
