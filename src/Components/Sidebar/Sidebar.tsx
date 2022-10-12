import React, { useState } from "react";
import { TodoStoreClass } from "../../Store/TodoStore";
import { TodoItem } from "../../Types/TodoItem";
import "./Sidebar.css";
import { observer } from "mobx-react";
import { SearchStoreClass } from "../../Store/SearchStore";
import AddTodoItemForm from "../AddTodoItem";
import EditTodoItem from "../EditTodoItem";
import { TodoItemQuery } from "../../Types/TodoItemQuery";

interface Props {
  todoStore: TodoStoreClass;
  searchStore: SearchStoreClass;
}

const Sidebar: React.FC<Props> = observer(({ todoStore, searchStore }) => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [showEditTodoForm, setShowEditTodoForm] = useState(false);
  const [todoItemToEdit, setTodoItemToEdit] = useState<TodoItemQuery>({
    title: "",
    content: "",
    deadline: null,
  });

  const toggleAddTodoForm = () => setShowAddTodoForm(!showAddTodoForm);
  const toggleEditTodoForm = () => setShowEditTodoForm(!showEditTodoForm);
  const todos = todoStore.todos.filter((todoItem) =>
    todoItem.title.includes(searchStore.phrase)
  );

  const handleEditClick = (todoItem: TodoItem) => {
    const { content, title, deadline, id } = todoItem;
    setTodoItemToEdit({ content, title, deadline, id });
    toggleEditTodoForm();
  };

  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <h2>
          Lista zadań (
          {todoStore.todos.filter((todoItem) => !todoItem.done).length})
        </h2>
        <span onClick={toggleAddTodoForm} className="material-symbols-outlined">
          note_add
        </span>
      </div>
      <div>
        <div className="todo-list">
          {todos.map((todoItem) => (
            <div
              key={todoItem.id}
              className={todoItem.done ? "todo-item done" : "todo-item"}
              onClick={() => todoStore.setTodoId(todoItem.id)}
            >
              <div>
                <input
                  type="checkbox"
                  checked={todoItem.done}
                  onChange={() => todoStore.setStatus(todoItem.id)}
                />
                <span>{todoItem.title}</span>
              </div>
              <div className="list-item-buttons">
                <span
                  onClick={() => todoStore.removeTodo(todoItem.id)}
                  className="material-symbols-outlined"
                >
                  close
                </span>
                <span
                  onClick={() => handleEditClick(todoItem)}
                  className="material-symbols-outlined"
                >
                  edit
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddTodoForm && (
        <AddTodoItemForm
          toggleAddTodoForm={toggleAddTodoForm}
          todoStore={todoStore}
        />
      )}
      {showEditTodoForm && (
        <EditTodoItem
          todoStore={todoStore}
          todoItem={todoItemToEdit}
          toggleEditTodoForm={toggleEditTodoForm}
        />
      )}
    </div>
  );
});

export default Sidebar;
