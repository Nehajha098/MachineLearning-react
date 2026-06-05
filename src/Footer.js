import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.cardsRow}>
          {/* Left box (slightly shifted left) */}
          <div style={{ ...styles.card, ...styles.cardAccentLeftRed, transform: "translateX(-10px)" }}>
            <h4 style={styles.cardTitle}>SNU Hackathons</h4>
            <p style={styles.cardText}>
              Empowering students through balanced and fair hackathon experiences.
            </p>
          </div>

          {/* Center box (default centered) */}
          <div style={{ ...styles.card, ...styles.cardAccentLeftBlue }}>
            <h4 style={styles.cardTitle}>Contact</h4>
            <p style={styles.cardText}>Email: hackathons@snu.edu</p>
            <p style={styles.cardText}>Phone: +91-123-456-7890</p>
          </div>

          {/* Right box (slightly shifted right) */}
          <div style={{ ...styles.card, ...styles.cardAccentLeftGreen, transform: "translateX(10px)" }}>
            <h4 style={styles.cardTitle}>Follow Us</h4>
            <div style={styles.socialLinks}>
              <a
                href="#"
                style={{
                  ...styles.socialBtn,
                  background: "linear-gradient(90deg,#E1306C,#F56040)",
                }}
              >
                Instagram
              </a>
              <a
                href="#"
                style={{
                  ...styles.socialBtn,
                  background: "linear-gradient(90deg,#1DA1F2,#0d8af0)",
                }}
              >
                Twitter
              </a>
              <a
                href="#"
                style={{
                  ...styles.socialBtn,
                  background: "linear-gradient(90deg,#0077B5,#004182)",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={styles.bottom}>
          <div style={styles.hr} />
          <p style={styles.copyright}>
            © 2025 <strong>SNU Hackathons.</strong> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "transparent",
    padding: "40px 20px 28px",
    fontFamily: "Poppins, sans-serif",
    color: "#fff",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
  },

  cardsRow: {
    display: "flex",
    gap: 28,
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "nowrap",
    marginBottom: 26,
  },

  card: {
    flex: "1 1 320px",
    minWidth: 260,
    minHeight: 160,
    borderRadius: 14,
    padding: "22px 24px",
    background: "rgba(17,25,40,0.75)",
    boxShadow: "0 10px 30px rgba(2,6,23,0.45)",
    border: "1px solid rgba(255,255,255,0.08)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  cardAccentLeftRed: {
    boxShadow:
      "inset 12px 0 0 -8px rgba(251,113,133,1), 0 10px 30px rgba(2,6,23,0.45)",
  },

  cardAccentLeftBlue: {
    boxShadow:
      "inset 12px 0 0 -8px rgba(99,102,241,1), 0 10px 30px rgba(2,6,23,0.45)",
  },

  cardAccentLeftGreen: {
    boxShadow:
      "inset 12px 0 0 -8px rgba(16,185,129,1), 0 10px 30px rgba(2,6,23,0.45)",
  },

  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 800,
    margin: 0,
    marginBottom: 10,
    textShadow: "0 2px 6px rgba(0,0,0,0.5)",
  },

  cardText: {
    color: "#e6eef6",
    margin: 0,
    fontSize: 14.5,
    lineHeight: 1.7,
    textShadow: "0 1px 3px rgba(0,0,0,0.45)",
  },

  socialLinks: {
    display: "flex",
    gap: 12,
    marginTop: 6,
    alignItems: "center",
  },

  socialBtn: {
    padding: "8px 14px",
    borderRadius: 8,
    color: "#fff",
    fontWeight: 700,
    textDecoration: "none",
    fontSize: 13,
    boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
  },

  bottom: {
    marginTop: 6,
    textAlign: "center",
  },

  hr: {
    height: 1,
    width: "100%",
    background: "rgba(255,255,255,0.08)",
    marginBottom: 12,
  },

  copyright: {
    color: "#ffffff",
    fontSize: 14,
    margin: 0,
    textShadow: "0 1px 3px rgba(0,0,0,0.45)",
  },
};

export default Footer;
