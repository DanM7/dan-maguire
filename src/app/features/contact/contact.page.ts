import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './contact.page.html'
})
export class ContactPageComponent {}
