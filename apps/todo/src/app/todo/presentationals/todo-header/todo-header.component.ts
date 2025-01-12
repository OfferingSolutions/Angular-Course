import { Component, input } from '@angular/core';

@Component({
    selector: 'app-todo-header',
    imports: [],
    templateUrl: './todo-header.component.html',
    styleUrl: './todo-header.component.scss'
})
export class TodoHeaderComponent {
  readonly count = input.required<number>();

  readonly openCount = input.required<number>();

  readonly doneCount = input.required<number>();
}
