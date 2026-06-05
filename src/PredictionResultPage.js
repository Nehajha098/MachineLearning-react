import React from "react";

export default function PredictionResultPage({ prediction, onBack }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>🎯 Forecast Generated!</h2>

        <div style={styles.resultBox}>
          <p style={styles.resultLabel}>Estimated Hackathon Coding Time</p>
          <h1 style={styles.resultValue}>
            {prediction} <span style={styles.unit}>Hours</span>
          </h1>
        </div>

        <p style={styles.description}>
          Based on your team profile, top hobbies, and club involvements, the
          machine learning model estimates this workload requirement.
        </p>

        <button style={styles.button} onClick={onBack}>
          Calculate Another Forecast
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2070&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "400px",
  },
  heading: {
    textAlign: "center",
    color: "#ff6b35",
    marginBottom: "20px",
    fontSize: 22,
    fontWeight: 700,
  },
  resultBox: {
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    margin: "20px 0",
    border: "2px dashed #ff6b35",
  },
  resultLabel: {
    margin: 0,
    fontSize: "16px",
    color: "#64748b",
    fontWeight: 600,
  },
  resultValue: {
    margin: "10px 0 0 0",
    fontSize: "42px",
    color: "#004aad",
  },
  unit: {
    fontSize: "20px",
  },
  description: {
    fontSize: "14px",
    color: "#334155",
    textAlign: "center",
    lineHeight: 1.5,
  },
  button: {
    width: "100%",
    marginTop: "20px",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#004aad",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
