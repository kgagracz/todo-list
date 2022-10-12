import React, { useState } from "react";
import { TodoStoreClass } from "../../Store/TodoStore";
import { TodoItem } from "../../Types/TodoItem";
import { TodoItemQuery } from "../../Types/TodoItemQuery";
import Button from "../Button";

const defaultNewTodoItem: TodoItemQuery = {
  title: "",
  content: "",
  deadline: "",
};

interface Props {
  todoStore: TodoStoreClass;
  toggleAddTodoForm: () => void;
  todoItem?: TodoItem;
}

const AddTodoItemForm: React.FC<Props> = ({
  todoStore,
  toggleAddTodoForm,
  todoItem,
}) => {
  const [newTodoItem, setNewTodoItem] = useState<TodoItemQuery | TodoItem>(
    todoItem ? todoItem : defaultNewTodoItem
  );

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
    <form className="add-todo-form">
      <input
        name="title"
        value={newTodoItem.title}
        type="text"
        placeholder="Tytuł"
        onChange={(e) => updateNewTodoItem(e)}
      />
      <input
        name="content"
        value={newTodoItem.content}
        type="text"
        placeholder="Treść"
        onChange={(e) => updateNewTodoItem(e)}
      />
      <input
        name="deadline"
        value={newTodoItem.deadline ? String(newTodoItem.deadline) : ""}
        type="date"
        placeholder="Deadline"
        onChange={(e) => updateNewTodoItem(e)}
      />
      <Button text="Dodaj zadanie" handleClick={handleFormSubmit} />
    </form>
  );
};

export default AddTodoItemForm;
