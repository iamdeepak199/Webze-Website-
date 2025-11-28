import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import ShowcaseSection from "./components/ShowcaseSection";
import PromoSection from "./components/PromoSection";

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
                <Hero />
                <Features />
                <PromoSection/>
                <HowItWorks />
                <ShowcaseSection/>
                <Footer/>
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">© 2025 Webze Replica</footer>
    </div>
  );
}
