
//src/components/controllers/task.controller.ts

// Controller functions for Task API endpoints
import { Request, Response } from 'express';
import Task, { ITask } from '../models/task.models';

// GET /tasks - Fetch all tasks
export const getTasks = async (_req: Request, res: Response): Promise<void> => {
  const tasks = await Task.find();
  res.json(tasks);
};

// POST /tasks - Add a new task
export const addTask = async (req: Request, res: Response): Promise<void> => {
  const { title, description } = req.body;
  if (!title) {
    res.status(400).json({ error: 'Title is required' });
    return;
  }
  const newTask: ITask = new Task({ title, description });
  await newTask.save();
  res.status(201).json(newTask);
};

// PUT /tasks/:id - Update an existing task
export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedTask);
};

// DELETE /tasks/:id - Delete a task
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({ message: 'Task deleted successfully' });
};
