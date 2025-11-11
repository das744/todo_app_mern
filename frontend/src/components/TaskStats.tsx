
// src/components/TaskStats.tsx
import { Task } from '../types';

interface Props {
  tasks: Task[];  // Array of all tasks
}

const TaskStats = ({ tasks }: Props) => {
  const total = tasks.length;  // Total number of tasks
  const completed = tasks.filter((t) => t.status === 'Completed').length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div style={{ marginBottom: '20px' }}>
      <p>Total tasks: {total}</p>
      <p>Completed: {completed} ({percent}%)</p>
    </div>
  );
};

export default TaskStats;
