import React from "react";
import { Form } from "react-bootstrap";

const Title = () => {
  return (
    <div className=" d-flex align-items-center">
      <h1 className="d-inline mx-3">TODO LIST</h1>
      <Form className=" d-inline">
        <Form.Check type="switch" id="custom-switch" label="Tema" />
      </Form>
    </div>
  );
};

export default Title;
