import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  styleUrls: ['./home.page.scss'],
  template: `
    <section class="section-wrapper min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <div class="page-container">
        <div class="max-w-3xl home-intro">
          <p class="text-base uppercase tracking-[0.32em] text-cyan-300/80">Dan Maguire</p>
          <h1 class="mt-3 text-5xl font-semibold text-white sm:text-6xl">Engineering + Creativity</h1>
          <p class="mt-4 text-lg leading-8 text-slate-300">A clear, intentional mix of engineering leadership and creative craft.</p>
          <p class="mt-2 text-lg leading-8 text-slate-300">A space for the ideas, projects, and experiments that shape how I work and create.</p>
          <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 justify-items-center">
            <a
              routerLink="/about"
              routerLinkActive="bg-brand-500 text-slate-950 border-transparent"
              class="w-fit rounded-full border border-slate-700 bg-slate-950/10 px-8 py-4 text-center text-lg font-semibold leading-tight text-slate-300 transition hover:bg-slate-950/20 sm:text-xl"
            >About</a>
            <a
              routerLink="/experience"
              routerLinkActive="bg-brand-500 text-slate-950 border-transparent"
              class="w-fit rounded-full border border-slate-700 bg-slate-950/10 px-8 py-4 text-center text-lg font-semibold leading-tight text-slate-300 transition hover:bg-slate-950/20 sm:text-xl"
            >Experience</a>
            <a
              routerLink="/projects"
              routerLinkActive="bg-brand-500 text-slate-950 border-transparent"
              class="w-fit rounded-full border border-slate-700 bg-slate-950/10 px-8 py-4 text-center text-lg font-semibold leading-tight text-slate-300 transition hover:bg-slate-950/20 sm:text-xl"
            >Projects</a>
            <a
              routerLink="/contact"
              routerLinkActive="bg-brand-500 text-slate-950 border-transparent"
              class="w-fit rounded-full border border-slate-700 bg-slate-950/10 px-8 py-4 text-center text-lg font-semibold leading-tight text-slate-300 transition hover:bg-slate-950/20 sm:text-xl"
            >Contact</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomePageComponent {}
