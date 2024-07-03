import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { TodoState } from './todo.store';
import { computed } from '@angular/core';

export function withTodoSelectors() {
  return signalStoreFeature(
    {
      state: type<TodoState>(),
    },
    withComputed(({ todos }) => ({
      count: computed(() => todos().length),
      doneCount: computed(() => todos().filter((todo) => todo.done).length),
      openCount: computed(() => todos().filter((todo) => !todo.done).length),
      sortedTodos: computed(() => todos().sort((b, a) => +b.done - +a.done)),
    }))
  );
}
