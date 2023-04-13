import {CommonModule} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {Observable, map, tap, throttleTime} from 'rxjs';
import {Obs6Service, TemperatureMeasurement} from './obs6.service';

interface ExtendedTemperatureMeasurement extends TemperatureMeasurement {
  sum: number;
  count: number;
}

@Component({
  selector: 'acamp-obs6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obs6.component.html',
  styleUrls: ['./obs6.component.scss']
})
export class Obs6Component implements OnInit {
  public measuredValues1!: Observable<TemperatureMeasurement>;
  public measuredValues2!: Observable<ExtendedTemperatureMeasurement>;

  private measureService: Obs6Service = inject(Obs6Service);

  public ngOnInit(): void {
    let measuredTempSum = 0;
    let measuredTempCount = 0;
    this.measuredValues1 = this.measureService.getTemperatureMeasurements();
    this.measuredValues2 = this.measureService.getTemperatureMeasurements().pipe(
      map(value => {
        measuredTempSum += value.temperature;
        measuredTempCount++;
        return {...value, sum: measuredTempSum, count: measuredTempCount};
      }),
      tap(value => console.log('after map', value)),
      throttleTime(5000),
      tap(value => console.log('after throttle', value))
    );
  }
}
