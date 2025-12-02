import React from "react";
import "./Footer.css"; // import the CSS file

const socialIcons = [
  { src: "/images/facebook.svg", alt: "Facebook" },
  { src: "/images/x1.png", alt: "X" },
  { src: "/images/telegram.svg", alt: "Telegram" },
  { src: "/images/discord.svg", alt: "Discord" },
];

export default function JoinSection() {
  return (
    <section className="join-section">
      {/* Left 3D shape */}
      <img
        src="/images/hero_img03.png"
        alt="Left floating shape"
        className="floating-shape left-shape"
      />

      {/* Right 3D shape */}
        {/* Right 3D shape */}
  <img
    src="/images/footer_shape01.png"
    alt="Right floating shape"
    className="floating-shape right-shape"
  />

  {/* Center Content */}
  <div className="content">
    <p className="small-label">Crafted for Visionaries. Built for Sovereigns. Owned by the Future.</p>

    <h1 className="main-heading">
      Join with our <span className="highlight">future</span> of <br />
      PIOGOLD COIN's
    </h1>
    <p className="plain-text">A complete Web3 financial ecosystem for asset-linked exchange, decentralized investment modules, smart-contract staking treasuries, next-generation publish finance, and gamified economic expansion with real utility economics.</p>

    {/* Social Icons */}
    <div className="social-icons">
      {socialIcons.map((icon, idx) => (
        <a
          key={idx}
          href="https://facebook.com"
          aria-label={icon.alt}
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icon.src} alt={icon.alt} />
        </a>
      ))}
    </div>

    {/* Timeline Step (optional, outside social icons) */}
    <div className="timeline-step"></div>
  </div>
</section>
  );
}
