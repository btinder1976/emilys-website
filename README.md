# Emily's Website

This is Emily's personal website. It is meant to be a fun place where she can learn how to use AI to update her own site over time.

## Current theme

The first version uses a spooky-cool adventure style with:

- A dark mystery-inspired hero section
- Original creature-card style favorites
- Outdoor, climbing, mud, and adventure badges
- STEM learning section
- Photo gallery placeholders
- Parent-safety reminders for public contact or business ideas

## How Emily can ask for changes

Emily can use normal language, like:

- "Change the big picture at the top."
- "Add this picture to my gallery."
- "Make the colors more purple."
- "Add a page for my STEM projects."
- "I want a page for a business idea."
- "Change the adventure section to be about climbing."

The AI helper should figure out what part of the website she means, or ask a simple question if it is not clear.

## Safety rules

Do not publish Emily's address, school, phone number, personal email, daily schedule, or exact location.

Anything involving contact forms, selling, payments, or public messages should be parent-approved first.

## Cloudflare Pages deployment

This site is ready to connect to Cloudflare Pages.

Suggested Cloudflare Pages settings:

- Project type: Pages
- Connect to Git: GitHub
- Repository: `btinder1976/emilys-website`
- Production branch: `main`
- Framework preset: None / Static HTML
- Build command: leave blank
- Build output directory: `/` or repository root
- Environment variables: none needed

After Cloudflare deploys the site, it will give you a `*.pages.dev` URL. You can later attach a custom domain from the Cloudflare Pages project settings.

## Files

- `index.html` — the homepage content
- `styles.css` — the colors, layout, animation, and design
- `script.js` — small interactive features
- `_headers` — Cloudflare Pages browser/security headers
- `_redirects` — Cloudflare Pages fallback route to the homepage
- `netlify.toml` — simple Netlify hosting configuration, safe to keep even if Cloudflare is used
