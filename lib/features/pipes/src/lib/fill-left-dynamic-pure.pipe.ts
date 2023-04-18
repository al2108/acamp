import {Pipe, PipeTransform} from '@angular/core';
import {FillLeft} from './fill-left.pipe';

@Pipe({
  name: 'FillLeftDynamicPure',
  standalone: true,
  pure: true
})
export class FillLeftDynamicPure extends FillLeft implements PipeTransform {
  private fillChar: string;

  public constructor() {
    super();
    this.fillChar = 'A';
    setInterval(() => {
      this.fillChar = String.fromCharCode(this.fillChar.charCodeAt(0) + 1);
    }, 5000);
  }

  public override transform(value: number, length: number = 6, fillChar: string = this.fillChar): string {
    return super.transform(value, length, fillChar);
  }
}
