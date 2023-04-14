const isFunction = (fn: unknown): boolean => typeof fn === 'function';

export interface SubscriptionLike {
  unsubscribe(): void;
}

export class SubscriptionSink {
  protected subscriptions: SubscriptionLike[] = [];

  public add(...subscriptions: SubscriptionLike[]): void {
    this.subscriptions = this.subscriptions.concat(subscriptions);
  }

  public set sink(subscription: SubscriptionLike) {
    this.subscriptions.push(subscription);
  }

  public unsubscribe(): void {
    this.subscriptions.forEach(sub => sub && isFunction(sub.unsubscribe) && sub.unsubscribe());
    this.subscriptions = [];
  }
}
