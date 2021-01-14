import { observer } from 'mobx-react-lite';
import React from 'react';
import counterStore from '../store/counterStoreClass';

const Counter = observer(() => {
console.log('counterStore');
console.log(counterStore);
// console.log(counterStore.decrement);

const dec = () => counterStore.decrement();

  return (
    <section className='counter'>
      <div className='count'>{counterStore.total}</div>
      <div className='btns'>
        <button className='btn' onClick={dec}>-</button>
        <button className='btn' onClick={() => counterStore.increment()}>+</button>
      </div>
    </section>
  )
})

export default Counter;
