import React from "react";
import styles from "./SignInModal.module.css";

const SignInModal = ({ isOpen, onClose, onNext }) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal isn't open
  }

  return (
    <>
      {/* Modal Overlay */}
      <div className={styles.modalOverlay} onClick={onClose}></div>

      {/* Modal Content */}
      <div className={styles.registrationModal}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            <img
              src="/icons/close.svg"
              alt="Close"
              className={styles.closeIcon}
            />
          </button>
          <div className={styles.headerContent}>
            <p className={styles.welcomeText}>Welcome Back!</p>
            <h2 className={styles.registrationTitle}>Sign In</h2>
          </div>
        </div>

        {/* Progress Bar (optional) */}
        <div className={styles.progressBar}>
          <img
            src="/images/progress.png"
            alt="Progress"
            className={styles.progressImage}
          />
        </div>

        {/* Registration Types */}
        <div className={styles.registrationTypes}>
          <button className={`${styles.typeButton} ${styles.active}`}>
            Individual
          </button>
          <button className={styles.typeButton}>Organization</button>
        </div>

        {/* Form Content */}
        <div className={styles.formContent}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={styles.inputField}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className={styles.inputField}
          />
        </div>

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <button className={styles.nextButton} onClick={onNext}>
            Sign In
          </button>
          <div className={styles.signInSection}>
            <p className={styles.orText}>or</p>
            <p className={styles.signInText}>
              Don't have an account?{" "}
              <a href="/register" className={styles.signInLink}>
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInModal;
