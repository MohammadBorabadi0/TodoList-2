import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  FILTER_TASK,
  SORT_TASK,
  UPDATE_FILTER,
  UPDATE_SORT,
} from "../../actions";

// Reducer
import reducer from "../reducers/todo_reducer";

// InitialState
const initialState = {
  todos: [],
  filtered_todos: [],
  filter: "همه",
  sort: "oldest",
};

// CreateContext
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateFilter = (e) => {
    let value = e.target.textContent;
    dispatch({ type: UPDATE_FILTER, payload: value });
  };

  const updateSort = (e) => {
    let value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  useEffect(() => {
    dispatch({ type: FILTER_TASK });
    dispatch({ type: SORT_TASK });
  }, [state.todos, state.filter, state.sort]);

  return (
    <TodoContext.Provider
      value={{ ...state, dispatch, updateSort, updateFilter }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

// Custom Hook
export const useTodo = () => useContext(TodoContext);
