import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import TaskPreview from "./Components/TaskPreview/TaskPreview";
import { TodoStore } from "./Store/TodoStore";
import { SearchStore } from "./Store/SearchStore";
import "./Styles/global.css";

function App() {
  return (
    <div className="App container">
      <div className="app-wrapper">
        <Navbar />
        <div className="todo-app">
          <TaskPreview todoStore={TodoStore} />
          <Sidebar searchStore={SearchStore} todoStore={TodoStore} />
        </div>
      </div>
    </div>
  );
}

export default App;
