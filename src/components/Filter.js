import React from "react";
import { useTodo } from "../Providers/context/todo_context";

const Filter = () => {
  const { filter, updateFilter } = useTodo();

  return (
    <div className="filter">
      <button
        onClick={updateFilter}
        className={`${filter === "همه" && "active"}`}
      >
        همه
      </button>
      <button
        onClick={updateFilter}
        className={`${filter === "انجام شده" && "active"}`}
      >
        انجام شده
      </button>
      <button
        onClick={updateFilter}
        className={`${filter === "انجام نشده" && "active"}`}
      >
        انجام نشده
      </button>
    </div>
  );
};

export default Filter;
