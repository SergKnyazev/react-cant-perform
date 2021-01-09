import {makeAutoObservable} from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this)
  }

  increment() {
    this.count = this.count + 1;
    console.log('increment', this.count);
  }

  decrement() {
    this.count = this.count - 1;
    console.log('decrement', this.count);
  }
}

export default new CounterStore();
// export default CounterStore;