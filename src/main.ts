import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';
import {routes} from './app/app.routes';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withEnabledBlockingInitialNavigation())],
}).catch(err => console.error(err));
