import React from "react";
import Todo from "./Todo.js";
import TodoFilters from "./TodoFilters.js";

const TodoList = ({
  todos,
  handleSetComplete,
  handleDelete,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearComplete,
}) => {
  return (
    <div className="d-flex flex-column mt-2 rounded-1  shadow-2xl">
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
          />
        );
      })}
      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export default TodoList;
