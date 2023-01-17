const Todo = ({ todo, handleSetComplete, handleDelete }) => {
  const { id, title, completed } = todo;

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom solid">
      <input
        type="checkbox"
        onClick={() => {
          handleSetComplete(id);
        }}
      />
      {/* <input type="checkbox" /> */}
      {!completed ? (
        <p>{title}</p>
      ) : (
        <p>
          <s>{title}</s>
        </p>
      )}

      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => handleDelete(id)}
      ></button>
    </div>
  );
};

export default Todo;
