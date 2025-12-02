import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-badge">BUILT ON WEB3. POWERED BY REAL-WORLD VALUE</div><br></br>
<br></br>
      <h6 className="hero-title">
  The <span className="muted">future</span> of
  <br />
  of Digital Finance Has Arrived
</h6>

<br></br>
        <p className="hero-sub">
          A Sovereign, 24-Carat Gold-Backed Native Coin on the Piogold Blockchain Engineered for Real Market Power, Legacy-Grade Trust, and Global Adoption.
          <br />
        </p>

        <form className="hero-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-wrapper full">
            <img src="/images/mail.png" alt="Mail Icon" className="mail-icon" />

            <input
              type="email"
              placeholder="Business email"
              aria-label="email"
            />

            <button className="btn-inside">GET EARLY ACCESS</button>
          </div>
        </form>

        <p className="hero-sub">
          Start monitoring for free or{" "}
          <Link to="/contact" className="msg-link">
            msg us!
          </Link>
        </p>

        <div className="hero-3d-left">
          <img src="/images/hero_img01.png" alt="Left decoration" />
        </div>

        <div className="hero-3d-right">
          <img src="/images/hero_img03.png" alt="Right decoration" />
        </div>

        <div className="hero-3d-center">
          <img src="/images/A black geometric lo.png" alt="Center deco" />
        </div>
      </div>
    </section>
  );
}
