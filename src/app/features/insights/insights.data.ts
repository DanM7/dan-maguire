export interface InsightArticle {
  /** URL segment after `/insights/` */
  slug: string;
  title: string;
  summary: string;
  pinned?: boolean;
}

/** Index order for the Insights hub; routes live in `app-shell.module.ts`. */
export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    slug: 'personal-sdlc',
    title: 'A Personal SDLC That Scales With My Creativity',
    summary:
      "I stopped treating personal projects as 'done' and built a lifecycle that reflects how software actually evolves. This SDLC — from Idea to Legacy — helps me manage energy, momentum, and long‑term maintenance with the same intentionality I apply to enterprise systems, but optimized for how I build.",
    pinned: true
  },
  {
    slug: 'engineering-cultures',
    title: 'Engineering Cultures',
    summary:
      'A look at how standards, patterns, and mentoring create engineering cultures that sustain quality across teams and time.'
  },
  {
    slug: '28-product-engineering-teams',
    title: '28 Product Engineering Teams',
    summary:
      'How to support a large portfolio of teams with alignment, shared standards, and practical governance without micromanagement.'
  },
  {
    slug: 'frameworks-patterns-processes',
    title: 'Frameworks, Patterns, and Processes',
    summary: 'Reusable approaches to make quality the default and improve consistency across engineering teams.'
  },
  {
    slug: 'cross-team-engineering-practices',
    title: 'Cross-Team Engineering Practices',
    summary:
      'Modernization and platform alignment patterns that improve outcomes across multiple engineering organizations.'
  },
  {
    slug: 'engineering-and-creativity',
    title: 'Engineering and Creativity',
    summary:
      'How technical craft and creative thinking combine to shape better systems and stronger problem framing.'
  },
  {
    slug: 'things-that-feel-good-to-use',
    title: 'Things That Feel Good to Use',
    summary:
      'Small design decisions, long-term clarity, and developer-friendly systems that make products durable and intuitive.'
  },
  {
    slug: 'engineering-as-storytelling',
    title: 'Engineering as Storytelling',
    summary: 'How narrative reasoning can align teams, clarify complexity, and support technical strategy.'
  },
  {
    slug: 'engineering-storytelling-design',
    title: 'Engineering Storytelling Design',
    summary:
      'This post looks at how storytelling structure can improve engineering design outcomes. It examines how narrative clarity helps teams and users make sense of tradeoffs, constraints, and product direction.'
  },
  {
    slug: 'patterns-that-help-me-succeed',
    title: 'Patterns That Help Me Succeed',
    summary:
      'Decision frameworks, habits, and patterns that have consistently guided execution at senior technical levels.'
  },
  {
    slug: 'tinkering-with-a-side-project',
    title: 'Tinkering With a Side Project: How Small Experiments Shape My Thinking',
    summary:
      'This post explores how low-risk side projects keep my skills fresh and let me try ideas quickly. It covers how small experiments become reliable inputs for bigger engineering decisions.'
  }
];

export function insightArticlesSorted(): InsightArticle[] {
  return [
    ...INSIGHT_ARTICLES.filter(a => a.pinned),
    ...INSIGHT_ARTICLES.filter(a => !a.pinned)
  ];
}
