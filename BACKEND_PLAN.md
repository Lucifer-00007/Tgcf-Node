# Backend Architecture Plan for TGCF Web UI

This document outlines a high-level plan for a backend service to power the `tgcf` web interface. The primary responsibility of the backend is to manage user accounts, handle `tgcf` configuration, execute the `tgcf` Python script, and stream its logs back to the frontend.

## 1. Core Technology Stack

Given that `tgcf` is a Python application, a Python-based backend is a natural choice to simplify process management and interactions with the `tgcf` library.

-   **Web Framework:** **FastAPI**. Recommended for its modern features, automatic OpenAPI documentation, and built-in support for asynchronous operations, dependency injection, and WebSockets.
-   **Authentication:** **JWT (JSON Web Tokens)** for handling user sessions securely after login. `passlib` for password hashing.
-   **Database:** **SQLite** for simplicity to store user account information.
-   **Process Management:** The Python `subprocess` module will be used to spawn and manage the `tgcf` script as a child process.
-   **WebSocket Library:** `websockets` (integrated with FastAPI) for real-time log streaming.

## 2. Authentication and User Management

To support the login, registration, and profile features in the UI, the backend needs user management capabilities.

-   **`POST /api/auth/register`**
    -   **Description:** Creates a new user account.
    -   **Request Body:** `{ "email": "user@example.com", "password": "...", "name": "..." }`
    -   **Response:** `201 Created` on success.

-   **`POST /api/auth/login`**
    -   **Description:** Authenticates a user and returns a JWT.
    -   **Request Body:** `{ "username": "user@example.com", "password": "..." }` (using OAuth2 password flow)
    -   **Response:** `{ "access_token": "...", "token_type": "bearer" }`

-   **`GET /api/users/me`**
    -   **Description:** Retrieves the profile information for the currently authenticated user.
    -   **Response:** `{ "email": "...", "name": "..." }`

-   **`PUT /api/users/me`**
    -   **Description:** Updates the profile information (name, password) for the currently authenticated user.
    -   **Request Body:** `{ "name": "...", "current_password": "...", "new_password": "..." }`
    -   **Response:** `200 OK` with updated user info.

## 3. Core API Endpoints

The backend will expose a RESTful API for the frontend to interact with. All endpoints below should be protected and require a valid JWT.

### Configuration Management

-   **`GET /api/config`**
    -   **Description:** Reads the current `tgcf.config.yml` (or equivalent) for the authenticated user and returns it. This will populate the forms in the UI.
    -   **Response:** A JSON object representing the user's `tgcf` configuration.

-   **`POST /api/config`**
    -   **Description:** Receives a JSON object from the frontend and updates the user's `tgcf.config.yml` file.
    -   **Request Body:** A JSON object with the new configuration.
    -   **Response:** `200 OK` on success.

### Process Control

-   **`POST /api/run`**
    -   **Description:** Starts the `tgcf` process for the user using their saved configuration.
    -   **Response:** `{ "status": "TGCF process started", "pid": 12345 }`.

-   **`POST /api/stop`**
    -   **Description:** Stops the user's currently running `tgcf` process.
    -   **Response:** `{ "status": "TGCF process stopped" }`.

-   **`GET /api/status`**
    -   **Description:** Returns the status of the user's `tgcf` process.
    -   **Response:** `{ "isRunning": true, "pid": 12345, "startTime": "..." }` or `{ "isRunning": false }`.

### Log Streaming

-   **`WS /ws/logs`**
    -   **Description:** A WebSocket endpoint for real-time log streaming. The connection should be authenticated using the JWT.
    -   **Behavior:** When the frontend connects, the backend streams the `stdout` and `stderr` of the user's running `tgcf` process.

## 4. Data Persistence

-   **User Data:** User information (email, hashed password, name) will be stored in a **SQLite database**. Each user will have their own record.
-   **Configuration:** Each user's `tgcf` configuration will be stored in a dedicated file, perhaps in a directory structure like `user_data/{user_id}/tgcf.config.yml`. This isolates user configurations.
-   **Session Data:** The Telegram `.session` file for each user must be stored persistently in their respective `user_data/{user_id}/` directory.

## 5. Security

-   **Authentication:** All API endpoints (except `/register` and `/login`) must be protected. The client must include a valid JWT in the `Authorization: Bearer <token>` header of all requests.
-   **Password Security:** Passwords must be hashed using a strong algorithm (e.g., `bcrypt`) via the `passlib` library before being stored in the database.
-   **CORS:** The backend must be configured with appropriate Cross-Origin Resource Sharing (CORS) policies to allow requests from the frontend's domain.

## 6. Deployment (Example with Docker)

A Docker-based deployment is highly recommended.

-   **`Dockerfile`:**
    -   Start from a Python base image.
    -   Install `tgcf` and other Python dependencies (`fastapi`, `uvicorn`, `passlib`, etc.).
    -   Copy the backend source code.
    -   Expose the port for the API server.
-   **`docker-compose.yml`:**
    -   Define a volume for persistent data (e.g., `./user_data:/app/user_data`) to store all user-specific configurations, session files, and the SQLite database.
    -   Manage environment variables (e.g., a `SECRET_KEY` for JWT signing).