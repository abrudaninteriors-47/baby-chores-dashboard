import React from 'react';
import '../styles/TaskCard.css';

// TaskCard Component - displays individual task
function TaskCard({ task, onToggle, onDelete }) {
  // Get emoji for category
  const getCategoryEmoji = (category) => {
    const emojis = {
      feeding: '🍼',
      diaper: '🧷',
      sleep: '😴',
      play: '🎮',
      bath: '🛁',
    };
    return emojis[category] || '✅';
  };

  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        {/* Checkbox to toggle task completion */}
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        
        <div className="task-info">
          <span className="task-emoji">{getCategoryEmoji(task.category)}</span>
          <div className="task-text">
            <h3 className="task-name">{task.name}</h3>
            <p className="task-time">⏰ {task.time}</p>
          </div>
        </div>
      </div>

      {/* Delete button */}
      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        title="Delete task"
      >
        ✕
      </button>
    </div>
  );
}

export default TaskCard;
