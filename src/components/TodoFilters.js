import React from "react";
import {
  FilterButton,
  FilterButtonContainer,
  FiltersContainer,
  ItemsLeft,
} from "./TodoFilters.component";

const TodoFilters = ({
  total,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
}) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtonContainer>
        <FilterButton
          action={() => showAllTodos()}
          active={activeFilter}
          filter="All"
        />
        <FilterButton
          action={() => showActiveTodos()}
          active={activeFilter}
          filter="Active"
        />
        <FilterButton
          action={() => showCompletedTodos()}
          active={activeFilter}
          filter="Completed"
        />
      </FilterButtonContainer>
      <button
        onClick={() => handleClearComplete()}
        className=" text-gray-400 hove:text-white"
      >
        Clear Completed
      </button>
    </FiltersContainer>
  );
};

export default TodoFilters;
