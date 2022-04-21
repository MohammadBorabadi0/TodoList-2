import React, { createContext, useContext, useEffect, useReducer } from "react";
import { LOAD_TASKS } from "../../actions";
import todo_reducer from "../reducers/todo_reducer";

// InitialState
const initialState = {
  todos: [],
};

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todo_reducer, initialState);

  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem("tasks"));
  //   if (savedData) {
  //     dispatch({ type: LOAD_TASKS, payload: savedData });
  //   }
  // }, []);

  // useEffect(() => {
  //   JSON.stringify(localStorage.setItem("tasks", state.todos));
  // }, [state.todos]);

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const useTodo = () => useContext(TodoContext);
