import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, CardComponent],
  styleUrls: ['./projects.page.scss'],
  template: `
    <section class="section-wrapper">
      <div class="page-container">
        <app-section-header label="PROJECTS" title="Creative + technical showcase" subtitle="A curated collection of games, art, comics, music, writing, and experimental systems — built to explore interaction, storytelling, and creative technology." />

        <div class="filter-bar">
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'all' }" (click)="setFilter('all')">All</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'games' }" (click)="setFilter('games')">Games</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'art' }" (click)="setFilter('art')">Art</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'comics' }" (click)="setFilter('comics')">Comics</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'music' }" (click)="setFilter('music')">Music</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'writing' }" (click)="setFilter('writing')">Writing</button>
          <button type="button" class="filter-button" [ngClass]="{ 'active': activeFilter === 'experiments' }" (click)="setFilter('experiments')">Experiments</button>
        </div>

        <div class="grid gap-6 mt-6">
          <app-card *ngFor="let project of filteredProjects" [eyebrow]="project.categoryLabel" [title]="project.title" [description]="project.description">
            <div class="mt-6 grid gap-4 lg:grid-cols-[0.65fr_0.35fr]">
              <div class="h-44 rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-slate-500 flex items-center justify-center text-sm">Screenshot placeholder</div>
              <div class="space-y-4 text-slate-300">
                <div>
                  <p class="text-xs uppercase tracking-[0.28em] text-slate-400">Tech stack</p>
                  <p class="mt-2 text-slate-300">{{ project.stack }}</p>
                </div>
                <a [href]="project.link" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300">View demo / repo →</a>
              </div>
            </div>
          </app-card>
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
    { label: 'Comics', value: 'comics' },
    { label: 'Music', value: 'music' },
    { label: 'Writing', value: 'writing' },
    { label: 'Experiments', value: 'experiments' }
  ];

  projects = [
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

  setFilter(value: string) {
    this.activeFilter = value;
  }
}
