import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Obs1Service {
  public constructor(private http: HttpClient) {}

  public getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
