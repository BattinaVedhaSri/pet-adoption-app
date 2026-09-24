import { useEffect, useState } from "react";

function AdminApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    setApplications(savedApplications);
  }, []);

  const updateApplication = (id, field, value) => {
    const updatedApplications = applications.map(
      (application) =>
        application.id === id
          ? {
              ...application,
              [field]: value
            }
          : application
    );

    setApplications(updatedApplications);

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );
  };

  return (
    <section className="applications-section">
      <div className="applications-container">

        <h1>📋 Adoption Applications</h1>

        <p>
          Review applications and complete background checks.
        </p>

        {applications.length === 0 ? (
          <div className="empty-applications">
            <h3>No applications found.</h3>

            <p>
              Applications submitted by users will appear here.
            </p>
          </div>
        ) : (
          <div className="applications-grid">

            {applications.map((application) => (
              <div
                className="application-card"
                key={application.id}
              >

                <h2>🐾 {application.petName}</h2>

                <p>
                  <strong>Applicant:</strong>{" "}
                  {application.name}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {application.email}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {application.phone}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {application.address}
                </p>

                <p>
                  <strong>Reason:</strong>{" "}
                  {application.reason}
                </p>

                {/* Application Status */}
                <div
                  className={`status ${application.status.toLowerCase()}`}
                >
                  Application Status:{" "}
                  {application.status}
                </div>

                {/* Background Check */}
                <div className="background-check">
                  <strong>🔍 Background Check:</strong>

                  <span>
                    {application.backgroundCheck || "Pending"}
                  </span>
                </div>

                <div className="application-actions">

                  <button
                    className="check-btn"
                    onClick={() =>
                      updateApplication(
                        application.id,
                        "backgroundCheck",
                        "Completed"
                      )
                    }
                  >
                    🔍 Mark Check Completed
                  </button>

                  <button
                    className="approve-btn"
                    onClick={() =>
                      updateApplication(
                        application.id,
                        "status",
                        "Approved"
                      )
                    }
                  >
                    ✅ Approve
                  </button>

                  <button
                    className="reject-btn"
                    onClick={() =>
                      updateApplication(
                        application.id,
                        "status",
                        "Rejected"
                      )
                    }
                  >
                    ❌ Reject
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

        <button
          className="auth-btn"
          onClick={() =>
            (window.location.hash = "admin-dashboard")
          }
        >
          ← Back to Admin Dashboard
        </button>

      </div>
    </section>
  );
}

export default AdminApplications;