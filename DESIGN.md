# Design Brief: TechLearn Academy

## Purpose
Tech education platform for learning Full Stack, Web Development, and AI/ML. Users are learners seeking clear course information, accessible learning paths, and a professional interface.

## Tone & Aesthetic
Refined minimalism. Professional SaaS quality. Clean, information-dense, accessible. Electric blue accents sparingly for CTAs and highlights. No decoration, focused on content clarity.

## Palette
| Token | Value | Usage |
|-------|-------|-------|
| background | #0f172a | Page background |
| card | #1e293b | Course cards, containers |
| foreground | #f1f5f9 | Text, primary content |
| primary | #0ea5e9 | CTAs, highlights, interactive |
| muted | #334155 | Borders, secondary text |
| destructive | #ef4444 | Errors, warnings |

## Typography
Font family: Inter. Body 16px/1.5, Headlines 28px bold, Subheads 18px 600. Tight 0.02em letter spacing.

## Structural Zones
| Zone | Surface | Border | Treatment |
|------|---------|--------|----------|
| Header/Nav | #1e293b | #334155 | Elevated card, bottom border |
| Hero | #0f172a | none | Full-width background |
| Course cards | #1e293b | #334155 | Rounded 0.5rem, shadow-sm |
| Footer | #1e293b | #334155 | Border-top, elevated background |

## Spacing & Rhythm
0.5rem base radius. 16px vertical rhythm. 24px margins for content sections. Compact card padding (12px–16px).

## Component Patterns
- Course cards: title, description, 3–5 subtopics, electric blue CTA button
- Buttons: primary (electric blue bg, navy text), secondary (slate border, slate text)
- Inputs: dark slate background (#1e293b), light text, muted border
- Accordions: multi-open for course categories

## Motion
fade-up 0.5s, slide-in-right 0.4s for card entrance. Smooth transitions on interactive elements.

## Constraints
No gradients. Flat color system. WCAG AA accessible contrast. Mobile-first, hamburger menu below md. Keyboard navigation.

## Signature Detail
Electric blue (#0ea5e9) accent as single-pixel underline on active nav items and button focus states.
