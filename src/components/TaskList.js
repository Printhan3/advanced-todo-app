// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
};
export default TaskList;