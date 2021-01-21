import React, {useLayoutEffect, useState} from 'react';
import counterStoreRxJS from '../store/counterStoreRxJS';

const CounterRxJS = () => {
  const [count, setCount] = useState(counterStoreRxJS.count);

  console.log('counterStoreRxJS in CounterRxJS-------------------');
  console.log(counterStoreRxJS);

  //вариант 1й
  // useLayoutEffect(() => {
  //   counterStoreRxJS.subscribe(setCount);
  // },[])
  //

  //вариант 2й
  useLayoutEffect(() => {
    counterStoreRxJS.returnStream().subscribe(setCount);
  },[])

  const dec = () => counterStoreRxJS.decrement();
  const inc = () => counterStoreRxJS.increment()

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

export default CounterRxJS;
