const Footer = () => {
  return (
    <footer>
      <h2>Jason Donoghue &middot; Developer</h2>
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/jason-donoghue-3765a6267"
          target="_blank"
          rel="noreferrer" 
          >
            <span class="fab fa-linkedin" aria-hidden="true"></span>
            <span class="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Jason5D" target="_blank" rel="noreferrer">
            <span class="fa-brands fa-github" aria-hidden="true"></span>
            <span class="sr-only">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:jason5donoghue@gmail.com">
            <span class="fas fa-envelope" aria-hidden="true"></span>
            <span class="sr-only">Email0</span>
          </a>
        </li>
      </ul>
      <p>
        <small>&copy; 2024 Jason Donoghue. All rights reserved.</small>
      </p>
    </footer>
  );
}

export default Footer;