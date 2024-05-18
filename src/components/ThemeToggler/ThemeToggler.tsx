import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="toggle" onClick={toggleTheme}>
      {darkMode ? (
        <div className="toggle-light">
          <FaSun /><p>Light Mode</p>
        </div>
      ) : (
        <div className="toggle-dark">
          <FaMoon />
          <p>Dark Mode</p>
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
