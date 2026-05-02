import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/app-shell/app-shell.module').then(m => m.AppShellModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
