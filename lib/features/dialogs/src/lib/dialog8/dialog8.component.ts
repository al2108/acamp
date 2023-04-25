import {SubscriptionSink} from '@acamp/lib/shared/tools';
import {DialogFieldSetContainerComponent, FormGroupLoggerComponent} from '@acamp/lib/shared/ui';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

type CurrencyPosition = 'prefix' | 'suffix';

// We dynymically create a type for our FormGroup, the type changes
// automatically when we add more elements to our form
type FormGroupType = ReturnType<Dialog8Component['createFormGroup']>;

interface LocaleSettings {
  decimal: string;
  thousand: string;
  priceDecimals: number;
  currencySymbol: string;
  currencyPosition: CurrencyPosition;
}

@Component({
  selector: 'acamp-dialog8',
  standalone: true,
  imports: [ReactiveFormsModule, FormGroupLoggerComponent, DialogFieldSetContainerComponent],
  templateUrl: './dialog8.component.html',
  styleUrls: ['./dialog8.component.scss']
})
export class Dialog8Component implements OnInit, OnDestroy {
  public dialogFormGroup!: FormGroupType;
  public deLocaleSettings!: LocaleSettings;
  public usLocaleSettings!: LocaleSettings;
  private subscriptions: SubscriptionSink;

  public constructor() {
    this.subscriptions = new SubscriptionSink();
  }

  public ngOnInit(): void {
    this.dialogFormGroup = this.createFormGroup();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // We can't give this method a concrete type (see above FormGroupType)
  // FormGroupType is infered from the result type of this method
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createFormGroup() {
    const formGroup = new FormGroup({
      price: this.createPriceFormGroup(),
      name: this.createNameFormGroup(),
      address: this.createAddressFormGroup()
    });
    return formGroup;
  }

  // see comment above about the return type
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createPriceFormGroup() {
    const formGroup = new FormGroup({
      dePrice: new FormControl('', {nonNullable: true}),
      usPrice: new FormControl('', {nonNullable: true})
    });
    return formGroup;
  }

  // see comment above about the return type
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createAddressFormGroup() {
    const formGroup = new FormGroup({
      street: new FormControl('', {nonNullable: true}),
      city: new FormControl('', {nonNullable: true})
    });
    return formGroup;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createNameFormGroup() {
    const formGroup = new FormGroup({
      firstName: new FormControl('', {nonNullable: true}),
      lastName: new FormControl('', {nonNullable: true})
    });
    return formGroup;
  }

  public onResetRequest(): void {
    this.dialogFormGroup.reset();
  }
}