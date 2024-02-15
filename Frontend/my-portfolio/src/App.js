import "./styles/index.css";
import Introduction from "./components/Introduction.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <div class="gradient"></div>
      <Projects />
      <div class="gradient"></div>
      <Contact />
      <div class="gradient"></div>
      <Footer />
    </div>
  );
}

export default App;
