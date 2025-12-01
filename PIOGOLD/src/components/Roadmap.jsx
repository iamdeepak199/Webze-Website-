import React from "react";
import "./Roadmap.css";

export default function ShowcaseSection() {
  const cards = [
    {
      title: "Read our",
      subtitle: "Over whitepaper",
      image: "/images/crypto_icon01.png",
    },
    {
      title: "1 PIO token price",
      subtitle: "0.00014 BTC",
      image: "/images/crypto_icon02.png",
    },
    {
      title: "ICO Participants",
      subtitle: "370,000+",
      image: "/images/crypto_icon03.png",
    },
  ];

  const faqData = [
    { 
      q: "What is PIOGOLD (PIO) and its main purpose?", 
      a: "PIOGOLD is the native cryptocurrency of Pio Blockchain, used for fast, secure transactions, staking, payments, governance, and Web3 applications." 
    },
    { 
      q: "What is Pio Blockchain?", 
      a: "Pio Blockchain is a fast, low-cost, and secure decentralized network for building scalable Web3 products." 
    },
    { 
      q: "How does PIOGOLD work on the blockchain?", 
      a: "PIOGOLD runs on Pio Blockchain, enabling secure payments, staking, governance, and interaction with dApps and NFT marketplaces." 
    },
    { 
      q: "Can I get a refund for PIOGOLD transactions?", 
      a: "Refunds depend on the platform used, as blockchain transactions are generally irreversible." 
    }
  ];

  const timeline = [
    { year: "2025", text: "Definitions of key terms in cryptocurrency", img: "/images/roadmap_icon01.png" },
    { year: "2026", text: "Automated tools for executing strategies", img: "/images/roadmap_icon02.png" },
    { year: "2027", text: "APIs for developers to build custom tools", img: "/images/roadmap_icon03.png" },
    { year: "2028", text: "A space for users to discuss trends", img: "/images/roadmap_icon04.png" }
  ];

  return (
    <div className="showcase-container">

      {/* Top 3 Cards */}
      <div className="section-label">Crypto Direction</div>
      <h2 className="main-heading">
        Goods & assets <span>according</span> to <br /> users interests.
      </h2>

      {/* ⭐ New Modern Compact Cards */}
      <div className="cards-row new-cards">
        {cards.map((c, i) => (
          <div className="new-card" key={i}>
            <div className="new-card-icon">
              <img src={c.image} alt="" />
            </div>

            <h3 className="new-card-title">{c.title}</h3>

            <p className="new-card-subtitle">{c.subtitle}</p>

            <button className="new-card-btn">VIEW MORE</button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="faq-left">
          <img src="/images/faq_img.png" className="faq-image" alt="faq-img" />
        </div>

        <div className="faq-right">
          <div className="section-label">FAQ & INFO</div>
          <h2 className="faq-title">
            Get every <span>single</span> answer
          </h2>

          {faqData.map((item, i) => (
            <details className="faq-box" key={i}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <br /><br />
      <div className="section-label">ROADMAP</div>
      <h2 className="main-heading">
        Our <span>strategy</span> & Planning
      </h2>

      <div className="timeline-row">
        {timeline.map((t, i) => (
          <div className="timeline-step" key={i}>
            <img src={t.img} className="timeline-img" alt="timeline" />
            <h4>{t.year}</h4>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
