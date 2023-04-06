import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firstValueFrom} from 'rxjs';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TodoList = Array<Todo>;

@Injectable({
  providedIn: 'root',
})
export class Obs3Service {
  public constructor(private http: HttpClient) {}

  public async getTodos(): Promise<TodoList> {
    return firstValueFrom(this.http.get<TodoList>('https://jsonplaceholder.typicode.com/todos'));
  }

  public async getTodosError(): Promise<TodoList> {
    return firstValueFrom(this.http.get<TodoList>('https://wrongurl/todos'));
  }
}
