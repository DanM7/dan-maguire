import { Component } from '@angular/core';

@Component({
  selector: 'app-comics-section',
  standalone: true,
  template: `
    <div class="section-card p-6">
      <h3 class="text-2xl font-semibold text-white">Comics</h3>
      <p class="mt-3 text-slate-300">Creative storytelling with editorial workflows, content publishing, and brand-aligned digital experiences.</p>
      <ul class="mt-6 space-y-3 text-slate-300">
        <li>● Serialized narrative publishing UI</li>
        <li>● Accessible, optimized reader flows</li>
        <li>● Analytics-driven engagement modeling</li>
      </ul>
    </div>
  `
})
export class ComicsSectionComponent {}
