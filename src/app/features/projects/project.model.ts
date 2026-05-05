export type ProjectFilter =
  | 'games'
  | 'art'
  | 'insights'
  | 'comics'
  | 'music'
  | 'writing'
  | 'experiments';

export interface Project {
  slug: string;
  /** Used by category filter buttons (e.g. `music`, `insights`). */
  filterCategory: ProjectFilter;
  /** Uppercase category line on cards and detail (e.g. `MUSIC`). */
  category: string;
  title: string;
  summary: string;
  techStack: string[];
  /** Primary card image; `null` shows the placeholder tile. */
  screenshot: string | null;
  longDescription: string;
  gallery: string[];
  /** External URL (opens in a new tab from the detail page when set). */
  link?: string;
  /** In-app insight route (e.g. `/insights/engineering-cultures`). */
  insightPath?: string;
  pinned?: boolean;
  features?: string;
  challenges?: string;
  futureImprovements?: string;
}
