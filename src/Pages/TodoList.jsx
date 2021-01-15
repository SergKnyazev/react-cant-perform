import React from 'react';
import './TodoList.css';
import instTodoStore from '../store/todoStore';
import { observer } from 'mobx-react-lite';

const TodoList = observer(() => {
  console.log('instTodoStore');
  console.log(instTodoStore);

  return (
    <section className='todo'>
      <button
        className='todo__fetch'
        onClick={() => instTodoStore.fetchTodosAsync()}
      >Fetch todos
      </button>
      { instTodoStore.todos.map( todo =>
        (
          <div
            className='todo__wrapper'
            key={todo.id}
          >
            <input
              className='todo__completed'
              type='checkbox'
              checked={todo.completed}
              // onChange={() => instTodoStore.completeTodo(todo.id)}
              onChange={() => instTodoStore.completeTodo(todo)}
            />
            {
              todo.completed
                ?
                <p className='todo__title--completed'>{todo.title}</p>
                :
                <p className='todo__title'>{todo.title}</p>
            }

            {/*{*/}
            {/*  todo.completed && <p className='todo__title--completed'>{todo.title}</p>*/}
            {/*}*/}
            {/*{*/}
            {/*  todo.completed || <p className='todo__title'>{todo.title}</p>*/}
            {/*}*/}

            <button
              className='todo__remove'
              onClick={() => instTodoStore.removeTodo(todo.id)}
            >&#10006;
            </button>
          </div>
        )
      )}
    </section>
  )
})

export default TodoList;
