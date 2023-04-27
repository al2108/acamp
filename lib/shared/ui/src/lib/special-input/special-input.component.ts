import {Component, Input} from '@angular/core';
import {defaultSpecialInputConfig, SpecialInputConfig} from './special-input.model';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'acamp-special-input',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './special-input.component.html',
  styleUrls: ['./special-input.component.scss']
})
export class SpecialInputComponent {
  @Input() public control!: FormControl;
  @Input() public config: SpecialInputConfig;

  public constructor() {
    this.config = defaultSpecialInputConfig;
  }
}
