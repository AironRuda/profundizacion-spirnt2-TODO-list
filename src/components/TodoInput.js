import React from "react";

const TodoInput = () => {
  return (
    <div className="mt-6 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pinter-events-none">
        <span className="border border-primary border-solid p-1 rounded-circle"></span>
      </div>
      <input type="text" className="focus: shadow-lg p-12" />
      <p className=""></p>
    </div>
  );
};

export default TodoInput;
