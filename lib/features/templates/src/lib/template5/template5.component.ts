import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {HelloWidgetComponent} from './hello-widget/hello-widget.component';

@Component({
  selector: 'acamp-template5',
  standalone: true,
  imports: [HelloWidgetComponent, NgIf],
  templateUrl: './template5.component.html',
  styleUrls: ['./template5.component.scss']
})
export class Template5Component {}
