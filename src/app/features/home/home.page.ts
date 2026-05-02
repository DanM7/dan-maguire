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
          <p class="mt-6 text-lg leading-8 text-slate-300">A clean, intentional site for engineering leadership and creative systems. This space reflects a principal-level mindset: thoughtful systems, polished execution, and a strong sense of craft across technology and experience.</p>
          <div class="mt-10 flex flex-wrap gap-3">
            <a routerLink="/" routerLinkActive="bg-brand-500 text-slate-950 border-transparent" [routerLinkActiveOptions]="{ exact: true }" class="rounded-full border border-slate-700 bg-slate-950/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-950/20">Home</a>
            <a routerLink="/about" routerLinkActive="bg-brand-500 text-slate-950 border-transparent" class="rounded-full border border-slate-700 bg-slate-950/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-950/20">About</a>
            <a routerLink="/experience" routerLinkActive="bg-brand-500 text-slate-950 border-transparent" class="rounded-full border border-slate-700 bg-slate-950/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-950/20">Experience</a>
            <a routerLink="/projects" routerLinkActive="bg-brand-500 text-slate-950 border-transparent" class="rounded-full border border-slate-700 bg-slate-950/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-950/20">Projects</a>
            <a routerLink="/contact" routerLinkActive="bg-brand-500 text-slate-950 border-transparent" class="rounded-full border border-slate-700 bg-slate-950/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-950/20">Contact</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomePageComponent {}
