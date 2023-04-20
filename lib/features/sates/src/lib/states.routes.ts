import {Route} from '@angular/router';
import {State1Component} from './state1/state1.component';
import {State2Component} from './state2/state2.component';
import {State3Component} from './state3/state3.component';
import {State4Component} from './state4/state4.component';

export const stateRoutes: Array<Route> = [
  {path: '', pathMatch: 'full', redirectTo: 'state1'},
  {path: 'state1', component: State1Component},
  {path: 'state2', component: State2Component},
  {path: 'state3', component: State3Component},
  {path: 'state4', component: State4Component}
];
