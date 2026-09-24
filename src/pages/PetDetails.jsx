import { useState } from "react";
import petsData from "../data/pets";
import PetCard from "../components/PetCard";

function PetDetails() {
  const [pets] = useState(() => {
    const savedPets = localStorage.getItem("pets");

    if (savedPets) {
      return JSON.parse(savedPets);
    }

    return petsData;
  });

  return (
    <section className="pets-section" id="pets">
      <h2>🐾 Pets Available for Adoption</h2>

      <p className="pets-intro">
        Find a loving companion waiting for a forever home.
      </p>

      <div className="pets-grid">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))
        ) : (
          <p>No pets are currently available.</p>
        )}
      </div>
    </section>
  );
}

export default PetDetails;