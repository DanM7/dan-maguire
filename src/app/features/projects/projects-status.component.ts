import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStatusEntry, SDLCPhase } from './project-status.model';
import { PROJECT_STATUS_ENTRIES } from './project-status.data';
import { ProjectStatusCardComponent } from './project-status-card.component';

@Component({
  selector: 'projects-status',
  standalone: true,
  imports: [CommonModule, ProjectStatusCardComponent],
  templateUrl: './projects-status.component.html',
  styleUrl: './projects-status.component.scss'
})
export class ProjectsStatusComponent {
  readonly phases: SDLCPhase[] = ['idea', 'exploring', 'building', 'live', 'evolving', 'legacy'];

  readonly phaseLabels: Record<SDLCPhase, string> = {
    idea: 'Idea',
    exploring: 'Exploring',
    building: 'Building',
    live: 'Live',
    evolving: 'Evolving',
    legacy: 'Legacy'
  };

  readonly entriesByPhase: Record<SDLCPhase, ProjectStatusEntry[]>;

  activePhase: SDLCPhase = 'idea';

  constructor() {
    const map = {} as Record<SDLCPhase, ProjectStatusEntry[]>;
    for (const phase of this.phases) {
      map[phase] = PROJECT_STATUS_ENTRIES.filter(entry => entry.phase === phase);
    }
    this.entriesByPhase = map;
  }

  selectPhase(phase: SDLCPhase): void {
    this.activePhase = phase;
  }

  get activeEntries(): ProjectStatusEntry[] {
    return this.entriesByPhase[this.activePhase];
  }
}
