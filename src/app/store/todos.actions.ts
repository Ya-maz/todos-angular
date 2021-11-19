import { createAction, props } from '@ngrx/store';
import { todoState } from './todos.reducer';

export const enum ActionEnum {
  ADD_POST_TODO = 'ADD_POST_TODO',
  ADD_POST_TODO_SUCCCESS = 'ADD_POST_TODO_SUCCESS',
  DELETE_POST_TODO = 'DELETE_POST_TODO',
  DELETE_POST_TODO_SUCCCESS = 'DELETE_POST_TODO_SUCCESS',
  LOADING = 'LOADING',
  LOAD_SUCCESS = 'LOAD_SUCCESS',
}

export const addTodo = createAction(
  ActionEnum.ADD_POST_TODO,
  props<{ todo: todoState }>()
);
export const addTodoSuccess = createAction(
  ActionEnum.ADD_POST_TODO_SUCCCESS,
  props<{ resTodo: todoState }>()
);
export const deleteTodo = createAction(
  ActionEnum.DELETE_POST_TODO,
  props<{ id: number }>()
);
export const deleteTodoSuccess = createAction(
  ActionEnum.DELETE_POST_TODO_SUCCCESS,
  props<{ id: number }>()
);

export const loading = createAction(ActionEnum.LOADING);
export const loadSuccess = createAction(
  ActionEnum.LOAD_SUCCESS,
  props<{ todos: todoState[] }>()
);
