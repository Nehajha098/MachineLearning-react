import React, { useState } from "react";

function Login({ onLogin, onSwitchToSignup, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.center}>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(email, password);
        }}
      >
        <h2 style={styles.heading}>Login</h2>

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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button style={styles.btn} type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <p style={{ marginTop: 8 }}>
          No account?{" "}
          <a style={styles.link} onClick={onSwitchToSignup}>
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;