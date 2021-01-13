import React from 'react';
import './TodoList.css';
import instanceTodoStore from '../store/todoStore';
import {observer} from 'mobx-react-lite';

const TodoList = observer(() => {
  return (
    <section className='todo'>
      { instanceTodoStore.todos.map( todo =>
        (
          <div className='todo__wrapper' key={todo.id}>
            <input className='todo__completed' type='checkbox' />
            <p className='todo__title'>{todo.title}</p>
            <button className='todo__remove'>&#10006;</button>
          </div>
        )
      )}
    </section>
  )
})

export default TodoList;
