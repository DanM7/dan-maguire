import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md shadow-sm shadow-black/20">
      <div class="page-container flex items-center justify-between py-4">
        <a class="text-xl font-semibold tracking-tight text-white" routerLink="/">Engineering + Creativity</a>

        <nav class="ml-auto flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-sm whitespace-nowrap">
          <a
            routerLink="/about"
            routerLinkActive="text-white underline decoration-brand-500 decoration-2"
            [routerLinkActiveOptions]="{ exact: true }"
            class="font-medium text-slate-300 transition hover:text-white hover:underline hover:decoration-slate-400"
          >
            About
          </a>
          <a
            routerLink="/experience"
            routerLinkActive="text-white underline decoration-brand-500 decoration-2"
            [routerLinkActiveOptions]="{ exact: true }"
            class="font-semibold text-slate-300 transition hover:text-white hover:underline hover:decoration-slate-400"
          >
            Experience
          </a>
          <a
            routerLink="/projects"
            [routerLinkActive]="''"
            [class]="
              isProjectsRoute()
                ? 'font-semibold text-white underline decoration-brand-500 decoration-2'
                : 'font-semibold text-slate-300 transition hover:text-white hover:underline hover:decoration-slate-400'
            "
          >
            Projects
          </a>
          <a
            routerLink="/insights"
            [routerLinkActive]="''"
            [class]="
              isInsightsRoute()
                ? 'font-semibold text-white underline decoration-brand-500 decoration-2'
                : 'font-semibold text-slate-300 transition hover:text-white hover:underline hover:decoration-slate-400'
            "
          >
            Insights
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="text-white underline decoration-brand-500 decoration-2"
            [routerLinkActiveOptions]="{ exact: true }"
            class="font-medium text-slate-300 transition hover:text-white hover:underline hover:decoration-slate-400"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isProjectsRoute(): boolean {
    const path = this.router.url.split('?')[0];
    return path === '/projects' || path.startsWith('/projects/');
  }

  isInsightsRoute(): boolean {
    const path = this.router.url.split('?')[0];
    return path === '/insights' || path.startsWith('/insights/');
  }
}
