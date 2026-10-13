# Body Balance Therapies — Concept 1: Luxury Wellness & Spa

Homepage design preview for Body Balance Therapies (Houston, TX).

**Technology:** plain HTML, CSS and vanilla JavaScript. No framework, no build step, no dependencies to install.

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | The homepage |
| `styles.css` | All styles, including self-hosted font definitions |
| `main.js` | Interactions: the Massage dropdown, the mobile menu, and the testimonial carousel (arrows, dots and swipe) |
| `assets/img/` | The client's original photography |
| `assets/fonts/` | Self-hosted web fonts (SIL Open Font License, via Fontsource) |
| `vercel.json` | Vercel settings: clean URLs, long caching for assets, and `noindex` |

## Deploy to Vercel

Vercel detects this as a static site automatically. If it asks, choose **Framework Preset: Other**. Leave **Build Command** and **Output Directory** empty.

**Option A: Vercel CLI**

1. Install Node.js from nodejs.org, if you don't have it.
2. Open a terminal inside this folder (the one containing `index.html`).
3. Run `npx vercel` and log in when asked.
4. Accept the defaults: a new project, this directory, and no build settings to change.
5. Run `npx vercel --prod` to get the production link.

**Option B: GitHub**

1. Create a new GitHub repository and upload the contents of this folder to it, so that `index.html` sits at the top level.
2. In Vercel, go to **Add New… → Project**, import the repository, and click **Deploy**.

## Preview locally

Open a terminal in this folder and run `npx serve .` (or `python3 -m http.server`). Then visit the address it prints.

## Notes

- The booking/contact form is **demonstration only** and sends nothing. Connecting it to email, a form service or a booking system is part of the full build.
- `vercel.json` adds a `noindex` header so search engines don't index the preview. Remove it before launching the real site.
