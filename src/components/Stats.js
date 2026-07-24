import React from 'react';
import '../styles/Stats.css';

// Stats Component - shows progress statistics
function Stats({ tasks }) {
  // Calculate completed tasks
  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;
  
  // Calculate percentage
  const percentage = totalCount > 0 
    ? Math.round((completedCount / totalCount) * 100)
    : 0;

  return (
    <div className="stats-section">
      <div className="stat-card">
        <h3>Tasks Completed</h3>
        <p className="stat-number">{completedCount}/{totalCount}</p>
      </div>

      <div className="stat-card">
        <h3>Progress</h3>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="stat-number">{percentage}%</p>
      </div>

      <div className="stat-card">
        <h3>Remaining</h3>
        <p className="stat-number">{totalCount - completedCount}</p>
      </div>
    </div>
  );
}

export default Stats;
