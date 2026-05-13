export type EcosystemNodeType = 'product' | 'engine' | 'framework' | 'tool' | 'pipeline';

export interface EcosystemNode {
  id: string;
  label: string;
  type: EcosystemNodeType;
}

export interface EcosystemEdge {
  from: string;
  to: string;
  label?: string;
}

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  // PRODUCTS
  { id: 'cade-stories', label: 'Cade Stories', type: 'product' },
  { id: 'rummy', label: 'Rummy With My Grandparents', type: 'product' },
  { id: 'flash-cards', label: 'Flash Cards', type: 'product' },
  { id: 'mpc-pad', label: 'MPC Pad Sampler', type: 'product' },
  { id: 'chip-boy-ultra-dude', label: 'Chip Boy & Ultra Dude', type: 'product' },

  // ENGINES
  { id: 'story-engine', label: 'Story Engine', type: 'engine' },
  { id: 'world-gen', label: 'Procedural World Generator', type: 'engine' },
  { id: 'game-engine-2d', label: '2D Game Engine', type: 'engine' },

  // FRAMEWORKS
  { id: 'storytelling-fw', label: 'Technical Storytelling Framework', type: 'framework' },
  { id: 'comic-pipeline-fw', label: 'Agentic Comic Pipeline Framework', type: 'framework' },

  // TOOLS
  { id: 'design-system-lab', label: 'Design System Lab', type: 'tool' },
  { id: 'interactive-system-builder', label: 'Interactive System Builder', type: 'tool' },
  { id: 'sprite-generator', label: 'Pixel Art Sprite Sheet Generator', type: 'tool' },

  // PIPELINES
  { id: 'comic-pipeline', label: 'Comic Book Generator (Agentic Pipeline)', type: 'pipeline' },
  { id: 'procedural-game-pipeline', label: 'Procedural Game Pipeline (Agentic)', type: 'pipeline' }
];

export const ECOSYSTEM_EDGES: EcosystemEdge[] = [
  // FRAMEWORKS → ENGINES
  { from: 'storytelling-fw', to: 'story-engine', label: 'informs narrative structure' },
  { from: 'storytelling-fw', to: 'world-gen', label: 'themes & lore' },
  { from: 'comic-pipeline-fw', to: 'comic-pipeline', label: 'defines roles & stages' },

  // ENGINES → PIPELINES
  { from: 'story-engine', to: 'comic-pipeline', label: 'story JSON' },
  { from: 'story-engine', to: 'procedural-game-pipeline', label: 'story & themes' },
  { from: 'world-gen', to: 'procedural-game-pipeline', label: 'world JSON' },

  // PIPELINES → ENGINES
  { from: 'procedural-game-pipeline', to: 'game-engine-2d', label: 'game config' },

  // ENGINES → PRODUCTS
  { from: 'story-engine', to: 'cade-stories', label: 'articles & structure' },
  { from: 'game-engine-2d', to: 'chip-boy-ultra-dude', label: 'runtime' },

  // TOOLS → PRODUCTS
  { from: 'design-system-lab', to: 'cade-stories', label: 'layout & UI' },
  { from: 'design-system-lab', to: 'rummy', label: 'layout & UI' },
  { from: 'design-system-lab', to: 'flash-cards', label: 'layout & UI' },
  { from: 'design-system-lab', to: 'mpc-pad', label: 'layout & UI' },

  { from: 'interactive-system-builder', to: 'rummy', label: 'mechanics prototyping' },
  { from: 'interactive-system-builder', to: 'flash-cards', label: 'interaction patterns' },
  { from: 'interactive-system-builder', to: 'mpc-pad', label: 'interaction patterns' },
  { from: 'interactive-system-builder', to: 'chip-boy-ultra-dude', label: 'mechanics prototyping' },

  // TOOLS → ENGINES / PIPELINES
  { from: 'design-system-lab', to: 'comic-pipeline', label: 'UI & layout' },
  { from: 'sprite-generator', to: 'game-engine-2d', label: 'sprite sheets' },
  { from: 'sprite-generator', to: 'procedural-game-pipeline', label: 'art assets' }
];

/**
 * Top-left (x, y) and size for each node in SVG space.
 * Layout: Tools | Frameworks | Engines | Pipelines (columns), Products band at bottom.
 */
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
  'chip-boy-ultra-dude': { x: 748, y: 600, w: 220, h: 52 }
};
