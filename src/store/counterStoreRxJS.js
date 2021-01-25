import {BehaviorSubject} from 'rxjs';
import {scan} from 'rxjs/operators';

// const initialState = {
//   count: 7,
// }

const initialState = 0;

const counterStream$ = new BehaviorSubject(initialState);

// const counterStream2$ = new BehaviorSubject(initialState);
//
// const counterStream$ = counterStream2$.pipe(
//   scan(count => count + 1, 0)
// );

console.log('counterStream$ ===');
console.log(counterStream$);
// console.log(counterStream$.value);
// console.log(counterStream$.getValue());


class CounterStoreRxJS {
  count = initialState;

  constructor() {
    // makeAutoObservable(this)
  }

  increment() {
    this.count = this.count + 1;
    counterStream$.next(this.count);
    console.log('increment--rxjs--', this.count);
  }

  decrement() {
    this.count = this.count - 1;
    counterStream$.next(this.count);
    console.log('decrement--rxjs--', this.count);
  }

  get total() {
    return `Count rxjs = ${this.count}`;
  }

  //вариант 1й
  subscribe(_setStateFn) {
    return counterStream$.subscribe(_setStateFn);
  }

  // TODO:Попробовать вернуть весь стрим и в компоненте CounterRxJS
  // TODO:подписаться на него

  //вариант 2й
  returnStream() {
    return counterStream$;
  }

}

export default new CounterStoreRxJS();
// export default CounterStoreClass;
