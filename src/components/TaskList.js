import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} index={index} {...task} onDelete={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;