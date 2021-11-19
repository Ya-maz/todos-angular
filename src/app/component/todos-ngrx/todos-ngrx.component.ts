import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { TODO } from 'src/app/models/todo-ngrx';
import { addTodo, deleteTodo } from 'src/app/store/todos.actions';
import { todoState } from 'src/app/store/todos.reducer';
import { state } from 'src/app/store/todos.selectors';

@Component({
  selector: 'app-todos-ngrx',
  templateUrl: './todos-ngrx.component.html',
  styleUrls: ['./todos-ngrx.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate(300, style({ opacity: 1, transform: 'translateX(0px)' })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0, transform: 'translateX(30px)' })),
      ]),
    ]),
  ],
})
export class TodosNGRXComponent implements OnInit {
  todos: TODO[] = [];
  todoTitle: string = '';
  idForTodo: number = 5;
  userId: number = 0;
  state$ = this.store$.select(state);

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.state$.subscribe({
      next: (v) => (this.todos = [...v]),
      complete: () => console.log('complete'),
    });
  }
  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    const todo: todoState = {
      userId: this.userId,
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
    };
    // _______store______
    this.store$.dispatch(addTodo({ todo }));
    this.todoTitle = '';
    this.idForTodo++;
  }

  deleteTodo({ id }: { id: number }): void {
    // _______store______
    this.store$.dispatch(deleteTodo({ id: id }));
  }

  remaining(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }
}
