import { Todo } from '@todo/todo-domain';
import { signalStore, withHooks, withState } from '@ngrx/signals';
import { withTodoSelectors } from './todo.selectors';
import { withTodoMethods } from './todo.methods';

export interface TodoState {
  todos: Todo[];
  current: Todo | null;
}

export const initialTodoState: TodoState = {
  todos: [],
  current: null,
};

export const TodoStore = signalStore(
  withState(initialTodoState),
  withTodoSelectors(),
  withTodoMethods(),
  withHooks({
    onInit({ loadAll }) {
      loadAll();
    },
  })
);
