import "../styles/ContactForm.css"
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({}); // State to hold validation errors

  axios.defaults.baseURL = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) { // Check if the form is valid
      try {
        await axios.post("/submit-form", { name, email, message });
        alert("Form submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form.");
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name validation
    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    // Message validation
    if (!message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors); // Update errors state
    return isValid;
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
          {errors.name && <div className="error">{errors.name}</div>} {/* Display name error */}
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
          {errors.email && <div className="error">{errors.email}</div>} {/* Display email error */}
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
          {errors.message && <div className="error">{errors.message}</div>} {/* Display message error */}
        </div>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
