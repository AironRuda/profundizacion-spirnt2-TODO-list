import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "aseo",
      completed: false,
    },
    {
      id: 2,
      title: "comer",
      completed: true,
    },
    {
      id: 3,
      title: "pasear",
      completed: false,
    },
  ]);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title: title,
      completed: false,
    };
    const todoList = [...todos, newTodo];
    setTodos(todoList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  return (
    // <div className="h-full flex items-center justify py-20 px-5">
    <div className=" h-100 d-flex align-items-center justify-content-around pt-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
