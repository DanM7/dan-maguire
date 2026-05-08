import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'engineering-cultures',
    filterCategory: 'insights',
    category: 'INSIGHTS',
    title: 'Engineering Cultures',
    summary:
      'A look at how standards, patterns, and mentoring create engineering cultures that sustain quality across teams and time.',
    techStack: ['Leadership', 'Engineering Practice'],
    screenshot: null,
    longDescription:
      'A look at how standards, patterns, and mentoring create engineering cultures that sustain quality across teams and time.',
    gallery: [],
    insightPath: '/projects/insights/engineering-cultures',
    pinned: true
  },
  {
    slug: '28-product-engineering-teams',
    filterCategory: 'insights',
    category: 'INSIGHTS',
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
    filterCategory: 'insights',
    category: 'INSIGHTS',
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
    filterCategory: 'insights',
    category: 'INSIGHTS',
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
    filterCategory: 'insights',
    category: 'INSIGHTS',
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
    filterCategory: 'insights',
    category: 'INSIGHTS',
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
    filterCategory: 'insights',
    category: 'INSIGHTS',
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
    slug: 'patterns-that-help-me-succeed',
    filterCategory: 'insights',
    category: 'INSIGHTS',
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
    slug: 'personal-sdlc',
    filterCategory: 'insights',
    category: 'INSIGHTS',
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
    slug: 'interactive-system-builder',
    filterCategory: 'games',
    category: 'GAMES',
    title: 'Interactive system builder',
    summary:
      'A browser-based game engine for building dynamic play experiences with modular mechanics and responsive controls.',
    techStack: ['TypeScript', 'WebGL', 'RxJS'],
    screenshot: null,
    longDescription:
      'A browser-based game engine for building dynamic play experiences with modular mechanics and responsive controls.',
    gallery: [],
    link: 'https://example.com'
  },
  {
    slug: 'design-system-lab',
    filterCategory: 'art',
    category: 'ART',
    title: 'Design system lab',
    summary:
      'A creative tool for exploring visual systems, illustration workflows, and interface craftsmanship.',
    techStack: ['Angular', 'Tailwind CSS', 'Storybook'],
    screenshot: null,
    longDescription:
      'A creative tool for exploring visual systems, illustration workflows, and interface craftsmanship.',
    gallery: [],
    link: 'https://example.com'
  },
  {
    slug: 'editorial-story-engine',
    filterCategory: 'comics',
    category: 'COMICS',
    title: 'Editorial story engine',
    summary:
      'A creative publishing system that supports serialized narrative, layout variation, and editorial workflows.',
    techStack: ['React', 'Node.js', 'CMS'],
    screenshot: null,
    longDescription:
      'A creative publishing system that supports serialized narrative, layout variation, and editorial workflows.',
    gallery: [],
    link: 'https://example.com'
  },
  {
    slug: 'mpc-rhythm-pad',
    filterCategory: 'music',
    category: 'MUSIC',
    title: 'MPC Pad Sampler',
    summary:
      'I wanted a simple, free MPC I could experiment with, and nothing out there felt right... So I built one. I’m no DJ Premier or Pete Rock, but this tool makes it easy to sketch rhythms quickly, and I’ve already found myself using it as a backdrop while I play guitar. It’s a small project, but a fun one that blends engineering with the kind of creative tinkering I enjoy.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Tone.js'],
    screenshot: '/assets/mpc_screenshot_01.png',
    longDescription: `MPC Pad Sampler is a browser‑based drum pad and sketch sequencer inspired by classic MPC workflows. It’s built for a mobile‑first, tap‑to‑play flow: unlock audio with a single gesture, then perform, sequence, and capture patterns without leaving the page.

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
- Performance recording`
  },
  {
    slug: 'flash-cards',
    filterCategory: 'experiments',
    category: 'EXPERIMENTS',
    title: 'Flash Cards',
    summary:
      'A voice‑driven flash‑card engine for sight words, math, and vocabulary. It listens to spoken answers, interprets them with simple NLP, and tracks progress across subjects and profiles. Star Wars–themed encouragement adds a layer of fun to keep kids engaged.',
    techStack: ['Web Speech API', 'TypeScript', 'Angular'],
    screenshot: '/assets/flashcards_screenshot_01.png',
    longDescription:
      'This project started as a way to help my son practice sight words and math in a format that works for him. The system uses speech recognition and lightweight NLP to evaluate his answers, then reinforces progress with Star Wars–themed encouragement that keeps him engaged. It’s intentionally built as a data‑driven flash‑card engine so I can extend it into math, vocabulary, and other subjects without rewriting the core logic.',
    gallery: ['/assets/flashcards_screenshot_02.png'],
    link: 'https://flash-cards.dan-maguire.com',
    pinned: true
  },
  {
    slug: 'technical-storytelling-framework',
    filterCategory: 'writing',
    category: 'WRITING',
    title: 'Technical storytelling framework',
    summary:
      'A narrative framework for documenting engineering work, product stories, and creative process in a clear, engaging format.',
    techStack: ['Markdown', 'Static site', 'Content strategy'],
    screenshot: null,
    longDescription:
      'A narrative framework for documenting engineering work, product stories, and creative process in a clear, engaging format.',
    gallery: [],
    link: 'https://example.com'
  }
];

export function getProjectBySlug(slug: string | null): Project | undefined {
  if (!slug) {
    return undefined;
  }
  return PROJECTS.find(p => p.slug === slug);
}
