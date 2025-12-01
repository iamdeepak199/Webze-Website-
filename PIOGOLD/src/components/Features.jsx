import React from "react";
import "./Features.css";

const FeatureCard = ({ title, text, icon, className }) => (
  <div className={`feature-card ${className || ""}`}>
    {icon && <img src={icon} alt={`${title} icon`} className="feature-icon" />}
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
       
          Crypto <span className="muted-title">development</span>
          <br />
          accessible
        <br></br>
        <div className="feature-grid">
          <FeatureCard
            title="Ultra-Fast Transaction Speed"
            text="Pio Blockchain processes transactions in real-time, ensuring instant confirmations for users and applications."
            icon="/images/features_icon01.png"
          />
          <FeatureCard
            title="Low Gas Fees"
            text="Experience cost-effective transactions with minimal fees, making it ideal for high-volume operations."
            icon="/images/features_icon02.png"
          />
        </div>
        <div className="lowerCard">
          <FeatureCard
            title="Secure Proof-of-Authority/Delegated Consensus"
            text="Utilizes a robust consensus mechanism to maintain network integrity and protect against attacks."
            icon="/images/features_icon03.png"
          />
          <FeatureCard
            title="User & Developer Friendly"
            text="Offers intuitive tools and flexible infrastructure, enabling smooth adoption for developers and end-users."
            icon="/images/features_icon04.png"
          />
          <FeatureCard
            title="Sustainable & Energy Efficient"
            text="Designed with eco-conscious protocols, reducing energy consumption without compromising performance."
            icon="/images/features_icon05.png"
          />
        </div>
      </div>
    </section>
  );
}
