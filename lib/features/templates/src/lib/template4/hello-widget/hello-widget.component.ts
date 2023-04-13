import {NgTemplateOutlet} from '@angular/common';
import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'acamp-hello-widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './hello-widget.component.html',
  styleUrls: ['./hello-widget.component.scss']
})
export class HelloWidgetComponent {
  @Input() public greetingTemplate!: TemplateRef<unknown>;
}
