import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Obs1Service {
  public constructor(private http: HttpClient) {}

  public getTodos(): unknown {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
