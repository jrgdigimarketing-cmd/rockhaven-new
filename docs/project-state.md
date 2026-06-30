# Project State

## Current Design Direction

- Editorial serif-led aesthetic
- Warm neutral palette with olive accents
- Spacious, image-first homepage composition
- Calm rural retreat tone with premium restraint

## Current Page Structure

1. Hero
2. Accommodation cards
3. Feature split section
4. Testimonials
5. Booking CTA
6. Full-bleed landscape band
7. FAQ
8. Location section
9. Footer

## Accommodation Page State

- The accommodation route now starts with the shared `HeroSection` using placeholder copy
- The Erica accommodation feature section now uses a dedicated carousel-backed layout with room description, amenities, visible price, and booking CTA
- The accommodation route now repeats the shared `AccommodationFeaturesSection` for Lavender Cottage and Farm House so all three cottages use the same detail layout
- Each accommodation detail section uses a centered title, a room description, amenity list, visible price, and a bottom `Book` button
- The accommodation route now ends with the shared booking CTA section instead of separate process and about sections

## Booking CTA State

- Booking CTA section is implemented as a centered text block with a full-width image band beneath it

## Gallery Section State

- The gallery section now uses local placeholder imagery, a short stay-focused introduction, and a `Learn more` button that links to the about page

## Header State

- Header uses the compact logo-only brand mark
- Desktop header includes primary navigation plus primary and outline secondary CTAs
- Header height remains fixed while the logo scales to fit within the existing bar

## Footer State

- Reusable footer shell is in place
- Footer content is driven by `company` and `navigation` data
- Footer includes logo, summary, CTA, navigation, contact details, and conditional social links

## Architecture Priorities

- Component-first
- Primitive-led
- Reuse before creation
- Tailwind utilities first
- Custom CSS only when necessary

## Implementation Order

1. Lock design tokens for typography, color, spacing, radius, and shadows
2. Build layout primitives: `Container`, `SectionWrapper`, `Stack`, `Grid`, `SplitLayout`, `ContentBlock`
3. Build shared text and action patterns: `Eyebrow`, `SectionHeading`, `Button`, `TextLink`
4. Build shared visual wrappers: `CardSurface`, `ImageFrame`, `QuoteMark`, `AvatarBadge`
5. Build the navigation shell: `SiteHeader` and footer navigation primitives
6. Build the hero section
7. Build the accommodation card system
8. Build the feature split section
9. Build the testimonial section
10. Build the booking CTA section and full-bleed image divider
11. Build the FAQ section
12. Build the location section
13. Build the footer

## Reuse Checkpoint

- Check the component registry and layout primitives before creating anything new
- Prefer variants and shared wrappers over one-off structures

## Verification Checkpoint

- Confirm desktop composition first
- Then verify mobile stacking, line breaks, and tap targets

## Cleanup Note

- The workspace currently uses `docs/layout-primatives.md`
- Normalize the filename after the architecture is finalized

## Supporting Systems

- Forms are not a headline feature in the current mockup
- Keep the form system minimal and reusable for future pages
