import React, { useState } from "react";

// Icons
import { FaRegEdit } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

// Context
import { useTodo } from "../Providers/context/todo_context";
import { REMOVE_TASK, TOGGLE_TASK } from "../actions";
import Modal from "./Modal";

const TodoItem = ({ item }) => {
  const { dispatch } = useTodo();
  const [isEditing, setIsEditing] = useState(false);

  const handleRemove = () => {
    dispatch({ type: REMOVE_TASK, payload: item.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleToggle = () => {
    dispatch({ type: TOGGLE_TASK, payload: item.id });
  };

  if (isEditing) {
    return (
      <Modal item={item} isEditing={isEditing} setIsEditing={setIsEditing} />
    );
  }

  return (
    <div className={`todo-item ${item.isComplete && "deactive"}`}>
      <div className="todo-title">
        <h4 onClick={handleToggle}>{item.name}</h4>
        <span>
          {item.date},{item.time}
        </span>
      </div>
      <div className="buttons">
        <button className="edit-btn" onClick={handleEdit}>
          <FaRegEdit />
        </button>
        <button className="trash-btn" onClick={handleRemove}>
          <AiOutlineCloseCircle />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
