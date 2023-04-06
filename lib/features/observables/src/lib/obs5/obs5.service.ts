import {Result} from '@acamp/lib/shared/tools';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
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
export class Obs5Service {
  public constructor(private http: HttpClient) {}

  public async getTodos(): Promise<Result<TodoList, HttpErrorResponse>> {
    try {
      return Result.ok(await firstValueFrom(this.http.get<TodoList>('https://jsonplaceholder.typicode.com/todos')));
    } catch (err) {
      return Result.err(err as HttpErrorResponse);
    }
  }

  public async getTodosError(): Promise<Result<TodoList, HttpErrorResponse>> {
    try {
      return Result.ok(await firstValueFrom(this.http.get<TodoList>('https://wrongurl/todos')));
    } catch (err) {
      return Result.err(err as HttpErrorResponse);
    }
  }
}
