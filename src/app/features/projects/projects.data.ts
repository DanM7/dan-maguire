import { Project, ProjectFilter } from './project.model';

const STATUS_CATEGORY_LABELS: Record<ProjectFilter, string> = {
  games: 'Games',
  art: 'Art',
  comics: 'Comics',
  music: 'Music',
  writing: 'Writing',
  experiments: 'Experiments',
  insights: 'Insights'
};

/** Uppercase category line for cards and detail (e.g. `MUSIC · EXPERIMENTS`). */
const FILTER_CATEGORY_UPPER: Record<ProjectFilter, string> = {
  games: 'GAMES',
  art: 'ART',
  comics: 'COMICS',
  music: 'MUSIC',
  writing: 'WRITING',
  experiments: 'EXPERIMENTS',
  insights: 'INSIGHTS'
};

export function projectCategoryEyebrow(project: Project): string {
  return project.categories.map(c => FILTER_CATEGORY_UPPER[c]).join(' · ');
}

/** Title-case category labels for Status tab cards (joined when multiple). */
export function projectStatusCategoryLabel(project: Project): string {
  return project.categories.map(c => STATUS_CATEGORY_LABELS[c]).join(' · ');
}

/** In-app route for the project detail or insight view. */
export function projectStatusDetailLink(project: Project): string {
  return project.insightPath ?? `/projects/${project.slug}`;
}

export const PROJECTS: Project[] = [
  {
    slug: 'engineering-cultures',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'Engineering Cultures',
    summary:
      'A look at how standards, patterns, and mentoring create engineering cultures that sustain quality across teams and time.',
    techStack: ['Leadership', 'Engineering Practice'],
    screenshot: null,
    longDescription:
      'A look at how standards, patterns, and mentoring create engineering cultures that sustain quality across teams and time.',
    gallery: [],
    insightPath: '/projects/insights/engineering-cultures'
  },
  {
    slug: 'personal-sdlc',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'A Personal SDLC That Scales With My Creativity',
    summary:
      "I stopped treating personal projects as 'done' and built a lifecycle that reflects how software actually evolves. This SDLC — from Idea to Legacy — helps me manage energy, momentum, and long‑term maintenance with the same intentionality I apply to enterprise systems, but optimized for how I build.",
    techStack: ['Personal Workflow', 'Software Lifecycle'],
    screenshot: null,
    longDescription:
      "I stopped treating personal projects as 'done' and built a lifecycle that reflects how software actually evolves. This SDLC — from Idea to Legacy — helps me manage energy, momentum, and long‑term maintenance with the same intentionality I apply to enterprise systems, but optimized for how I build.",
    gallery: [],
    insightPath: '/projects/insights/personal-sdlc',
    pinned: true
  },
  {
    slug: '28-product-engineering-teams',
    categories: ['insights'],
    sdlc: 'Live',
    title: '28 Product Engineering Teams',
    summary:
      'How to support a large portfolio of teams with alignment, shared standards, and practical governance without micromanagement.',
    techStack: ['Systems Thinking', 'Team Scale'],
    screenshot: null,
    longDescription:
      'How to support a large portfolio of teams with alignment, shared standards, and practical governance without micromanagement.',
    gallery: [],
    insightPath: '/projects/insights/28-product-engineering-teams'
  },
  {
    slug: 'frameworks-patterns-processes',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'Frameworks, Patterns, and Processes',
    summary:
      'Reusable approaches to make quality the default and improve consistency across engineering teams.',
    techStack: ['Architecture', 'Execution'],
    screenshot: null,
    longDescription:
      'Reusable approaches to make quality the default and improve consistency across engineering teams.',
    gallery: [],
    insightPath: '/projects/insights/frameworks-patterns-processes'
  },
  {
    slug: 'cross-team-engineering-practices',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'Cross-Team Engineering Practices',
    summary:
      'Modernization and platform alignment patterns that improve outcomes across multiple engineering organizations.',
    techStack: ['Platform Strategy', 'Operating Model'],
    screenshot: null,
    longDescription:
      'Modernization and platform alignment patterns that improve outcomes across multiple engineering organizations.',
    gallery: [],
    insightPath: '/projects/insights/cross-team-engineering-practices'
  },
  {
    slug: 'engineering-and-creativity',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'Engineering and Creativity',
    summary:
      'How technical craft and creative thinking combine to shape better systems and stronger problem framing.',
    techStack: ['Creative Thinking', 'Product Engineering'],
    screenshot: null,
    longDescription:
      'How technical craft and creative thinking combine to shape better systems and stronger problem framing.',
    gallery: [],
    insightPath: '/projects/insights/engineering-and-creativity'
  },
  {
    slug: 'things-that-feel-good-to-use',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'Things That Feel Good to Use',
    summary:
      'Small design decisions, long-term clarity, and developer-friendly systems that make products durable and intuitive.',
    techStack: ['UX Design', 'Product Engineering'],
    screenshot: null,
    longDescription:
      'Small design decisions, long-term clarity, and developer-friendly systems that make products durable and intuitive.',
    gallery: [],
    insightPath: '/projects/insights/things-that-feel-good-to-use'
  },
  {
    slug: 'engineering-as-storytelling',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'Engineering as Storytelling',
    summary:
      'How narrative reasoning can align teams, clarify complexity, and support technical strategy.',
    techStack: ['Communication', 'Technical Leadership'],
    screenshot: null,
    longDescription:
      'How narrative reasoning can align teams, clarify complexity, and support technical strategy.',
    gallery: [],
    insightPath: '/projects/insights/engineering-as-storytelling'
  },
  {
    slug: 'engineering-storytelling-design',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'Engineering Storytelling Design',
    summary:
      'This post looks at how storytelling structure can improve engineering design outcomes. It examines how narrative clarity helps teams and users make sense of tradeoffs, constraints, and product direction.',
    techStack: ['Storytelling', 'Design', 'Technical communication'],
    screenshot: null,
    longDescription:
      'This post looks at how storytelling structure can improve engineering design outcomes. It examines how narrative clarity helps teams and users make sense of tradeoffs, constraints, and product direction.',
    gallery: [],
    insightPath: '/projects/insights/engineering-storytelling-design'
  },
  {
    slug: 'patterns-that-help-me-succeed',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'Patterns That Help Me Succeed',
    summary:
      'Decision frameworks, habits, and patterns that have consistently guided execution at senior technical levels.',
    techStack: ['Leadership', 'Continuous Improvement'],
    screenshot: null,
    longDescription:
      'Decision frameworks, habits, and patterns that have consistently guided execution at senior technical levels.',
    gallery: [],
    insightPath: '/projects/insights/patterns-that-help-me-succeed'
  },
  {
    slug: 'tinkering-with-a-side-project',
    categories: ['insights'],
    sdlc: 'Live',
    title: 'Tinkering With a Side Project: How Small Experiments Shape My Thinking',
    summary:
      'This post explores how low-risk side projects keep my skills fresh and let me try ideas quickly. It covers how small experiments become reliable inputs for bigger engineering decisions.',
    techStack: ['Experimentation', 'Learning'],
    screenshot: null,
    longDescription:
      'This post explores how low-risk side projects keep my skills fresh and let me try ideas quickly. It covers how small experiments become reliable inputs for bigger engineering decisions.',
    gallery: [],
    insightPath: '/projects/insights/tinkering-with-a-side-project'
  },
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
    sdlc: 'Live',
    title: 'MPC Pad Sampler',
    summary:
      'A browser-based MPC-style rhythm pad for quick beatmaking and experimentation. It’s deployed, responsive, and a clean example of minimal UI paired with real-time audio.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Tone.js'],
    screenshot: '/assets/mpc_screenshot_01.png',
    longDescription: `A browser-based MPC-style rhythm pad for quick beatmaking and experimentation. It’s deployed, responsive, and a clean example of minimal UI paired with real-time audio.

MPC Pad Sampler is a browser‑based drum pad and sketch sequencer inspired by classic MPC workflows. It’s built for a mobile‑first, tap‑to‑play flow: unlock audio with a single gesture, then perform, sequence, and capture patterns without leaving the page.

The app runs as a React + TypeScript single‑page application, bundled with Vite for fast iteration and lean builds. Tailwind CSS provides the “studio hardware” visual language—panel chrome, LED‑style pads, and a scrollable shell without visual noise. Zustand manages global state (pads, grid layout, transport, sequencer steps, recording buffers, saved patterns) so UI and audio stay tightly synchronized. Tone.js powers the audio engine: Transport for timing, Player nodes for sample playback with caching and invalidation, and a PolySynth fallback for melodic pads.

The instrument behaves like a hybrid pad surface and groove box. Sixteen pads adapt to a configurable grid with add/remove/reorderable rows. Sound packs swap the sample set; early pads act as drum lanes while later pads can serve as quick melodic voices. Patterns capture pad configuration, tempo, and grid shape for easy recall.

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
    sdlc: 'Evolving',
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
    sdlc: 'Live',
    title: 'Cade Stories',
    summary:
      'A playful, newspaper-style storytelling engine that generates whimsical articles, headlines, and layouts. It blends structured narrative generation with a custom layout system, producing a fully readable “daily paper” for kids.',
    techStack: ['TypeScript', 'React', 'Vite', 'Layout engine', 'Story Engine'],
    screenshot: null,
    longDescription:
      'A playful, newspaper-style storytelling engine that generates whimsical articles, headlines, and layouts. It blends structured narrative generation with a custom layout system, producing a fully readable “daily paper” for kids.',
    gallery: ['/assets/cade_stories_01.png', '/assets/cade_stories_02.png'],
    link: 'https://cade-stories.dan-maguire.com',
    pinned: true
  },
  {
    slug: 'rummy-with-my-grandparents',
    categories: ['games'],
    sdlc: 'Building',
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
    sdlc: 'Building',
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
