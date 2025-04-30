import React from 'react';
import './Home.css';

const FormSection = () => {
  return (
    <section className="form-section">
      <h2>Create an Account</h2>
      <form className="form">
        <label>
          <span>Email Address</span>
          <input type="email" value="mohammed.ishan@flyingrealty.com" />
        </label>
        <label>
          <span>Phone Number</span>
          <div className="phone-input">
            <button type="button">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="Indian Flag"
              />
              +91
              <i className="fas fa-chevron-down"></i>
            </button>
            <input type="tel" value="9876543210" />
          </div>
        </label>
        <div className="name-fields">
          <label>
            <span>First Name</span>
            <input type="text" value="Mohammed" />
          </label>
          <label>
            <span>Last Name</span>
            <input type="text" value="Ishan" />
          </label>
        </div>
        <label className="password-field">
          <span>Password</span>
          <input type="password" value="***************" />
          <button type="button" className="eye-icon">
            <i className="fas fa-eye"></i>
          </button>
        </label>
        <p className="terms">
          By clicking on <strong>Create an account</strong>, you agree to our{' '}
          <a href="#">T&amp;C</a>
        </p>
        <button type="submit" className="submit-btn">
          Create an account
        </button>
      </form>
      <p className="login-link">
        Already have an account? <a href="#">Login</a>
      </p>
    </section>
  );
};

export default FormSection;
