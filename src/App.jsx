import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PetDetails from "./pages/PetDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdoptionForm from "./pages/AdoptionForm";
import Applications from "./pages/Applications";
import AdminApplications from "./pages/AdminApplications";
import Communication from "./pages/Communication";

function App() {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const userPages = [
      "#dashboard",
      "#adoption",
      "#applications",
      "#communication"
    ];

    const adminPages = [
      "#admin-dashboard",
      "#admin-applications"
    ];

    const loggedInUser =
      localStorage.getItem("loggedInUser");

    const adminLoggedIn =
      localStorage.getItem("adminLoggedIn");

    if (
      userPages.includes(page) &&
      !loggedInUser
    ) {
      window.location.hash = "login";
      return;
    }

    if (
      adminPages.includes(page) &&
      adminLoggedIn !== "true"
    ) {
      window.location.hash = "admin-login";
    }
  }, [page]);

  return (
    <>
      <Navbar />

      <main>

        {/* Home */}
        {(page === "" || page === "#home") && (
          <>
            <Home />
            <PetDetails />
            <Signup />
          </>
        )}

        {/* Pets */}
        {page === "#pets" && <PetDetails />}

        {/* Signup */}
        {page === "#signup" && <Signup />}

        {/* Login */}
        {page === "#login" && <Login />}

        {/* User Dashboard */}
        {page === "#dashboard" && <UserDashboard />}

        {/* Adoption */}
        {page === "#adoption" && <AdoptionForm />}

        {/* User Applications */}
        {page === "#applications" && <Applications />}

        {/* Communication */}
        {page === "#communication" && <Communication />}

        {/* Admin Login */}
        {page === "#admin-login" && <AdminLogin />}

        {/* Admin Dashboard */}
        {page === "#admin-dashboard" && <AdminDashboard />}

        {/* Admin Applications */}
        {page === "#admin-applications" && (
          <AdminApplications />
        )}

      </main>
    </>
  );
}

export default App;