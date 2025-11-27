import React from "react";
import "./HowItWorks.css";

export default function Features() {
  const data = [
    {
      id: "01",
      titleBold: "Currency",
      titleLight: "conversion",
      text: "Exportable reports for tax and accounting purposes.",
      align: "left",
    },
    {
      id: "02",
      titleBold: "Data",
      titleLight: "encryption",
      text: "Visual dashboards for trade performance.",
      align: "left",
    },
    {
      id: "03",
      titleBold: "Cold wallet",
      titleLight: "storage",
      text: "Regular updates on crypto trends and platform features.",
      align: "right",
    },
    {
      id: "04",
      titleBold: "Transfer crypto",
      titleLight: "& data",
      text: "Guides for beginners on crypto basics and trading.",
      align: "right",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-grid">
        {/* LEFT ITEMS */}
        <div className="left-items">
          {data.slice(0, 2).map((item) => (
            <div key={item.id} className="feature-box left">
              <span className="bg-number">{item.id}</span>
              <h3>
                {item.titleBold} <span>{item.titleLight}</span>
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="center-image">
          <img src="../images/center.png" alt="feature-middle" />
        </div>

        {/* RIGHT ITEMS */}
        <div className="right-items">
          {data.slice(2, 4).map((item) => (
            <div key={item.id} className="feature-box right">
              <span className="bg-number">{item.id}</span>
              <h3>
                {item.titleBold} <span>{item.titleLight}</span>
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
