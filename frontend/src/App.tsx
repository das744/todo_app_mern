
// src/App.tsx
import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import TaskFilters from './components/TaskFilters';
import axios from 'axios';
import { Task } from './types';

function App() {
  const [refresh, setRefresh] = useState(false);  // Used to refresh task list
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState<'list' | 'kanban'>('list');
  const [tasks, setTasks] = useState<Task[]>([]); //store tasks for stats

    // Fetch tasks for stats
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/tasks`);
      setTasks(res.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  // Refresh stats whenever tasks change
  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{textAlign:"center"}}>To-Do App using MERN</h1>
      <TaskForm onTaskAdded={() => setRefresh(!refresh)} />
      <TaskFilters filter={filter} setFilter={setFilter} />
      <div style={{ marginBottom: '20px' }}>
        <label>View: </label>
        <select value={view} onChange={(e) => setView(e.target.value as 'list' | 'kanban')}>
          <option value="list">List View</option>
          <option value="kanban">Kanban View</option>
        </select>
      </div>
      <TaskStats tasks={tasks} />
      <TaskList refresh={refresh} filter={filter} view={view} />
    </div>
  );
}

export default App;

