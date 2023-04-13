import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'acamp-hello-widget',
  standalone: true,
  imports: [],
  templateUrl: './hello-widget.component.html',
  styleUrls: ['./hello-widget.component.scss']
})
export class HelloWidgetComponent implements AfterViewInit {
  @ViewChild('greetingContainer', {read: ViewContainerRef}) private greetingContainer!: ViewContainerRef;
  @ViewChild('defaultGreetingTemplate') private defaultGreeting!: TemplateRef<unknown>;

  public ngAfterViewInit(): void {
    this.greetingContainer.createEmbeddedView(this.defaultGreeting);
  }
}
