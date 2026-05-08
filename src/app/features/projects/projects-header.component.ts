import { Component } from '@angular/core';

@Component({
  selector: 'projects-header',
  standalone: true,
  template: `
    <div class="mb-8 max-w-2xl">
      <p class="text-sm uppercase tracking-[0.32em] text-cyan-200/80">PROJECTS</p>
      <h2 class="mt-3 text-3xl font-semibold text-white sm:text-4xl">Creative + technical showcase</h2>
      <p class="mt-4 text-slate-300 leading-relaxed">
        A curated collection of games, art, comics, music, writing, and experimental systems — built to explore interaction, storytelling, and creative technology.
      </p>
      <p class="mt-4 text-slate-300 leading-relaxed">
        Switch between the two tabs to view either the curated project summaries or a status-driven look at where each project sits in my SDLC.
      </p>
    </div>
  `
})
export class ProjectsHeaderComponent {}
