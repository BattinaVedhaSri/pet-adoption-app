function UserDashboard() {
  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.hash = "home";
  };

  return (
    <section className="dashboard">

      <div className="dashboard-card">

        <h1>
          Welcome, {user?.name || "User"}! 🐾
        </h1>

        <p>
          Welcome to your Pet Adoption Dashboard.
        </p>

        <div className="dashboard-options">

          {/* Browse Pets */}
          <div>
            <h3>🐶 Browse Pets</h3>

            <p>
              View pets available for adoption.
            </p>

            <button
              className="small-btn"
              onClick={() =>
                (window.location.hash = "pets")
              }
            >
              Browse
            </button>
          </div>

          {/* Applications */}
          <div>
            <h3>📋 Applications</h3>

            <p>
              View your adoption applications.
            </p>

            <button
              className="small-btn"
              onClick={() =>
                (window.location.hash = "applications")
              }
            >
              View Applications
            </button>
          </div>

          {/* Communication */}
          <div>
            <h3>💬 Communication</h3>

            <p>
              Contact the admin regarding your adoption.
            </p>

            <button
              className="small-btn"
              onClick={() =>
                (window.location.hash = "communication")
              }
            >
              Open Chat
            </button>
          </div>

          {/* Profile */}
          <div>
            <h3>👤 Profile</h3>

            <p>
              Name: {user?.name}
            </p>

            <p>
              Email: {user?.email}
            </p>
          </div>

        </div>

        <button
          className="auth-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </section>
  );
}

export default UserDashboard;