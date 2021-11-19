import { animate, transition, trigger, style } from '@angular/animations';
import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TODO } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
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
export class TodosComponent implements OnInit {
  todos: TODO[] = [];
  todoTitle: string = '';
  idForTodo: number = 5;
  beforeEditCache: string = '';
  filter: string = 'all';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      new TODO('Understand the code', 1),
      new TODO('Complete pet project "todos"', 2),
      new TODO('Upload to github', 3),
      new TODO('Read a book about Angular', 4),
    ];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    this.todos.push(new TODO(this.todoTitle, this.idForTodo));
    this.todoTitle = '';
    this.idForTodo++;
  }

  editTodo(todo: TODO): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }
  doneEdit(todo: TODO): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  cancelEdit(todo: TODO): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  checkAllTodos({ target }: any): void {
    this.todos.forEach(
      (todo) => (todo.completed = (target as HTMLInputElement).checked)
    );
  }

  todosFiltered(): TODO[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter((todo) => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter((todo) => todo.completed);
    }
    return this.todos;
  }
}
