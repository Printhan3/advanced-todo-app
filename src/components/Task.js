// Task.js
import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle()} />
      <span>{task.text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Task;

    