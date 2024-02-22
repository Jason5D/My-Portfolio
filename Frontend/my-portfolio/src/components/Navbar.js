import {Link} from "react-router-dom";

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
          <a href="https://linkedin.com/in/jason-donoghue-3765a6267">
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span className="sr-only">LinkenIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Jason5D">
            <span className="fa-brands fa-github" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a
            href="/Users/jason5d/Library/Mobile Documents/com~apple~CloudDocs/CVs/Jason Donoghue CV C.docx"
            className="button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}


