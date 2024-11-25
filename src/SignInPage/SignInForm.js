import React, { useState } from 'react';
import styles from './SignInForm.module.css';
import {Link} from 'react-router-dom';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className={styles.signInFormContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.welcomeText}>Welcome to GlowPaintRun</h2>
        <h3 className={styles.signInTitle}>Sign In</h3>
        <form className={styles.signInForm} onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="#" className={styles.forgotPassword}>
            Forgot password?
          </a>
          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>
        </form>
        <div className={styles.signUpPrompt}>
          <span className={styles.orText}>or</span>
          <div className={styles.noAccountText}>
            <span>No account?</span>
            <Link to='/sign-up-page'>
            <button className={styles.signUpNow}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInForm;