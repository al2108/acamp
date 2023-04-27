import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FormGroupLoggerComponent, SpecialInputComponent, SpecialInputConfig} from '@acamp/lib/shared/ui';

type FormGroupType = ReturnType<Dialog9Component['createFormGroup']>;

@Component({
  selector: 'acamp-dialog9',
  standalone: true,
  imports: [ReactiveFormsModule, SpecialInputComponent, FormGroupLoggerComponent],
  templateUrl: './dialog9.component.html',
  styleUrls: ['./dialog9.component.scss']
})
export class Dialog9Component implements OnInit {
  public dialogFormGroup!: FormGroupType;
  public input1Config: SpecialInputConfig;
  public input2Config: SpecialInputConfig;

  public constructor() {
    this.input1Config = {
      label: null,
      numbersOnly: false,
      maxLength: 10
    };
    this.input2Config = {...this.input1Config, label: 'Input-2'};
  }

  public ngOnInit(): void {
    this.dialogFormGroup = this.createFormGroup();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createFormGroup() {
    return new FormGroup({
      input1: new FormControl(),
      input2: new FormControl()
    });
  }

  public onResetRequest(): void {
    this.dialogFormGroup.reset();
  }
}
