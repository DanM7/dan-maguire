import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent],
  templateUrl: './experience.page.html'
})
export class ExperiencePageComponent {}
