import React from "react";
import { useFilter } from "../Providers/context/filter_context";

const Search = () => {
  const { filters, updateFilters } = useFilter();
  const { text } = filters;

  return (
    <div className="search">
      <input
        type="text"
        placeholder="جستجوی تسک"
        name="text"
        value={text}
        onChange={updateFilters}
      />
    </div>
  );
};

export default Search;
