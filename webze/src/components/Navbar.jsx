import React from "react";
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-wrapper">
        <div className="container nav-inner">

          <div className="brand">
            <div className="logo-mark">
              <img
                src="/logoP.png"
                alt="Logo"
              />
            </div>

            <div className="brand-text">PIOGOLD</div>
          </div>

          <nav className="nav">
            <a href="#home">HOME</a>
            <a href="#features">FEATURES</a>
            <a href="#token">TOKEN</a>
            <a href="#how">HOW IT WORKS</a>
            <a href="#roadmap">ROADMAP</a>
            <a href="#blog">BLOG</a>
          </nav>

          <div className="cta">
            <button className="btn-buy">BUY NOW</button>
          </div>

        </div>
      </div>
    </header>
  );
}
