import {
  EcosystemEdge,
  EcosystemNode,
  EcosystemNodeType,
  Project,
  ProjectFilter,
  TechnologyItem,
  TechnologyKind,
  TechnologySection
} from './project.model';

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

export const PROJECTS: Project[] = [
  {
    slug: 'interactive-system-builder',
    portfolioTab: 'technology',
    categories: ['games'],
    sdlc: 'Exploring',
    title: 'Interactive System Builder',
    summary:
      'A sandbox for experimenting with interaction patterns, lightweight physics, and playful system behaviors. It helps me test mechanics quickly and understand how small ideas scale into larger systems.',
    techStack: ['TypeScript', 'Canvas / Web APIs', 'Interaction design'],
    screenshot: null,
    longDescription:
      'A sandbox for experimenting with interaction patterns, lightweight physics, and playful system behaviors. It helps me test mechanics quickly and understand how small ideas scale into larger systems.',
    gallery: [],
    technologyCard: {
      kind: 'tool',
      description:
        'Rapid interaction sandbox for physics-ish behaviors and control loops: prototype mechanics and UX timing without committing to a full game shell.'
    },
    ecosystem: { nodeId: 'interactive-system-builder', nodeType: 'tool' }
  },
  {
    slug: 'chip-boy-ultra-dude',
    portfolioTab: 'products',
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
    gallery: ['/assets/cbud_intro_1.jpg', '/assets/cbud_intro_3.png'],
    ecosystem: { nodeId: 'chip-boy-ultra-dude', nodeType: 'product' }
  },
  {
    slug: 'design-system-lab',
    portfolioTab: 'technology',
    categories: ['art'],
    sdlc: 'Building',
    title: 'Design System Lab',
    summary:
      'A modular design environment for exploring typography, layout rules, and visual systems. It’s where I prototype reusable patterns that influence the rest of my creative work.',
    techStack: ['Angular', 'Tailwind CSS', 'Typography', 'Layout systems'],
    screenshot: null,
    longDescription:
      'A modular design environment for exploring typography, layout rules, and visual systems. It’s where I prototype reusable patterns that influence the rest of my creative work.',
    gallery: [],
    technologyCard: {
      kind: 'tool',
      description:
        'Living typography and layout lab: reusable tokens and composition rules that de-risk UI across products before they ship to production stacks.'
    },
    ecosystem: { nodeId: 'design-system-lab', nodeType: 'tool' }
  },
  {
    slug: 'editorial-story-engine',
    portfolioTab: 'technology',
    categories: ['comics'],
    sdlc: 'Building',
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
    portfolioTab: 'products',
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
    ecosystem: { nodeId: 'mpc-pad', nodeType: 'product', graphLabel: 'MPC Pad Sampler' },
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
    portfolioTab: 'products',
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
    pinned: true,
    ecosystem: { nodeId: 'flash-cards', nodeType: 'product' }
  },
  {
    slug: 'technical-storytelling-framework',
    portfolioTab: 'technology',
    categories: ['writing'],
    sdlc: 'Idea',
    title: 'Technical Storytelling Framework',
    summary:
      'A conceptual framework for explaining complex systems through narrative structure. This is where I capture early thinking before shaping it into a reusable tool.',
    techStack: ['Markdown', 'Documentation', 'Narrative structure'],
    screenshot: null,
    longDescription:
      'A conceptual framework for explaining complex systems through narrative structure. This is where I capture early thinking before shaping it into a reusable tool.',
    gallery: [],
    technologyCard: {
      kind: 'framework',
      description:
        'Conceptual vocabulary for explaining systems through narrative arcs: roles, tension, and resolution patterns that inform how engines structure output for humans.'
    },
    ecosystem: { nodeId: 'storytelling-fw', nodeType: 'framework', graphLabel: 'Technical Storytelling Framework' }
  },
  {
    slug: 'cade-stories',
    portfolioTab: 'products',
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
    pinned: true,
    ecosystem: { nodeId: 'cade-stories', nodeType: 'product' }
  },
  {
    slug: 'rummy-with-my-grandparents',
    portfolioTab: 'products',
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
    pinned: true,
    ecosystem: { nodeId: 'rummy', nodeType: 'product', graphLabel: 'Rummy With My Grandparents' }
  },
  {
    slug: 'punisher-marks-for-the-fallen',
    portfolioTab: 'products',
    categories: ['comics'],
    sdlc: 'Idea',
    title: 'Punisher: Marks for the Fallen',
    summary:
      'Davor Marković has traded contract killings for low‑yield rackets, but when a young crew member disappears from the day‑to‑day operations, the tally‑marked past carved into his skin pulls him into an uneasy alliance with the Punisher.',
    techStack: ['Comics writing', 'Narrative design', 'Sequential storytelling'],
    screenshot: null,
    longDescription: `In Punisher: Marks for the Fallen, Davor Marković is a seasoned enforcer whose reputation was forged in the syndicate’s most violent years. Though he’s stepped back from the front lines, he remains a respected presence within the New York crime family he’s served for decades. But when a young member of his crew disappears from the day‑to‑day operations, Davor’s search for answers forces him to confront the tally‑marked history carved across his own skin.

As fractures within the syndicate begin to surface, Davor turns to the one man capable of dismantling the organization from the outside: the Punisher. Their uneasy collaboration sets off a collision between Davor’s past and the syndicate’s future, drawing him toward a truth buried deep within the criminal empire he helped build.`,
    gallery: []
  },
  {
    slug: 'comic-book-generator',
    portfolioTab: 'technology',
    categories: ['comics'],
    sdlc: 'Idea',
    title: 'Comic Book Generator',
    summary:
      'A multi-phase pipeline that transforms a story prompt into a full comic: script, panels, beats, and eventually art. It builds on the Story Engine and introduces orchestration, schema design, and agent collaboration.',
    techStack: ['TypeScript', 'Orchestration', 'Schema design', 'Agents'],
    screenshot: null,
    longDescription:
      'A multi-phase pipeline that transforms a story prompt into a full comic: script, panels, beats, and eventually art. It builds on the Story Engine and introduces orchestration, schema design, and agent collaboration.',
    gallery: [],
    technologyCard: {
      kind: 'pipeline',
      cardTitle: 'Comic Book Generator (Agentic Pipeline)',
      description:
        'Multi-phase orchestration from prompt to panels: schema validation, agent handoffs, and story-engine feeds that turn narrative JSON into comic-ready assets.'
    },
    ecosystem: {
      nodeId: 'comic-pipeline',
      nodeType: 'pipeline',
      graphLabel: 'Comic Book Generator (Agentic Pipeline)'
    }
  },
  {
    slug: 'ghost-rider-409',
    portfolioTab: 'products',
    categories: ['comics'],
    sdlc: 'Idea',
    title: 'Ghost Rider: 409',
    techStack: ['Comics', 'Concept design', 'Sequential layout'],
    screenshot: null,
    longDescription: '',
    gallery: []
  },
  {
    slug: 'pixel-art-sprite-sheet-generator',
    portfolioTab: 'technology',
    categories: ['art'],
    sdlc: 'Idea',
    title: 'Pixel Art Sprite Sheet Generator',
    summary:
      'A tool for generating pixel-art sprite sheets for games and animations. It explores procedural art, palette constraints, and frame-based motion.',
    techStack: ['Pixel art', 'Palettes', 'Animation frames'],
    screenshot: null,
    longDescription:
      'A tool for generating pixel-art sprite sheets for games and animations. It explores procedural art, palette constraints, and frame-based motion.',
    gallery: [],
    technologyCard: {
      kind: 'tool',
      description:
        'Palette- and frame-constrained art pipeline: from procedural or hand-tuned pixels to engine-ready sheets with consistent sizing and naming.'
    },
    ecosystem: {
      nodeId: 'sprite-generator',
      nodeType: 'tool',
      graphLabel: 'Pixel Art Sprite Sheet Generator'
    }
  },
  {
    slug: 'story-engine',
    portfolioTab: 'technology',
    categories: ['writing'],
    sdlc: 'Building',
    title: 'Story Engine',
    summary:
      'The core narrative engine powering multiple projects, including comics and Cade Stories. It structures prompts into scenes, beats, dialogue, and JSON schemas.',
    techStack: ['TypeScript', 'JSON schema', 'Prompting', 'Narrative structure'],
    screenshot: null,
    longDescription:
      'The core narrative engine powering multiple projects, including comics and Cade Stories. It structures prompts into scenes, beats, dialogue, and JSON schemas.',
    gallery: [],
    technologyCard: {
      kind: 'engine',
      description:
        'Domain-owning narrative core: scenes, beats, dialogue, and JSON schemas that downstream pipelines consume as the single source of truth for story structure.'
    },
    ecosystem: { nodeId: 'story-engine', nodeType: 'engine' }
  },
  {
    slug: 'procedural-world-generator',
    portfolioTab: 'technology',
    categories: ['games'],
    sdlc: 'Idea',
    title: 'Procedural World Generator',
    summary:
      'A system for generating small, explorable worlds using noise functions, biome rules, and lightweight simulation. It’s an early concept focused on how procedural systems create meaningful spaces.',
    techStack: ['Noise functions', 'Simulation', 'Procedural generation'],
    screenshot: null,
    longDescription:
      'A system for generating small, explorable worlds using noise functions, biome rules, and lightweight simulation. It’s an early concept focused on how procedural systems create meaningful spaces.',
    gallery: [],
    technologyCard: {
      kind: 'engine',
      description:
        'Noise- and rules-driven world synthesis: biome constraints, spatial coherence, and exportable world JSON for games and simulations without hand-authored maps.'
    },
    ecosystem: { nodeId: 'world-gen', nodeType: 'engine', graphLabel: 'Procedural World Generator' }
  },
  {
    slug: 'cc1-asset-extraction-pipeline',
    portfolioTab: 'technology',
    categories: ['games'],
    sdlc: 'Evolving',
    pinned: true,
    title: 'Legacy Asset Extraction Pipeline',
    summary:
      'A build‑time pipeline that extracts sprites, levels, and metadata from the original Chip’s Challenge CHIPS.EXE and CHIPS.DAT files. It reconstructs legacy binary formats into clean, modern JSON and PNG assets, producing a fully deterministic manifest for downstream engines. This system establishes a reusable foundation for restoring classic games without relying on hardcoded paths or manual asset work.',
    techStack: ['TypeScript', 'Node.js', 'Binary formats', 'Build pipeline'],
    screenshot: null,
    longDescription: `This pipeline decodes the original Chip’s Challenge MS‑DOS binaries into a structured, engine‑ready asset set. It parses CHIPS.EXE to extract tile graphics, reads CHIPS.DAT to reconstruct level definitions, and emits a normalized JSON representation that cleanly separates metadata, tile rules, and map layouts. The output is deterministic, reproducible, and fully decoupled from the runtime environment, making it suitable for both game restoration and research into legacy formats.

The system is designed as a pure build‑time toolchain: no parsing occurs in the browser, and no game logic is embedded in the pipeline. Instead, it produces a manifest‑driven directory structure that any engine can consume without special knowledge of the original formats. This architecture makes it easy to extend support to additional level packs, modded content, or entirely different classic games that follow similar binary conventions.`,
    gallery: [],
    technologyCard: {
      kind: 'pipeline',
      description:
        'A build‑time pipeline that extracts sprites, levels, and metadata from the original Chip’s Challenge CHIPS.EXE and CHIPS.DAT files. It reconstructs legacy binary formats into clean, modern JSON and PNG assets, producing a fully deterministic manifest for downstream engines. This system establishes a reusable foundation for restoring classic games without relying on hardcoded paths or manual asset work.',
      githubUrl: 'https://github.com/danmaguire/cc1-asset-extraction-pipeline'
    },
    ecosystem: { nodeId: 'cc1-asset-extraction-pipeline', nodeType: 'pipeline' }
  },
  {
    slug: '2d-tile-engine',
    portfolioTab: 'technology',
    categories: ['games'],
    sdlc: 'Building',
    title: '2D Tile Engine',
    summary:
      'A modular, data‑driven engine for building tile‑based 2D games in the browser. It provides a clean runtime layer for rendering, movement, collision, input, and scene orchestration, all driven by JSON manifests generated at build time. The engine is intentionally minimal and extensible, designed to power both classic‑game remakes and new titles.',
    techStack: ['TypeScript', 'Canvas', 'JSON manifests', 'Event bus'],
    screenshot: null,
    longDescription: `The 2D Tile Engine is a lightweight runtime designed for grid‑based games, with a clear separation between engine logic and game data. It loads tile sets, level definitions, and rule metadata from external manifests, allowing games to be assembled without hardcoded paths or embedded assets. A single scene coordinates rendering, input, and movement, while a small event bus keeps the system decoupled and easy to extend. The architecture is intentionally transparent, making it straightforward to plug in new rule systems or visual styles.

This engine serves as the foundation for multiple projects, including the browser‑based Chip’s Challenge port and future Pokémon‑style experiments. Because all configuration flows through JSON, the engine can support new games simply by swapping in different manifests and tile sets. Its modular structure makes it ideal for rapid prototyping, classic‑game restoration, and building a cohesive ecosystem of browser‑native 2D experiences.`,
    gallery: [],
    technologyCard: {
      kind: 'engine',
      description:
        'A modular, data‑driven engine for building tile‑based 2D games in the browser. It provides a clean runtime layer for rendering, movement, collision, input, and scene orchestration, all driven by JSON manifests generated at build time. The engine is intentionally minimal and extensible, designed to power both classic‑game remakes and new titles.',
      githubUrl: 'https://github.com/danmaguire/2d-tile-engine'
    },
    ecosystem: { nodeId: '2d-tile-engine', nodeType: 'engine' }
  },
  {
    slug: 'chips-challenge-web',
    portfolioTab: 'products',
    categories: ['games'],
    sdlc: 'Building',
    title: 'Chip’s Challenge — Web Edition',
    summary:
      'A browser‑native recreation of the original Chip’s Challenge, built on the 2D Tile Engine and powered by assets extracted from the legacy MS‑DOS binaries. The project faithfully reproduces the game’s movement, collision, and puzzle logic while modernizing the rendering and input layers. It serves as both a technical showcase and the first full game built on the engine.',
    techStack: ['TypeScript', '2D Tile Engine', 'Canvas', 'Manifest-driven assets'],
    screenshot: null,
    longDescription: `This project brings the classic Chip’s Challenge experience to the browser using a clean, modern architecture. All assets—tiles, levels, metadata—are generated by the extraction pipeline project, then loaded at runtime through manifest‑driven configuration. The engine handles rendering, movement, collision, and zoom behavior, while the game layer focuses solely on rule logic and puzzle interactions. The result is a faithful recreation that avoids the brittle, hardcoded patterns common in fan ports.

The browser port is designed to scale beyond the original CHIPS.DAT file. Additional level packs can be added simply by running them through the same extraction pipeline, and the engine’s modular structure makes it easy to introduce new rule variations or visual themes. This project demonstrates the full ecosystem working together: pipeline → engine → playable game, all built with maintainability and extensibility in mind.`,
    gallery: [],
    link: 'https://chips-challenge-web.dan-maguire.com',
    descriptionPhraseLinks: [{ phrase: 'the extraction pipeline', projectSlug: 'cc1-asset-extraction-pipeline' }],
    ecosystem: { nodeId: 'chips-challenge-web', nodeType: 'product' }
  }
];

export function getProjectBySlug(slug: string | null): Project | undefined {
  if (!slug) {
    return undefined;
  }
  return PROJECTS.find(p => p.slug === slug);
}

type StandaloneTechKey = '2d-game-engine' | 'comic-pipeline-fw' | 'procedural-game-pipeline';

const STANDALONE_TECHNOLOGY: Record<
  StandaloneTechKey,
  {
    title: string;
    kind: TechnologyKind;
    description: string;
    githubUrl?: string;
    ecosystem: { nodeId: string; nodeType: EcosystemNodeType; graphLabel?: string };
  }
> = {
  '2d-game-engine': {
    kind: 'engine',
    title: '2D Game Engine',
    description:
      'Canvas-first runtime for sprites, timing, and input: a thin engine layer that turns pipeline-authored config into playable 2D experiences with predictable frame semantics.',
    ecosystem: { nodeId: 'game-engine-2d', nodeType: 'engine' }
  },
  'comic-pipeline-fw': {
    kind: 'framework',
    title: 'Agentic Comic Pipeline Framework',
    description:
      'Role and stage definitions for multi-agent comic generation: contracts between writers, layout, and art agents so orchestration stays testable and composable.',
    ecosystem: { nodeId: 'comic-pipeline-fw', nodeType: 'framework' }
  },
  'procedural-game-pipeline': {
    kind: 'pipeline',
    title: 'Procedural Game Pipeline (Agentic)',
    description:
      'End-to-end agentic flow from theme and story seeds to world JSON and runtime config: glues world generation, story engine, and 2D engine contracts in one pipeline.',
    ecosystem: { nodeId: 'procedural-game-pipeline', nodeType: 'pipeline' }
  }
};

type TechPlacement = { type: 'project'; slug: string } | { type: 'standalone'; key: StandaloneTechKey };

/** Row order on the Technology tab (engines → pipelines). */
const TECHNOLOGY_PLACEMENT: readonly TechPlacement[] = [
  { type: 'project', slug: 'story-engine' },
  { type: 'project', slug: 'procedural-world-generator' },
  { type: 'project', slug: '2d-tile-engine' },
  { type: 'standalone', key: '2d-game-engine' },
  { type: 'project', slug: 'technical-storytelling-framework' },
  { type: 'standalone', key: 'comic-pipeline-fw' },
  { type: 'project', slug: 'design-system-lab' },
  { type: 'project', slug: 'interactive-system-builder' },
  { type: 'project', slug: 'pixel-art-sprite-sheet-generator' },
  { type: 'project', slug: 'comic-book-generator' },
  { type: 'project', slug: 'cc1-asset-extraction-pipeline' },
  { type: 'standalone', key: 'procedural-game-pipeline' }
];

function technologyPlacementToItem(ref: TechPlacement): TechnologyItem {
  if (ref.type === 'project') {
    const p = getProjectBySlug(ref.slug);
    if (!p?.technologyCard) {
      throw new Error(`Technology placement references project without technologyCard: ${ref.slug}`);
    }
    const tc = p.technologyCard;
    return {
      title: tc.cardTitle ?? p.title,
      kind: tc.kind,
      description: tc.description,
      projectSlug: p.slug,
      githubUrl: tc.githubUrl,
      pinned: p.pinned
    };
  }
  const s = STANDALONE_TECHNOLOGY[ref.key];
  return {
    title: s.title,
    kind: s.kind,
    description: s.description,
    githubUrl: s.githubUrl
  };
}

function buildTechnologySections(): TechnologySection[] {
  const sectionMeta: { kind: TechnologyKind; label: string }[] = [
    { kind: 'engine', label: 'Engines' },
    { kind: 'framework', label: 'Frameworks' },
    { kind: 'tool', label: 'Tools' },
    { kind: 'pipeline', label: 'Pipelines' }
  ];
  const buckets = new Map<TechnologyKind, TechnologyItem[]>();
  for (const { kind } of sectionMeta) {
    buckets.set(kind, []);
  }
  for (const ref of TECHNOLOGY_PLACEMENT) {
    const item = technologyPlacementToItem(ref);
    buckets.get(item.kind)!.push(item);
  }
  return sectionMeta.map(({ kind, label }) => ({
    label,
    kind,
    items: buckets.get(kind) ?? []
  }));
}

/** Technology tab: derived from `PROJECTS.technologyCard` + `STANDALONE_TECHNOLOGY`. */
export const TECHNOLOGY_SECTIONS: TechnologySection[] = buildTechnologySections();

function buildEcosystemNodes(): EcosystemNode[] {
  const fromProjects: EcosystemNode[] = PROJECTS.filter(p => p.ecosystem).map(p => {
    const eco = p.ecosystem!;
    return {
      id: eco.nodeId,
      label: eco.graphLabel ?? p.title,
      type: eco.nodeType
    };
  });
  const fromStandalone: EcosystemNode[] = (Object.keys(STANDALONE_TECHNOLOGY) as StandaloneTechKey[]).map(key => {
    const s = STANDALONE_TECHNOLOGY[key];
    return {
      id: s.ecosystem.nodeId,
      label: s.ecosystem.graphLabel ?? s.title,
      type: s.ecosystem.nodeType
    };
  });
  return [...fromProjects, ...fromStandalone];
}

/** Ecosystem tab: nodes from `PROJECTS.ecosystem` + standalone technology graph nodes. */
export const ECOSYSTEM_NODES: EcosystemNode[] = buildEcosystemNodes();

export const ECOSYSTEM_EDGES: EcosystemEdge[] = [
  { from: 'storytelling-fw', to: 'story-engine', label: 'informs narrative structure' },
  { from: 'storytelling-fw', to: 'world-gen', label: 'themes & lore' },
  { from: 'comic-pipeline-fw', to: 'comic-pipeline', label: 'defines roles & stages' },
  { from: 'story-engine', to: 'comic-pipeline', label: 'story JSON' },
  { from: 'story-engine', to: 'procedural-game-pipeline', label: 'story & themes' },
  { from: 'world-gen', to: 'procedural-game-pipeline', label: 'world JSON' },
  { from: 'procedural-game-pipeline', to: 'game-engine-2d', label: 'game config' },
  { from: 'story-engine', to: 'cade-stories', label: 'articles & structure' },
  { from: 'game-engine-2d', to: 'chip-boy-ultra-dude', label: 'runtime' },
  { from: 'design-system-lab', to: 'cade-stories', label: 'layout & UI' },
  { from: 'design-system-lab', to: 'rummy', label: 'layout & UI' },
  { from: 'design-system-lab', to: 'flash-cards', label: 'layout & UI' },
  { from: 'design-system-lab', to: 'mpc-pad', label: 'layout & UI' },
  { from: 'interactive-system-builder', to: 'rummy', label: 'mechanics prototyping' },
  { from: 'interactive-system-builder', to: 'flash-cards', label: 'interaction patterns' },
  { from: 'interactive-system-builder', to: 'mpc-pad', label: 'interaction patterns' },
  { from: 'interactive-system-builder', to: 'chip-boy-ultra-dude', label: 'mechanics prototyping' },
  { from: 'design-system-lab', to: 'comic-pipeline', label: 'UI & layout' },
  { from: 'sprite-generator', to: 'game-engine-2d', label: 'sprite sheets' },
  { from: 'sprite-generator', to: 'procedural-game-pipeline', label: 'art assets' },
  { from: 'cc1-asset-extraction-pipeline', to: '2d-tile-engine', label: 'manifest & assets' },
  { from: '2d-tile-engine', to: 'chips-challenge-web', label: 'runtime' }
];

export const ECOSYSTEM_NODE_BOUNDS: Record<string, { x: number; y: number; w: number; h: number }> = {
  'design-system-lab': { x: 24, y: 36, w: 208, h: 56 },
  'interactive-system-builder': { x: 24, y: 108, w: 208, h: 64 },
  'sprite-generator': { x: 24, y: 188, w: 208, h: 64 },
  'storytelling-fw': { x: 268, y: 44, w: 268, h: 64 },
  'comic-pipeline-fw': { x: 268, y: 124, w: 268, h: 68 },
  'story-engine': { x: 576, y: 36, w: 200, h: 52 },
  'world-gen': { x: 576, y: 100, w: 248, h: 56 },
  'game-engine-2d': { x: 576, y: 172, w: 200, h: 52 },
  'comic-pipeline': { x: 864, y: 52, w: 292, h: 64 },
  'procedural-game-pipeline': { x: 864, y: 132, w: 292, h: 64 },
  'cade-stories': { x: 32, y: 600, w: 148, h: 52 },
  rummy: { x: 196, y: 600, w: 220, h: 52 },
  'flash-cards': { x: 436, y: 600, w: 124, h: 52 },
  'mpc-pad': { x: 580, y: 600, w: 148, h: 52 },
  'chip-boy-ultra-dude': { x: 748, y: 600, w: 220, h: 52 },
  'cc1-asset-extraction-pipeline': { x: 864, y: 208, w: 292, h: 64 },
  '2d-tile-engine': { x: 576, y: 236, w: 200, h: 52 },
  'chips-challenge-web': { x: 980, y: 600, w: 248, h: 52 }
};
