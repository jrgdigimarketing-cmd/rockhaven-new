# FINAL SITE REVIEW MODE

Read only:

* docs/design-system.md
* docs/component-registry.md
* docs/layout-primitives.md
* docs/project-state.md
* docs/site-map.md
* docs/codex-rules.md

Review the entire project before launch.

Act as:

* Senior Frontend Architect
* Senior UI Engineer
* Technical Lead
* Performance Reviewer

Primary Goal:

Improve quality, consistency, maintainability and performance while reducing unnecessary code.

Do not make assumptions.

Verify everything.

Perform the following review.

---

# 1. Design System Compliance

Check that all sections follow:

* Typography scale
* Colour system
* Spacing system
* Radius system
* Shadow system

Identify:

* Inconsistencies
* Redundant styles
* Hardcoded values

Recommend corrections.

---

# 2. Component Review

Review all shared components.

Identify:

* Duplicate components
* Overlapping responsibilities
* Components that should be merged
* Components that are too complex
* Components that are never used

Recommend simplifications.

---

# 3. Layout Review

Review all layouts and layout primitives.

Identify:

* Duplicate layouts
* Repeated grid structures
* Repeated spacing patterns
* Opportunities for abstraction

Recommend improvements.

---

# 4. Tailwind Review

Identify:

* Repeated class combinations
* Repeated utility patterns
* Opportunities for extraction
* Unnecessary custom CSS

Recommend improvements.

---

# 5. Accessibility Review

Check:

* Semantic HTML
* Heading hierarchy
* Button accessibility
* Form accessibility
* Keyboard navigation
* ARIA usage
* Colour contrast

Identify issues and fixes.

---

# 6. Mobile Review

Review:

* Small mobile devices
* Tablet layouts
* Desktop layouts

Identify:

* Overflow issues
* Layout shifts
* Touch target issues
* Spacing issues

Recommend fixes.

---

# 7. Performance Review

Identify:

* Large images
* Unnecessary JavaScript
* Unnecessary components
* Expensive rendering patterns
* Unused imports
* Dead code

Recommend removals.

---

# 8. SEO Review

Review:

* Metadata
* Heading structure
* Semantic markup
* Internal linking
* Image alt text
* Structured content

Identify improvements.

---

# 9. Code Quality Review

Identify:

* Dead code
* Unused files
* Unused components
* Unused data structures
* Over-engineering
* Premature abstraction

Recommend removals.

---

# 10. Production Readiness Review

Verify:

* Consistent branding
* Responsive layouts
* Component reuse
* Data separation
* Maintainability

Identify remaining risks.

---

# Output Format

Provide:

## Executive Summary

Overall assessment.

## Critical Issues

Items that should be fixed before launch.

## Recommended Improvements

Items that would improve maintainability, performance or UX.

## Code Simplification Opportunities

List all opportunities to reduce code.

## Component Consolidation Opportunities

List all opportunities to reduce duplication.

## Final Readiness Score

Score:

* Design Consistency
* Accessibility
* Performance
* Maintainability
* SEO
* Overall Production Readiness

## Action Plan

Provide the exact order in which remaining improvements should be completed.

Only generate code if required to fix a critical issue.

Prefer simplification over adding new code.

Do not redesign the website.

Do not introduce new features.

Do not introduce new components unless absolutely necessary.

The objective is to launch the cleanest, simplest, most maintainable version of the existing design.
