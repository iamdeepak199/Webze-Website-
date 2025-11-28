import React from "react";
import "./PromoSection.css";

export default function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-container">
        {/* Left Side */}
        <div className="promo-left">
          <h2>ACCESSIBLE FOR EVERYONE</h2>
          <h3>Trading platform of the future!</h3>
          <p>
            Webzi brings our love for cryptocurrency into Web3! Like a frog's
            leap, the chart can jump at any moment. Boom!
          </p>
          <button className="cta-button">PURCHASE NOW</button>
        </div>

        {/* Right Side */}
        <div className="promo-right">
          <div className="promo-card">
            <div className="countdown">
              <h4>Token sale ends in:</h4>

              <div className="timer">
                <div className="time-circle">
                  <h2>396</h2>
                  <p>Days</p>
                </div>

                <div className="time-circle">
                  <h2>12</h2>
                  <p>Hours</p>
                </div>

                <div className="time-circle">
                  <h2>05</h2>
                  <p>Minutes</p>
                </div>

                <div className="time-circle">
                  <h2>50</h2>
                  <p>Seconds</p>
                </div>
              </div>
            </div>

            <div className="contribution">
              <h4>$49,222,300 contribution received</h4>

              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "50%" }}></div>
              </div>

              <div className="progress-labels">
                <span>$5M</span>
                <span>$99M</span>
              </div>

              <p className="wallet-address">
                0x2170ed0880ac9A755fd2f29828B895fB0959F933F
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
