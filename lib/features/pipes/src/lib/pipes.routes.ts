import {Route} from '@angular/router';
import {Pipe1Component} from './pipe1/pipe1.component';
import {Pipe2Component} from './pipe2/pipe2.component';

export const pipeRoutes: Array<Route> = [
  {path: '', pathMatch: 'full', redirectTo: 'pipe1'},
  {path: 'pipe1', component: Pipe1Component},
  {path: 'pipe2', component: Pipe2Component}
];
