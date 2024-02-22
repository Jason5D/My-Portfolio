import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";

import App from "./App.js";
import About from "./About.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar /> {/* Render Navbar component */}
      <Routes> {/* Use Routes as the parent container */}
        <Route exact path="/" element={<App />} /> {/* Use 'element' prop instead of 'component' */}
        <Route path="/about" element={<About />} /> {/* Use 'element' prop instead of 'component' */}
      </Routes>
    </Router>
  </React.StrictMode>
);
