import { SimpleChange } from '@angular/core';
import { Observable, ConnectableObservable, Observer } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/publishReplay';


export interface TypedSimpleChange<T> {
  previousValue: T;
  currentValue: T;
}

export class ReactiveComponent {
  private changesObserver: Observer<{ [key: string]: SimpleChange }>;
  private changes$: ConnectableObservable<{ [key: string]: SimpleChange }>;

  constructor() {
    this.changes$ = Observable.create((observer: Observer<{ [key: string]: SimpleChange }>) => this.changesObserver = observer).publishReplay(1);
    this.changes$.connect();
  }

  public observeProperty<T>(propertyName: string): Observable<TypedSimpleChange<T>> {
    return this.changes$
      .filter(changes => changes.hasOwnProperty(propertyName))
      .map(changes => changes[propertyName]);
  }

  public observePropertyCurrentValue<T>(propertyName: string): Observable<T> {
    return this.observeProperty<T>(propertyName)
      .map(change => change.currentValue);
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    this.changesObserver.next(changes);
  }
}
