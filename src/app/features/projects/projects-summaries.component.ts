import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { Project } from './project.model';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'projects-summaries',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './projects-summaries.component.html',
  styleUrl: './projects-summaries.component.scss'
})
export class ProjectsSummariesComponent {
  activeFilter = 'all';

  projects: Project[] = PROJECTS;

  get filteredProjects(): Project[] {
    const base =
      this.activeFilter === 'all'
        ? this.projects
        : this.projects.filter(project => project.filterCategory === this.activeFilter);

    return [
      ...base.filter(project => project.pinned),
      ...base.filter(project => !project.pinned)
    ];
  }

  techStackLine(project: Project): string {
    return project.techStack.join(' · ');
  }

  projectCardLink(project: Project): string | string[] {
    if (project.filterCategory === 'insights' && project.insightPath) {
      return project.insightPath;
    }

    return ['/projects', project.slug];
  }

  setFilter(value: string): void {
    this.activeFilter = value;
  }
}
