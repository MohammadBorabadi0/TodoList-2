import React from "react";
import { useTodo } from "../Providers/context/todo_context";
import Filter from "./Filter";
import Sort from "./Sort";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { filtered_todos, todos } = useTodo();

  if (!todos.length) {
    return (
      <div>
        <h3>هیچ تسکی وجود ندارد.</h3>
      </div>
    );
  }

  if (filtered_todos.length === 0) {
    return (
      <div className="todo-list">
        <div className="filter-container">
          <Filter />
          <Sort />
        </div>
        <h3>هیچ تسکی پیدا نشد.</h3>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="filter-container">
        <Filter />
        <Sort />
      </div>

      {filtered_todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
