import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username); // call App's login function
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", height: "100vh", fontFamily: "Arial"
    }}>
      <h1>🚍 TNSTC Support Login</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: 10, borderRadius: 6, fontSize: 16 }}
        />
        <button type="submit" style={{
          padding: "10px 20px", borderRadius: 6, background: "#007bff", color: "white", fontSize: 16
        }}>
          Login
        </button>
      </form>
    </div>
  );
}
