import Introduction from "../components/Introduction.js";
import Contact from "../components/Contact.js";

import Counters from "../components/Counters.js";
import ContactForm from "../components/ContactForm.js";

const App = () => {
  return (
    <div>
      <Introduction />
      <Counters />
      <div class="gradient"></div>
      <ContactForm />
     
      <div class="gradient"></div>
      <Contact />
      <div class="gradient"></div>
    </div>
  );
}

export default App;
