import { BehaviorSubject } from 'rxjs';

// const initialState = {
//   count: 7,
// }

const initialState = 0;

const counterStream$ = new BehaviorSubject(initialState);
console.log('counterStream$ ===');
console.log(counterStream$);

class CounterStoreRxJS {
  count = initialState;

  constructor() {
    // makeAutoObservable(this)
  }

  increment() {
    this.count = this.count + 1;
    console.log('increment--rxjs', this.count);
    counterStream$.next(this.count);
    console.log('increment--rxjs--', this.count);
  }

  decrement() {
    this.count = this.count - 1;
    console.log('decrement--rxjs', this.count);
    counterStream$.next(this.count);
    console.log('decrement--rxjs--', this.count);
  }

  get total() {
    return `Count rxjs = ${this.count}`;
  }

  subscribe(_setState) {
    return counterStream$.subscribe(_setState);
  }

}

export default new CounterStoreRxJS();
// export default CounterStoreClass;
