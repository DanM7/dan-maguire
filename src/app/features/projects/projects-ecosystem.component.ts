import { Component } from '@angular/core';
import { EcosystemGraphComponent } from './ecosystem-graph.component';

@Component({
  selector: 'projects-ecosystem',
  standalone: true,
  imports: [EcosystemGraphComponent],
  template: `
    <p class="mt-6 max-w-3xl text-slate-300 leading-relaxed">
      A visual snapshot of how engines, tools, and frameworks form a connected ecosystem across my work.
    </p>
    <div class="mt-8">
      <app-ecosystem-graph />
    </div>
  `
})
export class ProjectsEcosystemComponent {}
