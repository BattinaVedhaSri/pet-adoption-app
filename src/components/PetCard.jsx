function PetCard({ pet }) {
  const handleAdopt = () => {
    const loggedInUser = localStorage.getItem(
      "loggedInUser"
    );

    if (!loggedInUser) {
      alert("Please login before applying for adoption.");
      window.location.hash = "login";
      return;
    }

    localStorage.setItem(
      "selectedPet",
      JSON.stringify(pet)
    );

    window.location.hash = "adoption";
  };

  return (
    <div className="pet-card">

      <img
        src={pet.image}
        alt={pet.name}
      />

      <div className="pet-info">

        <h3>{pet.name}</h3>

        <p>
          <strong>Breed:</strong> {pet.breed}
        </p>

        <p>
          <strong>Age:</strong> {pet.age}
        </p>

        <p>
          <strong>Gender:</strong> {pet.gender}
        </p>

        <p>
          <strong>Location:</strong> {pet.location}
        </p>

        <p>
          <strong>Health:</strong> {pet.health}
        </p>

        <button
          className="view-btn"
          onClick={handleAdopt}
        >
          ❤️ Apply for Adoption
        </button>

      </div>
    </div>
  );
}

export default PetCard;