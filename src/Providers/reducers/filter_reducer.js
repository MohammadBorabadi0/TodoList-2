import React from "react";
import {
  FILTER_TASK,
  LOAD_TASKS,
  SORT_TASK,
  UPDATE_FILTER,
  UPDATE_SORT,
} from "../../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_TASKS: {
      return {
        ...state,
        all_todos: [...action.payload],
        filtered_todos: [...action.payload],
      };
    }

    case UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }

    case SORT_TASK: {
      const { sort, filtered_todos } = state;
      let tempTodos = [...filtered_todos];

      if (sort === "oldest") {
        tempTodos = tempTodos.sort((a, b) => a.completeDate - b.completeDate);
      }
      if (sort === "newest") {
        tempTodos = tempTodos.sort((a, b) => b.completeDate - a.completeDate);
      }

      return { ...state, filtered_todos: tempTodos };
    }

    case UPDATE_FILTER: {
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    }

    case FILTER_TASK: {
      const { all_todos, filters } = state;
      const { status, text } = filters;

      let tempTodos = [...all_todos];

      // Text
      if (text) {
        tempTodos = tempTodos.filter((i) =>
          i.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      // Status
      if (status === "انجام شده") {
        tempTodos = tempTodos.filter((i) => i.isComplete);
      }

      if (status === "انجام نشده") {
        tempTodos = tempTodos.filter((i) => !i.isComplete);
      }

      return { ...state, filtered_todos: tempTodos };
    }

    default: {
      return state;
    }
  }
};

export default filter_reducer;
