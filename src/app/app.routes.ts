import {AboutComponent} from '@acamp/lib/features/about';
import {HomeComponent} from '@acamp/lib/features/home';
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
];
