import React from 'react';
import TextField from './TextField';
import PasswordField from './PasswordField';
import styles from './RegistrationForm.module.css';

export const RegistrationForm = ({ onNext, onClose }) => {
  return (
    <>
      {/* Overlay to block background */}
      <div className={styles.overlay}></div>

      <main className={styles.registrationModal}>
        <header className={styles.modalHeader}>
          <button className={styles.closeButton} aria-label="Close registration form">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/fb2c95ce6a8d473e94eb0b0c97b334f0/f9c1e4fb612255943eac4158feb6ec4bd22fb1491781e95cc8a7cef092677e64?apiKey=fb2c95ce6a8d473e94eb0b0c97b334f0&"
              className={styles.closeIcon}
              alt=""
            />
          </button>
          <section className={styles.headerContent}>
            <h1 className={styles.welcomeText}>Welcome to GlowPaintRun</h1>
            <h2 className={styles.registrationTitle}>Registration</h2>
            <nav className={styles.progressBar}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/fb2c95ce6a8d473e94eb0b0c97b334f0/51f956471fda331501d7f6fa46ecd88f763cbf04231caafe6bf96e0cbac41199?apiKey=fb2c95ce6a8d473e94eb0b0c97b334f0&"
                className={styles.progressImage}
                alt="Registration progress"
              />
            </nav>
          </section>
          <nav className={styles.registrationTypes}>
            <button className={styles.typeButton}>USM Student</button>
            <button className={`${styles.typeButton} ${styles.active}`}>Public</button>
          </nav>
        </header>

        <form className={styles.formContent}>
          <TextField
            label="Email Address"
            placeholder="Email address"
            type="email"
            id="email"
          />
          <TextField
            label="Full Name"
            placeholder="Full name as per IC/Passport"
            id="fullName"
          />
          <PasswordField
            label="Password"
            placeholder="8 - 12 characters password"
            id="password"
          />
          <PasswordField
            label="Confirm Password"
            placeholder="Retype your password"
            id="confirmPassword"
          />
        </form>

        <footer className={styles.modalFooter}>
          <button className={styles.nextButton} onClick={onNext}>Next</button>
          <div className={styles.signInSection}>
            <p className={styles.orText}>or</p>
            <p className={styles.signInText}>
              Have an account?{" "}
              <a href="#" className={styles.signInLink}>Sign In</a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};
