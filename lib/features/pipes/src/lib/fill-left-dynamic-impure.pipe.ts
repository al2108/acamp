import {Pipe, PipeTransform} from '@angular/core';
import {FillLeftDynamicPure} from './fill-left-dynamic-pure.pipe';

@Pipe({
  name: 'FillLeftDynamicImpure',
  standalone: true,
  pure: false
})
export class FillLeftDynamicImpure extends FillLeftDynamicPure implements PipeTransform {
  public override transform(value: number, length?: number, fillChar?: string): string {
    return super.transform(value, length, fillChar);
  }
}
