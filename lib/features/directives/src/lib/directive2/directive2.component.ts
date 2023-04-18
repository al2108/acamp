import {Component} from '@angular/core';
import {ExtendedHighlightDirective} from '../extended-highlight.directive';

@Component({
  selector: 'acamp-directive2',
  standalone: true,
  imports: [ExtendedHighlightDirective],
  templateUrl: './directive2.component.html',
  styleUrls: ['./directive2.component.scss']
})
export class Directive2Component {}
