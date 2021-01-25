import { BehaviorSubject } from 'rxjs';
import { scan, map } from 'rxjs/operators';

const initialState = 0;
// const counterIncStream$ = new BehaviorSubject(initialState);
const counterIncStream$ = new BehaviorSubject(null);

const counterInc$ = counterIncStream$.pipe(
  scan(count => count + 1, initialState)
);

console.log('counterInc$ ===');
console.log(counterInc$);
// console.log(counterStream$.value);
// console.log(counterStream$.getValue());


class CounterStoreRxJS2 {
  // count = initialState;

  constructor() {
    // makeAutoObservable(this)
  }

  increment() {
    // this.count = this.count + 1;
    // counterInc$.next(this.count);
    // console.log('increment--rxjs--', this.count);


    counterInc$.next();
    console.log('increment--rxjs++');
    console.log(counterInc$);

  }

  decrement() {
    // this.count = this.count - 1;
    // counterStream$.next(this.count);
    // console.log('decrement--rxjs--', this.count);

    console.log('decrement--rxjs--');
  }

  get total() {
    // return `Count rxjs = ${this.count}`;
  }

  //вариант 1й
  // subscribe(_setStateFn) {
  //   return counterStream$.subscribe(_setStateFn);
  // }

  // TODO: описать стрим и для вычитания counterDec$
  // TODO: смёржить 2 стрима на + и на -
  // TODO: где и как описывать count?

  //вариант 2й
  returnStream() {
    return counterInc$;
  }

}

export default new CounterStoreRxJS2();
// export default CounterStoreClass;



/**
 *
 import { merge, fromEvent, interval } from 'rxjs';
 import { map } from 'rxjs/operators';

 const inc = document.getElementById('inc');
 const dec = document.getElementById('dec');

 const clickInc = fromEvent(inc, 'click')
 .pipe(
 map(x => '+')
 );
 // clickInc.subscribe(e => console.log('+'));
 const clickDec = fromEvent(dec, 'click')
 .pipe(
 map(x => '-')
 );
 // clickDec.subscribe(e => console.log('-'));


 // const clicks = fromEvent(document, 'click');
 // const timer = interval(1000);
 // const clicksOrTimer = merge(clicks, timer);
 // clicksOrTimer.subscribe(x => console.log(x));

 const clickIncAndDec = merge(clickInc, clickDec);
 clickIncAndDec.subscribe(x => console.log(x));
 * */
