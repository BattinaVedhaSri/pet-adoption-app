import { useState } from "react";

function AdoptionForm() {
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const selectedPet = JSON.parse(
    localStorage.getItem("selectedPet")
  );

  const [formData, setFormData] = useState({
    petName: selectedPet?.name || "",
    name: loggedInUser?.name || "",
    email: loggedInUser?.email || "",
    phone: "",
    address: "",
    reason: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const newApplication = {
      id: Date.now(),
      ...formData,
      status: "Pending",
      backgroundCheck: "Pending"
    };

    applications.push(newApplication);

    localStorage.setItem(
      "applications",
      JSON.stringify(applications)
    );

    setMessage(
      "Application submitted successfully! 🐾"
    );

    setFormData({
      petName: selectedPet?.name || "",
      name: loggedInUser?.name || "",
      email: loggedInUser?.email || "",
      phone: "",
      address: "",
      reason: ""
    });
  };

  return (
    <section className="auth-section">
      <div className="auth-card adoption-card">

        <h2>📋 Adoption Application</h2>

        <p>
          Apply to give a pet a loving home.
        </p>

        {selectedPet && (
          <div className="selected-pet">
            <h3>🐾 Selected Pet</h3>

            <p>
              <strong>{selectedPet.name}</strong>
            </p>

            <p>
              {selectedPet.breed} • {selectedPet.age}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="petName"
            placeholder="Pet Name"
            value={formData.petName}
            readOnly
          />

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
            placeholder="Email"
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

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <textarea
            name="reason"
            placeholder="Why do you want to adopt this pet?"
            value={formData.reason}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Submit Application
          </button>

        </form>

        {message && (
          <p className="success-message">
            {message}
          </p>
        )}

      </div>
    </section>
  );
}

export default AdoptionForm;