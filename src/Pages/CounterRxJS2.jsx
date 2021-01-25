import React, {useLayoutEffect, useState} from 'react';
import counterStoreRxJS2 from '../store/counterStoreRxJS2';

const CounterRxJS2 = () => {
  const [count, setCount] = useState(counterStoreRxJS2.value);

  console.log('counterStoreRxJS2 in CounterRxJS2 -------------------');
  console.log(counterStoreRxJS2);

  useLayoutEffect(() => {
    counterStoreRxJS2.returnStream().subscribe(setCount);
  },[])

  const dec = () => counterStoreRxJS2.decrement();
  const inc = () => counterStoreRxJS2.increment()

  return (
    <section className='counter'>
      <div className='count'>{count}</div>
      <div className='btns'>
        <button className='btn' onClick={dec}>-</button>
        <button className='btn' onClick={inc}>+</button>
      </div>
    </section>
  )
}

export default CounterRxJS2;
