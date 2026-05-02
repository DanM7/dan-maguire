import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="section-wrapper">
      <div class="page-container">
        <router-outlet></router-outlet>
      </div>
    </section>
  `
})
export class AppShellComponent {}
