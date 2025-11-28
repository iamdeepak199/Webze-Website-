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
        src="/images/hero_img03.png" // replace with your actual image path
        alt="Left floating shape"
        className="floating-shape left-shape"
      />

      {/* Right 3D shape */}
      <img
        src="/images/footer_shape01.png" // replace with your actual image path
        alt="Right floating shape"
        className="floating-shape right-shape"
      />

      {/* Center Content */}
      <div className="content">
        <p className="small-label">BUILT ON WEB3. POWERED BY YOU</p>

        <h1 className="main-heading">
          Join with our <span className="highlight">future</span> of <br />
          Webzo currency
        </h1>

        <div className="social-icons">
          {socialIcons.map((icon, idx) => (
            <a
              href="https://facebook.com"
              aria-label={icon.alt}
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icon.src} alt={icon.alt} />
            </a>
          ))}
          <div className="timeline-step"></div>
        </div>
      </div>
    </section>
  );
}
