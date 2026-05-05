import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  styleUrls: ['./home.page.scss'],
  templateUrl: './home.page.html'
})
export class HomePageComponent {}
