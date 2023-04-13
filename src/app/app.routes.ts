import {AboutComponent} from '@acamp/lib/features/about';
import {Dialog1Component, Dialog2Component, Dialog3Component} from '@acamp/lib/features/dialog';
import {HomeComponent} from '@acamp/lib/features/home';
import {
  Obs1Component,
  Obs2Component,
  Obs3Component,
  Obs4Component,
  Obs5Component,
  Obs6Component,
  Obs7Component
} from '@acamp/lib/features/observables';
import {
  Template1Component,
  Template2Component,
  Template3Component,
  Template4Component
} from '@acamp/lib/features/templates';
import {Route} from '@angular/router';

export const routes: Array<Route> = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  // {path: 'home-lazy', loadComponent: () => import('@acamp/lib/features/home').then(module => module.HomeComponent)},
  // {
  //   path: 'about-lazy',
  //   loadChildren: () => import('@acamp/lib/features/about').then(module => module.LibFeaturesAboutModule),
  // },
  {path: 'obs1', component: Obs1Component},
  {path: 'obs2', component: Obs2Component},
  {path: 'obs3', component: Obs3Component},
  {path: 'obs4', component: Obs4Component},
  {path: 'obs5', component: Obs5Component},
  {path: 'obs6', component: Obs6Component},
  {path: 'obs7', component: Obs7Component},
  {path: 'dialog1', component: Dialog1Component},
  {path: 'dialog2', component: Dialog2Component},
  {path: 'dialog3', component: Dialog3Component},
  {path: 'template1', component: Template1Component},
  {path: 'template2', component: Template2Component},
  {path: 'template3', component: Template3Component},
  {path: 'template4', component: Template4Component}
];
