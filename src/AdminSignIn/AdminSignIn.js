import React from 'react';
import Input from './Input';
import styles from './AdminSignIn.module.css';
import {Link} from 'react-router-dom';

export const AdminSignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.adminSignIn}>
      <section className={styles.authContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e30193090088ad426ea9bbcc6026fc7dcfcc2f2a3754e6df9332eccb03579c6?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
          className={styles.brandLogo}
          alt="GlowPaintRun Logo"
        />
        <article className={styles.formContainer}>
          <header className={styles.formHeader}>
            <h2 className={styles.welcomeText}>Welcome to GlowPaintRun</h2>
            <h1 className={styles.signInTitle}>Sign In to Dashboard</h1>
          </header>
          <form onSubmit={handleSubmit} className={styles.signInForm}>
            <Input
              label="Enter your email address"
              type="email"
              placeholder="Email address"
              id="email"
            />
            <Input
              label="Enter your password"
              type="password"
              placeholder="Password"
              id="password"
            />
            <Link to='/admin-dashboard-page'>
            <button type="submit" className={styles.signInButton}>
              Sign In
            </button>
            </Link>
          </form>
        </article>
      </section>
    </main>
  );
};