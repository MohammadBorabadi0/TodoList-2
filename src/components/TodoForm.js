import React, { useEffect, useRef, useState } from "react";
import { ADD_TASK } from "../actions";

// Context
import { useTodo } from "../Providers/context/todo_context";

const TodoForm = () => {
  const { dispatch } = useTodo();
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim() === "") {
      alert("قسمت افزودن تسک نباید خالی باشد.");
      return;
    }

    dispatch({ type: ADD_TASK, payload: inputVal });
    setInputVal("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="افزودن تسک جدید"
          ref={inputRef}
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
        />
        <button type="submit">اضافه کردن</button>
      </form>
    </div>
  );
};

export default TodoForm;
