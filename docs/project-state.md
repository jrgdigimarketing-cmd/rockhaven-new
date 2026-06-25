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
