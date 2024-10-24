# User Management System (AMB/CRUD)
This project is a User Management System that includes a login and an admin panel. It is designed to efficiently and user-friendly manage users.

## Technologies Used
-  React.js: For building interactive and dynamic user interfaces.
-  Tailwind CSS: For a modern and responsive design, facilitating the creation of custom styles.
-  Zustand: For simple and effective state management in the application.
-  TypeScript: For static typing that improves code quality and maintainability.
<p align="center">
<a href="https://www.mysql.com/" target="_blank"><img src="https://miro.medium.com/v2/resize:fit:1400/0*qquBXM1d9ha0YjcM.png" width="300" alt="MySql image"></a>
<a href="https://jwt.io/" target="_blank"><img src="https://smartastudio.b-cdn.net/wp-content/uploads/2024/02/tailwindcss-smartastudio.jpg" width="300" alt="JWT logo"></a>
</p>
## Features
-  Login: Secure authentication to access the admin panel.
-  Admin Panel: Interface for managing users, allowing for creating, reading, updating, and deleting records.
## Project Structure
The code structure is organized in a way that allows for easy maintenance and scalability.

# Instructions

Clone or download the project and then follow these steps, remember that you must have npm and nodejs on your machine to be able to start the application.

- Install dependencies

We install the necessary dependencies with the following command.

```bash
npm install
```

- Run project

To run the project run the following command and follow the instructions for the port where you will be able to see it.

```bash
npm run dev
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
