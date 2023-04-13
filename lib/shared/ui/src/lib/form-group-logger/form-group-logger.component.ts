import {JsonPipe} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

// Just an example how data can be transported via EventEmitter
export interface ResetRequest {
  timestamp: number;
}

@Component({
  selector: 'acamp-form-group-logger',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './form-group-logger.component.html',
  styleUrls: ['./form-group-logger.component.scss']
})
export class FormGroupLoggerComponent {
  @Input() public formGroup!: FormGroup;
  @Output() private resetRequested: EventEmitter<ResetRequest>;

  public constructor() {
    this.resetRequested = new EventEmitter();
  }

  public onReset(): void {
    // we could also reset form here direct via:
    // this.formGroup.reset()
    // but this code shall show an event
    this.resetRequested.emit({
      timestamp: Date.now()
    });
  }
}
