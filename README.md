# Galkanda

React frontend (Vite) and Node.js + Express backend, managed with npm workspaces.

## Setup

Use Node.js 22.12+ or a newer supported release.

```sh
npm install
npm run dev
```

- Frontend: http://localhost:5173
- Backend health endpoint: http://localhost:5000/api/health

Vite proxies `/api` requests to the backend during development.
To configure the backend port, copy `backend/.env.example` to `backend/.env`.
If you change the backend port, update the proxy in `frontend/vite.config.js` too.

## Commands

- `npm run dev` — run both apps
- `npm run dev:frontend` — run React only
- `npm run dev:backend` — run Express only
- `npm run build` — build frontend into `frontend/dist`
- `npm start` — run backend

The backend serves the API. Deploy the frontend build separately or configure static hosting for it.

## Estate frontend

The 19 original estate pages are React components in `frontend/src/pages`. `Home.jsx`
is the home page at `/`; the other main routes are `/estate`, `/experiences`, `/food`,
`/explore`, `/gallery`, and `/contact`. The 12 attraction routes are under `/explore/`.
Original `.html` URLs redirect to their React routes.

Tailwind CSS is integrated with Vite. Page components use standard utilities plus
arbitrary values and state variants for the original exact colors,
responsive breakpoints, and animation states. Font sizes use the nearest default
Tailwind text utilities with responsive variants. `frontend/src/index.css` contains
the shared design tokens and document baseline. Bootstrap is not loaded by the frontend.
GSAP, SplitText, ScrollTrigger, and Lenis are installed locally; shared interaction
setup and cleanup live in `frontend/src/behaviors/shared.js`.

The original source is kept in `galkanda-estate`. `scripts/convert-estate.mjs` records
the one-time migration; rerunning it replaces generated page and behavior files.
Edit the React files directly for ongoing frontend work.

The enquiry form retains the original client-side validation and placeholder
confirmation. Sending enquiries still requires a backend or email-service integration.
Photography and fonts retain their original external URLs.

Production hosting must rewrite frontend routes to `index.html` so direct page visits
and refreshes work. To verify locally with Google Chrome installed:

```sh
npm run dev:frontend
node scripts/check-estate-interactions.mjs
node scripts/verify-estate.mjs
```

Verification screenshots and reports are written to the ignored `artifacts/` folder.
