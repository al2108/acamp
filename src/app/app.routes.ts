import {decoratorRoutes} from '@acamp/lib/features/decorators';
import {directiveRoutes} from '@acamp/lib/features/directives';
import {pipeRoutes} from '@acamp/lib/features/pipes';
import {stateRoutes} from '@acamp/lib/features/sates';
import {templateRoutes} from '@acamp/lib/features/templates';
import {Route} from '@angular/router';
import {AboutComponent} from '@acamp/lib/features/about';
import {HomeComponent} from '@acamp/lib/features/home';

export const routes: Array<Route> = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  // {path: 'home', loadComponent: () => import('@acamp/lib/features/home').then(component => component.HomeComponent)},
  // {
  //   path: 'about',
  //   loadChildren: () => import('@acamp/lib/features/about').then(module => module.LibFeaturesAboutModule)
  // },
  {
    path: 'observables',
    loadChildren: () => import('@acamp/lib/features/observables').then(routes => routes.observableRoutes)
  },
  {
    path: 'dialogs',
    loadChildren: () => import('@acamp/lib/features/dialogs').then(routes => routes.dialogRoutes)
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
