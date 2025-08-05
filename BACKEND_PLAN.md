# Backend Architecture Plan for TGCF Web UI

This document outlines a high-level plan for a backend service to power the `tgcf` web interface. The primary responsibility of the backend is to manage the `tgcf` configuration, execute the `tgcf` Python script, and stream its logs back to the frontend.

## 1. Core Technology Stack

Given that `tgcf` is a Python application, a Python-based backend is a natural choice to simplify process management and interactions with the `tgcf` library.

-   **Web Framework:** **FastAPI** or **Flask**. FastAPI is recommended for its modern features, automatic OpenAPI documentation, and built-in support for asynchronous operations and WebSockets, which are ideal for this use case.
-   **Process Management:** The Python `subprocess` module will be used to spawn and manage the `tgcf` script as a child process.
-   **WebSocket Library:** `websockets` (integrated with FastAPI) for real-time log streaming.

## 2. API Endpoints

The backend will expose a RESTful API for the frontend to interact with. All endpoints should be prefixed with `/api`.

### Configuration Management

-   **`GET /api/config`**
    -   **Description:** Reads the current `tgcf.config.yml` (or equivalent JSON/database storage) and returns it to the frontend. This will populate all the forms in the UI.
    -   **Response:** A JSON object representing the full `tgcf` configuration.

-   **`POST /api/config`**
    -   **Description:** Receives a JSON object from the frontend and updates the `tgcf.config.yml` file. This endpoint will be used by the "Save" button on various pages.
    -   **Request Body:** A JSON object with the new configuration.
    -   **Response:** `200 OK` on success, or an error with validation details.

### Process Control

-   **`POST /api/run`**
    -   **Description:** Starts the `tgcf` process using the currently saved configuration. It will check if a process is already running to prevent duplicates. The command would be something like `python -m tgcf`.
    -   **Request Body:** (Optional) Could contain parameters like `mode: 'live'` or `mode: 'past'`.
    -   **Response:** `200 OK` with a message like `{ "status": "TGCF process started", "pid": 12345 }`.

-   **`POST /api/stop`**
    -   **Description:** Stops the currently running `tgcf` process gracefully.
    -   **Response:** `200 OK` with a message `{ "status": "TGCF process stopped" }`.

-   **`GET /api/status`**
    -   **Description:** Returns the current status of the `tgcf` process.
    -   **Response:** `{ "isRunning": true, "pid": 12345, "startTime": "..." }` or `{ "isRunning": false }`.

### Log Streaming

-   **`WS /ws/logs`**
    -   **Description:** A WebSocket endpoint for real-time communication.
    -   **Behavior:**
        1.  When the frontend connects, the backend starts streaming the `stdout` and `stderr` of the running `tgcf` process.
        2.  Each log line is sent as a new message over the WebSocket.
        3.  The connection remains open as long as the process is running and the client is connected.

## 3. Data Persistence

-   **Configuration:** The primary source of truth for configuration should be a file, likely `tgcf.config.yml` or `config.json`, which is what the `tgcf` tool uses. This keeps the backend stateless and simple.
-   **Session Data:** For Telegram login (`.session` file), the backend needs a persistent volume to store this file so the user doesn't have to log in every time the container restarts.

## 4. Security

-   **Authentication:** The backend API should be protected. A simple, effective method is to require a secret token/API key in the `Authorization` header of all requests. This key can be configured via an environment variable in the backend.
-   **CORS:** The backend must be configured with appropriate Cross-Origin Resource Sharing (CORS) policies to allow requests from the frontend's domain.

## 5. Deployment (Example with Docker)

A Docker-based deployment is highly recommended to package the Python environment, the `tgcf` library, and the backend server together.

-   **`Dockerfile`:**
    -   Start from a Python base image.
    -   Install `tgcf` and other Python dependencies (`fastapi`, `uvicorn`, etc.).
    -   Copy the backend source code.
    -   Expose the port for the API server.
    -   Define a `CMD` to start the `uvicorn` server.
-   **`docker-compose.yml`:**
    -   Can be used to orchestrate the backend service.
    -   Define volumes for persistent data (e.g., `tgcf.config.yml`, `.session` file).
    -   Manage environment variables for security tokens.
