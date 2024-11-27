import React from 'react';
import styles from './ComponentHeader.module.css';
import {Link} from 'react-router-dom';

export const ComponentHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <h1 className={styles.logo}>GLOWPAINTRUN</h1>
        <nav className={styles.navLinks}>
        <Link to="/home-signed-in-page" className={styles.navLink}>Home</Link>
        <Link to="/event-signed-in-page" className={styles.navLink}>Event</Link>
        <Link to="/kit-page" className={styles.navLink}>Kit Collection</Link>
          <a href="/ecert" className={styles.navLink}>E-Cert</a>
        </nav>
      </div>
      <div className={styles.authContainer}>
        <Link to='/'>
        <button className={styles.logoutButton}>Log Out</button>
        </Link>
      </div>
    </header>
  );
};
