import {Component, OnInit} from '@angular/core';
import {FormGroupLoggerComponent, QuantityChooserComponent} from '@acamp/lib/shared/ui';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe, NgIf} from '@angular/common';

type FormGroupType = ReturnType<Dialog10Component['createFormGroup']>;

@Component({
  selector: 'acamp-dialog10',
  standalone: true,
  imports: [NgIf, JsonPipe, ReactiveFormsModule, QuantityChooserComponent, FormGroupLoggerComponent],
  templateUrl: './dialog10.component.html',
  styleUrls: ['./dialog10.component.scss']
})
export class Dialog10Component implements OnInit {
  public dialogFormGroup!: FormGroupType;

  public ngOnInit(): void {
    this.dialogFormGroup = this.createFormGroup();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createFormGroup() {
    return new FormGroup({
      quantity: new FormControl(60, [Validators.required, Validators.max(100)])
    });
  }

  public onResetRequest(): void {
    this.dialogFormGroup.reset();
  }
}
