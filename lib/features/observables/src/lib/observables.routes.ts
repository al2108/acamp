import {Route} from '@angular/router';
import {Obs1Component} from './obs1/obs1.component';
import {Obs2Component} from './obs2/obs2.component';
import {Obs3Component} from './obs3/obs3.component';
import {Obs4Component} from './obs4/obs4.component';
import {Obs5Component} from './obs5/obs5.component';
import {Obs6Component} from './obs6/obs6.component';
import {Obs7Component} from './obs7/obs7.component';

export const observableRoutes: Array<Route> = [
  {path: '', pathMatch: 'full', redirectTo: 'obs1'},
  {path: 'obs1', component: Obs1Component},
  {path: 'obs2', component: Obs2Component},
  {path: 'obs3', component: Obs3Component},
  {path: 'obs4', component: Obs4Component},
  {path: 'obs5', component: Obs5Component},
  {path: 'obs6', component: Obs6Component},
  {path: 'obs7', component: Obs7Component}
];
