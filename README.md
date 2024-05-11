# Assistant Management System

This project is an Assistant Management System implemented using Node.js, Express.js, and MongoDB. It allows users to perform CRUD operations on assistant records.

## Setup

#Clone the repository
git clone <repository-url>
cd assistant-management-system

# Install dependencies
npm install

# Create a .env file and add environment variables
echo "PORT=9036" > .env
echo "MONGODB_URI=<your-mongodb-uri>" >> .env

# Replace placeholders with your actual values
# nano .env # or use any text editor to edit the .env file

# Start the server
npm start 



  
The server will start running on the port specified in the `.env` file.

## API Endpoints

### Create Assistant

- **URL:** `/api/v1/createAssistant`
- **Method:** `POST`
- **Description:** Creates a new assistant record in the database.
- **Request Body:** JSON object containing assistant details (fullName, email, mobile, salary, city, country, department, role).
- **Response:** JSON object with the ID of the created assistant.

### Get Assistant by ID

- **URL:** `/api/v1/profile/:id`
- **Method:** `GET`
- **Description:** Retrieves details of the assistant with the specified ID.
- **Response:** JSON object containing assistant details.

### Update Assistant by ID

- **URL:** `/api/v1/update/:id`
- **Method:** `PUT`
- **Description:** Updates details of the assistant with the specified ID.
- **Request Body:** JSON object containing fields to be updated.
- **Response:** JSON object with a message indicating successful update.

### Delete Assistant by ID

- **URL:** `/api/v1/delete/:id`
- **Method:** `DELETE`
- **Description:** Deletes the record of the assistant with the specified ID.
- **Response:** JSON object with a message indicating successful deletion.

## Testing

You can test the API endpoints using tools like Postman or by sending HTTP requests directly.


