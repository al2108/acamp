import {Result} from '@acamp/lib/shared/tools';
import {CommonModule} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit, inject} from '@angular/core';
import {Obs7Service, TodoList} from './obs7.service';

@Component({
  selector: 'acamp-obs7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs7.component.html',
  styleUrls: ['./obs7.component.scss']
})
export class Obs7Component implements OnInit {
  public todos: TodoList;
  private obsService = inject(Obs7Service);

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
