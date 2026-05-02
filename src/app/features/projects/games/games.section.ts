import { Component } from '@angular/core';

@Component({
  selector: 'app-games-section',
  standalone: true,
  template: `
    <div class="section-card p-6">
      <h3 class="text-2xl font-semibold text-white">Games</h3>
      <p class="mt-3 text-slate-300">An interactive product mindset with experience design, performance optimization, and scalable client architecture.</p>
      <ul class="mt-6 space-y-3 text-slate-300">
        <li>● Multiplayer experience framework</li>
        <li>● Data-driven economy systems</li>
        <li>● Cross-platform UI performance auditing</li>
      </ul>
    </div>
  `
})
export class GamesSectionComponent {}
