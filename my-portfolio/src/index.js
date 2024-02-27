import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./Navbar.js";

import App from "./routes/App.js";
import About from "./routes/About.js";
import Footer from "./Footer.js";
import Resume from "./components/Resume.js";
import Projects from "./routes/Projects.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <div className="gradient"></div>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <div className="gradient"></div>
      <Footer />{" "}
    </Router>
  </React.StrictMode>
);
