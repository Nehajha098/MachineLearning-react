// Navbar.js
import React from "react";

export default function Navbar({ isLoggedIn, onLogout, onShowLogin, onShowSignup, hideAuth = false }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <h2 style={styles.logo}>SNU Hackathons</h2>
      </div>

      <div style={styles.right}>
        {!hideAuth && (
          isLoggedIn ? (
            <button style={styles.logout} onClick={onLogout}>Logout</button>
          ) : (
            <>
              <button style={styles.link} onClick={onShowLogin}>Login</button>
              <button style={styles.primary} onClick={onShowSignup}>Sign Up</button>
            </>
          )
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "14px 28px", position: "sticky", top: 0, zIndex: 1000,
    background: "rgba(10,20,40,0.55)", backdropFilter: "blur(6px)", color: "#fff"
  },
  logo: { margin: 0, fontSize: 20, fontWeight: 700 },
  left: { display: "flex", alignItems: "center" },
  right: { display: "flex", gap: 10, alignItems: "center" },
  link: { background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", padding: "8px 12px", borderRadius: 8, cursor: "pointer" },
  primary: { background: "#FFB020", border: "none", padding: "8px 12px", borderRadius: 8, fontWeight: 700, cursor: "pointer" },
  logout: { background: "#E55353", border: "none", padding: "8px 12px", borderRadius: 8, color: "#fff", cursor: "pointer" }
};
