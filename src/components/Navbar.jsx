import { useEffect, useState } from "react";

function Navbar() {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const updateLoginStatus = () => {
    setAdminLoggedIn(
      localStorage.getItem("adminLoggedIn") === "true"
    );

    setUserLoggedIn(
      localStorage.getItem("loggedInUser") !== null
    );
  };

  useEffect(() => {
    updateLoginStatus();

    window.addEventListener(
      "hashchange",
      updateLoginStatus
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        updateLoginStatus
      );
    };
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

  const handleLogout = () => {
    // Remove all login information
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userLoggedIn");

    setAdminLoggedIn(false);
    setUserLoggedIn(false);

    // Return to home page
    window.location.hash = "";
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div
        className="logo"
        onClick={() => navigate("home")}
        style={{ cursor: "pointer" }}
      >
        🐾 Best Friend
      </div>

      <div className="nav-links">

        {/* Home */}
        <a
          href="#home"
          onClick={() => navigate("home")}
        >
          Home
        </a>

        {/* ========================= */}
        {/* NOT LOGGED IN */}
        {/* ========================= */}

        {!adminLoggedIn && !userLoggedIn && (
          <>
            <a href="#login">
              Login
            </a>

            <a href="#signup">
              Signup
            </a>

            <a href="#admin-login">
              Admin Login
            </a>
          </>
        )}

        {/* ========================= */}
        {/* USER LOGGED IN */}
        {/* ========================= */}

        {userLoggedIn && !adminLoggedIn && (
          <>
            <a href="#dashboard">
              Dashboard
            </a>

            <a href="#applications">
              Applications
            </a>

            <a href="#communication">
              Communication
            </a>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        {/* ========================= */}
        {/* ADMIN LOGGED IN */}
        {/* ========================= */}

        {adminLoggedIn && (
          <>
            <a href="#admin-dashboard">
              Admin Dashboard
            </a>

            <a href="#admin-applications">
              Applications
            </a>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
