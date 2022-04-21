import React from "react";
import { useFilter } from "../Providers/context/filter_context";
import { useTodo } from "../Providers/context/todo_context";
import Filter from "./Filter";
import Search from "./Search";
import Sort from "./Sort";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();
  const { filtered_todos } = useFilter();

  if (!todos.length) {
    return (
      <div>
        <h3>هیچ تسکی وجود ندارد.</h3>
      </div>
    );
  }

  if (!filtered_todos.length) {
    return (
      <div className="todo-list">
        <div className="filter-container">
          <Filter />
          <Sort />
        </div>
        <>
          <Search />
        </>
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

      <>
        <Search />
      </>

      {filtered_todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
