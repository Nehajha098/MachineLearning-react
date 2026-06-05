import React, { useState } from "react";

function Signup({ onSignup, onSwitchToLogin, isLoading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div style={styles.center}>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          if (password === confirm) onSignup(name, email, password);
          else alert("Passwords do not match!");
        }}
      >
        <h2 style={styles.heading}>Sign Up</h2>

        <label style={styles.label}>Full Name</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          placeholder="you@school.edu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label style={styles.label}>Password</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label style={styles.label}>Confirm Password</label>
        <input
          style={styles.input}
          type="password"
          placeholder="Confirm your password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button style={styles.btn} type="submit" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Create Account"}
        </button>
        <p style={{ marginTop: 8 }}>
          Have an account?{" "}
          <a style={styles.link} onClick={onSwitchToLogin}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Signup;