import { Todo } from '@todo/todo-domain';
import { signalStore, withHooks, withState } from '@ngrx/signals';
import { withTodoSelectors } from './todo.selectors';
import { withTodoMethods } from './todo.methods';

export interface TodoState {
  todos: Todo[];
}

export const initialTodoState: TodoState = {
  todos: [],
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
