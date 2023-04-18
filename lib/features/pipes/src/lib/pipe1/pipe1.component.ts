import {Component} from '@angular/core';
import {FillLeft} from '../fill-left.pipe';

@Component({
  selector: 'acamp-pipe2',
  standalone: true,
  imports: [FillLeft],
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.scss']
})
export class Pipe1Component {}
