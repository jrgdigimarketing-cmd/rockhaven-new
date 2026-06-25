# Component Registry

## Shared Components

- `SiteHeader`
  - Logo area
  - Primary navigation
  - Compact top-bar alignment

- `HeroSection`
  - Full-bleed image hero
  - Large serif headline
  - Supporting copy
  - Dual CTAs

- `AccommodationCard`
  - Image
  - Small label
  - Title
  - Summary copy
  - Action link

- `FeatureList`
  - `FeatureItem` rows
  - Icon, title, and description
  - Used for the feature block beside imagery

- `TestimonialCard`
  - Quote
  - Source mark
  - Avatar
  - Author name
  - Location

- `CTASection`
  - Centered booking prompt
  - Primary and secondary actions

- `FAQGrid`
  - Question and answer blocks
  - Multi-column layout on larger screens

- `LocationSection`
  - Location intro
  - Supporting place blurbs
  - Image companion block

- `SiteFooter`
  - Logo area
  - Secondary navigation
  - Legal links
  - Social icons

## Shared Micro-Components

- `SectionHeading`
- `Eyebrow`
- `Button`
- `TextLink`
- `CardSurface`
- `ImageFrame`
- `QuoteMark`
- `AvatarBadge`

## Variants

- Prefer variants over duplicate components when the structure stays the same
- Standardize button intent, size, and emphasis instead of creating separate buttons
- Standardize card density and image framing instead of duplicating card shells
- Standardize section tone and text alignment through props or variants

## Reuse Rules

- Anything repeated across two or more sections should be promoted here first
- Supporting form patterns should stay minimal and reusable
- Avoid one-off components when a shared block or variant is enough
