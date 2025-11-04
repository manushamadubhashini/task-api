# Build a Simple Task Management API

A simple RESTful API for managing tasks built with Node.js, Express.js, and MongoDB.

## Features

- Create, read, update and  delete tasks
- Input validation with express-validator
- MongoDB database integration
- Proper error handling and status codes
- Postman collection included

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Validation**: Express Validator
- **Environment**: dotenv

## Prerequisites

- Node.js (v14+)
- MongoDB
- Postman

## Installation

1. **Clone the repository**
```bash
git clone git@github.com:manushamadubhashini/task-api.git
cd task-api
```

2. **Install dependencies**
```bash
npm install express mongoose express-validator dotenv
```

3. **Create `.env` file**
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/taskmanagement
NODE_ENV=development
```


5. **Run the application**
```bash
npm run dev
```

Server will run at `http://localhost:3000`

## Project Structure

```
task-api/
├── postman/
│   └── Task Management.postman_collection.json
├── src/
│   ├── config/
│   │   └── dbConnection.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── dto/
│   │   └── taskDTO.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── taskValidator.js
│   ├── models/
│   │   └── taskModel.js
│   ├── routes/
│   │   └── taskRoute.js
│   ├── services/
│   │   └── taskService.js
│   ├── utils/
│   │   └── customError.js
│   ├── app.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## API Endpoints

Base URL: `http://localhost:3000/api/v1/tasks`

### 1. Create Task
**POST** `/create`

Request:
```json
{
   "title" : "Task 5",
   "description" : "This is task 5",
   "status" : "pending"
}
```

Response (201):
```json
{
    "message": "Task created successfully",
    "data": {
        "id": "T005",
        "title": "Task 5",
        "description": "This is task 5",
        "status": "pending",
        "_id": "6909c995b7a10bcb07015c3f",
        "createdAt": "2025-11-04T09:38:29.632Z",
        "updatedAt": "2025-11-04T09:38:29.632Z",
        "__v": 0
    }
}
```

### 2. Get All Tasks
**GET** `/getAll`

Response (200):
```json
{
    "message": "Tasks fetched successfully",
    "data": [
        {
            "_id": "6909c995b7a10bcb07015c3f",
            "id": "T005",
            "title": "Task 5",
            "description": "This is task 5",
            "status": "pending",
            "createdAt": "2025-11-04T09:38:29.632Z",
            "updatedAt": "2025-11-04T09:38:29.632Z",
            "__v": 0
        }
    ]
}
```

### 3. Get Task by ID
**GET** `/get/:id`

Response (200):
```json
{
    "message": "Task fetched successfully",
    "data": {
        "_id": "6909c995b7a10bcb07015c3f",
        "id": "T005",
        "title": "Task 5",
        "description": "This is task 5",
        "status": "pending",
        "createdAt": "2025-11-04T09:38:29.632Z",
        "updatedAt": "2025-11-04T09:38:29.632Z",
        "__v": 0
    }
}
```

### 4. Delete Task
**DELETE** `/delete/:id`

Response (200):
```json
{
    "message": "Task deleted successfully",
    "data": {
        "_id": "69098178f4cdd31945052ef5",
        "id": "T002",
        "title": "task3",
        "description": "this is a task 3",
        "status": "pending",
        "createdAt": "2025-11-04T04:30:48.107Z",
        "updatedAt": "2025-11-04T06:45:04.058Z",
        "__v": 0
    }
}
```

## Testing with Postman

1. Open Postman
2. Click **Import**
3. Select `postman/Task Management.postman_collection.json`
4. Run the requests

## Troubleshooting

**MongoDB Connection Error**
- Ensure MongoDB is running: `mongod`
- Check `MONGODB_URI` in `.env`

## Author

Manusha Madubhashini
