import "./styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link to="/">
              <span>Jason Donoghue</span>
            </Link>
          </h1>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume" className="button">
            Resume
          </Link>
        </li>
        <li>
          <a href="mailto:jason5donoghue@gmail.com?subject=Contact">
            <span className="fa-solid fa-envelope" aria-hidden="true"></span>
            <span className="sr-only">Email me</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/jason-donoghue-3765a6267"
            target="_blank"
            rel="noreferrer"
          >
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkenIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Jason5D" target="_blank" rel="noreferrer">
            <span className="fa-brands fa-github" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

