import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {Obs3Service, TodoList} from './obs3.service';

@Component({
  selector: 'acamp-obs3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs3.component.html',
  styleUrls: ['./obs3.component.scss'],
})
export class Obs3Component implements OnInit {
  public todos: TodoList;

  public constructor(private obsService: Obs3Service) {
    this.todos = [];
  }

  public ngOnInit(): void {
    try {
      this.obsService.getTodos().then((data: TodoList) => (this.todos = data));
      this.obsService.getTodosError().then((data: TodoList) => (this.todos = data));
      this.obsService
        .getTodosError()
        .then((data: TodoList) => (this.todos = data))
        .catch(err => console.error('then().catch() -> Error Todos not found'));
    } catch (err) {
      console.error('Try-Catch -> Error Todos not found');
    }
  }
}
