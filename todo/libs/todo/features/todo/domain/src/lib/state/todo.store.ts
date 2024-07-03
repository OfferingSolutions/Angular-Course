import { Todo, TodoService } from '@todo/todo-domain';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export interface TodoState {
  todos: Todo[];
}

export const initialTodoState: TodoState = {
  todos: [],
};

export const TodoStore = signalStore(
  withState(initialTodoState),
  withComputed(({ todos }) => ({
    count: computed(() => todos().length),
    doneCount: computed(() => todos().filter((todo) => todo.done).length),
    openCount: computed(() => todos().filter((todo) => !todo.done).length),
    sortedTodos: computed(() => todos().sort((b, a) => +b.done - +a.done)),
  })),
  withMethods((todoStore, todoService = inject(TodoService)) => ({
    loadAll: rxMethod<void>(
      pipe(
        switchMap(() =>
          todoService.getAll().pipe(
            tapResponse({
              next: (todos) => {
                patchState(todoStore, { todos });
              },
              error: () => console.error('Error Loading Todos'),
            })
          )
        )
      )
    ),
    add: rxMethod<string>(
      pipe(
        switchMap((todoValue) =>
          todoService.add(todoValue).pipe(
            tapResponse({
              next: (todo) =>
                patchState(todoStore, { todos: [todo, ...todoStore.todos()] }),
              error: () => console.error('Error Adding New Todo'),
            })
          )
        )
      )
    ),
    update: rxMethod<Todo>(
      pipe(
        switchMap((todo) =>
          todoService.update(todo).pipe(
            tapResponse({
              next: (todo) => {
                if (todo.done) {
                  const allOtherTodos = todoStore
                    .todos()
                    .filter((t) => t.id !== todo.id);
                  const todos = [...allOtherTodos, todo];

                  patchState(todoStore, { todos });
                } else {
                  const todos = todoStore
                    .todos()
                    .map((t) => (t.id === todo.id ? todo : t));

                  patchState(todoStore, { todos });
                }
              },
              error: () => console.error('Error Updating Todo'),
            })
          )
        )
      )
    ),
    delete: rxMethod<string>(
      pipe(
        switchMap((id) =>
          todoService.delete(id).pipe(
            tapResponse({
              next: () => {
                const todos = todoStore
                  .todos()
                  .filter((todo) => todo.id !== id);

                patchState(todoStore, { todos });
              },
              error: () => console.error('Error Deleting Todo'),
            })
          )
        )
      )
    ),
  })),
  withHooks({
    onInit({ loadAll }) {
      loadAll();
    },
  })
);
