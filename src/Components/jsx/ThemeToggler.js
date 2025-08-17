import React from "react";

function ThemeToggler({ theme, setTheme }) {
  return (
    <div className="theme-toggler">
      <div className="theme-toggle">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙 Dark Mode" : "Light Mode ☀️"}
        </button>
      </div>
    </div>
  );
}

export default ThemeToggler;
