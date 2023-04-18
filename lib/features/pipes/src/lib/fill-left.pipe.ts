import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'FillLeft',
  standalone: true,
  pure: true
})
export class FillLeft implements PipeTransform {
  public transform(value: number, length: number = 6, fillChar: string = ' '): string {
    const filler = fillChar.repeat(length);
    return (filler + value).slice(-length);
  }
}
