import { useEffect, useState } from "react";

function Applications() {
  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedApplications =
      JSON.parse(
        localStorage.getItem("applications")
      ) || [];

    const userApplications = savedApplications.filter(
      (application) =>
        application.email === user?.email
    );

    setApplications(userApplications);
  }, [user?.email]);

  return (
    <section className="applications-section">

      <div className="applications-container">

        <h1>📋 My Adoption Applications</h1>

        <p>
          Track the status of your adoption applications.
        </p>

        {applications.length === 0 ? (

          <div className="empty-applications">
            <h3>No applications found.</h3>
            <p>
              Apply for a pet to see your application here.
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
                  <strong>Name:</strong>{" "}
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
                  <strong>Reason:</strong>{" "}
                  {application.reason}
                </p>

                <div
                  className={`status ${application.status.toLowerCase()}`}
                >
                  Status: {application.status}
                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default Applications;