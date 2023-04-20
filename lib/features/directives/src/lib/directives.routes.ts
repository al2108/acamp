import {Route} from '@angular/router';
import {Directive1Component} from './directive1/directive1.component';
import {Directive2Component} from './directive2/directive2.component';

export const directiveRoutes: Array<Route> = [
  {path: '', pathMatch: 'full', redirectTo: 'directive1'},
  {path: 'directive1', component: Directive1Component},
  {path: 'directive2', component: Directive2Component}
];
