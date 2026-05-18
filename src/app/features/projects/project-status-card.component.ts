import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'project-status-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-status-card.component.html',
  styleUrl: './project-status-card.component.scss'
})
export class ProjectStatusCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) category!: string;
  @Input() summary?: string;
  @Input({ required: true }) link!: string;
}
