import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { Project, ProjectFilter, SummaryPreviewImageAlign } from './project.model';
import { PROJECTS, projectCategoryEyebrow } from './projects.data';

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
        : this.projects.filter(project =>
            project.categories.includes(this.activeFilter as ProjectFilter)
          );

    return [
      ...base.filter(project => project.pinned),
      ...base.filter(project => !project.pinned)
    ];
  }

  techStackLine(project: Project): string {
    return project.techStack.join(' · ');
  }

  projectCardLink(project: Project): string | string[] {
    return ['/projects', project.slug];
  }

  categoryEyebrow(project: Project): string {
    return projectCategoryEyebrow(project);
  }

  /** Card preview image: primary screenshot, else first gallery asset (detail page can still show full gallery). */
  summaryCardPreviewSrc(project: Project): string | null {
    if (project.screenshot) {
      return project.screenshot;
    }
    const first = project.gallery.find(url => !!url?.trim());
    return first ?? null;
  }

  /** Resolves `object-position` for the summaries preview (`object-cover`). Omits → alignTop. */
  resolveSummaryPreviewImageAlign(project: Project): SummaryPreviewImageAlign {
    return project.summaryPreviewImageAlign ?? 'alignTop';
  }

  setFilter(value: string): void {
    this.activeFilter = value;
  }
}
