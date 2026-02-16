# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a picture/portfolio website project. The goal is to create a visually beautiful, performant, and responsive website.

## Environment

- **Platform:** Windows 11 (bash shell via Git Bash)
- **Path style:** Use forward slashes in all paths
- **Null device:** Use `/dev/null`, not `NUL`
- **Line endings:** Be aware of CRLF vs LF — prefer LF for web files

## Tech Stack Preferences

When building this website, prefer:
- **HTML5** semantic elements (`<main>`, `<section>`, `<figure>`, `<picture>`)
- **CSS3** with custom properties (variables), modern layout (Grid + Flexbox)
- **Vanilla JS** unless complexity warrants a framework — keep it lightweight
- **No unnecessary dependencies** — every added library must justify its weight

## Design Principles

- **Mobile-first responsive design** — start with small screens, scale up with `min-width` media queries
- **Fluid typography** using `clamp()` — e.g., `font-size: clamp(1rem, 2.5vw, 1.5rem)`
- **Smooth transitions** — use `transition` and `animation` with `prefers-reduced-motion` respect:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
  ```
- **Color scheme** — define a cohesive palette using CSS custom properties on `:root`
- **Whitespace is a feature** — generous padding/margins, avoid visual clutter
- **Image optimization** — use `<picture>` with `srcset`, `loading="lazy"`, and WebP/AVIF formats when possible
- **Aspect ratios** — use `aspect-ratio` CSS property to prevent layout shift

## Performance Rules

- Images must have explicit `width` and `height` attributes to prevent CLS
- Inline critical CSS in `<head>`, defer non-critical stylesheets
- Fonts: use `font-display: swap`, preload key fonts with `<link rel="preload">`
- Target Lighthouse scores: Performance 90+, Accessibility 100, Best Practices 100, SEO 90+

## Accessibility

- All images require meaningful `alt` text (not "image of..." — just describe the content)
- Color contrast must meet WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
- Interactive elements need visible focus styles — never `outline: none` without a replacement
- Use `aria-label` only when visible text is insufficient
- Ensure full keyboard navigability

## File Structure Convention

```
picture/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── originals/     # full-res source images
│   └── optimized/     # web-ready compressed images
└── fonts/             # self-hosted fonts if any
```

## Development

To preview locally, use any static server:
```bash
# Python
python -m http.server 8000

# Node (if npx available)
npx serve .
```

## Code Style

- CSS: use BEM-like naming (`.gallery__item--featured`) or utility classes, stay consistent
- JS: use `const`/`let` (never `var`), template literals, ES modules if needed
- HTML: indent with 2 spaces, lowercase tags and attributes
- Keep files under 300 lines — split when they grow beyond that
