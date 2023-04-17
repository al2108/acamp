import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {logClass, logMethod, logParameter, logProperty} from './log-decorators';

@Component({
  selector: 'acamp-decorator1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decorator1.component.html',
  styleUrls: ['./decorator1.component.scss']
})
@logClass
export class Decorator1Component implements OnInit {
  @logProperty
  public orderNumber!: number;

  public ngOnInit(): void {
    this.orderNumber = 4711;
    this.loadOrders(this.orderNumber, new Date());
    this.orderNumber = 1147;
    this.loadOrders(this.orderNumber, new Date());
  }

  @logMethod
  private loadOrders(
    @logParameter customer: number,
    @logParameter orderDate: Date
  ): {customer: number; orderDate: Date} {
    return {customer, orderDate};
  }
}
