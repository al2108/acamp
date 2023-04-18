import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[acampHighlight]',
  standalone: true
})
export class HighlightDirective {
  public constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
