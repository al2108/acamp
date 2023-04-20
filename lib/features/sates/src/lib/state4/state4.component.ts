import {Component} from '@angular/core';
import {JsonPipe, NgIf} from '@angular/common';
import {AppStateNullable} from '../app-state.service';
import {RouterLink} from '@angular/router';
import {BaseStateOk} from '../base-state-ok';

@Component({
  selector: 'acamp-state4',
  standalone: true,
  imports: [NgIf, JsonPipe, RouterLink],
  templateUrl: './state4.component.html',
  styleUrls: ['./state4.component.scss']
})
export class State4Component extends BaseStateOk {
  public appState: AppStateNullable;

  public constructor() {
    super();
    this.appState = null;
    this.subscriptions.sink = this.appState$.subscribe(state => (this.appState = state));
  }
}
