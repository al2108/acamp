import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {NullableString} from '@acamp/lib/shared/tools';

@Component({
  selector: 'acamp-dialog-field-set-cols',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dialog-field-set-cols.component.html',
  styleUrls: ['./dialog-field-set-cols.component.scss']
})
export class DialogFieldSetColsComponent {
  @Input() public name: NullableString = null;
  @Input() public cols = 1;
}
