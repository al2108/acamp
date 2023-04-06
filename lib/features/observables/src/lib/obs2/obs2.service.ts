import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Obs2Service {
  public constructor(private http: HttpClient) {}

  public getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
