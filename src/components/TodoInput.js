import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const TodoInput = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox disabled />
        <Form.Control />
      </InputGroup>
    </div>
  );
};

export default TodoInput;
