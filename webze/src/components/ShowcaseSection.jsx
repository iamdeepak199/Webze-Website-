import React from "react";
import "./ShowcaseSection.css";

export default function ShowcaseSection() {
  const cards = [
    {
      title: "Read our white paper",
      text: "Over whitepaper",
      image: "/images/crypto_icon01.png",
    },
    {
      title: "1 CRN token price",
      text: "0.00014 BTC",
      image: "/images/crypto_icon02.png",
    },
    {
      title: "ICO Participants",
      text: "370,000+",
      image: "/images/crypto_icon03.png",
    },
  ];

  const faqData = [
    {
      q: "Main purpose of a cryptocurrency",
      a: "The private keys stored allow you to sign transactions and prove ownership of funds.",
    },
    { q: "How can I make refund?", a: "Refund rules depend on the platform terms." },
    { q: "How do they operate on blockchain?", a: "Blockchain works as a decentralized ledger." },
  ];

  const timeline = [
    { year: "2014", text: "Definitions of key terms in cryptocurrency", img: "/images/roadmap_icon01.png" },
    { year: "2017", text: "Automated tools for executing strategies", img: "/images/roadmap_icon02.png" },
    { year: "2022", text: "APIs for developers to build custom tools", img: "/images/roadmap_icon03.png" },
    { year: "2025", text: "A space for users to discuss trends", img: "/images/roadmap_icon04.png" },
  ];

  return (
    <div className="showcase-container">

      {/* Top 3 Cards */}
      <div className="section-label">Crypto Direction</div>
      <h2 className="main-heading">
        Goods & assets <span>according</span> to <br /> users interests.
      </h2>

      <div className="cards-row">
        {cards.map((c, i) => (
          <div className="info-card" key={i}>

            {/* ⭐ FIXED IMAGE WRAPPER */}
            <div className="card-img-wrapper">
              <img src={c.image} alt="" className="card-img" />
            </div>

            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <button className="card-btn">VIEW MORE</button>
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
