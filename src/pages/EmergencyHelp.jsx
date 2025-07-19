import React, { useState } from "react";

export default function EmergencyHelp() {
  const [formData, setFormData] = useState({
    busNumber: "",
    incident: "",
    location: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🚨 Emergency alert submitted! TNSTC team will respond shortly.");
    setFormData({ busNumber: "", incident: "", location: "" });
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#fefefe",
        margin: 0,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ color: "#c0392b", marginBottom: 10 }}>🆘 Emergency Help</h1>
      <h2 style={{ color: "#555", marginBottom: 30 }}>அவசர உதவி</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#fff",
          padding: 20,
          borderRadius: 15,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <label htmlFor="busNumber">Bus Number / பஸ் எண்:</label>
        <input
          type="text"
          id="busNumber"
          name="busNumber"
          value={formData.busNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="incident">What happened? / என்ன நடந்தது?</label>
        <textarea
          id="incident"
          name="incident"
          rows="4"
          value={formData.incident}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Your Location (optional):</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Share if known"
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#e74c3c",
            color: "white",
            cursor: "pointer",
            border: "none"
          }}
        >
          🚨 Send Alert / உதவியை அனுப்பு
        </button>
      </form>
    </div>
  );
}
