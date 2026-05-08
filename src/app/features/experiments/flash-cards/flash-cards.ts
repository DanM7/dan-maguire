import type { ProjectEntry } from '../../projects/experiments/cade-stories/cade-stories';

export const flashCardsProject: ProjectEntry = {
  slug: 'flash-cards',
  title: 'Flash Cards',
  summary:
    'Flash Cards is a voice‑driven flash‑card engine for sight words, math, and vocabulary: it listens to spoken answers, uses simple NLP to interpret them, and tracks progress across subjects and profiles. I built it so practice could feel natural for my son while staying structured enough to extend. Star Wars–themed encouragement keeps the tone light without turning the app into noise.',
  link: 'https://flash-cards.dan-maguire.com',
  techStack: ['Angular', 'TypeScript', 'Web Speech API', 'Client-side NLP']
};
