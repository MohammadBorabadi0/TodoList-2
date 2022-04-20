import React from "react";
import { useTodo } from "../Providers/context/todo_context";

const Sort = () => {
  const { sort, updateSort } = useTodo();

  return (
    <select className="sort" value={sort} onChange={updateSort}>
      <option value="oldest">قدیمی ترین</option>
      <option value="newest">جدید ترین</option>
    </select>
  );
};

export default Sort;
