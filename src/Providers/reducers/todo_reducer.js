import React from "react";
import {
  ADD_TASK,
  EDIT_TASK,
  FILTER_TASK,
  REMOVE_TASK,
  SORT_TASK,
  TOGGLE_TASK,
  UPDATE_FILTER,
  UPDATE_SORT,
} from "../../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const updatedTodos = [...state.todos];
      updatedTodos.push({
        id: Math.round(Math.random() * 1000000),
        todo: action.payload,
        isComplete: false,
        completeDate: new Date().getTime(),
      });
      return { ...state, todos: updatedTodos, filtered_todos: updatedTodos };
    }

    case REMOVE_TASK: {
      const updatedTodos = [...state.todos];
      const filteredTodos = updatedTodos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filteredTodos, filtered_todos: filteredTodos };
    }

    case EDIT_TASK: {
      const updatedTodos = [...state.todos];
      const index = updatedTodos.findIndex((i) => i.id === action.id);
      const updatedItem = updatedTodos[index];
      updatedItem.todo = action.payload;

      return { ...state, todos: updatedTodos, filtered_todos: updatedTodos };
    }

    case TOGGLE_TASK: {
      const updatedTodos = [...state.todos];
      const index = updatedTodos.findIndex((i) => i.id === action.payload);
      const updatedItem = updatedTodos[index];
      updatedItem.isComplete = !updatedItem.isComplete;

      return { ...state, todos: updatedTodos, filtered_todos: updatedTodos };
    }

    case UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }

    case SORT_TASK: {
      const { filtered_todos, sort } = state;
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
      return { ...state, filter: action.payload };
    }

    case FILTER_TASK: {
      const { filter, todos } = state;

      let tempTodos = [...todos];

      if (filter === "همه") {
        tempTodos = todos;
      }

      if (filter === "انجام نشده") {
        tempTodos = tempTodos.filter((i) => !i.isComplete);
      }

      if (filter === "انجام شده") {
        tempTodos = tempTodos.filter((i) => i.isComplete);
      }

      return { ...state, filtered_todos: tempTodos };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
