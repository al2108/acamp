import {NgFor, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router, Routes, RouterLink} from '@angular/router';

@Component({
  selector: 'acamp-home',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public router = inject(Router);
  public routes: Routes = [];

  public constructor() {
    this.routes = this.router.config;
  }
}
