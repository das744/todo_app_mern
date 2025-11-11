
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Task } from '../types';

interface Props {
  refresh: boolean; // Trigger refresh when a task is added/updated
  filter: string;
  view: 'list' | 'kanban';
}

const TaskList = ({ refresh, filter, view }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  // Delete task
  const deleteTask = async (id?: string) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  // Update status
  const updateStatus = async (id?: string, status?: Task['status']) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, { status });
      fetchTasks();
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  // Fetch tasks initially and whenever refresh changes
  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  // Filter tasks based on selected status
  const filteredTasks = filter === 'All' ? tasks : tasks.filter((t) => t.status === filter);

  // --- Stats calculation ---
  const totalTasks = tasks.length;
  const notStarted = tasks.filter((t) => t.status === 'Not Started').length;
  const inProgress = tasks.filter((t) => t.status === 'In Progress').length;
  const completed = tasks.filter((t) => t.status === 'Completed').length;
  const completedPercentage = totalTasks > 0 ? ((completed / totalTasks) * 100).toFixed(0) : 0;

  return (
    <div>
      {/* --- Display Stats --- */}
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <p><strong>Total Tasks:</strong> {totalTasks}</p>
        <p><strong>Not Started:</strong> {notStarted}</p>
        <p><strong>In Progress:</strong> {inProgress}</p>
        <p><strong>Completed:</strong> {completed} ({completedPercentage}%)</p>
      </div>

      {/* --- Kanban View --- */}
      {view === 'kanban' ? (
        <div style={{ display: 'flex', gap: '20px' }}>
          {(['Not Started', 'In Progress', 'Completed'] as Task['status'][]).map((status) => (
            <div key={status} style={{ border: '1px solid gray', padding: '10px', width: '200px' }}>
              <h3>{status}</h3>
              {filteredTasks
                .filter((t) => t.status === status)
                .map((t) => (
                  <div key={t._id} style={{ border: '1px solid black', margin: '5px', padding: '5px' }}>
                    <strong>{t.title}</strong>
                    <p>{t.description}</p>
                    {t.status !== 'Completed' && (
                      <button onClick={() => updateStatus(t._id, 'Completed')}>Complete</button>
                    )}
                    <button onClick={() => deleteTask(t._id)}>Delete</button>
                  </div>
                ))}
            </div>
          ))}
        </div>
      ) : (
        // --- List View ---
        <div>
          {filteredTasks.map((t) => (
            <div key={t._id} style={{ border: '1px solid gray', margin: '5px', padding: '5px' }}>
              <h3> Title:<strong> {t.title}</strong> - {t.status}</h3>
              <p>Description: {t.description}</p>
              {t.status !== 'Completed' && <button onClick={() => updateStatus(t._id, 'Completed')}>Complete</button>}
              <button onClick={() => deleteTask(t._id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;






// // src/components/TaskList.tsx
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Task } from '../types';

// interface Props {
//   refresh: boolean; // Trigger refresh when a task is added/updated
//   filter: string;
//   view: 'list' | 'kanban';
// }

// const TaskList = ({ refresh, filter, view }: Props) => {
//   const [tasks, setTasks] = useState<Task[]>([]);

//   // Fetch tasks from backend
//   const fetchTasks = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/tasks');
//       setTasks(res.data);
//     } catch (error) {
//       console.error('Failed to fetch tasks:', error);
//     }
//   };


//   // Delete task
//   const deleteTask = async (id?: string) => {
//     try {
//       await axios.delete(`http://localhost:5000/tasks/${id}`);
//       fetchTasks();
//     } catch (error) {
//       console.error('Failed to delete task:', error);
//     }
//   };

//    // Update status
//   const updateStatus = async (id?: string, status?: Task['status']) => {
//     try {
//       await axios.put(`http://localhost:5000/tasks/${id}`, { status });
//       fetchTasks();
//     } catch (error) {
//       console.error('Failed to update task:', error);
//     }
//   };

//   // Fetch tasks initially and whenever refreshFlag changes
//   useEffect(() => {
//     fetchTasks();
//   }, [refresh]);

//   // Filter tasks based on selected status
//   const filteredTasks = filter === 'All' ? tasks : tasks.filter((t) => t.status === filter);

//   if (view === 'kanban') {
//     const statuses: Task['status'][] = ['Not Started', 'In Progress', 'Completed'];
//     return (
//       <div style={{ display: 'flex', gap: '20px' }}>
//         {statuses.map((status) => (
//           <div key={status} style={{ border: '1px solid gray', padding: '10px', width: '200px' }}>
//             <h3>{status}</h3>
//             {filteredTasks
//               .filter((t) => t.status === status)
//               .map((t) => (
//                 <div key={t._id} style={{ border: '1px solid black', margin: '5px', padding: '5px' }}>
//                   <strong>{t.title}</strong>
//                   <p>{t.description}</p>
//                   {t.status !== 'Completed' && (
//                     <button onClick={() => updateStatus(t._id, 'Completed')}>Complete</button>
//                   )}
//                   <button onClick={() => deleteTask(t._id)}>Delete</button>
//                 </div>
//               ))}
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       {filteredTasks.map((t) => (
//         <div key={t._id} style={{ border: '1px solid gray', margin: '5px', padding: '5px' }}>
//           <strong>{t.title}</strong> - {t.status}
//           <p>{t.description}</p>
//           {t.status !== 'Completed' && <button onClick={() => updateStatus(t._id, 'Completed')}>Complete</button>}
//           <button onClick={() => deleteTask(t._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskList;

