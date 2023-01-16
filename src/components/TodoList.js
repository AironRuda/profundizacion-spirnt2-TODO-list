import React from "react";

const TodoList = ({ children }) => {
  return (
    <div className="d-flex flex-column mt-2 rounded-1  shadow-2xl">
      {children}
    </div>
  );
};

export default TodoList;
