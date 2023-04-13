import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Obs2Service {
  public constructor(private http: HttpClient) {}

  public getTodos(): Observable<unknown> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
