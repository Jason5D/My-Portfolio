export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <a href="index.html">
              <span class="fa-solid fa-frog" aria-hidden="true"></span>
              <span>Jason Donoghue</span>
            </a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/jason-donoghue-3765a6267">
            <span class="fa-brands fa-linkedin" aria-hidden="true"></span>
            <span class="sr-only">LinkenIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Jason5D">
          <span class="fa-brands fa-github" aria-hidden="true"></span>
          <span class="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="/Users/jason5d/Library/Mobile Documents/com~apple~CloudDocs/CVs/Jason Donoghue CV C.docx" class="button">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
