import React from "react";

export default function Navbar({ onLogout }) {
  return (
    <nav style={{ padding: "10px", background: "#0044cc", color: "white", display: "flex", justifyContent: "space-between" }}>
      <div>TNSTC Portal</div>
      {onLogout && (
        <button onClick={onLogout} style={{
          background: "#c0392b", color: "white", border: "none",
          padding: "6px 12px", borderRadius: "5px", cursor: "pointer"
        }}>
          Logout
        </button>
      )}
    </nav>
  );
}
