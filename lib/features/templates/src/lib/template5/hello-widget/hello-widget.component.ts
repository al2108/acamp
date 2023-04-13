import {NgTemplateOutlet} from '@angular/common';
import {Component, Input, OnInit, TemplateRef} from '@angular/core';

export interface HelloContext {
  name: string;
  age: number;
}

@Component({
  selector: 'acamp-hello-widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './hello-widget.component.html',
  styleUrls: ['./hello-widget.component.scss']
})
export class HelloWidgetComponent implements OnInit {
  @Input() public greetingTemplate!: TemplateRef<HelloContext>;
  public userData!: HelloContext;

  public ngOnInit(): void {
    // eventually after a service call:
    setTimeout(() => {
      this.userData = {
        name: 'Mary',
        age: 43
      };
    }, 2000);
  }
}
