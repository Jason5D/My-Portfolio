
import Introduction from "./components/Introduction.js";
import Contact from "./components/Contact.js";
// import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Projects from "./components/Projects.js";
import Counters from "./components/Counters.js";



function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Introduction />
      <Counters />
      <div class="gradient"></div>
      <Projects />
      <div class="gradient"></div>
      <Contact />
      <div class="gradient"></div>
    
    </div>
  );
}

export default App;
