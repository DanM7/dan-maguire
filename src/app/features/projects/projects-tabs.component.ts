import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ProjectsTab = 'products' | 'technology' | 'ecosystem' | 'status';

@Component({
  selector: 'projects-tabs',
  standalone: true,
  templateUrl: './projects-tabs.component.html',
  styleUrl: './projects-tabs.component.scss'
})
export class ProjectsTabsComponent {
  @Input() activeTab: ProjectsTab = 'products';

  @Output() tabChange = new EventEmitter<ProjectsTab>();

  select(tab: ProjectsTab): void {
    if (tab !== this.activeTab) {
      this.tabChange.emit(tab);
    }
  }
}
