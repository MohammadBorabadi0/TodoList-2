import React from "react";
import moment from "jalali-moment";
import {
  ADD_TASK,
  EDIT_TASK,
  LOAD_TASKS,
  REMOVE_TASK,
  TOGGLE_TASK,
} from "../../actions";

const todo_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_TASKS: {
      return { ...state, todos: action.payload };
    }

    case ADD_TASK: {
      const updatedTodos = [...state.todos];
      updatedTodos.push({
        id: new Date().getTime(),
        completeDate: new Date().getTime(),
        name: action.payload,
        isComplete: false,
        time: moment().locale("fa").format("HH:mm:ss"),
        date: moment().locale("fa").format("YYYY/MM:DD"),
      });

      return { ...state, todos: updatedTodos };
    }

    case TOGGLE_TASK: {
      const updatedTodos = [...state.todos];
      const index = updatedTodos.findIndex((i) => i.id === action.payload);
      const updatedItem = updatedTodos[index];
      updatedItem.isComplete = !updatedItem.isComplete;
      return { ...state, todos: updatedTodos };
    }

    case EDIT_TASK: {
      const updatedTodos = [...state.todos];
      const index = updatedTodos.findIndex((i) => i.id === action.id);
      const updatedItem = updatedTodos[index];
      updatedItem.name = action.payload;
      updatedItem.time = moment().locale("fa").format("HH:mm:ss");
      updatedItem.date = moment().locale("fa").format("YYYY/MM:DD");
      return { ...state, todos: updatedTodos };
    }

    case REMOVE_TASK: {
      const updatedTodos = [...state.todos];
      const filteredTodos = updatedTodos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filteredTodos };
    }

    default: {
      return state;
    }
  }
};

export default todo_reducer;
