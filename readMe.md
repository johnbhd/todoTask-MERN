# To-Do Task Application (MERN Stack)

A simple To-Do Task Application built with the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to add tasks with titles and descriptions, and view them in a list. The frontend is built with **React**, **Tailwind CSS**, **TypeScript**, and **Vite**.

## Features

- **Add Tasks:** Users can add a new task with a title and description.
- **View Tasks:** Users can view the list of all tasks that have been added.
- **Task Management:** Each task has a title, description, and state. Tasks can be marked as completed.

## Technologies Used

- **MongoDB** for database
- **Express** for the backend framework
- **React** for the frontend
- **Node.js** for the backend runtime
- **Axios** for making HTTP requests
- **Tailwind CSS** for styling the frontend
- **TypeScript** for type safety in the frontend
- **Vite** for fast and efficient frontend development
- **Postman** for API testing


# MERN Stack To-Do App

## 1. Project Setup

### Install Dependencies

Go to both the client and server directories and install the required dependencies.

#### Server:

```bash
cd server
npm install
```

#### Client:

```bash
cd client
npm install
```

## 2. Configure MongoDB

Make sure you have MongoDB installed locally or use MongoDB Atlas for cloud-based databases. Set your MongoDB connection URI in `server/config/db.js`.

## 3. Run the Application

### Server:

Start the backend server by running:

```bash
cd server
npm start
```

### Client:

Start the frontend application by running:

```bash
cd client
npm run dev
```

## 4. Open the App

Once both servers are running, you can open the app in your browser:

```bash
http://localhost:3000
```

## 5. Testing API with Postman

You can use Postman to test the API routes for your application. Here's how:

### `GET /tasks` - Get all tasks.

**Request:**
```bash
GET http://localhost:5000/tasks
```

**Response:**
Returns a list of all tasks in the database.

### `POST /tasks` - Create a new task.

**Request:**
```bash
POST http://localhost:5000/tasks
```

**Body (JSON):**
```json
{
  "title": "New Task",
  "description": "This is a description of the new task."
}
```

**Response:**
Returns the newly created task object.

### `PATCH /tasks/:id` - Update the task state (e.g., mark as completed).

**Request:**
```bash
PATCH http://localhost:5000/tasks/:id
```

**Body (JSON):**
```json
{
  "completed": true
}
```

**Response:**
Returns the updated task object.

### `DELETE /tasks/:id` - Delete a task.

**Request:**
```bash
DELETE http://localhost:5000/tasks/:id
```

**Response:**
Returns a success message indicating the task has been deleted.

## 6. Usage

### Add a Task

- Go to the app’s homepage.
- Enter the task title and description.
- Click the "Add Task" button.

### View Tasks

- All tasks will be displayed on the homepage, showing their titles and descriptions.

### Update Task State

- Each task has an option to be marked as completed.

## 7. API Routes (Server)

- `GET /tasks` - Get all tasks.
- `POST /tasks` - Create a new task.
- `PATCH /tasks/:id` - Update the task state (e.g., mark as completed).
- `DELETE /tasks/:id` - Delete a task.

## 8. Video Tutorial

For a step-by-step tutorial on how the To-Do App was built, check out the video by Net Ninja:

[Net Ninja - MERN Stack To-Do App Tutorial](https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE&index=1)

## 9. License

This project is licensed under the MIT License - see the LICENSE file for details.

