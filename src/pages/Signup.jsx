import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      setMessage("An account with this email already exists.");
      setSuccess(false);
      return;
    }

    users.push(formData);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    setMessage("Signup successful! 🎉");
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      password: "",
      phone: ""
    });
  };

  const goToLogin = () => {
    window.location.hash = "login";
  };

  return (
    <section className="auth-section">
      <div className="auth-card">

        {!success ? (
          <>
            <h2>🐾 Create Account</h2>

            <p>
              Join our Pet Adoption Platform ❤️
            </p>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="auth-btn"
              >
                Sign Up 🐾
              </button>

            </form>

            {message && (
              <p className="success-message">
                {message}
              </p>
            )}

            <p style={{ marginTop: "20px" }}>
              Already have an account?
            </p>

            <button
              className="small-btn"
              onClick={goToLogin}
            >
              Login Now 🔐
            </button>
          </>
        ) : (
          <>
            <div className="login-emoji">
              🎉🐾
            </div>

            <h2>Signup Successful!</h2>

            <p>
              Your account has been created successfully.
            </p>

            <p>
              Now login to find your new best friend ❤️
            </p>

            <button
              className="auth-btn"
              onClick={goToLogin}
            >
              Login Now 🔐
            </button>
          </>
        )}

      </div>
    </section>
  );
}

export default Signup;