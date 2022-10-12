import React from "react";
import { TodoItemQuery } from "../../Types/TodoItemQuery";
import Button from "../Button";

interface Props {
  todoItem: TodoItemQuery;
  handleInputChange: any;
  handleSubmit: any;
  submitButtonText: string;
}

const TodoItemForm: React.FC<Props> = ({
  todoItem,
  handleInputChange,
  handleSubmit,
  submitButtonText,
}) => {
  return (
    <form className="add-todo-form">
      <input
        name="title"
        value={todoItem.title}
        type="text"
        placeholder="Tytuł"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        name="content"
        value={todoItem.content}
        type="text"
        placeholder="Treść"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        name="deadline"
        value={todoItem.deadline ? String(todoItem.deadline) : ""}
        type="date"
        placeholder="Deadline"
        onChange={(e) => handleInputChange(e)}
      />
      <Button text={submitButtonText} handleClick={handleSubmit} />
    </form>
  );
};

export default TodoItemForm;
