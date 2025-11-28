import React from "react";
import './Navbar.css';
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-wrapper">
        <div className="container nav-inner">

          <div className="brand">
            <div className="logo-mark">
              <img src="/logoP.png" alt="Logo" />
            </div>
            <div className="brand-text">PIOGOLD</div>
          </div>

          <nav className="nav">
            <Link smooth to="#home">HOME</Link>
            <Link smooth to="#features">FEATURES</Link>
            <Link smooth to="#token">TOKEN</Link>
            <Link smooth to="#how">HOW IT WORKS</Link>
            <Link smooth to="#roadmap">ROADMAP</Link>
            <Link smooth to="#blog">BLOG</Link>
          </nav>

          <div className="cta">
            <button className="btn-buy">BUY NOW</button>
          </div>

        </div>
      </div>
    </header>
  );
}
