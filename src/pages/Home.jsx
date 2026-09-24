function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>🐾 Find Your New Best Friend</h1>
        <p>
          Give a loving pet a forever home and make a difference in their life.
        </p>

        <div className="hero-buttons">
          <a href="#pets" className="btn primary-btn">
            Browse Pets
          </a>

          <a href="#signup" className="btn secondary-btn">
            Create Account
          </a>
        </div>
      </section>

      <section className="about">
        <h2>About Our Platform</h2>
        <p>
          Our Pet Adoption Platform connects people looking to adopt pets
          with shelters and pet owners. Users can browse pet profiles,
          view health information, and submit adoption applications.
        </p>
      </section>

      <section className="features">
        <div className="feature-card">
          <span>🐶</span>
          <h3>Browse Pets</h3>
          <p>Explore pets available for adoption.</p>
        </div>

        <div className="feature-card">
          <span>📋</span>
          <h3>Easy Application</h3>
          <p>Submit an adoption application easily.</p>
        </div>

        <div className="feature-card">
          <span>❤️</span>
          <h3>Find a Forever Home</h3>
          <p>Help pets find a safe and loving home.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;