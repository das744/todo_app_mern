
//src/components/routes/task.routes.ts

// Task API routes
import express from 'express';
import { getTasks, addTask, updateTask, deleteTask } from '../controllers/task.controller';

const router = express.Router();

// Define REST API routes
router.get('/', getTasks);         // Get all tasks
router.post('/', addTask);         // Add a task
router.put('/:id', updateTask);    // Update a task
router.delete('/:id', deleteTask); // Delete a task

export default router;
