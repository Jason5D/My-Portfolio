import "./styles/index.css";
import Introduction from "./components/Introduction.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div>
        <Navbar />
        <Introduction />
        <Contact />
    </div>
  );
}

export default App;
