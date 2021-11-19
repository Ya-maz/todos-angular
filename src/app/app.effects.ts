import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs';
import { TodoServiceService } from './servises/todo-service.service';
import {
  addTodoSuccess,
  addTodo,
  deleteTodo,
  deleteTodoSuccess,
} from './store/todos.actions';
import { todoState } from './store/todos.reducer';

@Injectable()
export class AppEffects {
  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      // mergeMap
      //exhaustMap
      mergeMap((action) =>
        this.service.addTodo$(action.todo).pipe(
          map((data) => {
            const resTodo: todoState = { ...action.todo, id: data.id };
            return addTodoSuccess({ resTodo });
          })
        )
      )
    )
  );
  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      switchMap((action) => {
        return this.service
          .deletePost(action.id)
          .pipe(map(() => deleteTodoSuccess({ id: action.id })));
      })
    )
  );

  constructor(private actions$: Actions, private service: TodoServiceService) {}
}
