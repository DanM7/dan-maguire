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

        <nav class="ml-auto flex items-center justify-end gap-3 text-sm whitespace-nowrap">
          <a *ngFor="let item of navItems"
            [routerLink]="item.path"
            [routerLinkActive]="item.path === '/projects' ? '' : 'text-white underline decoration-brand-500 decoration-2'"
            [routerLinkActiveOptions]="{ exact: item.exact }"
            [class]="
              item.path === '/projects' && isProjectsRoute()
                ? 'text-white underline decoration-brand-500 decoration-2'
                : 'text-slate-300 transition hover:text-white hover:underline hover:decoration-slate-400'
            "
            [ngClass]="item.emphasis ? 'font-semibold' : 'font-medium'"
          >
            {{ item.label }}
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
    return path === '/projects' || path.startsWith('/projects/') || path.startsWith('/insights');
  }

  navItems = [
    { label: 'About', path: '/about', exact: true, emphasis: false },
    { label: 'Experience', path: '/experience', exact: true, emphasis: true },
    { label: 'Projects', path: '/projects', exact: true, emphasis: true },
    { label: 'Contact', path: '/contact', exact: true, emphasis: false }
  ];
}
