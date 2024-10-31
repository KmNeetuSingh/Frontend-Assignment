# LeadMint Technologies Frontend Assignment

This project is a frontend application created for LeadMint Technologies as part of the assignment requirements. The app includes a **Login Page**, **Registration Page**, and **Home Page** using **React** and **Ripple UI** for an intuitive, responsive user interface.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Usage](#usage)

---

### Features
- **Login Page**: Email and password input with validation.
- **Registration Page**: Email, password, and confirm password input with validation to ensure password match.
- **Home Page**: Contains a navigation bar, user statistics, recent activity cards, and a data visualization graph.

---

### Project Structure
The project is organized as follows:
```
src
├── components
│   ├── Login.jsx          # Login page component
│   ├── Register.jsx       # Registration page component
│   └── Home.jsx           # Home page component
├── App.jsx                # Main app component with routing
└── main.jsx               # Entry point of the application
```

---

### Setup and Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/leadmint-frontend-assignment.git
   cd leadmint-frontend-assignment
   ```

2. **Install Dependencies**
   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install project dependencies with:
   ```bash
   npm install
   ```

3. **Install Ripple UI and Polyfills**
   Ripple UI requires polyfills to work in the browser environment.
   ```bash
   npm install rippleui vite-plugin-node-polyfills path-browserify
   ```

4. **Update `vite.config.js`**  
   The `vite.config.js` is set up to ensure compatibility with `Ripple UI`. Here’s the updated configuration:

   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

   export default defineConfig({
     plugins: [
       react(),
       NodeGlobalsPolyfillPlugin({ process: true, buffer: true }),
     ],
     resolve: {
       alias: {
         path: 'path-browserify',
       },
     },
     optimizeDeps: {
       esbuildOptions: {
         define: {
           global: 'globalThis',
         },
       },
     },
   });
   ```

---

### Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- **`npm run build`**: Builds the app for production to the `dist` folder.
- **`npm run preview`**: Previews the production build locally.

---

### Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Ripple UI**: Lightweight UI library for modern and responsive components.
- **Vite**: Fast frontend build tool and development server.
- **Node.js Polyfills**: Provides compatibility for Node modules in a browser environment.

---

### Usage

1. **Login Page**: Enter a valid email and password. Frontend validation ensures proper formatting.
2. **Registration Page**: Complete the form with email, password, and password confirmation. Ensures passwords match.
3. **Home Page**: Displays a navigation bar, content cards, and data visualizations.

