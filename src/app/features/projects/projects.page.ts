import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsHeaderComponent } from './projects-header.component';
import { ProjectsSummariesComponent } from './projects-summaries.component';
import { ProjectsStatusComponent } from './projects-status.component';
import { ProjectsTab, ProjectsTabsComponent } from './projects-tabs.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsHeaderComponent,
    ProjectsTabsComponent,
    ProjectsSummariesComponent,
    ProjectsStatusComponent
  ],
  templateUrl: './projects.page.html'
})
export class ProjectsPageComponent {
  activeTab: ProjectsTab = 'summaries';

  setTab(tab: ProjectsTab): void {
    this.activeTab = tab;
  }
}
