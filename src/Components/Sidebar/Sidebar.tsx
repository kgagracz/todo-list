import React, { useState } from "react";
import { TodoStoreClass } from "../../Store/TodoStore";
import { TodoItem } from "../../Types/TodoItem";
import Button from "../Button";
import "./Sidebar.css";
import { observer } from "mobx-react";
import { SearchStoreClass } from "../../Store/SearchStore";
import AddTodoItemForm from "../AddTodoItemForm";

interface Props {
  todoStore: TodoStoreClass;
  searchStore: SearchStoreClass;
}

const Sidebar: React.FC<Props> = observer(({ todoStore, searchStore }) => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const toggleAddTodoForm = () => setShowAddTodoForm(!showAddTodoForm);
  const todos = todoStore.todos.filter((todoItem) =>
    todoItem.title.includes(searchStore.phrase)
  );

  return (
    <aside className="sidebar">
      <nav className="sidebar-head">
        <h2>
          Lista zadań (
          {todoStore.todos.filter((todoItem) => !todoItem.done).length})
        </h2>
      </nav>
      <div>
        <div className="todo-list">
          {todos.map((todoItem) => (
            <div
              key={todoItem.id}
              className={todoItem.done ? "todo-item done" : "todo-item"}
              onClick={() => todoStore.setTodoId(todoItem.id)}
            >
              <div>
                <span onClick={() => todoStore.setStatus(todoItem.id)}>
                  [{todoItem.done ? "x" : ""}]
                </span>
                <span>{todoItem.title}</span>
              </div>
              <div className="list-item-buttons">
                <span
                  onClick={() => todoStore.removeTodo(todoItem.id)}
                  className="material-symbols-outlined"
                >
                  close
                </span>
                <span className="material-symbols-outlined">edit</span>
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
    </aside>
  );
});

export default Sidebar;
