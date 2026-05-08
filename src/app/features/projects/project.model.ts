export type ProjectFilter =
  | 'games'
  | 'art'
  | 'insights'
  | 'comics'
  | 'music'
  | 'writing'
  | 'experiments';

/** SDLC phase label for portfolio metadata (matches Status tab phases). */
export type ProjectSDLC = 'Idea' | 'Exploring' | 'Building' | 'Live' | 'Evolving' | 'Legacy';

/** Lowercase phase key used by the Status timeline and grouping. */
export type SDLCPhase = 'idea' | 'exploring' | 'building' | 'live' | 'evolving' | 'legacy';

export interface Project {
  slug: string;
  /**
   * Filter buckets this project appears under (Summaries tab).
   * Order is preserved for card/detail labels (e.g. `music` then `experiments`).
   */
  categories: ProjectFilter[];
  /** Lifecycle phase for this project. */
  sdlc: ProjectSDLC;
  title: string;
  summary: string;
  techStack: string[];
  /** Primary card image; `null` shows the placeholder tile. */
  screenshot: string | null;
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
  /** In-app insight route (e.g. `/projects/insights/engineering-cultures`). */
  insightPath?: string;
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
