import ResumeViewer from "./ResumeViewer.js";
import CV from "../content/CV.pdf";

const Resume = () => {
  const openPDF = () => {
    const pdf = CV;
    window.open(pdf, "_blank");
  };

  return (
    <div>
      <header id="resumeheader">
        <h1><span>Resume</span></h1>
      </header>
      <button onClick={openPDF} className="download">
        Download CV
      </button>
      <div class="gradient"></div>
      <ResumeViewer />
    </div>
  );
};

export default Resume;
