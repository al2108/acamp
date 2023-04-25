import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {NullableString} from '@acamp/lib/shared/tools';

@Component({
  selector: 'acamp-dialog-field-set-media',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dialog-field-set-media.component.html',
  styleUrls: ['./dialog-field-set-media.component.scss']
})
export class DialogFieldSetMediaComponent {
  @Input() public name: NullableString = null;
}
