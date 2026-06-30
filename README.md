# Website Starter Template

This repository is a reusable SvelteKit starter for future client websites.

It is designed to be:

- JavaScript-first
- Mobile-first and responsive
- Tailwind-powered
- Cloudflare Pages ready
- Easy to inspect in Codex and VS Code
- Organized around reusable content files and sections

## What is included

- SvelteKit project structure
- Tailwind CSS and PostCSS configuration
- Shared styling tokens
- Reusable components
- Reusable page sections
- Content/data files
- Documentation and prompt library
- Placeholder assets
- Cloudflare-focused deployment notes

## Folder overview

- `src/routes/` page entry points
- `src/lib/components/` shared UI pieces
- `src/lib/sections/` reusable page sections
- `src/lib/layouts/` site shells and wrappers
- `src/lib/data/` content models and placeholder copy
- `src/lib/styles/` global style tokens and utilities
- `static/images/` placeholder imagery by use case
- `static/videos/` placeholder video folders and notes
- `static/icons/` icon placeholders
- `static/logos/` logo placeholders
- `static/favicons/` favicon placeholders
- `docs/` project notes, SEO, sitemap, and content planning
- `docs/prompts/` reusable prompt snippets for future projects
- `.github/workflows/` GitHub automation for deployment
- `scripts/` optional helper scripts for future maintenance

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Run the Svelte check:

```bash
npm run check
```

4. Build for production:

```bash
npm run build
```

This writes the Cloudflare-ready SvelteKit output to `.svelte-kit/cloudflare` and mirrors it to `build/` for Cloudflare Pages deployments and the GitHub Actions workflow in this repo.

## How to add a new section

1. Create a new file in `src/lib/sections/`.
2. Build the section as a self-contained Svelte component.
3. Pull content from `src/lib/data/` where practical.
4. Add the section to `src/routes/+page.svelte`.
5. Reuse `Container.svelte` and `SectionWrapper.svelte` for consistency.

## How to edit content

- Update company details in `src/lib/data/company.js`
- Update nav links in `src/lib/data/navigation.js`
- Update services in `src/lib/data/services.js`
- Update testimonials in `src/lib/data/testimonials.js`
- Update FAQs in `src/lib/data/faq.js`
- Update SEO defaults in `src/lib/data/seo.js`

## How to add assets

- Put hero images in `static/images/hero/`
- Put service imagery in `static/images/services/`
- Put team imagery in `static/images/team/`
- Put testimonial imagery in `static/images/testimonials/`
- Put gallery imagery in `static/images/gallery/`
- Put generic placeholders in `static/images/placeholders/`
- Put logo assets in `static/logos/`
- Put favicon assets in `static/favicons/`

Keep asset names descriptive and local so future projects do not depend on external URLs.

## Cloudflare Pages deployment

This starter uses `@sveltejs/adapter-cloudflare`.

Recommended deployment flow:

1. Push to GitHub.
2. Connect the repository to Cloudflare Pages.
3. Use the SvelteKit build command.
4. Deploy the generated `build/` output.

If you configure Cloudflare Pages manually, point the build output directory at `build/` so it picks up the mirrored adapter output.

If you prefer GitHub Actions, use the example workflow in `.github/workflows/deploy.yml`.

## GitHub workflow recommendations

- Keep `main` deployable.
- Use feature branches for larger edits.
- Commit section-by-section when building new page types.
- Keep generated assets small and local.
- Review the data files before merge so placeholder content does not leak into production.

## Codex workflow recommendation

When working section by section with Codex:

1. Update the relevant data file first.
2. Build or adjust the section component.
3. Add the section to the homepage.
4. Check the output in the browser.
5. Repeat until the page feels complete.

This keeps the template understandable and avoids hard-coding content directly into layout files.

## Production notes

Before using this starter on a real client site:

- Replace all placeholder copy
- Swap in approved brand assets
- Connect a real form endpoint
- Review metadata and social share images
- Add analytics if the project requires them
- Confirm Cloudflare environment variables

# rockhaven-new
