import { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Admin credentials
    if (
      email.trim() === "admin@petadopt.com" &&
      password === "admin123"
    ) {
      // Store admin login status
      localStorage.setItem("adminLoggedIn", "true");

      // Remove any existing user login
      localStorage.removeItem("loggedInUser");

      // Navigate using hash routing
      window.location.hash = "admin-dashboard";
    } else {
      setError("Invalid admin email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>🐾 Admin Login</h2>

        <p>Welcome Admin!</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            🔐 Login as Admin
          </button>

        </form>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "10px",
            }}
          >
            {error}
          </p>
        )}

      </div>
    </div>
  );
}

export default AdminLogin;
