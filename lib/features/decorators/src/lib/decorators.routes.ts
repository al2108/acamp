import {Route} from '@angular/router';
import {Decorator1Component} from './decorator1/decorator1.component';

export const decoratorRoutes: Array<Route> = [
  {path: '', pathMatch: 'full', redirectTo: 'decorator1'},
  {path: 'decorator1', component: Decorator1Component}
];
