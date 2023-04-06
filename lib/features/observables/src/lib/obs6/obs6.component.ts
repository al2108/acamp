import {CommonModule} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {Obs6Service, TemperatureMeasurement} from './obs6.service';

@Component({
  selector: 'acamp-obs6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs6.component.html',
  styleUrls: ['./obs6.component.scss'],
})
export class Obs6Component implements OnInit {
  public measuredValues!: Observable<TemperatureMeasurement>;
  private measureService: Obs6Service = inject(Obs6Service);

  public ngOnInit(): void {
    this.measuredValues = this.measureService.getTemperatureMeasurements();
  }
}
