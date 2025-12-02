import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";

import "./App.css";
import Roadmap from "./components/Roadmap";
import Token from "./components/Token";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>

                <section id="features">
                  <Features />
                </section>

                <section id="token">
                  <Token />
                </section>

                <section id="how">
                  <HowItWorks />
                </section>

                <section id="roadmap">
                  <Roadmap />
                </section>

                <section id="blog">
                  <Footer />
                </section>
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <ScrollToTop />

      <div className="vertical-line"></div>

      <footer className="site-footer">
        Copyright & design by{" "}
        <span className="color-text">
          @PIOGOLD BLOCKCHAIN ECOSYSTEM © 2025 <br />
        </span>
      </footer>

      <br />
    </div>
  );
}
