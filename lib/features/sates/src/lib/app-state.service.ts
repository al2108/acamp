import {TodoList} from '@acamp/lib/shared/data';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface AppState {
  lastLoaded: Date;
  todos: TodoList;
}

export type AppStateNullable = AppState | null;
export type AppStateObservable = Observable<AppStateNullable>;

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private appState: BehaviorSubject<AppStateNullable>;

  public constructor() {
    console.log('constructing AppStateService...');
    this.appState = new BehaviorSubject<AppStateNullable>(null);
    console.log('constructing AppStateService done.');
  }

  public getStateObservable(): AppStateObservable {
    return this.appState.asObservable();
  }

  public setState(newState: AppStateNullable): void {
    this.appState.next(newState);
  }
}
