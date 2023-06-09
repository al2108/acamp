import {SubscriptionSink} from '@acamp/lib/shared/tools';
import {FormGroupLoggerComponent} from '@acamp/lib/shared/ui';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgxMaskDirective} from 'ngx-mask';

type CurrencyPosition = 'prefix' | 'suffix';

// We dynamically create a type for our FormGroup, the type changes
// automatically when we add more elements to our form
type FormGroupType = ReturnType<Dialog4Component['createFormGroup']>;

interface LocaleSettings {
  decimal: string;
  thousand: string;
  priceDecimals: number;
  currencySymbol: string;
  currencyPosition: CurrencyPosition;
}

@Component({
  selector: 'acamp-dialog4',
  standalone: true,
  imports: [ReactiveFormsModule, FormGroupLoggerComponent, NgxMaskDirective],
  templateUrl: './dialog4.component.html',
  styleUrls: ['./dialog4.component.scss']
})
export class Dialog4Component implements OnInit, OnDestroy {
  public dialogFormGroup!: FormGroupType;
  public deLocaleSettings!: LocaleSettings;
  public usLocaleSettings!: LocaleSettings;
  private subscriptions: SubscriptionSink;

  public constructor() {
    this.subscriptions = new SubscriptionSink();
  }

  public ngOnInit(): void {
    this.setupLocales(); // Get it from the global app state service!
    this.dialogFormGroup = this.createFormGroup();
    //    this.dialogFormGroup = this.enhanceFormGroup(this.dialogFormGroup);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // We can't give this method a concrete type (see above FormGroupType)
  // FormGroupType is inferred from the result type of this method
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createFormGroup() {
    return new FormGroup({
      dePrice: new FormControl('', {nonNullable: true}),
      usPrice: new FormControl('', {nonNullable: true}),
      phone: new FormControl('', {nonNullable: true})
    });
  }

  public onResetRequest(): void {
    this.dialogFormGroup.reset();
  }

  private setupLocales(): void {
    this.deLocaleSettings = {
      decimal: ',',
      thousand: '.',
      priceDecimals: 3,
      currencySymbol: '€',
      currencyPosition: 'suffix'
    }; // Get it from the global app state service!
    this.usLocaleSettings = {
      decimal: '.',
      thousand: ',',
      priceDecimals: 2,
      currencySymbol: '$',
      currencyPosition: 'prefix'
    };
  }
}
