import React from "react";
import CV from "../content/CV.pdf";

const Resume = () => {
  const openPDF = () => {
    const url = CV; // Adjust the path to your PDF file
    window.open(url, "_blank");
  };

  return (
    <div>
      <header>
        <h1>JASON DONOGHUE - CV</h1>
        <p>Email: jason5donoghue@gmail.com</p>
      </header>

      <button onClick={openPDF}>Open CV</button>
    </div>
  );
};

export default Resume;
