import {SubscriptionSink} from '@acamp/lib/shared/tools';
import {DialogFieldSetColsComponent, FormGroupLoggerComponent} from '@acamp/lib/shared/ui';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

// We dynamically create a type for our FormGroup, the type changes
// automatically when we add more elements to our form
type FormGroupType = ReturnType<Dialog6Component['createFormGroup']>;

@Component({
  selector: 'acamp-dialog6',
  standalone: true,
  imports: [ReactiveFormsModule, FormGroupLoggerComponent, DialogFieldSetColsComponent],
  templateUrl: './dialog6.component.html',
  styleUrls: ['./dialog6.component.scss']
})
export class Dialog6Component implements OnInit, OnDestroy {
  public dialogFormGroup!: FormGroupType;
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
  // FormGroupType is inferred from the result type of this method
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createFormGroup() {
    return new FormGroup({
      price: this.createPriceFormGroup(),
      name: this.createNameFormGroup(),
      address: this.createAddressFormGroup()
    });
  }

  // see comment above about the return type
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createPriceFormGroup() {
    return new FormGroup({
      dePrice: new FormControl('', {nonNullable: true}),
      usPrice: new FormControl('', {nonNullable: true})
    });
  }

  // see comment above about the return type
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createAddressFormGroup() {
    return new FormGroup({
      street: new FormControl('', {nonNullable: true}),
      city: new FormControl('', {nonNullable: true})
    });
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createNameFormGroup() {
    return new FormGroup({
      firstName: new FormControl('', {nonNullable: true}),
      lastName: new FormControl('', {nonNullable: true})
    });
  }

  public onResetRequest(): void {
    this.dialogFormGroup.reset();
  }
}
