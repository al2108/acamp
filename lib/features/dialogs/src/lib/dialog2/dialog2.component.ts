import {FormGroupLoggerComponent} from '@acamp/lib/shared/ui';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

interface UserForm {
  firstName: FormControl<string>;
  lastName: FormControl<string | null>;
  age: FormControl<number>;
}

@Component({
  selector: 'acamp-dialog2',
  standalone: true,
  imports: [ReactiveFormsModule, FormGroupLoggerComponent],
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {
  // public dialogFormGroup!: FormGroup<UserForm>;
  public dialogFormGroup = this.createFormGroup();

  public ngOnInit(): void {
    this.dialogFormGroup = new FormGroup<UserForm>({
      firstName: new FormControl('initial Value', {nonNullable: true}),
      lastName: new FormControl(''),
      age: new FormControl(10, {nonNullable: true})
    });
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
