
//src/app.ts

// Main Express app configuration
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/task.routes';

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());           // Enable CORS
app.use(express.json());   // Parse JSON body

// Routes
app.use('/tasks', taskRoutes);

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || '';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

export default app;
