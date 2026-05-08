# Engineering + Creativity

A principal-level personal site built with Angular 20 and Tailwind CSS. The design is intentional, clean, and focused on the intersection of engineering and creativity.

## Site Structure

- Home — minimal splash layout with a clear theme and intentional entry point
- About — responsive personal story with photo and focused copy
- Experience — a narrative account of roles, leadership, architecture, and engineering philosophy
- Projects — browser-first games, creative tools, cloud-native systems, and modern experiments
- Contact — direct engagement with a clean form and email path

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm start
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/app/core` — shared services and application configuration
- `src/app/shared` — reusable UI components and shell layout
- `src/app/features` — standalone page components and feature logic
- `src/styles` — global theme, layout, and Tailwind integration

## Design Intent

This site is built to communicate engineering discipline and creative craft without using the word “portfolio” in the visible UI.

## Link Behavior Standard

All links on this site should follow this rule:

1. Use `routerLink` for internal Angular routes so navigation stays in the single-page app and preserves SPA behavior.
2. Use `href` for external URLs, and open them with `target="_blank"` plus `rel="noopener noreferrer"`.

Preferred pattern:

```html
<!-- Internal route -->
<a [routerLink]="'/projects/insights/engineering-cultures'">Engineering Cultures</a>

<!-- External destination -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
```

This is especially important for the Projects cards where internal insight links should not trigger a full page reload.
