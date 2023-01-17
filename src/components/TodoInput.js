import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox disabled />
        <input
          type="text"
          placeholder="Agregar una tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => handleTodo(e)}
        />
      </InputGroup>
    </div>
  );
};

export default TodoInput;
