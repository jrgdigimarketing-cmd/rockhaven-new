# HEADER & NAVIGATION BUILD MODE

Read only:

* docs/design-system.md
* docs/component-registry.md
* docs/layout-primitives.md
* docs/project-state.md
* docs/site-map.md
* docs/codex-rules.md

Do not inspect unrelated files unless required.

Task:

Build the site's reusable header and navigation system.

Requirements:

* Follow the established design system exactly.
* Reuse existing layout primitives.
* Reuse existing shared components.
* Create new components only if necessary.
* Mobile-first implementation.
* Desktop responsive.
* Accessibility-friendly.
* Production-ready.

Navigation Requirements:

* Logo area
* Primary navigation
* Mobile navigation
* CTA button if defined in the design system

Component Goals:

The navigation should be reusable across future projects with minimal modification.

Avoid:

* Hardcoded styling values
* Duplicate button implementations
* Duplicate layout logic
* Custom CSS where Tailwind utilities are sufficient

Files:

Create or update only the files required for:

* Header
* Navigation
* Mobile Navigation

After completion:

Update:

* docs/component-registry.md
* docs/project-state.md

Provide:

1. Files created
2. Files modified
3. Rationale
4. Generated code

Stop when complete.
