import React, { useState } from "react";
import { TodoStoreClass } from "../../Store/TodoStore";
import { TodoItem } from "../../Types/TodoItem";
import { TodoItemQuery } from "../../Types/TodoItemQuery";
import Button from "../Button";
import TodoItemForm from "../TodoItemForm";
import "./AddTodoItem.css";

const defaultNewTodoItem: TodoItemQuery = {
  title: "",
  content: "",
  deadline: null,
};

interface Props {
  todoStore: TodoStoreClass;
  toggleAddTodoForm: () => void;
  todoItem?: TodoItem;
}

const AddTodoItemForm: React.FC<Props> = ({ todoStore, toggleAddTodoForm }) => {
  const [newTodoItem, setNewTodoItem] =
    useState<TodoItemQuery>(defaultNewTodoItem);

  const updateNewTodoItem = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    setNewTodoItem({ ...newTodoItem, [e.target.name]: e.target.value });
    console.log(newTodoItem);
  };

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    todoStore.addTodo(newTodoItem);
    setNewTodoItem(defaultNewTodoItem);
    toggleAddTodoForm();
  };

  return (
    <div>
      <h4>Dodawanie zadania</h4>
      <TodoItemForm
        submitButtonText="Dodaj zadanie"
        handleInputChange={updateNewTodoItem}
        handleSubmit={handleFormSubmit}
        todoItem={newTodoItem}
      />
    </div>
  );
};

export default AddTodoItemForm;
