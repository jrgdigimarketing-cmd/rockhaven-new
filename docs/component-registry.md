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

- `AccommodationPreviewPrice`
  - Centered section title
  - Accommodation card grid
  - Featured price
  - Short highlight list
  - Booking and details actions

- `AccommodationFeaturesSection`
  - Centered section title
  - Room description
  - Amenity list
  - Price and booking action
  - Image carousel

- `AccommodationSharedFeatures`
  - Centered section title
  - Shared amenity icon grid
  - Reusable list of stay-wide features and access points

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

- `ExperienceHighlightsSection`
  - Two-column editorial header
  - Four-column image-led feature grid
  - Left-aligned CTA row with primary button and secondary text link

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
  - Centered location title and supporting copy
  - Simple bullet-point location list
  - Map panel companion block

- `LocationPreviewSection`
  - Hidden preview title
  - Expandable location facts
  - Google Maps companion block

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

## Shared Motion Utilities

- `reveal`
  - Subtle scroll-triggered fade and slight rise for section entrances
  - Used by `SectionWrapper` and selected full-bleed section shells
- `scrollDamp`
  - Soft scroll-responsive drift for large media surfaces
  - Used on hero media and selected image-heavy sections to keep motion calm and lightweight

## Variants

- Prefer variants over duplicate components when the structure stays the same
- Standardize button intent, size, and emphasis instead of creating separate buttons
- Standardize card density and image framing instead of duplicating card shells
- Standardize section tone and text alignment through props or variants

## Reuse Rules

- Anything repeated across two or more sections should be promoted here first
- Supporting form patterns should stay minimal and reusable
- Avoid one-off components when a shared block or variant is enough
