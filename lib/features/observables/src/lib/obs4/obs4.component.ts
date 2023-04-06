import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {Obs4Service, TodoList} from './obs4.service';

@Component({
  selector: 'acamp-obs4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs4.component.html',
  styleUrls: ['./obs4.component.scss'],
})
export class Obs4Component implements OnInit {
  public todos: TodoList;

  public constructor(private obsService: Obs4Service) {
    this.todos = [];
  }

  public async ngOnInit(): Promise<void> {
    try {
      this.todos = await this.obsService.getTodos();
      this.todos = await this.obsService.getTodosError();
    } catch (err) {
      console.error('Try-Catch -> Error Todos not found');
    }
  }
}
