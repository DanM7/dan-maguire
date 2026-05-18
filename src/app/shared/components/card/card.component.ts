import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <article class="section-card p-6 sm:p-8">
      <div class="mb-4 text-xs uppercase tracking-[0.32em] text-slate-400">{{ eyebrow }}</div>
      <h3 class="text-2xl font-semibold text-white">{{ title }}</h3>
      @if (description.trim()) {
        <p class="mt-3 text-slate-300">{{ description }}</p>
      }
      <div class="mt-6"><ng-content></ng-content></div>
    </article>
  `
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() eyebrow = 'Feature';
}
