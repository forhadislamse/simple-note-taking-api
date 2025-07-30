# simple-note-taking-api

## Project Overview

This application is a simple Simple Note Taking Api System where User registered and login with return a token(jwt)

## **Technology Stack**

- **Backend Framework**: Express.js (Node.js)
- **Language**: TypeScript
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JWT (JSON Web Token)
- **Other Tools**: Bcrypt, Dotenv, Zod

---

## **ER Diagram**

Below is the Entity Relationship (ER) Diagram for the system:

![ER Diagram](./lucidchart.PNG)

## **API Endpoints**

### **Authentication**

1. **Login**

   - **POST** `/auth/login`
   - **Body**:
     `json
     {
    "id": "Admin-0001",
    "password": "admin123"
}
     `
   - **Response**:
     ```json
     {
       "success": true,
       "statusCode": 200,
       "message": "User is logged in successfully!",
       "data": {
         "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJBZG1pbi0wMDAxIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzUyOTkwMDQ0LCJleHAiOjE3NTM4NTQwNDR9.7U500fUTLYmU8EX7_YI63f44AeSJoe1rc6RiXvOeBo8"
       }
     }
     ```

---

### **User**

1. **Create register User**

   - **POST** `http://localhost:5000/api/users/register`

   ````json
     {
    "success": true,
    "message": "Register user is created successfully",
    "data": {
        "name": "Forhad34",
        "email": "forhad1234@example.com",
        "password": "",
        "_id": "6889a28401636a98ec1e33e4",
        "createdAt": "2025-07-30T04:41:40.474Z",
        "updatedAt": "2025-07-30T04:41:40.474Z",
        "__v": 0
    }
   }
     ```

   ````

1. **login User**

   - **POST** `http://localhost:5000/api/users/login`

   ````json
     {
    "success": true,
    "message": "User is logged in successfully!",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODg5YTI4NDAxNjM2YTk4ZWMxZTMzZTQiLCJlbWFpbCI6ImZvcmhhZDEyMzRAZXhhbXBsZS5jb20iLCJpYXQiOjE3NTM4NTA1NjUsImV4cCI6MTc1NjQ0MjU2NX0.p1Fic6n2EpkrA5H-iATr1YlrYI8_x2H6QsnrY9JoqkY"
    }
   }
     ```
   ````

---

### **Note**

1. **Create Note**

   - **POST** `http://localhost:5000/api/notes`

2. **Get All Note**

   - **GET** `http://localhost:5000/api/notes`

3. **Get specific Note**

   - **GET** `http://localhost:5000/api/notes/68898bd9ea8c1534ca44ff2d`

4. **Update specific Note**

   - **patch** `http://localhost:5000/api/notes/68898bd9ea8c1534ca44ff2d`

5. **Delete Note**

   - **DELETE** `http://localhost:5000/api/notes/68898bd9ea8c1534ca44ff2d`

---

## Installation

**1. Clone the repository:**

```
   git clone https://github.com/forhadislamse/simple-note-taking-api
   cd simple-note-taking-api

   // Using npm:
   npm install

   // Or, using yarn:
   yarn install
```

2. Create a `.env` file in the root of the project directory to store environment variables. Example .env file:

```
   PORT= port number
   DATABASE_URL= mongodb+srv://<your-db-uri>
   NODE_ENV= development
   BCRYPT_SALT_ROUNDS= salt_round
   DEFAULT_PASS= your password
 JWT_ACCESS_SECRET=your key
JWT_ACCESS_EXPIRES_IN= your days

```

## Running the Application

We can run the application using the following npm scripts:

### **1. Build the application:**

This command compiles the TypeScript files into JavaScript files:

`npm run build`

### **2. Start the application:**

After building the application, we can start it with the following command:

`npm run start`

### **3. Start the application in development mode:**

For development, we use the start:dev script, which runs the application using ts-node-dev, so it will automatically reload on file changes:

`npm run start:dev`

### **4. Start the application in production mode with nodemon:**

This script uses nodemon to restart the application automatically when changes occur in the compiled JavaScript files:

`npm run start:prod`

### **5. Linting:**

To run ESLint and check for code issues, use the following command:

`npm run lint`

To automatically fix linting issues, use:

`npm run lint:fix`

### **6. Prettier:**

To format your code with Prettier (ignoring .gitignore files), use this command:

`npm run prettier`

To automatically fix prettier issues, use:

`npm run prettier:fix`

### **7. Access the API:** The API will be accessible at http://localhost:5000.

# Live Hosting Link

- Live link: ``

![POSTMAN COLLECTION](./simple-note-taking-api.postman_collection.json)

Description: This is a postman collection of all the API endpoints.Download this , and import it in your postman if you needed.

---
