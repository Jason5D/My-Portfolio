import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());

const gmailPassword = process.env.GMAIL_PASSWORD;


app.use(express.json());


app.post("/submit-form", (req, res) => {

  const { name, email, message } = req.body;


  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jason5donoghue@gmail.com",
      pass: gmailPassword,
    },
  });


  const mailOptions = {
    from: email,
    to: "jason5donoghue@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };


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


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
