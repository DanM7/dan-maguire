import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="mb-8 max-w-2xl">
      <p class="text-sm uppercase tracking-[0.32em] text-cyan-200/80">{{ label }}</p>
      <h2 class="mt-3 text-3xl font-semibold text-white sm:text-4xl">{{ title }}</h2>
      <p class="mt-4 text-slate-300">{{ subtitle }}</p>
    </div>
  `
})
export class SectionHeaderComponent {
  @Input() label = 'Section';
  @Input() title = 'Title';
  @Input() subtitle = '';
}
