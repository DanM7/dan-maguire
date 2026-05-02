import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md shadow-sm shadow-black/20">
      <div class="page-container flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <a class="text-xl font-semibold tracking-tight text-white" routerLink="/">Engineering + Creativity</a>

        <nav class="flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-8">
          <a *ngFor="let item of navItems"
            [routerLink]="item.path"
            routerLinkActive="text-white underline decoration-brand-500 decoration-2"
            [routerLinkActiveOptions]="{ exact: item.exact }"
            class="text-slate-300 transition hover:text-white hover:underline hover:decoration-slate-400"
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
  navItems = [
    { label: 'About', path: '/about', exact: true, emphasis: false },
    { label: 'Experience', path: '/experience', exact: true, emphasis: true },
    { label: 'Projects', path: '/projects', exact: true, emphasis: true },
    { label: 'Contact', path: '/contact', exact: true, emphasis: false }
  ];
}
