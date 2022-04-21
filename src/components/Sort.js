import React from "react";
import { useFilter } from "../Providers/context/filter_context";

const Sort = () => {
  const { sort, updateSort } = useFilter();

  return (
    <select className="sort" value={sort} onChange={updateSort}>
      <option value="oldest">قدیمی ترین</option>
      <option value="newest">جدید ترین</option>
    </select>
  );
};

export default Sort;
