export type ProjectFilter =
  | 'games'
  | 'art'
  | 'comics'
  | 'music'
  | 'writing'
  | 'experiments';

/** SDLC phase label for portfolio metadata (matches Status tab phases). */
export type ProjectSDLC = 'Idea' | 'Exploring' | 'Building' | 'Live' | 'Evolving' | 'Legacy';

/** Lowercase phase key used by the Status timeline and grouping. */
export type SDLCPhase = 'idea' | 'exploring' | 'building' | 'live' | 'evolving' | 'legacy';

/** Summaries-tab preview crop for `object-fit: cover` (tall/wide images). Default: alignTop. */
export type SummaryPreviewImageAlign = 'alignTop' | 'alignMiddle';

/** Which Projects page tab owns this entry (Products vs Technology; mutually exclusive). */
export type PortfolioTab = 'products' | 'technology';

/** Technology tab row kind (matches ecosystem node types except `product`). */
export type TechnologyKind = 'engine' | 'framework' | 'tool' | 'pipeline';

export interface TechnologyItem {
  title: string;
  description: string;
  kind: TechnologyKind;
  /** Optional link to portfolio project detail */
  projectSlug?: string;
  githubUrl?: string;
  /** Mirrors `Project.pinned` when this row maps to a portfolio project. */
  pinned?: boolean;
}

export interface TechnologySection {
  label: string;
  /** Used for the Technology tab filter (matches item `kind`). */
  kind: TechnologyKind;
  items: TechnologyItem[];
}

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

export interface Project {
  slug: string;
  portfolioTab: PortfolioTab;
  /**
   * When set, this project appears on the Technology tab as this row (detail link uses `slug`).
   * Use `cardTitle` when the card heading should differ from `title`.
   */
  technologyCard?: {
    kind: TechnologyKind;
    description: string;
    cardTitle?: string;
    githubUrl?: string;
  };
  /**
   * When set, this project participates in the Ecosystem graph (`nodeId` may differ from `slug`,
   * e.g. `mpc-pad` vs `mpc-rhythm-pad`).
   */
  ecosystem?: {
    nodeId: string;
    nodeType: EcosystemNodeType;
    /** Short label on the graph when different from `title`. */
    graphLabel?: string;
  };
  /**
   * Filter buckets this project appears under (Summaries tab).
   * Order is preserved for card/detail labels (e.g. `music` then `experiments`).
   */
  categories: ProjectFilter[];
  /** Lifecycle phase for this project. */
  sdlc: ProjectSDLC;
  title: string;
  /** Short card blurb; omit when there is no summary yet. */
  summary?: string;
  techStack: string[];
  /** Primary card image; `null` shows the placeholder tile. */
  screenshot: string | null;
  /** How the summaries preview image is positioned when cropped; omit for alignTop. */
  summaryPreviewImageAlign?: SummaryPreviewImageAlign;
  longDescription: string;
  /**
   * Optional body copy after the screenshot gallery (before Future Development).
   * Use blank lines between paragraphs; same splitting rules as `longDescription`.
   */
  postGalleryLongDescription?: string;
  gallery: string[];
  /** External URL (opens in a new tab from the detail page when set). */
  link?: string;
  /** Optional disabled CTA label shown after body copy and before the gallery. */
  preGalleryDisabledCta?: string;
  /** Link phrases in `longDescription` / `postGalleryLongDescription` to other project detail pages. */
  descriptionPhraseLinks?: { phrase: string; projectSlug: string }[];
  pinned?: boolean;
  features?: string;
  challenges?: string;
  futureImprovements?: string;
}

const PROJECT_SDLC_TO_PHASE: Record<ProjectSDLC, SDLCPhase> = {
  Idea: 'idea',
  Exploring: 'exploring',
  Building: 'building',
  Live: 'live',
  Evolving: 'evolving',
  Legacy: 'legacy'
};

export function projectSdlcPhase(project: Project): SDLCPhase {
  return PROJECT_SDLC_TO_PHASE[project.sdlc];
}
