# Portfolio Website (React + TypeScript + Vite)

This is a portfolio website built with React, TypeScript, and Vite. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

To get started with this project, follow these steps:

1.  **Install Dependencies:**
    This project uses `pnpm` as the package manager. To install the necessary packages, run the following command in your terminal:
    ```bash
    pnpm install
    ```

2.  **Run the Development Server:**
    To start the local development server with Hot Module Replacement (HMR), run:
    ```bash
    pnpm run dev
    ```
    You can then view the website in your browser at the address provided in the terminal (usually `http://localhost:5173`).

## Available Scripts

This project comes with the following scripts:

-   `pnpm run dev`: Starts the development server.
-   `pnpm run build`: Bundles the application into static files for production in the `dist` directory.
-   `pnpm run deploy`: Deploys the contents of the `dist` directory to the `gh-pages` branch on GitHub.

## Advanced Configuration

### ESLint

If you are developing a production application, you can expand the ESLint configuration to enable type-aware lint rules. For more information, see the comments in the `eslint.config.js` file.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules.

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Vite Plugins

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh.
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.
