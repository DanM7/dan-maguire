import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { Project } from './project.model';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, CardComponent],
  styleUrls: ['./projects.page.scss'],
  templateUrl: './projects.page.html'
})
export class ProjectsPageComponent {
  activeFilter = 'all';

  projects: Project[] = PROJECTS;

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return [
        ...this.projects.filter(project => project.pinned),
        ...this.projects.filter(project => !project.pinned)
      ];
    }

    return this.projects.filter(project => project.filterCategory === this.activeFilter);
  }

  techStackLine(project: Project): string {
    return project.techStack.join(' · ');
  }

  setFilter(value: string) {
    this.activeFilter = value;
  }
}
