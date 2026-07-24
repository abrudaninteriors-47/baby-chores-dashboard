import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Stats from './components/Stats';

function App() {
  // State to hold all tasks
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage when app starts
    const savedTasks = localStorage.getItem('babyChores');
    return savedTasks ? JSON.parse(savedTasks) : getDefaultTasks();
  });

  // State to filter tasks by category
  const [filter, setFilter] = useState('all');

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('babyChores', JSON.stringify(tasks));
  }, [tasks]);

  // Default tasks for a new user
  function getDefaultTasks() {
    return [
      { id: 1, name: 'Feeding', category: 'feeding', completed: false, time: '8:00 AM' },
      { id: 2, name: 'Diaper Change', category: 'diaper', completed: false, time: '10:30 AM' },
      { id: 3, name: 'Nap Time', category: 'sleep', completed: false, time: '12:00 PM' },
      { id: 4, name: 'Playtime', category: 'play', completed: false, time: '2:00 PM' },
      { id: 5, name: 'Bath Time', category: 'bath', completed: false, time: '6:00 PM' },
      { id: 6, name: 'Bedtime Routine', category: 'sleep', completed: false, time: '8:00 PM' },
    ];
  }

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Add a new task
  const addTask = (taskName, category, time) => {
    const newTask = {
      id: Date.now(), // Simple unique ID using timestamp
      name: taskName,
      category: category,
      completed: false,
      time: time,
    };
    setTasks([...tasks, newTask]);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks based on selected category
  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === filter);

  return (
    <div className="app">
      <header className="app-header">
        <h1>👶 Baby Chores Dashboard</h1>
        <p>Track your daily baby care tasks</p>
      </header>

      <main className="app-main">
        {/* Stats Section */}
        <Stats tasks={filteredTasks} />

        {/* Filter Section */}
        <div className="filter-section">
          <h3>Filter by Category:</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Tasks
            </button>
            <button 
              className={`filter-btn ${filter === 'feeding' ? 'active' : ''}`}
              onClick={() => setFilter('feeding')}
            >
              🍼 Feeding
            </button>
            <button 
              className={`filter-btn ${filter === 'diaper' ? 'active' : ''}`}
              onClick={() => setFilter('diaper')}
            >
              🧷 Diapers
            </button>
            <button 
              className={`filter-btn ${filter === 'sleep' ? 'active' : ''}`}
              onClick={() => setFilter('sleep')}
            >
              😴 Sleep
            </button>
            <button 
              className={`filter-btn ${filter === 'play' ? 'active' : ''}`}
              onClick={() => setFilter('play')}
            >
              🎮 Play
            </button>
            <button 
              className={`filter-btn ${filter === 'bath' ? 'active' : ''}`}
              onClick={() => setFilter('bath')}
            >
              🛁 Bath
            </button>
          </div>
        </div>

        {/* Task List */}
        <TaskList 
          tasks={filteredTasks} 
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        {/* Add New Task Form */}
        <TaskForm onAddTask={addTask} />
      </main>
    </div>
  );
}

export default App;
