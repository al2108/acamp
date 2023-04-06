import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export interface TemperatureMeasurement {
  timestamp: number;
  temperature: number;
}

@Injectable({
  providedIn: 'root',
})
export class Obs6Service {
  private temperatureSubject: Subject<TemperatureMeasurement>;

  public constructor() {
    this.temperatureSubject = new Subject<TemperatureMeasurement>();
    setInterval(() => {
      const now: number = Date.now();
      const measurement: TemperatureMeasurement = {
        timestamp: now,
        temperature: Math.random() * 50 + 10,
      };
      this.temperatureSubject.next(measurement);
    }, 5000);
  }

  public getTemperatureMeasurements(): Observable<TemperatureMeasurement> {
    return this.temperatureSubject;
  }
}
