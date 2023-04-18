import {Component} from '@angular/core';
import {HighlightDirective} from '../highlight.directive';

@Component({
  selector: 'acamp-directive2',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './directive1.component.html',
  styleUrls: ['./directive1.component.scss']
})
export class Directive1Component {}
