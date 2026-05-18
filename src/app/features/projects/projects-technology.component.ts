import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { getProjectBySlug, TECHNOLOGY_SECTIONS } from './projects.data';
import { TechnologyItem, TechnologyKind } from './project.model';

@Component({
  selector: 'projects-technology',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './projects-technology.component.html',
  styleUrl: './projects-technology.component.scss'
})
export class ProjectsTechnologyComponent {
  readonly sections = TECHNOLOGY_SECTIONS;

  readonly technologyFilters: { id: 'all' | TechnologyKind; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'engine', label: 'Engines' },
    { id: 'framework', label: 'Frameworks' },
    { id: 'tool', label: 'Tools' },
    { id: 'pipeline', label: 'Pipelines' }
  ];

  activeFilter: 'all' | TechnologyKind = 'all';

  /** Flat list in section order (engines → … → pipelines), or one kind when filtered; pinned first. */
  get displayedTechnologyItems(): TechnologyItem[] {
    const items =
      this.activeFilter === 'all'
        ? this.sections.flatMap(s => s.items)
        : this.sections.filter(s => s.kind === this.activeFilter).flatMap(s => s.items);
    return this.pinnedFirstStable(items);
  }

  private pinnedFirstStable(items: TechnologyItem[]): TechnologyItem[] {
    const pinned: TechnologyItem[] = [];
    const rest: TechnologyItem[] = [];
    for (const item of items) {
      (item.pinned ? pinned : rest).push(item);
    }
    return [...pinned, ...rest];
  }

  setFilter(value: string): void {
    this.activeFilter = value === 'all' ? 'all' : (value as TechnologyKind);
  }

  kindEyebrow(kind: TechnologyKind): string {
    const labels: Record<TechnologyKind, string> = {
      engine: 'ENGINE',
      framework: 'FRAMEWORK',
      tool: 'TOOL',
      pipeline: 'PIPELINE'
    };
    return labels[kind];
  }

  /** In-app project detail route when this row maps to a technology-tab project. */
  technologyItemDetailLink(item: TechnologyItem): string[] | null {
    const slug = item.projectSlug;
    if (!slug) {
      return null;
    }
    if (getProjectBySlug(slug)?.portfolioTab !== 'technology') {
      return null;
    }
    return ['/projects', slug];
  }
}
