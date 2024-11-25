import React from 'react';
import styles from './SignUpForm.module.css';

function SignUpForm() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.welcomeText}>Welcome to GlowPaintRun</h2>
      <h3 className={styles.signUpTitle}>Sign Up</h3>
      <form className={styles.signUpForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputLabel}>
            Enter your email address
          </label>
          <input
            type="email"
            id="email"
            className={styles.inputField}
            placeholder="Email address"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.inputLabel}>
            Enter your password
          </label>
          <input
            type="password"
            id="password"
            className={styles.inputField}
            placeholder="Password"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.inputLabel}>
            Confirm your password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={styles.inputField}
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit" className={styles.signUpButton}>
          Sign Up
        </button>
      </form>
      <div className={styles.loginPrompt}>
        <span className={styles.orText}>or</span>
        <p className={styles.loginText}>
          Have an account?{' '}
          <a href="#login" className={styles.loginLink}>
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;