import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from "rxjs";
import { take, map } from "rxjs/operators";
import {Observable} from 'rxjs';
@Component({
  selector: 'app-pipe-async',
  templateUrl: './pipe-async.component.html',
  styleUrls: ['./pipe-async.component.css']
})
export class PipeAsyncComponent implements OnDestroy {

  promise: Promise<any>;
  observable$: Observable<number>;
  subscription!: Object;
  observableData!: number;

  constructor() {
    this.promise = this.getPromise();
    this.observable$ = this.getObservable();
    this.subscribeObservable();
  }

  getObservable() {
    return interval(1000).pipe(
      take(10),
      map(v => v * v)
    );
  }

  // AsyncPipe subscribes to the observable automatically
  subscribeObservable() {
    this.subscription = this.getObservable().subscribe(
      v => (this.observableData = v)
    );
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

  // AsyncPipe unsubscribes from the observable automatically
  ngOnDestroy() {
    if (this.subscription) {
     // this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
  }

}
