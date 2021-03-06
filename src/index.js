import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Context
import TodoProvider from "./Providers/context/todo_context";
import FilterProvider from "./Providers/context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </TodoProvider>
);
