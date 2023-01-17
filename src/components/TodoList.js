import React from "react";
import Todo from "./Todo.js";
import TodoFilters from "./TodoFilters.js";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <div className="d-flex flex-column mt-2 rounded-1  shadow-2xl">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />;
      })}
      <TodoFilters />
    </div>
  );
};

export default TodoList;
