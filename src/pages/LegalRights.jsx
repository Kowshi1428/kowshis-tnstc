import React from "react";

export default function LegalRights() {
  const rights = [
    {
      title: "1. Weekly Rest – வார விடுமுறை",
      content: `🕒 Every TNSTC employee is entitled to 1 full day off per week.
      ஒவ்வொரு ஊழியரும் வாரத்திற்கு ஒரு நாள் முழுமையான ஓய்விற்கு உரிமை பெற்றிருப்பார்கள்.`,
    },
    {
      title: "2. Working Hours – வேலை நேரம்",
      content: `⏱️ Driving hours must not exceed 8-10 hours a day.
      ஒரு நாளில் 8 முதல் 10 மணி நேரத்தை கடந்தால் ஓட்டுதல் சட்டவிரோதமாகும்.`,
    },
    {
      title: "3. Safety & Insurance – பாதுகாப்பு",
      content: `🛡️ Drivers are covered under life & accident insurance during duty.
      கடமையில் உள்ள போது வாழ்நாள் மற்றும் விபத்து காப்பீடு அமலுக்கு வருகிறது.`,
    },
    {
      title: "4. Harassment Protection – தொந்தரவு எதிர்ப்பு",
      content: `🚫 Any abuse by officers or public must be reported immediately.
      மேலாளர்கள் அல்லது பொதுமக்கள் தரும் தொந்தரவுகள் புகாரளிக்கப்பட வேண்டும்.`,
    },
    {
      title: "5. Leave & Medical – விடுப்பு மற்றும் சிகிச்சை",
      content: `🏥 Sick leave, medical leave, and annual leave are allowed with proper documents.
      மருத்துவ மற்றும் வருடாந்த விடுப்புகள் சட்டப்படி அனுமதிக்கப்படுகின்றன.`,
    },
  ];

  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>🛡️ TNSTC Employee Rights<br />ஊழியர் உரிமைகள்</h1>
      {rights.map((right, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.title}>{right.title}</div>
          <div style={styles.content}>{right.content}</div>
        </div>
      ))}
    </div>
  );
}

// Inline styles as per the original HTML
const styles = {
  body: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f9f9f9",
    padding: 20,
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    color: "#0066cc",
  },
  card: {
    background: "#ffffff",
    borderRadius: 12,
    padding: 20,
    margin: "15px 0",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  title: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginTop: 8,
    lineHeight: 1.5,
    whiteSpace: "pre-line", // preserves line breaks
  },
};
