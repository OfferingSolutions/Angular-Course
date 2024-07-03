import { Routes } from '@angular/router';
import { TodoComponent } from '../containers/todo/todo.component';
import { TodoDetailComponent } from '../containers/todo-detail/todo-detail.component';
import { TodoStore } from '../../../../domain/src/lib/state/todo.store';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TodoComponent,
      },
      {
        path: `:id`,
        component: TodoDetailComponent,
      },
    ],
    providers: [TodoStore],
  },
];
