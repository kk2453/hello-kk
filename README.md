# hello-kk

A small static site, built to learn Cloudflare's free tier from the inside.

Deployed on **Cloudflare Pages**, served from their global edge network, costs $0/month.

[Live: hello-kk.pages.dev](https://hello-kk.pages.dev)

## What's in it

A single-page bento-grid introduction with:

- Live `cf-ray` tile showing which Cloudflare data center is serving the request (via Pages Function)
- Theme toggle (light / dark) with `localStorage` persistence and `prefers-color-scheme` default
- Slide-in side panel triggered by a "Login" header button (it's a joke — there's nothing to log into)
- Fully responsive — collapses to single-column on mobile
- Respects `prefers-reduced-motion` for accessibility
- Open Graph and Twitter Card metadata for shareable previews

## Stack

- HTML, CSS, JavaScript — no framework, no build step, no dependencies
- Cloudflare Pages for static hosting + global CDN
- Cloudflare Pages Functions for the `/api/ray` endpoint
- GitHub for source + CI integration

## Architecture

```
hello-kk/
├── index.html         # the page
├── style.css          # all styling (vanilla CSS, ~700 lines)
├── script.js          # interactivity (vanilla JS, no libraries)
├── robots.txt
├── sitemap.xml
└── functions/
    └── api/
        └── ray.js     # Pages Function — returns edge node metadata
```

## Local development

Just open `index.html` in a browser for static preview.

For the `/api/ray` Function to work locally, use [Wrangler](https://developers.cloudflare.com/workers/wrangler/):

```bash
npx wrangler pages dev .
```

## Deployment

Auto-deployed by Cloudflare Pages on every push:

- `main` → production at hello-kk.pages.dev
- Any other branch → preview at `<branch>.hello-kk.pages.dev`

## Status

Work in progress. The structure is stable; content and layout iterate as I refine them.

---

Built by kk · with Claude as pairing partner