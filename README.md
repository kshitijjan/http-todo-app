# Todo List API

This project provides a HTTP server for managing a todo list. You can perform CRUD operations (Create, Read, Update, Delete) on todo items.

## Getting Started

To get this project up and running locally, follow these steps:

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Postman or Hoppscotch (for API testing)

### Installation

1. Clone the repository:

   ```bash
   https://github.com/kshitijjan/http-todo-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd http-todo-app
   ```
   
3. Install Express
   ```bash
   npm i express
   ```

### Running the Server

To start the server, run:

```bash
node http-todo-app.js
```

The server will start listening on port 3000 by default, make sure you are inside of http-todo-app directory.

## API Endpoints

### GET `/todos`

- **Description**: Retrieves all todo items.
- **Usage**: Use this endpoint to fetch all tasks in the todo list.
- **Example**: `http://localhost:3000/todos`

### GET `/todos/:id`

- **Description**: Retrieves a specific todo item by ID.
- **Usage**: Replace `:id` with the ID of the todo item you want to fetch.
- **Example**: `http://localhost:3000/todos/id123`
- **Note**: You will get the ID once you post a new task, to access any specific task replace /id123 with /newID (for eg: /id36c33f4f27751) 
### POST `/todos`

- **Description**: Creates a new todo item.
- **Usage**: Send a JSON object with `title`, `completed`, and `description` fields in the request body.
- **Example**: 
  ```json
  http://localhost:3000/todos
  {
    "title": "Complete Project",
    "completed": false,
    "description": "Finish the project documentation."
  }
  ```

### PUT `/todos/:id`

- **Description**: Updates an existing todo item by ID.
- **Usage**: Replace `:id` with the ID of the todo item to update. Send a JSON object with fields you want to update (`title`, `completed`, `description`) in the request body.
- **Example**: 
  ```json
  http://localhost:3000/todos/id123
  {
    "title": "Updated Title",
    "completed": true
  }
  ```

### DELETE `/todos/:id`

- **Description**: Deletes a todo item by ID.
- **Usage**: Replace `:id` with the ID of the todo item to delete.
- **Example**: `http://localhost:3000/todos/id123`

## Testing with Postman or Hoppscotch

1. Open Postman or Hoppscotch.io.
2. Set the request type (GET, POST, PUT, DELETE) and enter the endpoint URL (e.g., `http://localhost:3000/todos`).
3. For POST and PUT requests, add JSON data in the request body.
4. Click on "Send" to execute the request.
5. View the response in the "Response" section below the request.

## Contributing

Feel free to contribute to this project by submitting pull requests or suggesting improvements. Please follow the.
