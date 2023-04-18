import {Component} from '@angular/core';
import {FillLeftDynamicImpure} from '../fill-left-dynamic-impure.pipe';
import {FillLeftDynamicPure} from '../fill-left-dynamic-pure.pipe';

@Component({
  selector: 'acamp-pipe2',
  standalone: true,
  imports: [FillLeftDynamicPure, FillLeftDynamicImpure],
  templateUrl: './pipe2.component.html',
  styleUrls: ['./pipe2.component.scss']
})
export class Pipe2Component {}
