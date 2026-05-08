import { ProjectStatusEntry } from './project-status.model';

/** Example rows for the SDLC board; extend or replace as projects evolve. */
export const PROJECT_STATUS_ENTRIES: ProjectStatusEntry[] = [
  {
    id: 'technical-storytelling-framework',
    title: 'Technical storytelling framework',
    category: 'Writing',
    summary: 'A narrative framework for documenting engineering work and creative process.',
    phase: 'idea',
    link: '/projects/technical-storytelling-framework'
  },
  {
    id: 'interactive-system-builder',
    title: 'Interactive system builder',
    category: 'Games',
    summary: 'Exploring modular mechanics and responsive controls for browser-based play.',
    phase: 'exploring',
    link: '/projects/interactive-system-builder'
  },
  {
    id: 'design-system-lab',
    title: 'Design system lab',
    category: 'Art',
    summary: 'Building illustration workflows and interface craftsmanship experiments.',
    phase: 'building',
    link: '/projects/design-system-lab'
  },
  {
    id: 'mpc-rhythm-pad',
    title: 'MPC Pad Sampler',
    category: 'Music',
    summary: 'Live in the browser as a tap-to-play drum pad and sketch sequencer.',
    phase: 'live',
    link: '/projects/mpc-rhythm-pad'
  },
  {
    id: 'flash-cards',
    title: 'Flash Cards',
    category: 'Experiments',
    summary: 'Extending speech-driven drills and profiles beyond the first release.',
    phase: 'evolving',
    link: '/projects/flash-cards'
  },
  {
    id: 'editorial-story-engine',
    title: 'Editorial story engine',
    category: 'Comics',
    summary: 'A publishing spine kept online with minimal ongoing maintenance.',
    phase: 'legacy',
    link: '/projects/editorial-story-engine'
  }
];
