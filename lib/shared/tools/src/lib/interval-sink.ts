type Timer = ReturnType<typeof setInterval>;
type TimerList = Array<Timer>;

export class IntervalSink {
  protected intervals: TimerList = [];

  public add(...intervals: TimerList): void {
    this.intervals = [...this.intervals, ...intervals];
  }

  public set sink(interval: Timer) {
    this.intervals.push(interval);
  }

  public unset(): void {
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];
  }
}
