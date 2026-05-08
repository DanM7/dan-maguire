# Flash Cards

## Hero Summary

Flash‑Cards is a voice‑driven flash‑card engine for sight words, math, and vocabulary: it listens to spoken answers, applies lightweight interpretation, and tracks progress across subjects and profiles.

- Live site: [https://flash-cards.dan-maguire.com](https://flash-cards.dan-maguire.com)
- Tech stack: Angular, TypeScript, Web Speech API, client‑side NLP heuristics
- Metadata: slug `flash-cards`

## Project Narrative

Flash Cards began as a practical tool for my son: a practice surface that matched how he actually wants to work, without turning study into a chore. The goal was not novelty for its own sake, but a calm, repeatable loop that still felt human.

The design goal is kid‑first clarity. The interface stays minimal so attention stays on the prompt and the answer, while small touches (including Star Wars–themed encouragement) add warmth without crowding the screen.

The engineering goal is a data‑driven engine rather than a pile of one‑off screens. Cards, subjects, profiles, and progress are modeled explicitly so the same core flow can extend into math, vocabulary, and other areas without rewriting the spine of the app.

Speech is treated as a first‑class input path. Recognition results are normalized, interpreted with simple NLP rules, and evaluated against expected answers in a way that tolerates kid‑realistic variation without becoming ambiguous or opaque.

The result is a small, production‑minded SPA that prioritizes reliability, observability of state, and a clear separation between “content model” and “presentation.”

## Architecture Overview

- **Card engine**: defines decks, prompts, scoring, and progression rules as structured data.
- **Speech pipeline**: captures audio intent via the Web Speech API, normalizes transcripts, and routes through interpretation helpers.
- **Profile + subject model**: isolates learner context so progress and configuration do not leak across profiles.
- **UI layer**: thin components focused on prompts, feedback, and navigation; avoids embedding subject logic in templates.
- **Extensibility**: new subjects and card types plug into the same engine contracts.

## Key Features

- Voice‑first answering with spoken feedback loops
- Multi‑subject support (sight words, math, vocabulary)
- Per‑learner profiles and progress tracking
- Lightweight NLP for answer interpretation
- Encouragement layer tuned for engagement without distraction
- Responsive layout for tablet and desktop practice sessions

## Screenshots (Placeholders)

![Flash‑Cards practice flow placeholder](./placeholder-flash-cards-practice.png)
![Flash‑Cards subject selection placeholder](./placeholder-flash-cards-subjects.png)
![Flash‑Cards progress placeholder](./placeholder-flash-cards-progress.png)

## Future Roadmap

- Deeper analytics on accuracy trends by subject and deck
- Offline‑first practice sessions where the platform allows
- Authoring tools for custom decks and shared family libraries
- Optional educator mode for structured assignments

## External Link

[Open Flash Cards](https://flash-cards.dan-maguire.com)
