import { useEffect, useState } from "react";
import petsData from "../data/pets";

function AdminDashboard() {
  const [pets, setPets] = useState(() => {
    const savedPets = localStorage.getItem("pets");

    if (savedPets) {
      return JSON.parse(savedPets);
    }

    localStorage.setItem("pets", JSON.stringify(petsData));
    return petsData;
  });

  const [messages, setMessages] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("messages")) || []
    );
  });

  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    location: "",
    health: "",
    image: ""
  });

  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  const handleChange = (e) => {
    setNewPet({
      ...newPet,
      [e.target.name]: e.target.value
    });
  };

  const addPet = (e) => {
    e.preventDefault();

    const pet = {
      ...newPet,
      id: Date.now()
    };

    setPets([...pets, pet]);

    setNewPet({
      name: "",
      breed: "",
      age: "",
      gender: "",
      location: "",
      health: "",
      image: ""
    });
  };

  const deletePet = (id) => {
    const updatedPets = pets.filter(
      (pet) => pet.id !== id
    );

    setPets(updatedPets);
  };

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    window.location.hash = "home";
  };

  const refreshMessages = () => {
    const savedMessages =
      JSON.parse(localStorage.getItem("messages")) || [];

    setMessages(savedMessages);
  };

  return (
    <section className="admin-section">
      <div className="admin-container">

        {/* Admin Header */}
        <div className="admin-header">
          <div>
            <h1>👨‍💼 Admin Dashboard</h1>

            <p>
              Manage pets, applications and communication.
            </p>
          </div>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        </div>

        {/* Applications */}
        <div className="admin-card">
          <h2>📋 Adoption Applications</h2>

          <p>
            View and manage applications submitted by users.
          </p>

          <button
            className="auth-btn"
            onClick={() =>
              (window.location.hash = "admin-applications")
            }
          >
            View Applications
          </button>
        </div>

        {/* Communication */}
        <div className="admin-card">
          <div className="communication-header">
            <div>
              <h2>💬 User Messages</h2>

              <p>
                Messages received from users.
              </p>
            </div>

            <button
              className="small-btn"
              onClick={refreshMessages}
            >
              🔄 Refresh
            </button>
          </div>

          {messages.length === 0 ? (
            <p className="no-messages">
              No messages received yet.
            </p>
          ) : (
            <div className="admin-messages">

              {messages.map((msg) => (
                <div
                  className="admin-message"
                  key={msg.id}
                >
                  <h3>
                    👤 {msg.sender}
                  </h3>

                  <p>
                    <strong>Email:</strong>{" "}
                    {msg.email}
                  </p>

                  <p>
                    {msg.text}
                  </p>

                  <small>
                    {msg.time}
                  </small>
                </div>
              ))}

            </div>
          )}
        </div>

        {/* Add Pet */}
        <div className="admin-card">
          <h2>➕ Add New Pet</h2>

          <form
            className="pet-form"
            onSubmit={addPet}
          >

            <input
              type="text"
              name="name"
              placeholder="Pet Name"
              value={newPet.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="breed"
              placeholder="Breed"
              value={newPet.breed}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="age"
              placeholder="Age"
              value={newPet.age}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={newPet.gender}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newPet.location}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="health"
              placeholder="Health Status"
              value={newPet.health}
              onChange={handleChange}
              required
            />

            <input
              type="url"
              name="image"
              placeholder="Image URL"
              value={newPet.image}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="auth-btn"
            >
              Add Pet
            </button>

          </form>
        </div>

        {/* Available Pets */}
        <div className="admin-card">
          <h2>
            🐾 Available Pets ({pets.length})
          </h2>

          <div className="admin-pets-grid">

            {pets.map((pet) => (
              <div
                className="admin-pet"
                key={pet.id}
              >

                <img
                  src={pet.image}
                  alt={pet.name}
                />

                <div>

                  <h3>{pet.name}</h3>

                  <p>{pet.breed}</p>

                  <p>
                    {pet.age} • {pet.gender}
                  </p>

                  <p>{pet.location}</p>

                  <p>
                    Health: {pet.health}
                  </p>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deletePet(pet.id)
                    }
                  >
                    🗑️ Delete
                  </button>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default AdminDashboard;