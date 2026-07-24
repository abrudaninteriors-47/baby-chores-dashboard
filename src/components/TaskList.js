import React from 'react';
import TaskCard from './TaskCard';
import '../styles/TaskList.css';

// TaskList Component - displays all tasks
function TaskList({ tasks, onToggle, onDelete }) {
  // Show message if no tasks
  if (tasks.length === 0) {
    return (
      <div className="task-list empty">
        <p>No tasks yet. Add one to get started! 📋</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <h2>Today's Tasks</h2>
      <div className="tasks-container">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
