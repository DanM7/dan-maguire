import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, SDLCPhase, projectSdlcPhase } from './project.model';
import { PROJECTS, projectStatusCategoryLabel, projectStatusDetailLink } from './projects.data';
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

  readonly entriesByPhase: Record<SDLCPhase, Project[]>;

  activePhase: SDLCPhase = 'idea';

  constructor() {
    const map = {} as Record<SDLCPhase, Project[]>;
    for (const phase of this.phases) {
      map[phase] = PROJECTS.filter(project => projectSdlcPhase(project) === phase);
    }
    this.entriesByPhase = map;
  }

  selectPhase(phase: SDLCPhase): void {
    this.activePhase = phase;
  }

  get activeEntries(): Project[] {
    return this.entriesByPhase[this.activePhase];
  }

  statusCategory(project: Project): string {
    return projectStatusCategoryLabel(project);
  }

  statusLink(project: Project): string {
    return projectStatusDetailLink(project);
  }
}
