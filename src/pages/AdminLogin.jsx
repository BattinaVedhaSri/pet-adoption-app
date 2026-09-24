import { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@petadopt.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("adminLoggedIn", "true");
      setMessage("Admin login successful!");

      setTimeout(() => {
        window.location.hash = "admin-dashboard";
      }, 500);
    } else {
      setMessage("Invalid admin email or password.");
    }
  };

  return (
    <section className="auth-section" id="admin-login">
      <div className="auth-card">
        <h2>👨‍💼 Admin Login</h2>

        <p>Login to manage the adoption platform</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Admin Login
          </button>
        </form>

        {message && (
          <p className="success-message">{message}</p>
        )}
      </div>
    </section>
  );
}

export default AdminLogin;