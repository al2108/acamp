import {Component} from '@angular/core';
import {JsonPipe, NgIf} from '@angular/common';
import {BaseState} from '../base-state';
import {AppStateNullable} from '../app-state.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'acamp-state4',
  standalone: true,
  imports: [NgIf, JsonPipe, RouterLink],
  templateUrl: './state1.component.html',
  styleUrls: ['./state1.component.scss']
})
export class State1Component extends BaseState {
  public appState: AppStateNullable;

  public constructor() {
    super();
    this.appState = null;
    this.appState$.subscribe(state => (this.appState = state));
  }
}
