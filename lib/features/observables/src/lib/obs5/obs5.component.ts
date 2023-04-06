import {Result} from '@acamp/lib/shared/tools';
import {CommonModule} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit, inject} from '@angular/core';
import {Obs5Service, TodoList} from './obs5.service';

@Component({
  selector: 'acamp-obs5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs5.component.html',
  styleUrls: ['./obs5.component.scss'],
})
export class Obs5Component implements OnInit {
  public todos: TodoList;
  private obsService = inject(Obs5Service);

  public constructor() {
    this.todos = [];
  }

  public async ngOnInit(): Promise<void> {
    let result: Result<TodoList, HttpErrorResponse>;
    result = await this.obsService.getTodos();
    if (result.isOk()) {
      this.todos = result.getValue();
    } else {
      console.error('Error getting first Todos!', result.getError());
    }

    result = await this.obsService.getTodosError();
    if (result.isOk()) {
      this.todos = result.getValue();
    } else {
      console.error('Error getting second Todos!', result.getError());
    }
  }
}
