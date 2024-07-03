import {Routes} from '@angular/router';
import {ShellComponent} from './presentationals/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'todos',
        loadChildren: () => import('@todo/todo-feature').then((feature) => feature.routes),
      },
      {
        path: 'about',
        loadChildren: () => import('@todo/about-feature').then((feature) => feature.routes),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'todos',
      },
    ],
  },
];
