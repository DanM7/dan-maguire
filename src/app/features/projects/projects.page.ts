import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsHeaderComponent } from './projects-header.component';
import { ProjectsProductsComponent } from './projects-products.component';
import { ProjectsStatusComponent } from './projects-status.component';
import { ProjectsTab, ProjectsTabsComponent } from './projects-tabs.component';
import { ProjectsTechnologyComponent } from './projects-technology.component';
import { ProjectsEcosystemComponent } from './projects-ecosystem.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    CommonModule,
    ProjectsHeaderComponent,
    ProjectsTabsComponent,
    ProjectsProductsComponent,
    ProjectsTechnologyComponent,
    ProjectsEcosystemComponent,
    ProjectsStatusComponent
  ],
  templateUrl: './projects.page.html'
})
export class ProjectsPageComponent {
  activeTab: ProjectsTab = 'products';

  setTab(tab: ProjectsTab): void {
    this.activeTab = tab;
  }
}
