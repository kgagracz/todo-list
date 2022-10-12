import { TodoItem } from "../Types/TodoItem";
import { makeObservable, observable, action } from "mobx";
import { v4 as uuid } from "uuid";
import { TodoItemQuery } from "../Types/TodoItemQuery";

export class TodoStoreClass {
  todos: TodoItem[] = [];
  currentTodoId: string = "";

  constructor() {
    makeObservable(this, {
      todos: observable,
      currentTodoId: observable,
      addTodo: action,
      removeTodo: action,
      setTodoId: action,
    });
  }

  addTodo(newTodo: TodoItemQuery | TodoItem) {
    const { title, content, deadline } = newTodo;
    const newItem: TodoItem = {
      id: uuid(),
      title,
      content,
      createdAt: new Date(),
      deadline: deadline ? deadline : null,
      done: false,
    };
    this.todos.push(newItem);
  }

  removeTodo(id: string) {
    const index = this.todos.findIndex((todoItem) => todoItem.id === id);
    if (index !== -1) this.todos.splice(index, 1);
  }

  setTodoId(id: string) {
    this.currentTodoId = id;
  }

  setStatus(id: string) {
    const todoItem = this.todos.find((todoItem) => todoItem.id === id);
    if (todoItem) todoItem.done = !todoItem.done;
  }

  editTodo(id: string, newTodo: TodoItem) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index] = { ...this.todos[index], ...newTodo };
  }
}

export const TodoStore = new TodoStoreClass();
