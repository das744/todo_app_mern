// TypeScript interface for a Task object

export interface Task {
  _id?: string;           // Optional ObjectId
  title: string;          // Task title (required)
  description: string;   //  description
  status: 'Not Started' | 'In Progress' | 'Completed';    // Task status
}
