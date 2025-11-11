
// src/components/TaskForm.tsx
import { useState } from 'react';
import axios from 'axios';
import { Task } from '../types';

interface Props {
  onTaskAdded: () => void;  // Callback to notify parent when task is added
}

const TaskForm = ({ onTaskAdded }: Props) => {

  // Local state to hold form input
  const [task, setTask] = useState<Task>({ 
    title: '', 
    description: '', 
    status: 'Not Started' });

  // Regular expression to block numbers
  const hasNumbers = (text: string) => /\d/.test(text);

  // Function triggered on form submit   
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();  // Prevent page refresh

   // Basic input validation
  if (!task.title.trim()){

   return alert('Title is required');
  }

  // Prevent numbers in title
  if (hasNumbers(task.title))
      return alert('Title cannot contain numbers');

   // Prevent numbers in description
  if (task.description && hasNumbers(task.description))
      return alert('Description cannot contain numbers');


  try {
     // Send POST request to backend to add task
    await axios.post('http://localhost:5000/tasks', task); 

      // Reset form fields 
    setTask({ title: '', description: '', status: 'Not Started' });

     // Notify parent to refresh task list
    onTaskAdded();
  } catch (error) {
    console.error('Error adding task:', error);
    alert('Failed to add task. Check console.');
  }
};

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        placeholder="Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <input
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value as Task['status'] })}
      >
        <option>Not Started</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
