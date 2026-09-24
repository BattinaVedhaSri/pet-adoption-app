function Navbar() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const adminLoggedIn =
    localStorage.getItem("adminLoggedIn");

  return (
    <nav className="navbar">

      <div className="logo">
        🐾 PetAdopt
      </div>

      <div className="nav-links">

        <a href="#home">
          Home
        </a>

        <a href="#pets">
          Pets
        </a>

        {!loggedInUser && (
          <>
            <a href="#login">
              Login
            </a>

            <a href="#signup">
              Signup
            </a>
          </>
        )}

        {loggedInUser && (
          <>
            <a href="#dashboard">
              Dashboard
            </a>

            <a href="#applications">
              Applications
            </a>

            <a href="#communication">
              💬 Chat
            </a>
          </>
        )}

        {!adminLoggedIn && !loggedInUser && (
          <a href="#admin-login">
            Admin
          </a>
        )}

        {adminLoggedIn && (
          <>
            <a href="#admin-dashboard">
              Admin Dashboard
            </a>

            <a href="#admin-applications">
              Applications
            </a>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;