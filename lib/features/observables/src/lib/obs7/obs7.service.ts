import {Result} from '@acamp/lib/shared/tools';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {firstValueFrom} from 'rxjs';
import {z} from 'zod';

const todoSchema = z
  .object({
    userId: z.number().min(1).max(10),
    id: z.number().min(1).max(200),
    title: z.string(),
    completed: z.boolean(),
    readTimestamp: z.date().default(new Date('1900-01-01')),
    userName: z.string().default('')
  })
  .transform(todo => {
    const transfomedTodo = {...todo};
    transfomedTodo.readTimestamp = new Date();
    transfomedTodo.userName = 'User ' + todo.userId;
    return transfomedTodo;
  });

const todoListSchema = z.array(todoSchema);

export type Todo = z.infer<typeof todoSchema>;
export type TodoList = z.infer<typeof todoListSchema>;

@Injectable({
  providedIn: 'root'
})
export class Obs7Service {
  public constructor(private http: HttpClient) {}

  public async getTodos(): Promise<Result<TodoList, HttpErrorResponse>> {
    try {
      const todos = await firstValueFrom(this.http.get<TodoList>('https://jsonplaceholder.typicode.com/todos'));
      const parsedTodos = todoListSchema.parse(todos);
      return Result.ok(parsedTodos);
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
