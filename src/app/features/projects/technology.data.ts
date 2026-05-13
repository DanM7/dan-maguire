export type TechnologyKind = 'engine' | 'framework' | 'tool' | 'pipeline';

export interface TechnologyItem {
  title: string;
  description: string;
  kind: TechnologyKind;
  /** Optional link to portfolio project detail */
  projectSlug?: string;
  githubUrl?: string;
}

export interface TechnologySection {
  label: string;
  /** Used for the Technology tab filter (matches item `kind`). */
  kind: TechnologyKind;
  items: TechnologyItem[];
}

export const TECHNOLOGY_SECTIONS: TechnologySection[] = [
  {
    label: 'Engines',
    kind: 'engine',
    items: [
      {
        title: 'Story Engine',
        kind: 'engine',
        projectSlug: 'story-engine',
        description:
          'Domain-owning narrative core: scenes, beats, dialogue, and JSON schemas that downstream pipelines consume as the single source of truth for story structure.'
      },
      {
        title: 'Procedural World Generator',
        kind: 'engine',
        projectSlug: 'procedural-world-generator',
        description:
          'Noise- and rules-driven world synthesis: biome constraints, spatial coherence, and exportable world JSON for games and simulations without hand-authored maps.'
      },
      {
        title: '2D Game Engine',
        kind: 'engine',
        description:
          'Canvas-first runtime for sprites, timing, and input: a thin engine layer that turns pipeline-authored config into playable 2D experiences with predictable frame semantics.'
      }
    ]
  },
  {
    label: 'Frameworks',
    kind: 'framework',
    items: [
      {
        title: 'Technical Storytelling Framework',
        kind: 'framework',
        projectSlug: 'technical-storytelling-framework',
        description:
          'Conceptual vocabulary for explaining systems through narrative arcs: roles, tension, and resolution patterns that inform how engines structure output for humans.'
      },
      {
        title: 'Agentic Comic Pipeline Framework',
        kind: 'framework',
        description:
          'Role and stage definitions for multi-agent comic generation: contracts between writers, layout, and art agents so orchestration stays testable and composable.'
      }
    ]
  },
  {
    label: 'Tools',
    kind: 'tool',
    items: [
      {
        title: 'Design System Lab',
        kind: 'tool',
        projectSlug: 'design-system-lab',
        description:
          'Living typography and layout lab: reusable tokens and composition rules that de-risk UI across products before they ship to production stacks.'
      },
      {
        title: 'Interactive System Builder',
        kind: 'tool',
        projectSlug: 'interactive-system-builder',
        description:
          'Rapid interaction sandbox for physics-ish behaviors and control loops: prototype mechanics and UX timing without committing to a full game shell.'
      },
      {
        title: 'Pixel Art Sprite Sheet Generator',
        kind: 'tool',
        projectSlug: 'pixel-art-sprite-sheet-generator',
        description:
          'Palette- and frame-constrained art pipeline: from procedural or hand-tuned pixels to engine-ready sheets with consistent sizing and naming.'
      }
    ]
  },
  {
    label: 'Pipelines',
    kind: 'pipeline',
    items: [
      {
        title: 'Comic Book Generator (Agentic Pipeline)',
        kind: 'pipeline',
        projectSlug: 'comic-book-generator',
        description:
          'Multi-phase orchestration from prompt to panels: schema validation, agent handoffs, and story-engine feeds that turn narrative JSON into comic-ready assets.'
      },
      {
        title: 'Procedural Game Pipeline (Agentic)',
        kind: 'pipeline',
        description:
          'End-to-end agentic flow from theme and story seeds to world JSON and runtime config: glues world generation, story engine, and 2D engine contracts in one pipeline.'
      }
    ]
  }
];
