import {Component} from '@angular/core';
import {HelloWidgetComponent} from './hello-widget/hello-widget.component';

@Component({
  selector: 'acamp-template5',
  standalone: true,
  imports: [HelloWidgetComponent],
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.scss']
})
export class Template3Component {}
