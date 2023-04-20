import {inject} from '@angular/core';
import {AppStateObservable, AppStateService} from './app-state.service';
import {TodoList, todoListSchema} from '@acamp/lib/shared/data';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

export abstract class BaseState {
  protected appStateService: AppStateService;
  protected http: HttpClient;
  protected appState$: AppStateObservable;

  // What is here wrong?
  protected constructor() {
    this.appStateService = inject(AppStateService);
    this.http = inject(HttpClient);
    this.appState$ = this.appStateService.getStateObservable();
    setInterval(async () => this.readTodos(), 5000);
  }

  // Must not be here, must be in an TodoService somewhere in shared functional logic
  // Just an example for the state management and multiple inject() in constructor
  // No error handling just to keep it short
  public async readTodos(): Promise<void> {
    console.log('reading todos...');
    try {
      const todos = await firstValueFrom(this.http.get<TodoList>('https://jsonplaceholder.typicode.com/todos'));
      const parsedTodos = todoListSchema.parse(todos);
      this.appStateService.setState({lastLoaded: new Date(), todos: parsedTodos});
    } catch (err) {
      this.appStateService.setState(null);
    }
  }
}
