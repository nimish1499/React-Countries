import ReactDOM from 'react-dom/client';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "./App.js"

import "./styles/styles.css";


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
