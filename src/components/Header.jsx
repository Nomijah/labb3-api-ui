import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="headerMain container-fluid">
      <p className="h2 mt-0 mb-0 p-3">
        BookStore <span className="text-muted h3">Admin portal</span>
      </p>
    </header>
  );
}

export default Header;
