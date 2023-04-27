import {Component, Input} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import {OnChangeCallback, OnTouchedCallback} from '@acamp/lib/shared/tools';

@Component({
  selector: 'acamp-quantity-chooser',
  standalone: true,
  imports: [],
  templateUrl: './quantity-chooser.component.html',
  styleUrls: ['./quantity-chooser.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: QuantityChooserComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: QuantityChooserComponent
    }
  ]
})
export class QuantityChooserComponent implements ControlValueAccessor, Validator {
  @Input() public increment!: number;
  public quantity = 0;
  public touched = false;
  public disabled = false;
  public onChange!: OnChangeCallback<number>;
  public onTouched!: OnTouchedCallback;

  public onAdd(): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }

  public onRemove(): void {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }

  /* ======================================================================================
   * Control Value Accessor interface implementation
   * ====================================================================================== */

  public writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  public registerOnChange(onChange: OnChangeCallback<number>): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: OnTouchedCallback): void {
    this.onTouched = onTouched;
  }

  public markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  /* ======================================================================================
   * Validator interface implementation
   * ====================================================================================== */

  public validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity
        }
      };
    }
    return null;
  }
}
