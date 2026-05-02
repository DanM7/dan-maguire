import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-section',
  standalone: true,
  template: `
    <div class="section-card p-6">
      <h4 class="text-xl font-semibold text-white">Heroes</h4>
      <p class="mt-3 text-slate-300">Character-driven hero illustrations that combine polished visual storytelling with bold compositional impact.</p>
      <div class="mt-6 space-y-2 text-slate-400">
        <p>• Role: concept, character design, and layout direction</p>
        <p>• Focus: narrative presence, scale, and emotional clarity</p>
        <p>• Status: placeholder for hero section exploration</p>
      </div>
    </div>
  `
})
export class HeroesSectionComponent {}