import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="border-t border-slate-800 bg-slate-950/95 py-6 text-slate-400">
      <div class="page-container flex items-end justify-between gap-4 text-sm leading-relaxed">
        <div>
          <p>Designed for intentional engineering leadership, creative systems thinking, and polished digital experiences.</p>
          <p class="mt-3">© 2026 Engineering + Creativity</p>
        </div>
        <a
          href="https://www.linkedin.com/in/dan-maguire-b2016b87/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="inline-flex h-5 w-5 items-center justify-center text-slate-400 transition hover:text-slate-200"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-5 w-5">
            <path d="M20.447 20.452h-3.554v-5.568c0-1.328-.026-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.666H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.114 20.452H3.56V9h3.554v11.452z" />
          </svg>
        </a>
      </div>
    </footer>
  `
})
export class FooterComponent {}
