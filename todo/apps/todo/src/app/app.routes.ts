import { Routes } from '@angular/router';
import { ShellComponent } from './shell';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'todos',
        loadChildren: () => import('./todo').then((feature) => feature.routes),
      },
      {
        path: 'about',
        loadChildren: () => import('./about').then((feature) => feature.routes),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'todos',
      },
    ],
  },
];
