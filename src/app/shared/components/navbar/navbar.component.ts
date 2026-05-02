import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APP_CONFIG } from '../../../app.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div class="page-container flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
        <div class="flex flex-col gap-2">
          <a class="text-xl font-semibold tracking-tight text-white" routerLink="/">{{ brand }}</a>
          <span class="hidden md:block text-sm text-slate-400">Principal engineering leadership with creative clarity.</span>
        </div>
        <nav class="flex flex-wrap items-center gap-3">
          <a *ngFor="let item of navItems"
            [routerLink]="item.path"
            routerLinkActive="text-white"
            [routerLinkActiveOptions]="{ exact: item.exact }"
            class="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-white hover:text-white"
            >{{ item.label }}</a
          >
        </nav>
      </div>
    </header>
  `
})
export class NavbarComponent {
  brand = APP_CONFIG.brand;
  navItems = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about', exact: false },
    { label: 'Experience', path: '/experience', exact: false },
    { label: 'Projects', path: '/projects', exact: false },
    { label: 'Contact', path: '/contact', exact: false }
  ];
}
