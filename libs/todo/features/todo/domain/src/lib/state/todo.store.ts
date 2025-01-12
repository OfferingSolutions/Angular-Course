import {Todo} from "@todo/todo-domain";
import {signalStore, withState} from "@ngrx/signals";

export interface TodoState {
  todos: Todo[]
}

export const initialTodoState: TodoState = {
  todos: []
}

export const TodoStore = signalStore(
  withState(initialTodoState),
)
