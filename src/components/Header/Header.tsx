import React, { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggler/ThemeToggler";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Header;
