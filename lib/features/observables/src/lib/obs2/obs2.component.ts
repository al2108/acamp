import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Obs2Service} from './obs2.service';

@Component({
  selector: 'acamp-obs2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs2.component.html',
  styleUrls: ['./obs2.component.scss'],
})
export class Obs2Component implements OnInit {
  public todos: any;

  public constructor(private obsService: Obs2Service) {}

  public ngOnInit(): void {
    this.obsService.getTodos().subscribe(data => (this.todos = data));
  }
}
