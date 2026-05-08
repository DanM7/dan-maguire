export interface ProjectEntry {
  slug: string;
  title: string;
  summary: string;
  link: string;
  techStack: string[];
}

export const cadeStoriesProject: ProjectEntry = {
  slug: 'cade-stories',
  title: 'Cade Stories',
  summary:
    'Cade Stories is a playful newspaper-style web app that generates a whimsical front page of fictional headlines, quotes, and blurbs in one click. I built it to turn structured story output into something fast, readable, and kid-friendly while keeping the interface minimal. What makes it interesting is the pairing of a reusable layout engine with Story Engine-generated JSON so content and presentation stay decoupled.',
  link: 'https://cade-stories.dan-maguire.com',
  techStack: ['TypeScript', 'React', 'Vite', 'Custom layout engine', 'Story Engine integration']
};
