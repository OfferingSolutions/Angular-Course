import {Component, inject, input} from '@angular/core';
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {switchMap} from "rxjs";
import {TodoService} from "../../services/todo.service";
import {TodoDetailFormComponent} from "../../presentationals/todo-detail-form/todo-detail-form.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {Todo} from "../../models/todo.models";
import {
  TodoDetailPersonalInformationComponent
} from "../../presentationals/todo-detail-personal-information/todo-detail-personal-information.component";

@Component({
    selector: 'app-todo-detail',
    imports: [TodoDetailFormComponent, MatProgressSpinner, TodoDetailPersonalInformationComponent],
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
