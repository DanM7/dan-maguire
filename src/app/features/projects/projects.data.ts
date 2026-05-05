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
    insightPath: '/insights/engineering-cultures',
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
    insightPath: '/insights/28-product-engineering-teams'
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
    insightPath: '/insights/frameworks-patterns-processes'
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
    insightPath: '/insights/cross-team-engineering-practices'
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
    insightPath: '/insights/engineering-and-creativity'
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
    insightPath: '/insights/things-that-feel-good-to-use'
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
    insightPath: '/insights/engineering-as-storytelling'
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
    insightPath: '/insights/patterns-that-help-me-succeed'
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
    title: 'MPC Rhythm Pad',
    summary:
      "I wanted a simple, free MPC I could experiment with, and nothing out there felt right... So I built one. I’m no DJ Premier or Pete Rock, but this tool makes it easy to sketch rhythms quickly, and I’ve already found myself using it as a backdrop while I play guitar. It’s a small project, but a fun one that blends engineering with the kind of creative tinkering I enjoy.",
    techStack: ['Angular', 'TypeScript', 'Web Audio API', 'CSS'],
    screenshot: '/assets/mpc_screenshot_01.png',
    longDescription:
      "I wanted a simple, free MPC I could experiment with, and nothing out there felt right... So I built one. I’m no DJ Premier or Pete Rock, but this tool makes it easy to sketch rhythms quickly, and I’ve already found myself using it as a backdrop while I play guitar. It’s a small project, but a fun one that blends engineering with the kind of creative tinkering I enjoy.",
    gallery: ['/assets/mpc_screenshot_02.png'],
    link: 'https://mpc.dan-maguire.com'
  },
  {
    slug: 'flash-cards',
    filterCategory: 'experiments',
    category: 'EXPERIMENTS',
    title: 'Flash‑Cards',
    summary:
      'A voice‑driven flash‑card engine for sight words, math, and vocabulary. It listens to spoken answers, interprets them with simple NLP, and tracks progress across subjects and profiles. Star Wars–themed encouragement adds a layer of fun to keep kids engaged.',
    techStack: ['Web Speech API', 'TypeScript', 'Angular'],
    screenshot: null,
    longDescription:
      'This project started as a way to help my son Bowen practice sight words and math in a format that works for him. The system uses speech recognition and lightweight NLP to evaluate his answers, then reinforces progress with Star Wars–themed encouragement that keeps him engaged. It’s intentionally built as a data‑driven flash‑card engine so I can extend it into math, vocabulary, and other subjects without rewriting the core logic.',
    gallery: [],
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
