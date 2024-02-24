import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";

import App from "./App.js";
import About from "./About.js";
import Footer from "./components/Footer.js";
import ContactMe from "./ContactMe.js";
import Resume from "./components/Resume.js";

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
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <div class="gradient"></div>
      <Footer />{" "}
    </Router>
  </React.StrictMode>
);
