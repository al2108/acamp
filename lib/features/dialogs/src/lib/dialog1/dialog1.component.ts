import {FormGroupLoggerComponent} from '@acamp/lib/shared/ui';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'acamp-dialog1',
  standalone: true,
  imports: [ReactiveFormsModule, FormGroupLoggerComponent],
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.scss']
})
export class Dialog1Component implements OnInit {
  public dialogFormGroup!: FormGroup;

  public ngOnInit(): void {
    this.dialogFormGroup = new FormGroup({
      firstName: new FormControl('initial Value'),
      lastName: new FormControl(),
      age: new FormControl(10)
    });
  }

  public onResetRequest(): void {
    this.dialogFormGroup.reset();
  }
}
