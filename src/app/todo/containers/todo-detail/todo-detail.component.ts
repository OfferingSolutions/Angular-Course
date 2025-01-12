import {Component, inject, input} from '@angular/core';
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {TodoService} from "../../services/todo.service";
import {TodoDetailFormComponent} from "../../presentationals/todo-detail-form/todo-detail-form.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Todo} from "../../models/todo.models";

@Component({
    selector: 'app-todo-detail',
    imports: [TodoDetailFormComponent, MatProgressSpinner],
    templateUrl: './todo-detail.component.html',
    styleUrl: './todo-detail.component.scss'
})
export class TodoDetailComponent {
  private readonly todoService = inject(TodoService);

  readonly id = input.required<string>();

  readonly todo = toSignal(toObservable(this.id).pipe(switchMap((id) => this.todoService.get(id))))

  save(todo: Todo): void {
    this.todoService.update(todo)
  }
}
