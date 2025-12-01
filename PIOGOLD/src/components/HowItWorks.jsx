import React from "react";
import "./HowItWorks.css";

export default function Features() {
  const data = [
    {
      id: "01",
      titleBold: "Transaction & ",
      titleLight: "Security",
      text: "Secure network with low fees, protecting every transaction on the blockchain.",
      align: "left",
    },
    {
      id: "02",
      titleBold: "Settlements &",
      titleLight: "Staking Rewards",
      text: "Stake PIOGOLD to earn rewards and enjoy fast, low-cost payments worldwide.",
      align: "left",
    },
    {
      id: "03",
      titleBold: "Web3 &",
      titleLight: "NFTs",
      text: "Power Web3 apps and NFT marketplaces with seamless blockchain support.",
      align: "right",
    },
    {
      id: "04",
      titleBold: "Financial Control & ",
      titleLight: "Encrypted",
      text: "Full control of your assets anytime, anywhere, with secure encryption.",
      align: "right",
    },
  ];

  return (
    <section className="features-section">
      <p className="small-label">HOW IT WORKS?</p>

      <h2 className="main-title">
        Core asset of the <span className="muted">crypto</span><br></br> marketplace
      </h2>

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
          {/* PUT YOUR CENTER IMAGE HERE */}
          <img src="/images/center.png" alt="center-feature" />
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

      {/* EXCHANGE BOX */}
      <div className="exchange-box">
        <div className="ex-left">
          <img src="/images/hero_img03.png" alt="exchange-icon" />
          <div className="alingment">
            <h4>
              Exchange <span>availability</span>
            </h4>
            <p>AI-powered tools to detect and prevent fraudulent activities.</p>
          </div>
        </div>

        <div className="ex-right">
          <div className="circle">
          <img src="/images/Ethereum logo with t.png" alt="btc" />
          </div>
          <div className="circle">
          <img src="/images/Ethereum logo with t2.png" alt="eth" />
          </div>
          <div className="circle">
          <img src="/images/Exchange_icon03.png" alt="sol" />
          </div>
          <div className="circle">
          <img src="/images/Avalanche logo with .png" alt="avax" />
          </div>
        </div>
      </div>
    </section>
  );
}
