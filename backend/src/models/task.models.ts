
//src/components/models/task.models.ts

// Mongoose model for Task collection in MongoDB
import mongoose, { Document, Schema } from 'mongoose';

// Define interface for TypeScript type
export interface ITask extends Document {
  title: string;
  description?: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

// Define Task schema
const TaskSchema = new Schema<ITask>({
  title: { type: String, required: true }, // Task title is required
  description: { type: String },
  status: { 
    type: String, 
    enum: ['Not Started', 'In Progress', 'Completed'], 
    default: 'Not Started' }
} );

// Export Task model
export default mongoose.model<ITask>('Task', TaskSchema);
