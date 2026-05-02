import { Component } from '@angular/core';

@Component({
  selector: 'app-art-section',
  standalone: true,
  template: `
    <div class="section-card p-6">
      <h3 class="text-2xl font-semibold text-white">Art</h3>
      <p class="mt-3 text-slate-300">Design systems, motion strategy, and visual craftsmanship for product experiences with emotional resonance.</p>
      <ul class="mt-6 space-y-3 text-slate-300">
        <li>● Design system tokenization</li>
        <li>● Illustration-driven interface strategy</li>
        <li>● Advanced responsive visual composition</li>
      </ul>
    </div>
  `
})
export class ArtSectionComponent {}
