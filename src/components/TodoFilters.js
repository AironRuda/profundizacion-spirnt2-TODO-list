import React from "react";
import {
  FilterButton,
  FilterButtonContainer,
  FiltersContainer,
  ItemsLeft,
} from "./TodoFilters.component";

const TodoFilters = () => {
  return (
    <FiltersContainer>
      <ItemsLeft />
      <FilterButtonContainer>
        <FilterButton action={() => {}} active="All" filter="All" />
        <FilterButton action={() => {}} active="All" filter="Active" />
        <FilterButton action={() => {}} active="All" filter="Completed" />
      </FilterButtonContainer>
      <button className=" text-gray-400 hove:text-white">
        Clear Completed
      </button>
    </FiltersContainer>
  );
};

export default TodoFilters;
