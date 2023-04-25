import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {NullableString} from '@acamp/lib/shared/tools';

@Component({
  selector: 'acamp-dialog-field-set-container',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dialog-field-set-container.component.html',
  styleUrls: ['./dialog-field-set-container.component.scss']
})
export class DialogFieldSetContainerComponent {
  @Input() public name: NullableString = null;
}
