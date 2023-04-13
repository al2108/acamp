import {JsonPipe} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {Obs1Service} from './obs1.service';

@Component({
  selector: 'acamp-obs1',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.scss']
})
export class Obs1Component implements OnInit {
  public todos: unknown;

  public constructor(private obsService: Obs1Service) {}

  public ngOnInit(): void {
    this.todos = this.obsService.getTodos();
  }
}
