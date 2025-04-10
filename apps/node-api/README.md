# Node.js API (Express + TypeScript)

This is a Node.js API built with Express and TypeScript. It uses Drizzle ORM for database interactions and JWT for authentication.

## Project Structure

```
node-api/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── models/
│   ├── config/
│   └── app.ts
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/node-api.git
   cd node-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   DATABASE_URL=your_database_url
   JWT_SECRET=your_jwt_secret
   ```

4. Run the application:
   ```sh
   npm run dev
   ```

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login a user

### Users

- **GET /api/users**: Get all users (requires authentication)
- **GET /api/users/:id**: Get a user by ID (requires authentication)
- **PUT /api/users/:id**: Update a user by ID (requires authentication)
- **DELETE /api/users/:id**: Delete a user by ID (requires authentication)

## License

This project is licensed under the MIT License.
