import React from "react";
import { CloseButton, InputGroup } from "react-bootstrap";

const Todo = () => {
  return (
    <div className="d-flex align-items-center justify-content-between border-bottom solid">
      <InputGroup className=" align-items-center">
        <InputGroup.Checkbox />
        <InputGroup.Text>texto de tarea</InputGroup.Text>
        <CloseButton />
      </InputGroup>
    </div>
  );
};

export default Todo;
