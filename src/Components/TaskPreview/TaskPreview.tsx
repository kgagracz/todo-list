import { observer } from "mobx-react";
import React from "react";
import { TodoStoreClass } from "../../Store/TodoStore";
import { TodoItem } from "../../Types/TodoItem";
import { formatDate } from "../../utils/formatDate";
import "./TaskPreview.css";

interface Props {
  todoStore: TodoStoreClass;
}

const TaskPreview: React.FC<Props> = observer(({ todoStore }) => {
  const todoItem = todoStore.todos.find(
    (todoItem) => todoItem.id === todoStore.currentTodoId
  );
  if (!todoItem)
    return (
      <div className="task-preview">
        <h3>Nie wybrano zadania</h3>
      </div>
    );
  const { title, content, createdAt, deadline, id } = todoItem;
  return (
    <div className="task-preview">
      <div className="task-head">
        <h3>{title}</h3>
        <p className="task-create-date">Utworzono {formatDate(createdAt)}</p>
      </div>
      <div className="task-body">
        <p>{content}</p>
        {deadline && (
          <div>
            <h5>Termin zadania:</h5>
            <p>{String(deadline)}</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default TaskPreview;
