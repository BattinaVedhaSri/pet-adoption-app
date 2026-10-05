```jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    setAdminLoggedIn(
      localStorage.getItem("adminLoggedIn") === "true"
    );

    setUserLoggedIn(
      localStorage.getItem("userLoggedIn") === "true"
    );
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("userLoggedIn");

    setAdminLoggedIn(false);
    setUserLoggedIn(false);

    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        🐾 Best Friend
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {/* NOT LOGGED IN */}
        {!adminLoggedIn && !userLoggedIn && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {/* USER LOGGED IN */}
        {userLoggedIn && !adminLoggedIn && (
          <>
            <Link to="/user-dashboard">Dashboard</Link>
            <Link to="/applications">Applications</Link>
            <Link to="/communication">Communication</Link>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

        {/* ADMIN LOGGED IN */}
        {adminLoggedIn && (
          <>
            <Link to="/admin-dashboard">
              Admin Dashboard
            </Link>

            <Link to="/admin-applications">
              Applications
            </Link>

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
```
