import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link to="/">
              <span className="fa-solid fa-frog" aria-hidden="true"></span>
              <span>Jason Donoghue</span>
            </Link>
          </h1>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
        <li>
            <Link to="/resume" className="button">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
