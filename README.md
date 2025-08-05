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
-   **Interactive Plugin Configuration:** Easily enable, disable, and configure powerful plugins like Filter, Format, Watermark, OCR, and more with user-friendly controls.
-   **Process Control & Monitoring:** Start and stop the `tgcf` process and watch its output in a real-time log stream directly in the UI.
-   **Advanced Settings:** For power users, an advanced section provides access to low-level configuration options and system information.
-   **Light & Dark Mode:** Toggles between light and dark themes for a comfortable viewing experience.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/tgcf-web-ui.git
    cd tgcf-web-ui
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Environment Variables

This application may require an API key for certain features. The key should be made available as an environment variable.

For local development, create a `.env.local` file in the root of the project. **Do not commit this file to version control.**

**.env.local**
```
# For Vite, environment variables accessible in the client must be prefixed with VITE_
VITE_API_KEY="your_api_key_here"
```

The application code can then access the key using `import.meta.env.VITE_API_KEY`.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

-   `npm run build`: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

-   `npm run lint`: Lints the project files for code quality and style issues.

-   `npm run preview`: Serves the production build from the `dist` folder locally to preview it before deployment.

## Codebase Structure

The project is structured to be scalable and maintainable:

```
.
├── dist/                # Production build output
├── public/              # Static assets (e.g., favicon)
├── src/
│   ├── components/      # Shared React components (Button, Alert, etc.)
│   ├── constants/       # App-wide constants (e.g., navigation items)
│   ├── pages/           # Page-level components for each view
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main application component and routing logic
│   ├── index.css        # Main CSS file with Tailwind imports
│   └── index.tsx        # Application entry point
├── .env.local           # (Example) Local environment variables (ignored by Git)
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Files to be ignored by Git
├── .prettierrc          # Prettier code formatting rules
├── BACKEND_PLAN.md      # High-level architecture plan for the backend
├── index.html           # HTML entry point for Vite
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration (for Tailwind)
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript compiler options
```

## Deployment

To deploy the application, run `npm run build` and upload the contents of the generated `dist` folder to your static hosting provider (e.g., Vercel, Netlify, GitHub Pages).