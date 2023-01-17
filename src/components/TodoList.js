import React from "react";
import TodoFilters from "./TodoFilters.js";

const TodoList = ({ children }) => {
  return (
    <div className="d-flex flex-column mt-2 rounded-1  shadow-2xl">
      {children}
      <TodoFilters />
    </div>
  );
};

export default TodoList;
