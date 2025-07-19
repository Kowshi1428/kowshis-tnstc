import React, { useState } from "react";

export default function MoodTracker() {
  const [formData, setFormData] = useState({
    busNumber: "",
    incident: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🚨 Emergency alert submitted! TNSTC team will respond shortly.");
    setFormData({
      busNumber: "",
      incident: "",
      location: "",
    });
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>🆘 Emergency Help</h1>
      <h2 style={styles.h2}>அவசர உதவி</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label} htmlFor="busNumber">
          Bus Number / பஸ் எண்:
        </label>
        <input
          style={styles.input}
          type="text"
          id="busNumber"
          name="busNumber"
          value={formData.busNumber}
          onChange={handleChange}
          required
        />

        <label style={styles.label} htmlFor="incident">
          What happened? / என்ன நடந்தது?
        </label>
        <textarea
          style={styles.input}
          id="incident"
          name="incident"
          rows="4"
          value={formData.incident}
          onChange={handleChange}
          required
        ></textarea>

        <label style={styles.label} htmlFor="location">
          Your Location (optional):
        </label>
        <input
          style={styles.input}
          type="text"
          id="location"
          name="location"
          placeholder="Share if known"
          value={formData.location}
          onChange={handleChange}
        />

        <button type="submit" style={styles.button}>
          🚨 Send Alert / உதவியை அனுப்பு
        </button>
      </form>
    </div>
  );
}

// Inline CSS in JS
const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    background: "#fefefe",
    margin: 0,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  },
  h1: {
    color: "#c0392b",
    marginBottom: 10,
  },
  h2: {
    color: "#555",
    marginBottom: 30,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    background: "#fff",
    padding: 20,
    borderRadius: 15,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  label: {
    display: "block",
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    border: "1px solid #ccc",
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#e74c3c",
    color: "white",
    cursor: "pointer",
    border: "none",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
};
