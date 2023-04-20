import {Component} from '@angular/core';
import {JsonPipe, NgIf} from '@angular/common';
import {BaseStateOk} from '../base-state-ok';
import {AppStateNullable} from '../app-state.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'acamp-state4',
  standalone: true,
  imports: [NgIf, JsonPipe, RouterLink],
  templateUrl: './state3.component.html',
  styleUrls: ['./state3.component.scss']
})
export class State3Component extends BaseStateOk {
  public appState: AppStateNullable;

  public constructor() {
    super();
    this.appState = null;
    this.subscriptions.sink = this.appState$.subscribe(state => (this.appState = state));
  }
}
