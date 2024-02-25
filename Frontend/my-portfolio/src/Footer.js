import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
      <li>
          <a href="mailto:jason5donoghue@gmail.com">
            <span className="fas fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email0</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/jason-donoghue-3765a6267"
          target="_blank"
          rel="noreferrer" 
          >
            <span className="fab fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Jason5D" target="_blank" rel="noreferrer">
            <span className="fa-brands fa-github" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        
      </ul>
      <p>
        <small>&copy; 2024 &middot; Jason Donoghue &middot; All rights reserved.</small>
      </p>
    </footer>
  );
}

export default Footer;