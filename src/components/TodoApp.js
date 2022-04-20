import React from "react";

// components
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="todo-app">
      <header className="header">
        <h2>تودولیست</h2>
      </header>

      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
