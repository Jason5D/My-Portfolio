import Introduction from "../components/Introduction.js";


import Counters from "../components/Counters.js";
import ContactForm from "../components/ContactForm.js";

const App = () => {
  return (
    <div>
      <Introduction />
      <Counters />
      <div className="gradient"></div>
      <ContactForm />
      <div class="gradient"></div>
    </div>
  );
}

export default App;
