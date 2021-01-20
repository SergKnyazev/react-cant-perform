import React, {useLayoutEffect, useState} from 'react';
import counterStoreRxJS from '../store/counterStoreRxJS';

const CounterRxJS = () => {
  const [count, setCount] = useState(counterStoreRxJS.count);

  useLayoutEffect(() => {
    counterStoreRxJS.subscribe(setCount);
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

/**
 * Компонент только создан
 * надо импортировать свой стор RxJS
 * */
