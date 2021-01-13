import {makeAutoObservable} from 'mobx';

class TodoStore {

  todos = [
    { id:1, title: 'todo 1', completed: false},
    { id:2, title: 'todo 2', completed: false},
    { id:3, title: 'todo 3', completed: false},
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter( todo => todo.id !== id);
  }

  completeTodo(id) {
    this.todos = this.todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
  }

}

export default new TodoStore();
