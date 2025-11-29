import React, { useState } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrapper">
        <div className="container nav-inner">
          {/* BRAND */}
          <div className="brand">
            <div className="logo-mark">
              <img src="/logoP.png" alt="Logo" />
            </div>
            <div className="brand-text">PIOGOLD</div>
          </div>

          {/* HAMBURGER (mobile only) */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {/* Use your menu icon image directly */}
            <img
  src="/images/menu.png"
  alt="Menu"
  style={{
    width: "25px",
    height: "25px",
    filter: "invert(87%) sepia(27%) saturate(536%) hue-rotate(4deg) brightness(100%) contrast(100%)"
  }}
/>

          </div>

          {/* NAVIGATION LINKS */}
          <nav className={`nav ${menuOpen ? "active" : ""}`}>
            <Link smooth to="#home">
              HOME
            </Link>
            <Link smooth to="#features">
              FEATURES
            </Link>
            <Link smooth to="#token">
              TOKEN
            </Link>
            <Link smooth to="#how">
              HOW IT WORKS
            </Link>
            <Link smooth to="#roadmap">
              ROADMAP
            </Link>
            <Link smooth to="#blog">
              BLOG
            </Link>

            <button className="btn-buy">BUY NOW</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
