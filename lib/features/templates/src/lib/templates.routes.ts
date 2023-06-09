import {Route} from '@angular/router';
import {Template1Component} from './template1/template1.component';
import {Template2Component} from './template2/template2.component';
import {Template3Component} from './template3/template3.component';
import {Template4Component} from './template4/template4.component';
import {Template5Component} from './template5/template5.component';

export const templateRoutes: Array<Route> = [
  {path: '', pathMatch: 'full', redirectTo: 'template1'},
  {path: 'template1', component: Template1Component},
  {path: 'template2', component: Template2Component},
  {path: 'template3', component: Template3Component},
  {path: 'template4', component: Template4Component},
  {path: 'template5', component: Template5Component}
];
