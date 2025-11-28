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
        <div className="section-title">
          Crypto <span className="muted">development</span> 
          <br></br>accessible
          <br></br>
        </div>
        <br></br>
        <div className="feature-grid">
          <FeatureCard
            title="Crypto management"
            text="Automated identity verification and anti-money"
            icon="/images/features_icon01.png"
          />
          <FeatureCard
            title="Crypto exchange"
            text="A built-in explorer to track transactions"
            icon="/images/features_icon02.png"
          />
          </div>
          <div className="lowerCard">
          <FeatureCard
            title="Advanced trading"
            text="Visual dashboards for trade performance"
            icon="/images/features_icon03.png"
          />
          <FeatureCard
            title="Cold wallet storage"
            text="Regular updates on crypto trends and platform features."
            icon="/images/features_icon04.png"
          />
           <FeatureCard
            title="Cold wallet storage"
            text="Regular updates on crypto trends and platform features."
            icon="/images/features_icon05.png"
          />
          </div>
        
      </div>
    </section>
  );
}
