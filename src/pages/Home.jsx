import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return (
      <div className="loader">
        <h2>🚍 Loading TNSTC Support Portal...</h2>
      </div>
    );
  }

  return (
    <div className={`home-body ${darkMode ? "dark-mode" : ""}`}>
      <button id="themeToggle" onClick={toggleTheme}>🌓 Toggle Theme</button>

      <header>
        <h1>TNSTC Driver & Conductor Support Portal</h1>
      </header>

      <div className="btn-container">
        <button className="button" onClick={() => navigate("/mood")}>
          💬 Stress Chatbot <br /> மன அமுத உதவி
        </button>
        <button className="button" onClick={() => navigate("/emergency")}>
          📞 Emergency Help <br /> அவசர உதவி
        </button>
        <button className="button" onClick={() => navigate("/report")}>
          📋 Complaint Box <br /> புகார் பெட்டி
        </button>
        <button className="button" onClick={() => navigate("/rights")}>
          📚 Know Your Rights <br /> உங்கள் உரிமைகள்
        </button>
        <button className="button" onClick={() => navigate("/reportbox")}>
          🗓️ Daily Report Upload <br /> அறிக்கையை பதிவேற்று
        </button>
      </div>

      <footer>
        &copy; 2025 TNSTC Support. All rights reserved.
      </footer>
    </div>
  );
}
