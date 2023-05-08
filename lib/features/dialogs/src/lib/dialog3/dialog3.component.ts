import {FormGroupLoggerComponent} from '@acamp/lib/shared/ui';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'acamp-dialog3',
  standalone: true,
  imports: [ReactiveFormsModule, FormGroupLoggerComponent],
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
    return new FormGroup({
      firstName: new FormControl('initial Value', {nonNullable: true}),
      lastName: new FormControl(''),
      age: new FormControl(10, {nonNullable: true})
    });
  }

  public onResetRequest(): void {
    this.dialogFormGroup.reset();
  }
}
