# E Gram Panchayet Backend

This project is the backend for the E Gram Panchayet system. It allows officers to launch services, users to apply for services, and staff to update the progress of applications. Users can also upload images and documents.

## Features

- Officers can launch new services.
- Users can apply for services.
- Staff can update the progress of applications with statuses such as "Failed", "Done", "Working", and "In Progress".
- Users can upload images and documents.

## API Routes

### User Routes
- `POST /api/user/signup` - Register a new user
- `POST /api/user/signin` - Login a user
- `GET /api/user/userdetails` - Get user profile

### Service Routes
- `POST /api/service/createService` - Launch a new service (Officer only)
- `DELETE /api/service/deleteService` - Delete a service (Officer only)

### Application Routes
- `POST /api/Application/createApplication` - Apply for a service
- `GET /api/Application/details/progress` - Get a specific application on progress
- `post /api/Application/updateApplication` - Update application status (Staff only)


## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```

DB_URL = your_mongodb_uri
SECRET_KEY_JWT = your_jwt_secret
CDN_API_KEY = your_key
CDN_API_SECRET_KEY = 'your_key'
CLOUD_NAME = 'clound_name'
```

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file and add the environment variables
4. Start the server: `npm start`