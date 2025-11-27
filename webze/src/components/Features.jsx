import React from 'react';


const FeatureCard = ({ title, text, icon }) => (
  <div className="feature-card">
    {icon && <img src={icon} alt={`${title} icon`} className="feature-icon" />}
    <div className="thumb" />
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          Crypto <span className="muted">development</span> accessible
        </div>
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
          <FeatureCard
            title="Data encryption"
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
