import "../styles/ContactForm.css"
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  axios.defaults.baseURL = "http://localhost:3000";


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await axios.post("/submit-form", { name, email, message });
      alert("Form submitted successfully!");
  
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Contact me for questions or opportunities...</h3>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
           
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;