import Introduction from "../components/Introduction.js";

import Counters from "../components/Counters.js";
import Contact from "../components/Contact.js";
// import ContactForm from "../components/ContactForm.js";

const App = () => {
  return (
    <div>
      <Introduction />
      <Counters />
      <div className="gradient"></div>
      <Contact />
      {/* <ContactForm /> */}
      <div class="gradient"></div>
    </div>
  );
};

export default App;
