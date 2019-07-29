# Adding state management with ngrx

## Code to start

[https://stackblitz.com/edit/angular-y9gf7m](https://stackblitz.com/edit/angular-y9gf7m)

## Installing the dependencies

> Make sure you are at the level of the `package.json` file

```
npm install @ngrx/store
```

## Preparations

First we have to introduce a folder in the `todo` folder called `store`. This is where all our `NgRx` stuff finds a place.

## Adding the first action

We have to add actions which describe how we can load all items. We add a file in the `store` folder called `todo.actions.ts`.

Let us implement the first actions.

Code of `todo.actions.ts`

```typescript
import { createAction, props } from '@ngrx/store';

export const loadAllTodos = createAction('[Todo] Load Todos');
```

## Adding a state

Create a file called `todo.reducer.ts` inside the `store` folder. Our state, which can get persisted,

Code of `todo.reducer.ts`

```typescript
import { Todo } from '../../models/todo';

export interface ReducerTodoState {
  items: Todo[];
  selectedItem: Todo;
  loading: boolean;
}

export const initialState: ReducerTodoState = {
  items: [],
  selectedItem: null,
  loading: false
};
```

As this is the state we are going to work with we have now react to the action which can be applied to the store. Lets extend the same file.

Code of `todo.reducer.ts`

```typescript
import { Todo } from '../../models/todo';
import * as todoActions from './todo.actions';
import { createReducer, on, Action } from '@ngrx/store';

const initialValues: Todo[] = [
  {
    id: 'b1b46e83-f5d7-47e9-a8ea-601142219614',
    value: 'fromstore',
    done: false,
    created: new Date('2019-07-16T14:55:09.0287501+00:00')
  },
  {
    id: 'a7659545-2f0b-4da8-8c3d-41ab388e459a',
    value: 'fromstore2',
    done: false,
    created: new Date('2019-07-16T14:56:09.5735011+00:00')
  }
];

export interface ReducerTodoState {
  items: Todo[];
  selectedItem: Todo;
  loading: boolean;
}

export const initialState: ReducerTodoState = {
  items: initialValues,
  selectedItem: null,
  loading: false
};

const todoReducerInternal = createReducer(
  initialState,

  on(todoActions.loadAllTodos, state => {
    return {
      ...state,
      loading: false,
      items: [...state.items]
    };
  })
);

export function todoReducer(
  state: ReducerTodoState | undefined,
  action: Action
) {
  return todoReducerInternal(state, action);
}
```

## Adding the reducers to the modules

In the `todo.module.ts` we can define the store with the `forFeature` method like this:

```typescript
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/todo.reducer';

@NgModule({
  imports: [
    // ...
    StoreModule.forFeature('todo', todoReducer)
  ]
  // ...
})
export class TodoModule {}
```

And in the `app.module.ts` we have to provide an empty store because on the root level the store is an empty object.

```typescript
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [StoreModule.forRoot({})],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Using the store inside the components

We can now inject the store into our `content.component.ts` and ask for items on this. Comment out all other functions as we will pull them to NgRx in this chapter step by step.

```typescript
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as todoActions from '../../store/todo.actions';

//...

export class ContentComponent implements OnInit {
  items$: Observable<Todo[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.items$ = this.store.pipe(
      select(state => state.todo.items),
      map(items => items.filter(x => !x.done))
    );

    this.store.dispatch(todoActions.loadAllTodos());
  }

  addTodo(item: string) {
    //this.todoService.addItem(item).subscribe(() => this.getData());
  }

   markAsDone(item: Todo) {
    //this.todoService.updateItem(item).subscribe(() => this.getData());
  }

  getData() {
    //this.todoService.getItems().subscribe(result => (this.items = result));
  }
```

As we introduced an observable now we have to bind it with the `async` pipe to subscribe.

Code of `content.component.html`

```html
<div class="starter-template">
  <h1>Todo App</h1>
  <p>
    <app-todo-form (todoAdded)="addTodo($event)"></app-todo-form>
  </p>
  <p>
    <app-todo-list
      [items]="items$ | async"
      (markAsDone)="markAsDone($event)"
    ></app-todo-list>
  </p>
</div>
```

Check the browser you should see the result.

[https://stackblitz.com/edit/angular-9oujxe](https://stackblitz.com/edit/angular-9oujxe)

## Selecting the done items

```typescript
export class ContentComponent implements OnInit {
  items$: Observable<Todo[]>;
  doneItems$: Observable<Todo[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.items$ = this.store.pipe(
      select(state => state.todo.items),
      map(items => items.filter(x => !x.done))
    );

    this.doneItems$ = this.store.pipe(
      select(state => state.todo.items),
      map(items => items.filter(x => x.done))
    );

    this.store.dispatch(todoActions.loadAllTodos());
  }
}
```

## Pass the doneitems to the list component

You can do this on your own, can't you? :)

Code of `todo-list.component.ts`

```typescript
export class TodoListComponent implements OnInit {
  @Input() items: Todo[] = [];
  @Input() doneItems: Todo[] = [];
  @Output() markAsDone = new EventEmitter();

  showList = true;

  constructor() {}

  ngOnInit() {}

  moveToDone(item: Todo) {
    item.done = true;
    this.markAsDone.emit(item);
  }

  toggleDoneList() {
    this.showList = !this.showList;
  }
}
```

Code of `content.component.html`

```html
<div class="starter-template">
  <h1>Todo App</h1>
  <p>
    <app-todo-form (todoAdded)="addTodo($event)"></app-todo-form>
  </p>
  <p>
    <app-todo-list
      [items]="items$ | async"
      [doneItems]="doneItems$ | async"
      (markAsDone)="markAsDone($event)"
    ></app-todo-list>
  </p>
</div>
```

[https://stackblitz.com/edit/angular-rdawtf](https://stackblitz.com/edit/angular-rdawtf)

## Adding selectors

Now we want to remove the ugly "I have to deal with the complete state" in the components and build an API for the state that we have right now.

current state:

```json
{
  todos: {
    items: ...
    selectedItem: ...
    loading: ...
  }
}
```

To select something from the state we have to first choose our feature. Change the `todo.reducer.ts` as following:

```typescript
import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';

export const featureName = 'todo';

// ... other things

export const getTodoState = createFeatureSelector(featureName);
```

Change the `todo.module.ts` using the new `featureName` variable.

```typescript
import { todoReducer, featureName } from './store/todo.reducer';

@NgModule({
  imports: [StoreModule.forFeature(featureName, todoReducer)],
  declarations: [
    // ...
  ]
})
export class TodoModule {}
```

Create a new file called `todo.selectors.ts` in the `store` folder.

Add the selectors by using the `createSelector` function provided by NgRx.

```typescript
import * as fromReducer from './todo.reducer';
import { createSelector } from '@ngrx/store';

export const getAllUndoneItems = createSelector(
  fromReducer.getTodoState,
  (state: fromReducer.ReducerTodoState) => state.items.filter(x => !x.done)
);

export const getAllDoneItems = createSelector(
  fromReducer.getTodoState,
  (state: fromReducer.ReducerTodoState) => state.items.filter(x => x.done)
);
```

## Using the selectors in the components

Change the `todo.component.ts` to the following.

```typescript
import * as fromSelectors from '../../store/todo.selectors';

export class ContentComponent implements OnInit {
  items$: Observable<Todo[]>;
  doneItems$: Observable<Todo[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.items$ = this.store.pipe(select(fromSelectors.getAllUndoneItems));

    this.doneItems$ = this.store.pipe(select(fromSelectors.getAllDoneItems));

    this.store.dispatch(todoActions.loadAllTodos());
  }
}
```

So we moved the whole state selection into the selectors to make it easier for us to deal with slices of the state.

[https://stackblitz.com/edit/angular-vk9ocb](https://stackblitz.com/edit/angular-vk9ocb)

## Contacting the server with effects

```cmd
npm install @ngrx/effects
```

As reducers have to be predictable we need a place to put unpredictable actions like HTTP-Requests into. This can be done via effects. The effects are reacting on actions and return a new action.

So first of all we have to intrduce a new action which gets returned if everything went well.

Code of `todo.actions.ts`

```typescript
import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo';

export const loadAllTodos = createAction('[Todo] Load Todos');
export const loadAllTodosFinished = createAction(
  '[Todo] Load Todos Finished',
  props<{ payload: Todo[] }>()
);
```

Create a new file called `todo.effects.ts`

Code from `todo.effects.ts`

```typescript
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as todoActions from './todo.actions';
import { TodoService } from '@app/core/services/todo.service';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.loadAllTodos),
      switchMap(action =>
        this.todoService.getItems().pipe(
          map(todos => todoActions.loadAllTodosFinished({ payload: todos })),
          catchError(error => of(error))
        )
      )
    )
  );
}
```

## Adding Effects to the module

We have to add the effects to the module as well as we have to import the `StoreModule` and the `EffectsModule`.

Code from `todo.module.ts`

```typescript
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoEffects } from './store/todo.effects';

@NgModule({
  imports: [
    // ...
    StoreModule.forFeature(featureStateName, todoReducers),
    EffectsModule.forFeature([TodoEffects])
  ],
  exports: [],
  declarations: [...]
})
export class TodoModule {}
```

Code from the `app.module.ts`

```typescript
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    /*...*/
  ],
  imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Using the new action in the reducer

Now we are using the new action and the payload this time in the reducer and we can change the behaviour of the loading flag as well when the action `loadAllTodos` is finished.

```typescript
// ...

const todoReducerInternal = createReducer(
  initialState,

  on(todoActions.loadAllTodos, state => {
    return {
      ...state,
      loading: true
    };
  }),

  on(todoActions.loadAllTodosFinished, (state, { payload }) => ({
    ...state,
    loading: false,
    items: [...payload]
  }))
);

// ...
```

[https://stackblitz.com/edit/angular-sthqd2](https://stackblitz.com/edit/angular-sthqd2)

## Adding items over the NgRx Store

As you guessed it: We have to make two actions for this, we have to react to it in the store (reducer/effects) :)

Code of `todo.actions.ts`

```typescript
// ...

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ payload: string }>()
);
export const addTodoFinished = createAction(
  '[Todo] Add Todo Finished',
  props<{ payload: Todo }>()
);
```

Adding an effect for this:

Code from `todo.effects.ts`

```typescript
@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  // ...

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.addTodo),
      map(action => action.payload),
      switchMap(payload =>
        this.todoService.addItem(payload).pipe(
          map(todo => todoActions.addTodoFinished({ payload: todo })),
          catchError(error => of(error))
        )
      )
    )
  );
}
```

and react to it in the reducer:

Code from `todo.reducer.ts`

```typescript
const todoReducerInternal = createReducer(
  initialState,

  on(todoActions.loadAllTodos, todoActions.addTodo, state => {
    return {
      ...state,
      loading: true
    };
  }),

  // actions

  on(todoActions.addTodoFinished, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      items: [...state.items, payload]
    };
  })
);
```

and use it in the `ContentComponent`

```typescript
export class ContentComponent implements OnInit {
  // ...

  addTodo(item: string) {
    this.store.dispatch(todoActions.addTodo({ payload: item }));
  }
}
```

[https://stackblitz.com/edit/angular-xg6pss](https://stackblitz.com/edit/angular-xg6pss)

## Updating items with NgRx

First of all we have to add the actions.

Code of `todo.actions.ts`

```typescript
// ...
export const setAsDone = createAction(
  '[Todo] SetAsDone',
  props<{ payload: Todo }>()
);
export const setAsDoneFinished = createAction(
  '[Todo] SetAsDone Finished',
  props<{ payload: Todo }>()
);
// ...
```

Then we have to add the effect.

Code of `todo.effects.ts`

```typescript
@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  // ...

  markAsDone$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.setAsDone),
      map(action => action.payload),
      switchMap(payload =>
        this.todoService.updateItem(payload).pipe(
          map(todo => todoActions.setAsDoneFinished({ payload: todo })),
          catchError(error => of(error))
        )
      )
    )
  );
}
```

Adding the reducer to handle _both_ actions

```typescript
const todoReducerInternal = createReducer(
  initialState,

  on(
    todoActions.loadAllTodos,
    todoActions.addTodo,
    todoActions.setAsDone,
    state => {
      return {
        ...state,
        loading: true
      };
    }
  ),

  // ...

  on(todoActions.setAsDoneFinished, (state, { payload }) => {
    const index = state.items.findIndex(x => x.id === payload.id);
    const itemsClone = [...state.items];
    itemsClone[index] = payload;
    return {
      ...state,
      items: itemsClone
    };
  })
);
```

And finally trigger the action in the component:

Code of `content.component.ts`

```typescript
export class ContentComponent implements OnInit {
  ngOnInit() {
    // ...
  }

  // ...

  markAsDone(item: Todo) {
    this.store.dispatch(todoActions.setAsDone({ payload: item }));
  }
}
```

[https://stackblitz.com/edit/angular-g5z5y4](https://stackblitz.com/edit/angular-g5z5y4)

## Possible Lab

## Lab Add Get Single Item in the details component

Code of `todo.service.ts`

```typescript
export class TodoService {
  getItem(id: string) {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }
}
```

Code of `todo.actions.ts`

```typescript
export const loadSingleTodo = createAction(
  '[Todo] Load Single Todo',
  props<{ payload: string }>()
);
export const loadSingleTodoFinished = createAction(
  '[Todo] Load Single Todo Finished',
  props<{ payload: Todo }>()
);
```

Code of `todo.effects.ts`

```typescript
@Injectable()
export class TodoEffects {
  loadSingleTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.loadSingleTodo),
      map(action => action.payload),
      switchMap(payload =>
        this.todoService.getItem(payload).pipe(
          map(todo => todoActions.loadSingleTodoFinished({ payload: todo })),
          catchError(error => of(error))
        )
      )
    )
  );
}
```

Code of `todo.reducer.ts`

```typescript
const todoReducerInternal = createReducer(
  initialState,

  on(
    todoActions.loadAllTodos,
    todoActions.addTodo,
    todoActions.setAsDone,
    todoActions.loadSingleTodo,
    state => {
      return {
        ...state,
        loading: true
      };
    }
  ),

  on(todoActions.loadSingleTodoFinished, (state, { payload }) => ({
    ...state,
    loading: false,
    selectedItem: payload
  }))
);
```

Code of `todo.selector.ts`

```typescript
export const getSelectedItem = createSelector(
  fromReducer.getTodoState,
  (state: fromReducer.ReducerTodoState) => state.selectedItem
);
```

Code of `todo-detail.component.ts`

```typescript
import { select, Store } from '@ngrx/store';
import * as fromSelectors from '../../store/todo.selectors';
import * as todoActions from '../../store/todo.actions';

export class TodoDetailComponent implements OnInit {
  todo$: Observable<Todo>;

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.todo$ = this.store.pipe(select(fromSelectors.getSelectedItem));
    const id = this.route.snapshot.params.id;

    this.store.dispatch(todoActions.loadSingleTodo({ payload: id }));
  }
}
```

Watch the browser to see the result

## Lab Add Delete

Code of `todo.service.ts`

```typescript
export class TodoService {
  deleteItem(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
```

Code of `todo.actions.ts`

```typescript
export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ payload: string }>()
);
export const deleteTodoFinished = createAction(
  '[Todo] Delete Todo Finished',
  props<{ payload: string }>()
);
```

Code of `todo.effects.ts`

```typescript
@Injectable()
export class TodoEffects {
  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.deleteTodo),
      switchMap(({ payload }) =>
        this.todoService.deleteItem(payload).pipe(
          map(todo => todoActions.deleteTodoFinished({ payload })),
          catchError(error => of(error))
        )
      )
    )
  );

  deleteTodoFinished$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(todoActions.deleteTodoFinished),
        tap(() => this.router.navigate(['/todo']))
      ),
    { dispatch: false }
  );
}
```

Code of `todo.reducer.ts`

```typescript
const todoReducerInternal = createReducer(
  initialState,

  on(
    todoActions.loadAllTodos,
    todoActions.addTodo,
    todoActions.setAsDone,
    todoActions.loadSingleTodo,
    todoActions.deleteTodo,
    state => {
      return {
        ...state,
        loading: true
      };
    }
  ),

  on(todoActions.deleteTodoFinished, (state, { payload }) => {
    const items = state.items.filter(x => x.id !== payload);

    return {
      ...state,
      loading: false,
      items: [...items]
    };
  })
);
```

Code of `todo-detail.component.html`

```html
<pre *ngIf="todo$ | async as todo; else loading">
  {{ todo | json }}
</pre>

<button appConfirm (confirmed)="delete($event)">Delete</button>

<ng-template #loading>Loading...</ng-template>
```

Code of `todo-detail.component.ts`

```typescript
export class TodoDetailComponent implements OnInit {
  todo$: Observable<Todo>;

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  delete(result: boolean) {
    if (result) {
      this.store.dispatch(
        todoActions.deleteTodo({ payload: this.route.snapshot.params.id })
      );
    }
  }
}
```

[https://stackblitz.com/edit/angular-kl1jmz](https://stackblitz.com/edit/angular-kl1jmz)

## Adding a metareducer

meta.reducer.ts

```ts
import { ActionReducer, MetaReducer } from '@ngrx/store';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('[debug] current state', state);
    console.log('[debug] applying action', action);

    return reducer(state, action);
  };
}

// export function secondReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//   return (state, action) => {
//     console.log('[secondReducer] current state', state);
//     console.log('[secondReducer] applying action', action);

//     return reducer(state, action);
//   };
// }

export const metaReducers: MetaReducer<any>[] = [debug /*secondReducer*/];
```

app.module.ts

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([])
  ],
  bootstrap: []
})
export class AppModule {}
```

## Adding multiple reducers to a modulestate

Sometimes a module has mutliple things to do and needs multiple reducers. But they all should be available under this module. We can achieve that with the function `ActionReducerMap<T>`

Create a new file called `index.ts` underneath the `todo/store` folder. It is importable by only importing the folder `todo/store` (barrel pattern)

Code of `index.ts`

```typescript
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { ReducerTodoState, todoReducer } from './todo.reducer';

export const featureName = 'todo';

export interface TodoState {
  todo: ReducerTodoState;
}

export const todoReducers: ActionReducerMap<TodoState> = {
  todo: todoReducer
  // another reducer maybe???
};

export const getTodoState = createFeatureSelector<TodoState>(featureName);
```

So we added an additional level to the state object.

```json
{
  todo: { // featureName
    todo: {}  // name of the property in `ActionReducerMap`
      items: ...
      selectedItem: ...
      loading: ...
    },
    // ... anythingElse
  }
}
```

Now we can use the `todoReducers` in the module instead of the real reducer itself:

```typescript
import { todoReducers, featureName } from './store';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, todoReducers),
    EffectsModule.forFeature([TodoEffects])
  ],
  declarations: [ ... ]
})
export class TodoModule { }
```

As we now have one level more we have to modify our selectors like this

Code of `todo.selectors.ts`

```typescript
import * as fromTodoStore from '../store';
import { createSelector } from '@ngrx/store';

export const getAllUndoneItems = createSelector(
  fromTodoStore.getTodoState,
  (state: fromTodoStore.TodoState) => state.todo.items.filter(x => !x.done)
);

export const getAllDoneItems = createSelector(
  fromTodoStore.getTodoState,
  (state: fromTodoStore.TodoState) => state.todo.items.filter(x => x.done)
);

export const getSelectedItem = createSelector(
  fromTodoStore.getTodoState,
  (state: fromTodoStore.TodoState) => state.todo.selectedItem
);
```

[https://stackblitz.com/edit/angular-aipcue](https://stackblitz.com/edit/angular-aipcue)

> Now it would be time to introduce some namespaces/additional folders and use the barrel pattern more and more: If you have multiple reducers: add a `reducers` folder, etc.

We can even beautify this a bit to get a selector selecting the state for us:

Code of `todo.selectors.ts`

```typescript
import * as fromTodoStore from '../store';
import { createSelector } from '@ngrx/store';
import { ReducerTodoState } from './todo.reducer';

export const getReducerTodoState = createSelector(
  fromTodoStore.getTodoState,
  (state: fromTodoStore.TodoState) => state.todo
);

export const getAllUndoneItems = createSelector(
  getReducerTodoState,
  (state: ReducerTodoState) => state.items.filter(x => !x.done)
);

export const getAllDoneItems = createSelector(
  getReducerTodoState,
  (state: ReducerTodoState) => state.items.filter(x => x.done)
);

export const getSelectedItem = createSelector(
  getReducerTodoState,
  (state: ReducerTodoState) => state.selectedItem
);
```

## Using ngrx with a guard

The guard replaces the effect then!

Adding a new selector

```typescript
export const getAllItems = createSelector(
  fromTodoStore.getTodoState,
  (state: fromTodoStore.TodoState) => state.todo.items
);
```

Code of `todo-exists.guard.ts`

```typescript
@Injectable({
  providedIn: 'root'
})
export class TodoExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromTodoStore.TodoState>,
    private todoService: TodoService,
    private router: Router
  ) {}

  getItemFromStore(id: string): Observable<Todo> {
    return this.store.pipe(
      select(fromTodoStore.getAllItems),
      map(entities => entities.find(x => x.id === id))
    );
  }

  getItemFromApi(id: string): Observable<Todo> {
    return this.todoService.getItem(id).pipe(
      catchError(() => {
        this.router.navigate(['/404']);
        return of(null);
      })
    );
  }

  getItem(id: string): Observable<Todo> {
    return this.getItemFromStore(id).pipe(
      switchMap(itemFromStore => {
        if (itemFromStore) {
          console.log('item was in store already');
          return of(itemFromStore);
        }

        console.log('have to collect item from the api');
        return this.getItemFromApi(id);
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.getItem(route.params['id']).pipe(
      tap(item =>
        this.store.dispatch(loadSingleTodoFinished({ payload: item }))
      ),
      map(todo => !!todo)
    );
  }
}
```

Code of `todo.module.ts`

```ts
const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: ':id', component: TodoDetailComponent },
  {
    path: ':id',
    component: TodoDetailComponent,
    canActivate: [TodoExistsGuard]
  }
];
```

Now we can comment out (or delete) the `loadSingleTodo` from the `TodoDetailComponent`

Code of `todo-detail.component.ts`

```typescript
export class TodoDetailComponent implements OnInit {
  ngOnInit() {
    this.todo$ = this.store.pipe(select(fromSelectors.getSelectedItem));
    const id = this.route.snapshot.params.id;

    // this.store.dispatch(todoActions.loadSingleTodo({ payload: id }))
  }
}
```

[https://stackblitz.com/edit/angular-valjuw](https://stackblitz.com/edit/angular-valjuw)

## Memoization of selectors

Selectors are memoized 1 slot but we can modify that behaviour.

```cmd
npm install lodash
```

Now we are modifying the selectors as following

Code of `todo.selectors.ts`

```typescript
import * as fromTodoStore from '../store';
import {
  createSelector,
  createSelectorFactory,
  resultMemoize
} from '@ngrx/store';
import { isEqual as lodashEqual } from 'lodash';

function isEqual(a: any[], b: any[]): boolean {
  return lodashEqual(a, b);
}

const customMemoize = projFn => resultMemoize(projFn, isEqual);
const memoizedSelector = createSelectorFactory(customMemoize);

export const getAllItems = memoizedSelector(
  fromTodoStore.getTodoState,
  (state: fromTodoStore.TodoState) => state.todo.items
);

export const getAllUndoneItems = memoizedSelector(getAllItems, state =>
  state.filter(x => !x.done)
);

export const getAllDoneItems = memoizedSelector(getAllItems, state =>
  state.filter(x => x.done)
);

export const getSelectedItem = createSelector(
  fromTodoStore.getTodoState,
  (state: fromTodoStore.TodoState) => state.todo.selectedItem
);
```

Until here we modified the item set to done _directly_ which was a reference to the item in the store (optimistic). To have the stores differ we have to modify a copy of that and do it pessimistic. If the items comes back from the HTTP call - only then - we are updating it in the store, too.

Code of `todo-list.component.ts`

```typescript
export class TodoListComponent implements OnInit {
  // ...

  moveToDone(item: Todo) {
    const copy = { ...item };
    copy.done = true;
    this.markAsDone.emit(copy);
  }

  // ...
}
```

Now we can add a `tap(console.log)` in the `ContentComponent` to check when the selector is being called.

```typescript
export class ContentComponent implements OnInit {
  ngOnInit() {
    this.doneItems$ = this.store.pipe(
      select(fromSelectors.getAllDoneItems),
      tap(console.log)
    );
  }
}
```

When an item is added the selector is _not_ being called as the done items did not change - a new item is not done initially. If we add it to done, the selector is executed again.

[https://stackblitz.com/edit/angular-faytar](https://stackblitz.com/edit/angular-faytar)

> For the sake of simplicity we will remove those changes again to make our lifes a little easier. ;)

## Adding a facade

A facade is just a service which abstracts `NgRx` for us.

Add a new file called `todo.facade.ts`

```typescript
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as todoActions from './todo.actions';
import * as fromSelectors from './todo.selectors';
import { Todo } from '../../models/todo';

@Injectable({ providedIn: 'root' })
export class TodoStoreFacade {
  items$ = this.store.pipe(select(fromSelectors.getAllUndoneItems));
  doneItems$ = this.store.pipe(select(fromSelectors.getAllDoneItems));

  constructor(private store: Store<any>) {}

  loadAllItems() {
    this.store.dispatch(todoActions.loadAllTodos());
  }

  addTodo(item: string) {
    this.store.dispatch(todoActions.addTodo({ payload: item }));
  }

  markAsDone(item: Todo) {
    this.store.dispatch(todoActions.setAsDone({ payload: item }));
  }
}
```

inject that in the component and delete all ngrx relations

```typescript
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../core/services/todo.service';
import { Todo } from '../../../models/todo';
import { Observable } from 'rxjs';
import { TodoStoreFacade } from '../../store/todo.facade';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  items$: Observable<Todo[]>;
  doneItems$: Observable<Todo[]>;

  constructor(private facade: TodoStoreFacade) {}

  ngOnInit() {
    this.items$ = this.facade.items$;
    this.doneItems$ = this.facade.doneItems$;

    this.facade.loadAllItems();
  }

  addTodo(item: string) {
    this.facade.addTodo(item);
  }

  markAsDone(item: Todo) {
    this.facade.markAsDone(item);
  }
}
```

[https://stackblitz.com/edit/angular-r3v5mc](https://stackblitz.com/edit/angular-r3v5mc)

## Testing of components with a store

## Testing of a store
