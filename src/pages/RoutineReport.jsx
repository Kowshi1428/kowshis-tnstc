import React, { useState } from "react";

export default function RoutineReport() {
  const [formData, setFormData] = useState({
    name: "",
    busNo: "",
    report: "",
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📤 Report submitted successfully!");
    setFormData({ name: "", busNo: "", report: "", file: null });
  };

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#f0fff0",
        padding: 20,
        minHeight: "100vh"
      }}
    >
      <h1 style={{ textAlign: "center", color: "#006600" }}>
        📤 Daily Report Upload<br />நாளாந்த அறிக்கை பதிவேற்றம்
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 500,
          margin: "auto",
          background: "white",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <label htmlFor="name">Your Name / உங்கள் பெயர்:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ex: Kumar"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="busNo">Bus Number / பஸ் எண்:</label>
        <input
          type="text"
          id="busNo"
          name="busNo"
          placeholder="Ex: TN 45 1234"
          value={formData.busNo}
          onChange={handleChange}
        />

        <label htmlFor="report">Report Details / அறிக்கை விவரம்:</label>
        <textarea
          id="report"
          name="report"
          rows="5"
          placeholder="Accident, delay, passenger count, etc."
          value={formData.report}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="file">Upload File (if any):</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleChange}
        />

        <button type="submit">Submit Report / அறிக்கை சமர்ப்பிக்கவும்</button>
      </form>
    </div>
  );
}
