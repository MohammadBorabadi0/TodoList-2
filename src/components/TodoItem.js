import React, { useState } from "react";

// Icons
import { FaRegEdit } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";

// Context
import { useTodo } from "../Providers/context/todo_context";
import { EDIT_TASK, REMOVE_TASK } from "../actions";
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

  if (isEditing) {
    return (
      <Modal item={item} isEditing={isEditing} setIsEditing={setIsEditing} />
    );
  }

  return (
    <div className="todo-item">
      <h4>{item.todo}</h4>
      <div className="buttons">
        <button className="edit-btn" onClick={handleEdit}>
          <FaRegEdit />
        </button>
        <button className="trash-btn" onClick={handleRemove}>
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
