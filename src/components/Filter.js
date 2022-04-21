import React from "react";
import { useFilter } from "../Providers/context/filter_context";

const Filter = () => {
  const { filters, updateFilters } = useFilter();
  const { status } = filters;

  return (
    <div className="filter">
      <button
        name="status"
        onClick={updateFilters}
        className={`${status === "همه" && "active"}`}
      >
        همه
      </button>
      <button
        name="status"
        onClick={updateFilters}
        className={`${status === "انجام شده" && "active"}`}
      >
        انجام شده
      </button>
      <button
        name="status"
        onClick={updateFilters}
        className={`${status === "انجام نشده" && "active"}`}
      >
        انجام نشده
      </button>
    </div>
  );
};

export default Filter;
