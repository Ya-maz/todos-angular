import { Action, createReducer, on } from '@ngrx/store';
import { TODO } from '../models/todo-ngrx';
import { addTodoSuccess, deleteTodoSuccess } from './todos.actions';

export interface todoState {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const initialState: todoState[] = [
  new TODO('Understand the code', 1, 0),
  new TODO('Complete pet project "todos"', 2, 0),
  new TODO('Upload to github', 3, 0),
  new TODO('Read a book about Angular', 4, 0),
];

export const todoReducer = createReducer(
  initialState,
  on(addTodoSuccess, (state, { resTodo }) => {
    return [...state, resTodo];
  }),
  on(deleteTodoSuccess, (state, { id }) => {
    return [...state].filter((todo) => todo.id !== id);
  })
);

export function reducer(state: todoState[] | undefined, action: Action) {
  return todoReducer(state, action);
}
