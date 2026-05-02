import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExperiencePageComponent } from './experience.page';

@NgModule({
  imports: [ExperiencePageComponent, RouterModule.forChild([{ path: '', component: ExperiencePageComponent }])]
})
export class ExperienceModule {}
