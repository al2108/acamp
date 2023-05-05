import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[acampExtendedHighlight]',
  standalone: true
})
export class ExtendedHighlightDirective {
  public constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.highlight('');
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
