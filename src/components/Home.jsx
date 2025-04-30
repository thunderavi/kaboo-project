import React from 'react';
import './Home.css';
import FormSection from './FormSection';  // Import the new FormSection component

const Home = () => {
  return (
    <main className="main-container">
      <section className="left-section">
        <h1 className="main-heading">
          Partner with real estate agents in
          <br />
          your city{' '}
          <span className="highlighted-text">
            and accelerate your residential project sales
          </span>
        </h1>
        <p className="description">
          A plug-and-play platform designed to help real estate developers
          discover channel partners, manage communication, track site visits,
          and automate commission calculation - all in one place
        </p>
        <img
          src="https://storage.googleapis.com/a1aa/image/faf98a5f-53db-41f3-e08d-0b56ab3d6dcd.jpg"
          alt="Illustration"
          className="illustration"
        />
      </section>

      {/* Include the FormSection here */}
      <FormSection />
    </main>
  );
};

export default Home;
