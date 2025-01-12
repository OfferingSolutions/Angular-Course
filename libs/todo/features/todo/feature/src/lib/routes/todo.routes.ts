import {Routes} from '@angular/router';
import {TodoComponent} from '../containers/todo/todo.component';
import {TodoDetailComponent} from '../containers/todo-detail/todo-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
  {
    path: `:id`,
    component: TodoDetailComponent,
  },
];
