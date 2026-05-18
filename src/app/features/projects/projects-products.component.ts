import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { Project, ProjectFilter, SummaryPreviewImageAlign } from './project.model';
import { PROJECTS, projectCategoryEyebrow } from './projects.data';

@Component({
  selector: 'projects-products',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './projects-products.component.html',
  styleUrl: './projects-products.component.scss'
})
export class ProjectsProductsComponent {
  /** Same portfolio buckets as the former Summaries tab. */
  readonly portfolioFilters: { id: ProjectFilter; label: string }[] = [
    { id: 'games', label: 'Games' },
    { id: 'art', label: 'Art' },
    { id: 'comics', label: 'Comics' },
    { id: 'music', label: 'Music' },
    { id: 'writing', label: 'Writing' },
    { id: 'experiments', label: 'Experiments' }
  ];

  activeFilter: 'all' | ProjectFilter = 'all';

  /** Products tab: pinned first, then others; within each group, `PROJECTS` order. */
  get productProjects(): Project[] {
    return this.pinnedFirstStable(PROJECTS.filter(p => p.portfolioTab === 'products'));
  }

  /** Grid: product-tab projects, optionally filtered by creative category. */
  get displayedProductProjects(): Project[] {
    const f = this.activeFilter;
    if (f === 'all') {
      return this.productProjects;
    }
    return this.pinnedFirstStable(this.productProjects.filter(p => p.categories.includes(f)));
  }

  /** Pinned (★) entries first, stable order within pinned and within non-pinned. */
  private pinnedFirstStable(projects: Project[]): Project[] {
    const pinned: Project[] = [];
    const rest: Project[] = [];
    for (const p of projects) {
      (p.pinned ? pinned : rest).push(p);
    }
    return [...pinned, ...rest];
  }

  setFilter(value: string): void {
    this.activeFilter = value === 'all' ? 'all' : (value as ProjectFilter);
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

  summaryCardPreviewSrc(project: Project): string | null {
    if (project.screenshot) {
      return project.screenshot;
    }
    const first = project.gallery.find(url => !!url?.trim());
    return first ?? null;
  }

  resolveSummaryPreviewImageAlign(project: Project): SummaryPreviewImageAlign {
    return project.summaryPreviewImageAlign ?? 'alignTop';
  }
}
