import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { Project, ProjectFilter, SummaryPreviewImageAlign } from './project.model';
import { PRODUCT_CARD_SLUGS, PROJECTS, projectCategoryEyebrow } from './projects.data';

@Component({
  selector: 'projects-products',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './projects-products.component.html',
  styleUrl: './projects-products.component.scss'
})
export class ProjectsProductsComponent {
  private readonly bySlug = new Map(PROJECTS.map(p => [p.slug, p] as const));

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

  /** Products tab: fixed roster, same order as `PRODUCT_CARD_SLUGS`. */
  get productProjects(): Project[] {
    return PRODUCT_CARD_SLUGS.map(slug => this.bySlug.get(slug)).filter((p): p is Project => !!p);
  }

  /** Roster for the grid: all products in slug order, or filtered by category (slug order preserved). */
  get displayedProductProjects(): Project[] {
    const f = this.activeFilter;
    if (f === 'all') {
      return this.productProjects;
    }
    return PRODUCT_CARD_SLUGS.map(slug => this.bySlug.get(slug)).filter(
      (p): p is Project => !!p && p.categories.includes(f)
    );
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
