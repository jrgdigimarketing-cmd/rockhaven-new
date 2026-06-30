# Component Registry

## Shared Components

- `SiteHeader`
  - Logo-only brand mark in the compact header
  - Primary navigation
  - Primary and secondary CTAs
  - Compact top-bar alignment

- `Logo`
  - Shared brand mark and wordmark
  - Framed lockup or compact logo-only variant
  - Used in the header and footer

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

- `AccommodationFeaturesComponent`
  - Centered section title
  - Reusable feature list rows
  - Bottom-aligned booking button

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
  - Business summary
  - Secondary navigation
  - Contact information
  - CTA area
  - Conditional social links
  - Copyright notice

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
