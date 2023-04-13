import {FormGroupLoggerComponent} from '@acamp/lib/shared/ui';
import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'acamp-dialog3',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormGroupLoggerComponent],
  templateUrl: './dialog3.component.html',
  styleUrls: ['./dialog3.component.scss']
})
export class Dialog3Component implements OnInit {
  public dialogFormGroup!: ReturnType<typeof this.createFormGroup>;

  public ngOnInit(): void {
    this.dialogFormGroup = this.createFormGroup();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private createFormGroup() {
    const formGroup = new FormGroup({
      firstName: new FormControl('initial Value', {nonNullable: true}),
      lastName: new FormControl(''),
      age: new FormControl(10, {nonNullable: true})
    });
    return formGroup;
  }

  public onResetRequest(): void {
    this.dialogFormGroup.reset();
  }
}
