import { observer } from 'mobx-react-lite';
import React from 'react';
import counterStore from '../store/counterStoreClass';

const Counter = observer(() => {
console.log('counterStore');
console.log(counterStore);
  
  return (
    <section className='counter'>
      <div className='count'>{counterStore.count}</div>
      <div className='btns'>
        <button className='btn' onClick={() => counterStore.decrement()}>-</button>
        <button className='btn' onClick={() => counterStore.increment()}>+</button>
      </div>
    </section>
  )
})

export default Counter;
