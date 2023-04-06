import {LibFeaturesAboutModule} from '@acamp/lib/features/about';
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, LibFeaturesAboutModule],
  selector: 'acamp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
