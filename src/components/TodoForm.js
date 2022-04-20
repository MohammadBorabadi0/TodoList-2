import React from "react";

const TodoForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="افزودن تسک جدید" />
        <button type="submit">اضافه کردن</button>
      </form>
    </div>
  );
};

export default TodoForm;
