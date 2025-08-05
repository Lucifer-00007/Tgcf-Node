# AI Development Rules for TGCF Web UI

This document provides guidelines for developing the TGCF Web UI, focusing on the core technologies and preferred libraries.

## Tech Stack Overview

*   **Frontend Framework**: React with TypeScript for building dynamic and type-safe user interfaces.
*   **Build Tool**: Vite, chosen for its fast development server and optimized production builds.
*   **Styling**: Tailwind CSS for a utility-first approach to styling, ensuring responsive and consistent designs. PostCSS and Autoprefixer are used for CSS processing.
*   **Routing**: React Router for declarative client-side routing, managing navigation between different pages.
*   **UI Components**: `shadcn/ui` components are the primary choice for pre-built, accessible, and customizable UI elements. These components are built on `Radix UI` primitives.
*   **Icons**: `lucide-react` for a comprehensive set of customizable SVG icons.
*   **State Management**: React's built-in `useState` and `useEffect` hooks for managing component-level state and side effects.
*   **Notifications**: A toast notification system (e.g., `react-hot-toast`) should be used to provide timely user feedback.

## Library Usage Rules

To maintain consistency and efficiency, please adhere to the following rules when developing:

*   **UI Components**:
    *   **Prioritize `shadcn/ui`**: For all common UI elements (buttons, inputs, forms, dialogs, etc.), always check if a suitable component exists within `shadcn/ui`.
    *   **Custom Components**: If a required UI element is not available in `shadcn/ui` or needs significant customization, create a new, dedicated component file in `src/components/`. Do not modify `shadcn/ui` source files directly.
*   **Styling**:
    *   **Tailwind CSS Only**: All styling must be done using Tailwind CSS utility classes. Avoid writing custom CSS files or inline styles unless absolutely necessary for a very specific, isolated case (which should be rare).
    *   **Responsiveness**: Always consider and implement responsive design principles using Tailwind's responsive prefixes.
*   **Routing**:
    *   **React Router**: Use `react-router-dom` for all navigation within the application. Define routes clearly in `src/App.tsx`.
    *   **Navigation**: Utilize `Link` or `NavLink` components from `react-router-dom` for internal navigation.
*   **Icons**:
    *   **`lucide-react`**: All icons should be imported and used from the `lucide-react` library.
*   **State Management**:
    *   **React Hooks**: For managing component state and side effects, stick to `useState` and `useEffect`. Avoid external state management libraries unless a clear, complex global state requirement emerges.
*   **Notifications**:
    *   **Toasts**: Implement user feedback for actions (success, error, loading) using a toast notification system.
*   **File Structure**:
    *   **Pages**: Page-level components should reside in `src/pages/`.
    *   **Components**: Reusable UI components should be placed in `src/components/`.
    *   **Types**: All TypeScript type definitions should be in `src/types.ts` or a dedicated types file within a feature folder if types are highly specific.
    *   **Constants**: Application-wide constants should be defined in `src/constants.tsx`.