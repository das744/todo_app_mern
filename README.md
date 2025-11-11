
# MERN Todo App
A full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to create, view, update, and delete tasks.  
Each task includes a title, description, and status (Not Started, In Progress, Completed).

##  Features
- Add, edit, and delete tasks
- Filter tasks by status
- Prevent numeric input in task title and description
- Fully connected frontend and backend (React + Express)
- MongoDB database integration with Mongoose
- TypeScript support on both client and server

---
##  Project Structure
todo_App_MERN/
│
├── backend/ # Node.js + Express + MongoDB + TypeScript
│ ├── src/
│ ├── package.json
│ ├── tsconfig.json
│ └── .env
│
├── frontend/ # React (TypeScript)
│ ├── src/
│ ├── package.json
│ └── README.md
│
└── README.md 


---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/das744/todo_app_mern.git
cd todo_App_MERN

### 2. Setup Backend

cd backend
npm install

### 3. Create a .env file inside the /backend folder:

PORT=5000
MONGO_URI=mongodb://localhost:27017/todo_db_mern


### 4. Run backend in development mode:

npm run dev

### 5. Setup Forntend

cd ../frontend
npm install

### 6. Run frontend
npm start

### 7. Access the App

Open your browser and navigate to: http://localhost:3000


### Technologies Used

Frontend: React (TypeScript), Axios

Backend: Node.js, Express, Mongoose, TypeScript, dotenv, cors

Database: MongoDB Compass (locally)

### Author
Developed by Ajanta Das
LinkedIn: https://linkedin.com/in/4546
GitHub: http://github.com/das744
Portfolio: https://adasportfolio.net
