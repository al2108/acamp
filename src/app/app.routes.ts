import {AboutComponent} from '@acamp/lib/features/about';
import {decoratorRoutes} from '@acamp/lib/features/decorators';
import {dialogRoutes} from '@acamp/lib/features/dialogs';
import {directiveRoutes} from '@acamp/lib/features/directives';
import {HomeComponent} from '@acamp/lib/features/home';
import {pipeRoutes} from '@acamp/lib/features/pipes';
import {stateRoutes} from '@acamp/lib/features/sates';
import {templateRoutes} from '@acamp/lib/features/templates';
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
  {
    path: 'observables',
    loadChildren: () => import('@acamp/lib/features/observables').then(m => m.observableRoutes)
  },
  {
    path: 'dialogs',
    children: dialogRoutes
  },
  {
    path: 'templates',
    children: templateRoutes
  },
  {
    path: 'states',
    children: stateRoutes
  },
  {
    path: 'decorators',
    children: decoratorRoutes
  },
  {
    path: 'pipes',
    children: pipeRoutes
  },
  {
    path: 'directives',
    children: directiveRoutes
  }
];
