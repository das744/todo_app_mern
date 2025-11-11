

// src/components/TaskFilters.tsx
interface Props {
  filter: string;
  setFilter: (status: string) => void;
}

const TaskFilters = ({ filter, setFilter }: Props) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskFilters;
