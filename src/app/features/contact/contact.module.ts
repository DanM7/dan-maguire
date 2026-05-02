import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact.page';

@NgModule({
  imports: [ContactPageComponent, RouterModule.forChild([{ path: '', component: ContactPageComponent }])]
})
export class ContactModule {}
