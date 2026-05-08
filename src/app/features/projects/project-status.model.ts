export type SDLCPhase =
  | 'idea'
  | 'exploring'
  | 'building'
  | 'live'
  | 'evolving'
  | 'legacy';

export interface ProjectStatusEntry {
  id: string;
  title: string;
  category: string;
  summary: string;
  phase: SDLCPhase;
  link: string;
}
