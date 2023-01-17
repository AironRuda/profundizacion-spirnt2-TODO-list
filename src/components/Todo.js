import { CloseButton, InputGroup } from "react-bootstrap";

const Todo = ({ todo, handleDelete }) => {
  const { id, title, completed } = todo;

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom solid">
      <input type="checkbox" />
      {!completed ? (
        <p>{title}</p>
      ) : (
        <p>
          <s>{title}</s>
        </p>
      )}

      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        onClick={() => handleDelete(id)}
      ></button>
    </div>
  );
};

export default Todo;
