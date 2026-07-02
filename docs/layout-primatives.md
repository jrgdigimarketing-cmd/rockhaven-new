# Layout Primitives

## Current Set

- `Container`
  - Base width wrapper for centered content
  - Supports a standard page width and a narrower prose width

- `SectionWrapper`
  - Owns vertical section padding
  - Handles optional background tone or section surface
  - Pairs with the shared `reveal` motion action

- `SectionHeading`
  - Shared eyebrow, title, and description block used by `SectionWrapper`

- `Stack`
  - Primary spacing primitive for vertical text groups
  - Used for headings, body copy, CTAs, FAQs, and footer clusters

- `Grid`
  - Multi-card and multi-column layout primitive
  - Used for accommodation cards, testimonials, and FAQ grids

- `SplitLayout`
  - Two-column primitive for text and image compositions
  - Used for feature and location sections
  - Collapses to one column on smaller screens

## Responsibilities

- `Container` controls width and horizontal centering
- `SectionWrapper` controls top and bottom rhythm
- `SectionHeading` controls the shared eyebrow/title/description composition
- `Stack` controls spacing inside a block of content
- `Grid` controls card placement and column count
- `SplitLayout` controls balanced two-column composition

## Usage Rules

- Use primitives before introducing component-specific layout logic
- Keep page width decisions out of cards and section shells
- Let components consume primitives instead of duplicating spacing rules
- Favor responsive collapse patterns over separate mobile layouts

## Responsive Patterns

- Hero and image divider sections may be full bleed
- Card rows should stack cleanly on small screens
- Split layouts should collapse to one column in a readable order
- Prose content should keep a narrow measure on large screens

## Note

- The workspace currently uses the misspelled filename `layout-primatives.md`
- Keep this file as the active layout primitives reference until the repository is normalized
- Large media surfaces may also use the shared `scrollDamp` action for very subtle scroll-responsive drift, but only when the motion adds meaningful value
