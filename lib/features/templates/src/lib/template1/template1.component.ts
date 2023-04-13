import {Component} from '@angular/core';
import {HelloWidgetComponent} from './hello-widget/hello-widget.component';

@Component({
  selector: 'acamp-template1',
  standalone: true,
  imports: [HelloWidgetComponent],
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component {}
