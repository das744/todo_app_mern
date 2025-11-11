# To-Do App Backend

A simple backend REST API for a To-Do app using **Node.js, TypeScript, Express, and MongoDB**.  
Allows creating, reading, updating, and deleting tasks.
Tasks will be save to MongoDB Compass Database
---

## Setup Instructions

1. Clone the repository:

git clone https://github.com/das744/todo_app_mern.git
cd backend

2. Install dependencies:

npm install

3. Create .env in /backend

PORT=5000
MONGO_URI=mongodb://localhost:27017/todo_db_mern

4. MongoDB Compass is running locally

5. Run the project locally

npm run dev

6. Available API Endpoints

Method	Endpoint	Description
GET	    /tasks	    Fetch all tasks
POST	/tasks	    Add a new task
PUT	    /tasks/:id	Update a task by ID
DELETE	/tasks/:id	Delete a task by ID

7. Technologies / Libraries Used

Node.js, TypeScript, Express, MongoDB / Mongoose, CORS, dotenv

8. Known Limitations / Future Improvements

    a. No authentication (anyone can access the API)
    b. Validation could be improved using a library 
    c. Unit and integration tests are not included yet