import { Project, ProjectFilter } from './project.model';

const STATUS_CATEGORY_LABELS: Record<ProjectFilter, string> = {
  games: 'Games',
  art: 'Art',
  comics: 'Comics',
  music: 'Music',
  writing: 'Writing',
  experiments: 'Experiments'
};

/** Uppercase category line for cards and detail (e.g. `MUSIC · EXPERIMENTS`). */
const FILTER_CATEGORY_UPPER: Record<ProjectFilter, string> = {
  games: 'GAMES',
  art: 'ART',
  comics: 'COMICS',
  music: 'MUSIC',
  writing: 'WRITING',
  experiments: 'EXPERIMENTS'
};

export function projectCategoryEyebrow(project: Project): string {
  return project.categories.map(c => FILTER_CATEGORY_UPPER[c]).join(' · ');
}

/** Title-case category labels for Status tab cards (joined when multiple). */
export function projectStatusCategoryLabel(project: Project): string {
  return project.categories.map(c => STATUS_CATEGORY_LABELS[c]).join(' · ');
}

/** In-app route for the project detail page. */
export function projectStatusDetailLink(project: Project): string {
  return `/projects/${project.slug}`;
}

/** User-facing products shown on the Projects → Products tab (order preserved). */
export const PRODUCT_CARD_SLUGS: readonly string[] = [
  'cade-stories',
  'rummy-with-my-grandparents',
  'flash-cards',
  'mpc-rhythm-pad',
  'chip-boy-ultra-dude'
] as const;

export const PROJECTS: Project[] = [
  {
    slug: 'interactive-system-builder',
    categories: ['games'],
    sdlc: 'Exploring',
    title: 'Interactive System Builder',
    summary:
      'A sandbox for experimenting with interaction patterns, lightweight physics, and playful system behaviors. It helps me test mechanics quickly and understand how small ideas scale into larger systems.',
    techStack: ['TypeScript', 'Canvas / Web APIs', 'Interaction design'],
    screenshot: null,
    longDescription:
      'A sandbox for experimenting with interaction patterns, lightweight physics, and playful system behaviors. It helps me test mechanics quickly and understand how small ideas scale into larger systems.',
    gallery: []
  },
  {
    slug: 'chip-boy-ultra-dude',
    categories: ['games'],
    sdlc: 'Exploring',
    title: 'Chip Boy and Ultra Dude',
    summary:
      'Two brothers are pulled into an adventure when a burst of mystical lightning transforms them into Ultra Dude, a flying PlayStation controller, and Chip Boy, a skateboarding Dorito chip. Together, they travel through a series of imaginative worlds, each ruled by its own strange logic and larger‑than‑life boss. The project is both a retro side‑scroller and a hands‑on way for my kids learn game development while creatively exploring software engineering concepts.',
    techStack: ['TypeScript', 'Canvas / Web APIs', 'Interaction design'],
    screenshot: null,
    longDescription:
      `Chip Boy & Ultra Dude is a retro side‑scrolling game I’m building with my sons, inspired by the kind of wild, late‑night ideas only kids can come up with. The story begins when a bolt of mystical lightning strikes our house, transforming the boys into their heroic alter egos: Ultra Dude, a floating PlayStation controller with telekinetic button‑magic, and Chip Boy, a skateboarding Dorito chip with high‑speed crunch attacks. From there, they journey through a series of handcrafted worlds—cardboard kingdoms, marble caverns, plush forests, and clockwork arenas—each ending in a boss battle that pushes their abilities and teamwork.

Beyond the story, this project is a way for my kids to learn how games are made from the inside out. We sketch characters together, talk through level design, and build simple systems that grow more complex as they understand more about programming, physics, animation, and iteration. It’s part creative playground, part engineering workshop, and part family tradition — an ongoing project that teaches them how ideas become software while giving us something fun and meaningful to build together.`,
    gallery: ['/assets/cbud_intro_1.jpg', '/assets/cbud_intro_3.png']
  },
  {
    slug: 'design-system-lab',
    categories: ['art'],
    sdlc: 'Building',
    title: 'Design System Lab',
    summary:
      'A modular design environment for exploring typography, layout rules, and visual systems. It’s where I prototype reusable patterns that influence the rest of my creative work.',
    techStack: ['Angular', 'Tailwind CSS', 'Typography', 'Layout systems'],
    screenshot: null,
    longDescription:
      'A modular design environment for exploring typography, layout rules, and visual systems. It’s where I prototype reusable patterns that influence the rest of my creative work.',
    gallery: []
  },
  {
    slug: 'editorial-story-engine',
    categories: ['comics'],
    sdlc: 'Legacy',
    title: 'Editorial Story Engine',
    summary:
      'A structured narrative engine that generates multi-scene story data for comics and serialized content. It’s stable, maintained, and foundational for future storytelling tools.',
    techStack: ['React', 'Node.js', 'Narrative schema'],
    screenshot: null,
    longDescription:
      'A structured narrative engine that generates multi-scene story data for comics and serialized content. It’s stable, maintained, and foundational for future storytelling tools.',
    gallery: []
  },
  {
    slug: 'mpc-rhythm-pad',
    categories: ['music'],
    sdlc: 'Evolving',
    summaryPreviewImageAlign: 'alignTop',
    title: 'MPC Pad Sampler',
    summary:
      'A browser-based MPC-style rhythm pad for quick beatmaking and experimentation. It’s deployed, responsive, and a clean example of minimal UI paired with real-time audio.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Tone.js'],
    screenshot: '/assets/mpc_screenshot_01.png',
    longDescription: `MPC Pad Sampler is a browser‑based drum pad and sketch sequencer inspired by classic MPC workflows. It’s built for a mobile‑first, tap‑to‑play flow: unlock audio with a single gesture, then perform, sequence, and capture patterns without leaving the page.

The app runs as a React + TypeScript single‑page application, bundled with Vite for fast iteration and lean builds. Tailwind CSS provides the “studio hardware” visual language—panel chrome, LED‑style pads, and a scrollable shell without visual noise. Zustand manages global state (pads, grid layout, transport, sequencer steps, recording buffers, saved patterns) so UI and audio stay tightly synchronized. Tone.js powers the audio engine: Transport for timing, Player nodes for sample playback with caching and invalidation, and a PolySynth fallback for melodic pads.

The sequencer supports up to sixteen steps, transport controls, and a step strip for navigation. Record mode captures pad hits into the active step as the loop advances. You can clear steps, reset patterns, or reshape the sequence by adding, removing, or reordering steps. Pad edit mode provides a deeper workflow for user samples—capture from the device, trim via waveform, apply denoise and loudness shaping, and preview before committing—so a pad can move from rough idea to polished one‑shot without leaving the browser.`,
    gallery: ['/assets/mpc_screenshot_02.png'],
    link: 'https://mpc.dan-maguire.com',
    futureImprovements: `Near‑term
- PWA / offline shell
- Export (audio stems, loop renders, MIDI)
- Smarter capture (quantize, step input, timing assist)
- Per‑step nuance (velocity, probability, micro‑timing)
- Undo history
- Keyboard shortcuts (desktop workflow)

Mid‑term
- Durable cloud‑backed samples + pattern sync
- MIDI I/O (pads, transport, clock sync)
- Pack authoring (ZIP/folder import, pad assignment)
- Pad‑level envelopes + pitch
- Global mixer (volume, pan, mute/solo)

Long‑term
- Sample slicing (chop mode)
- Pattern chaining / song mode
- Pad macros / performance FX
- Shareable links
- Cloud pattern library
- Performance recording`,
    pinned: true
  },
  {
    slug: 'flash-cards',
    categories: ['experiments'],
    sdlc: 'Live',
    summaryPreviewImageAlign: 'alignTop',
    title: 'Flash Cards',
    summary:
      'A lightweight study tool exploring spaced repetition, micro-interactions, and memory-friendly UI patterns. It’s actively growing as I refine the learning model.',
    techStack: ['Web Speech API', 'TypeScript', 'Angular'],
    screenshot: '/assets/flashcards_screenshot_01.png',
    longDescription: `A lightweight study tool exploring spaced repetition, micro-interactions, and memory-friendly UI patterns. It’s actively growing as I refine the learning model.

This project started as a way to help my son practice sight words and math in a format that works for him. The system uses speech recognition and lightweight NLP to evaluate answers, then reinforces progress with encouragement that keeps momentum high. It’s intentionally built as a data‑driven flash‑card engine so I can extend subjects and profiles without rewriting the core logic.`,
    gallery: ['/assets/flashcards_screenshot_02.png'],
    link: 'https://flash-cards.dan-maguire.com',
    pinned: true
  },
  {
    slug: 'technical-storytelling-framework',
    categories: ['writing'],
    sdlc: 'Idea',
    title: 'Technical Storytelling Framework',
    summary:
      'A conceptual framework for explaining complex systems through narrative structure. This is where I capture early thinking before shaping it into a reusable tool.',
    techStack: ['Markdown', 'Documentation', 'Narrative structure'],
    screenshot: null,
    longDescription:
      'A conceptual framework for explaining complex systems through narrative structure. This is where I capture early thinking before shaping it into a reusable tool.',
    gallery: []
  },
  {
    slug: 'cade-stories',
    categories: ['writing'],
    sdlc: 'Evolving',
    summaryPreviewImageAlign: 'alignTop',
    title: 'Cade Stories',
    summary:
      'A playful, newspaper‑style storytelling engine built from the wild things my son used to say about his imaginary friends. It turns his funniest quotes and strangest ideas into fully generated articles, headlines, and layouts — a daily paper powered by childhood imagination.',
    techStack: ['TypeScript', 'React', 'Vite', 'Layout engine', 'Story Engine'],
    screenshot: null,
    longDescription:
      'Cade Stories is a newspaper‑style generator powered entirely by the strange and wonderful things my son said about his imaginary friends when he was little. It converts those quotes into structured articles and layouts, blending narrative generation with a custom design system. The result is a readable “daily paper” built on pure childhood imagination.',
    gallery: ['/assets/cade_stories_01.png', '/assets/cade_stories_02.png'],
    link: 'https://cade-stories.dan-maguire.com',
    pinned: true
  },
  {
    slug: 'rummy-with-my-grandparents',
    categories: ['games'],
    sdlc: 'Building',
    summaryPreviewImageAlign: 'alignMiddle',
    title: 'Rummy With My Grandparents',
    summary:
      'A digital recreation of the card game I grew up playing with Poppa Jim and Grandma Shirley. It captures their personalities, play styles, and the small rituals that made those games memorable — from her fearless pickups to his dry humor. This project blends warmth and technical design, turning cherished memories into an interactive experience.',
    techStack: ['TypeScript', 'Game Logic', 'OpenAI'],
    screenshot: null,
    longDescription:
      "Rummy With My Grandparents is a digital recreation of the card game I grew up playing with Poppa Jim and Grandma Shirley. The project is rooted in memory as much as mechanics: her fearless card pickups, his dry humor, and the way a simple game became a small ritual every time we sat down together. Rebuilding it as software is a way of preserving those moments, translating the warmth, rhythm, and personality of those games into an interactive system. It's not nostalgia for nostalgia's sake; it's an attempt to capture the emotional texture of a real family tradition and express it through thoughtful design.",
    postGalleryLongDescription:
      "From an engineering perspective, the project explores turn-based logic, scoring rules, and UI patterns that feel familiar and human rather than abstract or game-y. I'm designing the interface to reflect the pace and tone of the original experience — slower, conversational, and grounded in the small decisions that make Rummy engaging. The system architecture supports modular rule sets, personality-driven behaviors, and future expansions like adaptive difficulty and OpenAI-generated table-talk dialogue. In many ways, it's a study in how software can carry emotional weight: a blend of memory, interaction design, and technical clarity that turns a personal story into a living, playable artifact — and a fun game.",
    preGalleryDisabledCta: 'Game launching soon',
    gallery: ['/assets/rummy_photo.png'],
    pinned: true
  },
  {
    slug: 'comic-book-generator',
    categories: ['comics'],
    sdlc: 'Idea',
    title: 'Comic Book Generator',
    summary:
      'A multi-phase pipeline that transforms a story prompt into a full comic: script, panels, beats, and eventually art. It builds on the Story Engine and introduces orchestration, schema design, and agent collaboration.',
    techStack: ['TypeScript', 'Orchestration', 'Schema design', 'Agents'],
    screenshot: null,
    longDescription:
      'A multi-phase pipeline that transforms a story prompt into a full comic: script, panels, beats, and eventually art. It builds on the Story Engine and introduces orchestration, schema design, and agent collaboration.',
    gallery: []
  },
  {
    slug: 'pixel-art-sprite-sheet-generator',
    categories: ['art'],
    sdlc: 'Idea',
    title: 'Pixel Art Sprite Sheet Generator',
    summary:
      'A tool for generating pixel-art sprite sheets for games and animations. It explores procedural art, palette constraints, and frame-based motion.',
    techStack: ['Pixel art', 'Palettes', 'Animation frames'],
    screenshot: null,
    longDescription:
      'A tool for generating pixel-art sprite sheets for games and animations. It explores procedural art, palette constraints, and frame-based motion.',
    gallery: []
  },
  {
    slug: 'story-engine',
    categories: ['writing'],
    sdlc: 'Building',
    title: 'Story Engine',
    summary:
      'The core narrative engine powering multiple projects, including comics and Cade Stories. It structures prompts into scenes, beats, dialogue, and JSON schemas.',
    techStack: ['TypeScript', 'JSON schema', 'Prompting', 'Narrative structure'],
    screenshot: null,
    longDescription:
      'The core narrative engine powering multiple projects, including comics and Cade Stories. It structures prompts into scenes, beats, dialogue, and JSON schemas.',
    gallery: []
  },
  {
    slug: 'procedural-world-generator',
    categories: ['games'],
    sdlc: 'Idea',
    title: 'Procedural World Generator',
    summary:
      'A system for generating small, explorable worlds using noise functions, biome rules, and lightweight simulation. It’s an early concept focused on how procedural systems create meaningful spaces.',
    techStack: ['Noise functions', 'Simulation', 'Procedural generation'],
    screenshot: null,
    longDescription:
      'A system for generating small, explorable worlds using noise functions, biome rules, and lightweight simulation. It’s an early concept focused on how procedural systems create meaningful spaces.',
    gallery: []
  }
];

export function getProjectBySlug(slug: string | null): Project | undefined {
  if (!slug) {
    return undefined;
  }
  return PROJECTS.find(p => p.slug === slug);
}
