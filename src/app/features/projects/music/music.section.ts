import { Component } from '@angular/core';

@Component({
  selector: 'app-music-section',
  standalone: true,
  template: `
    <div class="section-card p-6">
      <h3 class="text-2xl font-semibold text-white">Music</h3>
      <p class="mt-3 text-slate-300">Experience-driven audio product features, collaboration workflows, and performance-aware playback engineering.</p>
      <ul class="mt-6 space-y-3 text-slate-300">
        <li>● Streamlined composition tooling</li>
        <li>● Adaptive listening interfaces</li>
        <li>● Observability for media pipelines</li>
      </ul>
    </div>
  `
})
export class MusicSectionComponent {}
