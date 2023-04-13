import {Component} from '@angular/core';
import {HelloWidgetComponent} from './hello-widget/hello-widget.component';

@Component({
  selector: 'acamp-template2',
  standalone: true,
  imports: [HelloWidgetComponent],
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss']
})
export class Template2Component {}
