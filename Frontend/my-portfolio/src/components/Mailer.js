// Import necessary modules
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create Express app
const app = express();
const port = 3000;

app.use(cors());

const gmailPassword = process.env.GMAIL_PASSWORD;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define route for handling form submissions
app.post("/submit-form", (req, res) => {
  // Extract form data from request body
  const { name, email, message } = req.body;

  // Create transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jason5donoghue@gmail.com",
      pass: gmailPassword,
    },
  });

  // Define email options
  const mailOptions = {
    from: email,
    to: "jason5donoghue@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
