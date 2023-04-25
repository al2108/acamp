import {Route} from '@angular/router';
import {Dialog1Component} from './dialog1/dialog1.component';
import {Dialog2Component} from './dialog2/dialog2.component';
import {Dialog3Component} from './dialog3/dialog3.component';
import {Dialog4Component} from './dialog4/dialog4.component';
import {Dialog5Component} from './dialog5/dialog5.component';
import {Dialog6Component} from './dialog6/dialog6.component';
import {Dialog7Component} from './dialog7/dialog7.component';
import {Dialog8Component} from './dialog8/dialog8.component';

export const dialogRoutes: Array<Route> = [
  {path: '', pathMatch: 'full', redirectTo: 'dialog1'},
  {path: 'dialog1', component: Dialog1Component},
  {path: 'dialog2', component: Dialog2Component},
  {path: 'dialog3', component: Dialog3Component},
  {path: 'dialog4', component: Dialog4Component},
  {path: 'dialog5', component: Dialog5Component},
  {path: 'dialog6', component: Dialog6Component},
  {path: 'dialog7', component: Dialog7Component},
  {path: 'dialog8', component: Dialog8Component}
];
