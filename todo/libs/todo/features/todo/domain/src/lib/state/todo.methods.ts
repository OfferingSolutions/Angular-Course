import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
} from '@ngrx/signals';
import { TodoState } from './todo.store';
import { inject } from '@angular/core';
import { Todo, TodoService } from '@todo/todo-domain';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export function withTodoMethods() {
  return signalStoreFeature(
    {
      state: type<TodoState>(),
    },

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
                  patchState(todoStore, {
                    todos: [todo, ...todoStore.todos()],
                  }),
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
    }))
  );
}
