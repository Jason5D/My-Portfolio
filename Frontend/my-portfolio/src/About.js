import AboutMe from "./components/AboutMe.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
