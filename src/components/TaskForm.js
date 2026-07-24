import React, { useState } from 'react';
import '../styles/TaskForm.css';

// TaskForm Component - form to add new tasks
function TaskForm({ onAddTask }) {
  // State for form inputs
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('feeding');
  const [time, setTime] = useState('12:00 PM');
  const [showForm, setShowForm] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!taskName.trim()) {
      alert('Please enter a task name');
      return;
    }

    // Call parent function to add task
    onAddTask(taskName, category, time);

    // Reset form
    setTaskName('');
    setCategory('feeding');
    setTime('12:00 PM');
    setShowForm(false);
  };

  return (
    <div className="task-form-container">
      {/* Toggle button to show/hide form */}
      {!showForm ? (
        <button 
          className="add-task-btn"
          onClick={() => setShowForm(true)}
        >
          + Add New Task
        </button>
      ) : (
        <form className="task-form" onSubmit={handleSubmit}>
          <h3>Add a New Task</h3>

          {/* Task Name Input */}
          <div className="form-group">
            <label htmlFor="taskName">Task Name:</label>
            <input
              type="text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="e.g., Feeding, Playtime..."
            />
          </div>

          {/* Category Select */}
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="feeding">🍼 Feeding</option>
              <option value="diaper">🧷 Diaper Change</option>
              <option value="sleep">😴 Sleep/Nap</option>
              <option value="play">🎮 Playtime</option>
              <option value="bath">🛁 Bath Time</option>
            </select>
          </div>

          {/* Time Input */}
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="text"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="e.g., 2:00 PM"
            />
          </div>

          {/* Submit Buttons */}
          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              Add Task
            </button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default TaskForm;
