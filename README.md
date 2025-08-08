# TGCF Web UI

TGCF Web UI is a modern, responsive, and user-friendly web interface for `tgcf`, the powerful command-line tool for automating Telegram message forwarding. This project provides a comprehensive dashboard to manage all aspects of your `tgcf` configuration and monitor its activity without ever touching a configuration file manually.

## Why Use TGCF Web UI?

While `tgcf` is a potent tool, managing its configuration through YAML files can be cumbersome and error-prone for some users. This web interface aims to solve that by providing:

-   **Visual Configuration:** A clean, intuitive interface for all settings, from API keys to complex plugin rules.
-   **Reduced Errors:** Guided forms and inputs prevent common syntax mistakes that can occur when editing YAML files.
-   **Accessibility:** Manage your `tgcf` instance from any device with a web browser, whether it's your desktop or phone.
-   **Real-time Feedback:** A built-in log viewer lets you monitor the forwarding process in real-time, just like a terminal.
-   **Centralized Management:** Control everything from one place—connections, plugins, credentials, and process status.

## Features

-   **Dashboard:** A central hub for quick actions and an overview of your setup.
-   **Secure Credential Management:** Securely input and manage your Telegram API ID, API hash, bot tokens, and session strings.
-   **Dynamic Connection Setup:** Visually create, edit, and delete forwarding connections between source and destination chats.
-   **Interactive Plugin Configuration:** Easily enable, disable, and configure powerful plugins like Filter, Format, Replace, Watermark, OCR, and more with user-friendly controls.
-   **Process Control & Monitoring:** Start and stop the `tgcf` process and watch its output in a real-time log stream directly in the UI.
-   **Advanced Settings:** For power users, an advanced section provides access to low-level configuration options and system information.
-   **Light & Dark Mode:** Toggles between light and dark themes for a comfortable viewing experience.

## Technology Stack

-   **Framework:** React with TypeScript
-   **Build Tool:** Vite
-   **Styling:** Tailwind CSS with PostCSS
-   **Routing:** React Router
-   **Icons:** Lucide Icons
-   **UI Components:** A custom-built library of reusable components.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or newer recommended)
-   [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/tgcf-web-ui.git
    cd tgcf-web-ui
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the project files for code quality and style issues.
-   `npm run preview`: Serves the production build locally to preview it before deployment.

## Codebase Overview

The project is structured for scalability and maintainability:

-   `src/components/`: Contains shared, reusable React components used across the application.
-   `src/pages/`: Contains top-level components that correspond to a specific page or view.
-   `src/types.ts`: Defines shared TypeScript types and interfaces.
-   `src/App.tsx`: The main application component, responsible for routing and layout.
-   `src/index.tsx`: The entry point of the application.

## Backend Integration

This frontend is designed to be powered by a backend service. The high-level architecture and API endpoint definitions for this service are detailed in `BACKEND_PLAN.md`.

## Deployment

To deploy the application, run `npm run build` and upload the contents of the generated `dist` folder to your static hosting provider (e.g., Vercel, Netlify, GitHub Pages).