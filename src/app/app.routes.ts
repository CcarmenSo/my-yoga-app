import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () => import('./features/home/home.component')
  },
  {
    path: "levels",
    loadComponent: () => import('./features/levels/levels.component')
  },
  {
    path: "categories",
    loadComponent: () => import('./features/categories/categories.component')
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
