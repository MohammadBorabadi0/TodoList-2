import React from "react";
import { useTodo } from "../Providers/context/todo_context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { filtered_todos } = useTodo();

  if (!filtered_todos.length) {
    return (
      <div>
        <h3>هیچ تسکی وجود ندارد.</h3>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {filtered_todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
