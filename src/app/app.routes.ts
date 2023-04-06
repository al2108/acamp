import {AboutComponent} from '@acamp/lib/features/about';
import {DialogComponent} from '@acamp/lib/features/dialog';
import {HomeComponent} from '@acamp/lib/features/home';
import {
  Obs1Component,
  Obs2Component,
  Obs3Component,
  Obs4Component,
  Obs5Component,
  Obs6Component
} from '@acamp/lib/features/observables';
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
  {path: 'dialog', component: DialogComponent}
];
