import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home.page';

@NgModule({
  imports: [HomePageComponent, RouterModule.forChild([{ path: '', component: HomePageComponent }])]
})
export class HomeModule {}
