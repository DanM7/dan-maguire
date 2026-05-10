import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { insightArticlesSorted } from './insights.data';

@Component({
  selector: 'app-insights-page',
  standalone: true,
  imports: [CommonModule, RouterLink, SectionHeaderComponent, CardComponent],
  templateUrl: './insights.page.html',
  styleUrls: ['./insights.page.scss']
})
export class InsightsPageComponent {
  readonly articles = insightArticlesSorted();
}
