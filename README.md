# TGCF Web UI

A web interface for managing `tgcf`, the ultimate tool to automate custom Telegram message forwarding. This project provides a user-friendly UI built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Intuitive Configuration:** Manage all `tgcf` settings through a clean web interface.
- **Connection Management:** Easily add, remove, and configure multiple source-to-destination connections.
- **Plugin Control:** Enable and configure plugins like Filter, Format, Watermark, and more.
- **Live Monitoring:** Run `tgcf` and view real-time logs directly in your browser.
- **Secure:** Edit your sensitive credentials like API keys and tokens without hardcoding them.
- **Modern Tech Stack:** Built with Vite for a fast development experience and optimized builds.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/installation) (recommended), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), or [yarn](https://classic.yarnpkg.com/en/docs/install)

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/tgcf-web-ui.git
    cd tgcf-web-ui
    ```

2.  Install dependencies. We recommend using `pnpm`:
    ```bash
    pnpm install
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

-   `pnpm dev`: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

-   `pnpm build`: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

-   `pnpm lint`: Lints the project files for code quality and style issues.

-   `pnpm preview`: Serves the production build from the `dist` folder locally to preview it before deployment.

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

To deploy the application, run `pnpm build` and upload the contents of the generated `dist` folder to your static hosting provider (e.g., Vercel, Netlify, GitHub Pages).
