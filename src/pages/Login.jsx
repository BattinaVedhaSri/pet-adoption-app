import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) =>
        user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setMessage("Login successful!");

      setTimeout(() => {
        window.location.hash = "dashboard";
      }, 500);
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <section className="auth-section" id="login">
      <div className="auth-card">
        <h2>Login</h2>

        <p>Login to your PetAdopt account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        {message && (
          <p className="success-message">{message}</p>
        )}
      </div>
    </section>
  );
}

export default Login;