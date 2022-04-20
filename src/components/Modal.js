import React, { useEffect, useRef, useState } from "react";

import { GrFormClose } from "react-icons/gr";
import { EDIT_TASK } from "../actions";
import { useTodo } from "../Providers/context/todo_context";

const Modal = ({ item, isEditing, setIsEditing }) => {
  const inputRef = useRef();
  const modalRef = useRef();
  const [inputVal, setInputVal] = useState(item.todo);
  const { dispatch } = useTodo();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const closeModal = () => {
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim() === "") {
      alert("مقدار تسک نباید خالی باشد !!!");
      return;
    }

    dispatch({ type: EDIT_TASK, id: item.id, payload: inputVal });
    setIsEditing(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>ویرایش تودو</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit" className="edit-btn">
            ویرایش
          </button>
          <button className="close-modal" onClick={closeModal}>
            <GrFormClose />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
