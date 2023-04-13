import {Component} from '@angular/core';
import {HelloWidgetComponent} from './hello-widget/hello-widget.component';

@Component({
  selector: 'acamp-template5',
  standalone: true,
  imports: [HelloWidgetComponent],
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.scss']
})
export class Template4Component {}
