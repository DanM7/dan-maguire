import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsPageComponent } from './projects.page';

@NgModule({
  imports: [ProjectsPageComponent, RouterModule.forChild([{ path: '', component: ProjectsPageComponent }])]
})
export class ProjectsModule {}
