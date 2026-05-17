# kk.portfolio

A small static site, built to learn Cloudflare's free tier from the inside.

Deployed on **Cloudflare Pages**, served from their global edge network, costs $0/month.

## Stack

- HTML, CSS, JavaScript (no framework, no build step)
- Cloudflare Pages for hosting
- Cloudflare Pages Functions for the live `cf-ray` edge-node display

## Local development

Just open `index.html` in a browser. That's it.

For the `/api/ray` function to work locally, you'll need [Wrangler](https://developers.cloudflare.com/workers/wrangler/):

```bash
npx wrangler pages dev .
```

## Deployment

Auto-deployed on every push to `main` via Cloudflare Pages GitHub integration.

## Status

Work in progress. See branches for active development.

---

Built by kk · with Claude as pairing partner