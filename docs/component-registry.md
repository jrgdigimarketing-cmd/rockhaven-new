# Component Registry

## Shared Components

- `Header`
  - Logo-only brand mark in the compact header
  - Primary navigation
  - Primary and secondary CTAs
  - Compact top-bar alignment

- `MobileMenu`
  - Off-canvas mobile navigation drawer
  - Closing overlay and back-to-top control
  - Focus trap and body scroll lock

- `Navigation`
  - Desktop link cluster used in the header

- `Logo`
  - Shared brand mark and wordmark
  - Framed lockup or compact logo-only variant
  - Used in the header and footer

- `HeroSection`
  - Full-bleed image hero
  - Large serif headline
  - Supporting copy
  - Dual CTAs

- `HeroMedia`
  - Poster-first hero media layer
  - Optional desktop video with poster fallback
  - Reduced-motion and low-data aware

- `Button`
  - Shared primary, secondary, and ghost intent styles

- `TextLink`
  - Inline text-link treatment for internal and external navigation

- `Card`
  - Generic surfaced card shell with tone and padding variants

- `Container`
  - Shared width wrapper for centered page content

- `Grid`
  - Reusable responsive grid primitive for card and column layouts

- `SectionCardGrid`
  - Small wrapper that maps a shared `items` list into a responsive `Grid`
  - Used by the accommodation preview and FAQ desktop card layouts

- `DisclosureList`
  - Small wrapper that maps a shared `items` list into a stack of disclosure cards
  - Used by the FAQ mobile layout

- `SectionHeading`
  - Shared eyebrow, title, and description grouping

- `Eyebrow`
  - Small uppercase section label used above headings

- `SectionWrapper`
  - Shared section shell that pairs `Container`, `SectionHeading`, and `reveal`

- `SplitLayout`
  - Two-column text/media composition primitive

- `Stack`
  - Vertical spacing primitive for text groups and control clusters

- `TestimonialCard`
  - Quote
  - Source mark
  - Avatar
  - Author name
  - Location

## Shared Section Patterns

- `Collection card sections`
  - Shared `SectionWrapper` plus `Grid` plus `Card` scaffolding for repeated content blocks
  - `AccommodationPreviewPrice` uses image cards, highlights, price text, and CTA buttons
  - `FAQSection` uses the same pattern for question and answer cards, with a mobile `details`/`summary` disclosure variant
  - Reuse this pattern before creating a new bespoke list-style section

- `Disclosure card sections`
  - Responsive `details`/`summary` cards for compact information browsing
  - Used by `FAQSection` on mobile
  - Also used by `LocationPreviewSection` for expandable travel facts

## Shared Sections

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

- `ExperienceHighlightsSection`
  - Two-column editorial header
  - Four-column image-led feature grid
  - Left-aligned CTA row with primary button and secondary text link

- `FarmExperiencePreview`
  - Full-width farm story preview on the home page
  - Responsive disclosure list on mobile
  - Desktop feature rows with a large carousel image

- `AboutSection`
  - Story-led split layout
  - Supporting stat cards
  - Image carousel companion

- `GallerySection`
  - Editorial image grid
  - Short intro copy
  - Learn more action

- `TestimonialsSection`
  - Guest quote carousel
  - Mobile card slider and desktop marquee

- `BookingCTASection`
  - Centered booking prompt
  - Primary action and supporting image band

- `FAQSection`
  - Question and answer blocks
  - Responsive details/summary and card layout

- `LocationPreviewSection`
  - Hidden preview title
  - Expandable location facts
  - Google Maps companion block

- `LocationSection`
  - Centered location title and supporting copy
  - Simple bullet-point location list
  - Map panel companion block

- `SiteFooter`
  - Logo area
  - Business summary
  - Secondary navigation
  - Contact information
  - CTA area
  - Conditional social links
  - Copyright notice

## Shared Motion Utilities

- `reveal`
  - Subtle scroll-triggered fade and slight rise for section entrances
  - Used by `SectionWrapper` and full-bleed section shells

- `scrollDamp`
  - Soft scroll-responsive drift for large media surfaces
  - Used only on the About carousel, the accommodation detail carousel, and the farm experience preview

## Variants

- Prefer variants over duplicate components when the structure stays the same
- Standardize button intent, size, and emphasis instead of creating separate buttons
- Standardize card density and image framing instead of duplicating card shells
- Standardize section tone and text alignment through props or variants
- Reuse the accommodation and FAQ card/disclosure patterns before splitting them into separate section-specific shells

## Reuse Rules

- Anything repeated across two or more sections should be promoted here first
- Supporting form patterns should stay minimal and reusable
- Avoid one-off components when a shared block or variant is enough
