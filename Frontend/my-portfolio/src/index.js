import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";

import App from "./App.js";
import About from "./About.js";
import Footer from "./components/Footer.js";
import ContactMe from "./ContactMe.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar /> 
      <div class="gradient"></div>
      <Routes> 
        <Route exact path="/" element={<App />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <div class="gradient"></div>
      <Footer />     </Router>
  </React.StrictMode>
);
