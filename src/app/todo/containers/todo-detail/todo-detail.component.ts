import { Component, computed, inject, input, resource } from '@angular/core';
import { lastValueFrom } from "rxjs";
import { TodoService } from "../../services/todo.service";
import { TodoDetailFormComponent } from "../../presentationals/todo-detail-form/todo-detail-form.component";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { Todo } from "../../models/todo.models";

@Component({
  selector: 'app-todo-detail',
  imports: [TodoDetailFormComponent, MatProgressSpinner],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.scss'
})
export class TodoDetailComponent {
  readonly id = input.required<string>();
  readonly #todoService = inject(TodoService);
  readonly #todoResource = resource({
    request: this.id,
    loader: (param) =>
      lastValueFrom(this.#todoService.get(param.request))
  });

  todo = computed(() => this.#todoResource.value() ?? null);

  save(todo: Todo): void {
    this.#todoService.update(todo)
  }
}
