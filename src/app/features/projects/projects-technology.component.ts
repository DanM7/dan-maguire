import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { TECHNOLOGY_SECTIONS, TechnologyItem, TechnologyKind } from './technology.data';

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

  /** Flat list in section order (engines → … → pipelines), or one kind when filtered. */
  get displayedTechnologyItems(): TechnologyItem[] {
    if (this.activeFilter === 'all') {
      return this.sections.flatMap(s => s.items);
    }
    return this.sections.filter(s => s.kind === this.activeFilter).flatMap(s => s.items);
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
}
