# Cade Stories

## Hero Summary

Cade Stories is a single-page, newspaper-style web app that generates a whimsical front page of fictional stories, quotes, headlines, and blurbs from structured story data.

- Live site: [https://cade-stories.dan-maguire.com](https://cade-stories.dan-maguire.com)
- Tech stack: TypeScript, React + Vite, custom layout engine, Story Engine integration
- Metadata: slug `cade-stories`

## Project Narrative

Cade Stories started as a focused experiment in format, not just content. I wanted a playful reading surface that felt lightweight and consumable, but still had enough structure to support repeatable generation. The newspaper front page became the right constraint: familiar, visually dense, and naturally modular.

The design goal was kid-friendly clarity. Headlines, blurbs, and pull quotes need to be readable at a glance, with enough variation to feel imaginative without becoming chaotic. The UI stays intentionally minimal so the generated content remains the center of attention, while whimsical details keep the experience warm.

The engineering goal was to treat layout as an engine. Instead of hardcoding a static page, the app consumes structured story JSON and maps it into reusable presentation slots with predictable flow rules. That keeps rendering deterministic while still supporting playful content variation.

Story generation is handled by a separate Story Engine repository. Cade Stories integrates with that engine through a clean client boundary, receives structured payloads, validates shape expectations, and then renders output through the layout pipeline. This keeps content creation concerns isolated from rendering concerns.

The result is a modular, production-ready front end where the newspaper metaphor is a delivery mechanism for structured narrative data. The architecture is intentionally small, but designed to extend cleanly as new templates, content blocks, and illustration systems are added.

## Architecture Overview

- **Layout engine**: maps structured story blocks into a newspaper grid with column flow, spacing rules, and section-level regeneration.
- **Story Engine client**: requests story payloads, normalizes responses, and hands validated objects to rendering.
- **JSON schemas**: enforce predictable content shape for headlines, blurbs, quotes, and metadata.
- **Components and rendering flow**: shell loads -> generate request -> schema validation -> layout assignment -> section render -> optional section regenerate.
- **Extensibility**: layout contract is template-oriented, so future page designs can reuse the same content interfaces.

## Key Features

- One-click newspaper generation
- Regenerate individual sections
- Pull quote support
- Column flow and text wrapping
- Placeholder illustrations
- Fully responsive layout

## Screenshots (Placeholders)

![Cade Stories front page placeholder](./placeholder-front-page.png)
![Cade Stories section regeneration placeholder](./placeholder-section-regeneration.png)
![Cade Stories responsive layout placeholder](./placeholder-responsive-layout.png)

## Future Roadmap

- Multiple templates
- Multi-page issues
- Export to PDF/image
- Integration with sprite-engine for illustrations

## External Link

[Open Cade Stories](https://cade-stories.dan-maguire.com)
