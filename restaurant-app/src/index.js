// Importing necessary libraries and styles
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing the main App component
import App from "./App";

// Importing the function for measuring and reporting web vitals
import reportWebVitals from "./reportWebVitals";

// Creating a root in the DOM for rendering the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component within a React StrictMode
// StrictMode helps catch common bugs and deprecated features during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();
