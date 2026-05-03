import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, CardComponent],
  styleUrls: ['./projects.page.scss'],
  template: `
    <section class="section-wrapper">
      <div class="page-container">
        <app-section-header label="PROJECTS" title="Creative + technical showcase" subtitle="A curated collection of games, art, comics, music, writing, and experimental systems — built to explore interaction, storytelling, and creative technology." />

        <div class="filter-bar">
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'all' }" (click)="setFilter('all')">All</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'games' }" (click)="setFilter('games')">Games</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'art' }" (click)="setFilter('art')">Art</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'insights' }" (click)="setFilter('insights')">Insights</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'comics' }" (click)="setFilter('comics')">Comics</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'music' }" (click)="setFilter('music')">Music</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'writing' }" (click)="setFilter('writing')">Writing</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'experiments' }" (click)="setFilter('experiments')">Experiments</button>
        </div>

        <div class="grid gap-6 mt-6">
          <ng-container *ngFor="let project of filteredProjects">
            <a
              *ngIf="isInternalLink(project.link)"
              [routerLink]="project.link"
              class="block no-underline text-left transition duration-200 hover:opacity-95"
            >
              <app-card [eyebrow]="project.categoryLabel" [title]="project.title" [description]="project.description">
                <div *ngIf="project.category !== 'insights'" class="mt-6 grid gap-4 lg:grid-cols-[0.65fr_0.35fr]">
                  <div class="h-44 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-slate-500 flex items-center justify-center text-sm">Screenshot placeholder</div>
                  <div class="space-y-4 text-slate-300">
                    <div>
                      <p class="text-xs uppercase tracking-[0.28em] text-slate-400">Tech stack</p>
                      <p class="mt-2 text-slate-300">{{ project.stack }}</p>
                    </div>
                    <span class="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300">View details →</span>
                  </div>
                </div>
              </app-card>
            </a>

            <a
              *ngIf="!isInternalLink(project.link)"
              [href]="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="block no-underline text-left transition duration-200 hover:opacity-95"
            >
              <app-card [eyebrow]="project.categoryLabel" [title]="project.title" [description]="project.description">
                <div *ngIf="project.category !== 'insights'" class="mt-6 grid gap-4 lg:grid-cols-[0.65fr_0.35fr]">
                  <div class="h-44 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-slate-500 flex items-center justify-center text-sm">Screenshot placeholder</div>
                  <div class="space-y-4 text-slate-300">
                    <div>
                      <p class="text-xs uppercase tracking-[0.28em] text-slate-400">Tech stack</p>
                      <p class="mt-2 text-slate-300">{{ project.stack }}</p>
                    </div>
                    <span class="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300">View details →</span>
                  </div>
                </div>
              </app-card>
            </a>
          </ng-container>
        </div>

        <p *ngIf="filteredProjects.length === 0" class="mt-10 text-slate-400">No projects match this category yet.</p>
      </div>
    </section>
  `
})
export class ProjectsPageComponent {
  activeFilter = 'all';

  filters = [
    { label: 'All', value: 'all' },
    { label: 'Games', value: 'games' },
    { label: 'Art', value: 'art' },
    { label: 'Insights', value: 'insights' },
    { label: 'Comics', value: 'comics' },
    { label: 'Music', value: 'music' },
    { label: 'Writing', value: 'writing' },
    { label: 'Experiments', value: 'experiments' }
  ];

  projects = [
    {
      category: 'insights',
      categoryLabel: 'Insights',
      title: 'Engineering Cultures',
      description: 'A look at how standards, patterns, and mentoring create engineering cultures that sustain quality across teams and time.',
      stack: 'Leadership · Engineering Practice',
      link: '/insights/engineering-cultures'
    },
    {
      category: 'insights',
      categoryLabel: 'Insights',
      title: '28 Product Engineering Teams',
      description: 'How to support a large portfolio of teams with alignment, shared standards, and practical governance without micromanagement.',
      stack: 'Systems Thinking · Team Scale',
      link: '/insights/28-product-engineering-teams'
    },
    {
      category: 'insights',
      categoryLabel: 'Insights',
      title: 'Frameworks, Patterns, and Processes',
      description: 'Reusable approaches to make quality the default and improve consistency across engineering teams.',
      stack: 'Architecture · Execution',
      link: '/insights/frameworks-patterns-processes'
    },
    {
      category: 'insights',
      categoryLabel: 'Insights',
      title: 'Cross-Team Engineering Practices',
      description: 'Modernization and platform alignment patterns that improve outcomes across multiple engineering organizations.',
      stack: 'Platform Strategy · Operating Model',
      link: '/insights/cross-team-engineering-practices'
    },
    {
      category: 'insights',
      categoryLabel: 'Insights',
      title: 'Engineering and Creativity',
      description: 'How technical craft and creative thinking combine to shape better systems and stronger problem framing.',
      stack: 'Creative Thinking · Product Engineering',
      link: '/insights/engineering-and-creativity'
    },
    {
      category: 'insights',
      categoryLabel: 'Insights',
      title: 'Things That Feel Good to Use',
      description: 'Small design decisions, long-term clarity, and developer-friendly systems that make products durable and intuitive.',
      stack: 'UX Design · Product Engineering',
      link: '/insights/things-that-feel-good-to-use'
    },
    {
      category: 'insights',
      categoryLabel: 'Insights',
      title: 'Engineering as Storytelling',
      description: 'How narrative reasoning can align teams, clarify complexity, and support technical strategy.',
      stack: 'Communication · Technical Leadership',
      link: '/insights/engineering-as-storytelling'
    },
    {
      category: 'insights',
      categoryLabel: 'Insights',
      title: 'Patterns That Help Me Succeed',
      description: 'Decision frameworks, habits, and patterns that have consistently guided execution at senior technical levels.',
      stack: 'Leadership · Continuous Improvement',
      link: '/insights/patterns-that-help-me-succeed'
    },
    {
      category: 'games',
      categoryLabel: 'Games',
      title: 'Interactive system builder',
      description: 'A browser-based game engine for building dynamic play experiences with modular mechanics and responsive controls.',
      stack: 'TypeScript · WebGL · RxJS',
      link: 'https://example.com'
    },
    {
      category: 'art',
      categoryLabel: 'Art',
      title: 'Design system lab',
      description: 'A creative tool for exploring visual systems, illustration workflows, and interface craftsmanship.',
      stack: 'Angular · Tailwind CSS · Storybook',
      link: 'https://example.com'
    },
    {
      category: 'comics',
      categoryLabel: 'Comics',
      title: 'Editorial story engine',
      description: 'A creative publishing system that supports serialized narrative, layout variation, and editorial workflows.',
      stack: 'React · Node.js · CMS',
      link: 'https://example.com'
    },
    {
      category: 'music',
      categoryLabel: 'Music',
      title: 'Audio experience studio',
      description: 'A music-focused creative toolkit for audio-driven interactions, composition visualization, and immersive sound experiences.',
      stack: 'Web Audio API · TypeScript · Svelte',
      link: 'https://example.com'
    },
    {
      category: 'writing',
      categoryLabel: 'Writing',
      title: 'Technical storytelling framework',
      description: 'A narrative framework for documenting engineering work, product stories, and creative process in a clear, engaging format.',
      stack: 'Markdown · Static site · Content strategy',
      link: 'https://example.com'
    },
    {
      category: 'experiments',
      categoryLabel: 'Experiments',
      title: 'Creative systems probe',
      description: 'An experimental interface that explores generative workflows, data visualization, and interaction design.',
      stack: 'D3 · Web Components · Serverless',
      link: 'https://example.com'
    }
  ];

  get filteredProjects() {
    return this.activeFilter === 'all'
      ? this.projects
      : this.projects.filter(project => project.category === this.activeFilter);
  }

  isInternalLink(link: string): boolean {
    return link.startsWith('/');
  }

  setFilter(value: string) {
    this.activeFilter = value;
  }
}
