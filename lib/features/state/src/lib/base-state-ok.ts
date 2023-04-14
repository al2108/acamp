import {Directive, OnDestroy, inject} from '@angular/core';
import {AppStateObservable, AppStateService} from './app-state.service';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {SubscriptionSink} from '@acamp/lib/shared/tools';
import {TodoList, todoListSchema} from '@acamp/lib/shared/data';

// Why this?
@Directive()
export abstract class BaseStateOk implements OnDestroy {
  protected appStateService: AppStateService;
  protected http: HttpClient;
  protected appState$: AppStateObservable;
  protected subscriptions: SubscriptionSink;

  protected constructor() {
    this.appStateService = inject(AppStateService);
    this.http = inject(HttpClient);
    this.appState$ = this.appStateService.getStateObservable();
    this.subscriptions = new SubscriptionSink();
    setInterval(async () => this.readTodos(), 5000);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
