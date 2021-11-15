import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { typeTodo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit(): void{}
//   public title:string  = '';
//   public todoList: typeTodo[] = [];

//   constructor(private httpClient: HttpClient) {
//     this.httpClient = httpClient;
//   }

//   ngOnInit(): void {
//     this.httpClient.get<typeTodo[]>("https://jsonplaceholder.typicode.com/todos")
//       .subscribe((todoList: typeTodo[]) =>this.todoList = todoList)
//   }

//   onCreate(): void {
//     console.log(this.title)
//     if (this.title) {
//       this.httpClient.post<typeTodo>(
//         "https://jsonplaceholder.typicode.com/todos",
//         JSON.stringify(      {
//           userId: 1,
//           id: 3,
//           title: this.title,
//           completed: false

//         })
//       ).subscribe((todo: typeTodo) => {
//         this.todoList.push(todo)
//         console.log(todo);
//         console.log(this.todoList)
//       })
//     }
//   }
}
