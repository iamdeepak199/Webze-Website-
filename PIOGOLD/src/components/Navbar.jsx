import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);

  // ✅ CLOSE MENU WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest(".nav") && !e.target.closest(".hamburger")) {
        setMenuOpen(false);
        setEcosystemOpen(false);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

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

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src="/images/menu.png"
              alt="Menu"
              style={{
                width: "25px",
                height: "25px",
                filter:
                  "invert(87%) sepia(27%) saturate(536%) hue-rotate(4deg) brightness(100%) contrast(100%)",
              }}
            />
          </div>

          {/* NAVIGATION */}
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

            {/* ECOSYSTEM DROPDOWN */}
            <div
              className="dropdown"
              onClick={() => setEcosystemOpen(!ecosystemOpen)}
            >
              <span className="drop-btn">Ecosystem▾</span>

              <div className={`dropdown-menu ${ecosystemOpen ? "open" : ""}`}>
                <Link to="https://pioscan.com">Blockchain</Link>
                <Link to="https://pioverse.com/">NFT Market</Link>
                <Link to="https://tokentool-token.piodefi.com/">Token Tool</Link>
                <Link to="bridge.pioswap.finance">Bridge</Link>
                <Link to="#foundation">CCF Foundation</Link>
              </div>
            </div>

            <button className="btn-buy">BUY NOW</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
