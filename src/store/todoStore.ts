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

  }

  removeTodo
}

export default new TodoStore();
