import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todoState } from '../store/todos.reducer';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  constructor(private http: HttpClient) {}

  // addTodo$(todo: todoState): Observable<{ id: number }> {
  //   return this.http.post<{ id: number }>(
  //     'https://jsonplaceholder.typicode.com/todos/',
  //     JSON.stringify(todo)
  //   );
  // }

  addTodo$(todo: todoState): Observable<{ id: number }> {
    return this.http.patch<{ id: number }>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      JSON.stringify(todo)
    );
  }

  deletePost(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
