import React, { useState } from "react";
import { TodoStoreClass } from "../../Store/TodoStore";
import { TodoItemQuery } from "../../Types/TodoItemQuery";
import TodoItemForm from "../TodoItemForm";

interface Props {
  toggleEditTodoForm: any;
  todoItem: TodoItemQuery;
  todoStore: TodoStoreClass;
}

const EditTodoItemForm: React.FC<Props> = ({
  toggleEditTodoForm,
  todoItem,
  todoStore,
}) => {
  const [newTodoItem, setNewTodoItem] = useState(todoItem);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    setNewTodoItem({ ...newTodoItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (todoItem.id) todoStore.editTodo(todoItem.id, newTodoItem);
  };

  return (
    <div>
      <h4>Edycja zadania</h4>
      <TodoItemForm
        handleSubmit={handleSubmit}
        todoItem={newTodoItem}
        handleInputChange={handleInputChange}
        submitButtonText="Edytuj zadanie"
      />
    </div>
  );
};

export default EditTodoItemForm;
