# Design System

## Direction

- Editorial, calm, grounded, and premium
- Mountain retreat atmosphere rather than hotel-template styling
- Serif-led visual language with restrained UI chrome
- Image-first storytelling with warm natural tones

## Typography

### Font Families

- Display and headings: high-contrast serif
- Body, navigation, buttons, labels, metadata: clean sans-serif
- Brand mark/logo: script-like or hand-drawn exception when needed

### Heading Hierarchy

- `H1`: hero headline only
- `H2`: section titles
- `H3`: card titles and feature headings
- `H4`: FAQ, location, and supporting subheads
- Eyebrows: small labels above titles

### Type Roles

- Hero headline: very large, tightly set, broken across deliberate lines
- Section title: large and elegant with more breathing room
- Card title: medium-large and readable at a glance
- Body copy: compact to medium with comfortable leading
- Captions and metadata: small, muted, and concise
- Buttons and navigation: medium weight, no decorative treatment

### Type Traits

- Headings: light to regular weight
- Body: regular weight
- Labels and nav: medium weight
- CTA emphasis: medium to semibold weight
- Leading should tighten for display text and relax for prose

## Color System

### Core Palette

- Background: warm ivory or parchment
- Surface: white or near-white cards
- Text: charcoal or soft black
- Muted text: mid-gray and stone tones
- Primary accent: muted olive
- Secondary accent: khaki, tan, and earthy browns
- Image overlay: dark brown or charcoal with opacity

### Color Roles

- Page background
- Section background
- Surface
- Surface muted
- Border
- Heading text
- Body text
- Muted text
- Primary action
- Primary action text
- Secondary action
- Inverse text
- Overlay

## Spacing

### Vertical Rhythm

- Large gaps between major sections
- Medium spacing within cards and feature blocks
- Tight spacing inside text groups and metadata clusters

### Section Spacing

- Hero and full-bleed media need the most vertical presence
- Content sections use generous top and bottom padding
- CTA bands use clear separation from surrounding content

### Card Spacing

- Cards should have consistent internal padding
- Image, label, title, and summary should keep a compact stack
- Card content should feel airy but not sparse

### Widths

- Main content uses a centered container
- Prose-heavy content uses a narrower reading width
- Hero and image divider sections can be full bleed

### Grid Rhythm

- Three-column card rows for accommodation and testimonials
- Two-column split layouts for feature and location sections
- Small screen layouts collapse cleanly to one column

## Layout Patterns

### Hero

- Full-bleed image background
- Large left-aligned headline
- Supporting copy and dual CTA near the lower right or lower center
- Dark overlay to preserve legibility

### Content Sections

- Centered heading with short intro text
- Clear section breathing room
- Simple alignment and restrained visual noise

### Card Sections

- Uniform card heights where practical
- Image-led cards with short supporting copy
- Action link or button anchored near the bottom

### CTA Bands

- Centered copy
- Single primary action plus a secondary option
- Often placed on a soft neutral background

### Footer

- Compact logo area
- Secondary navigation
- Legal links and utility items
- Minimal visual weight compared with main sections

## Tailwind Opportunities

- Repeated section padding patterns should be abstracted
- Shared heading, eyebrow, and body combinations should become defaults
- Button intent and size variants should be standardized
- Card surfaces should share padding, border, and radius treatment
- Image frames should share aspect and crop behavior
- Split layouts should reuse one responsive pattern
- Muted label and metadata classes should be shared

## Notes

- Custom CSS should remain exceptional
- Reuse must win over one-off styling
- Component variants are preferred when the structure is the same
