import React from "react";

function Task({ text, category, index, onDelete }) {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;