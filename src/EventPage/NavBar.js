import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>GLOWPAINTRUN</div>
          <div className={styles.navLinks}>
            <a href="#home">Home</a>
            <a href="#event">Event</a>
            <a href="#kit-collection">Kit Collection</a>
            <a href="#e-cert">E-Cert</a>
          </div>
        </div>
        <div className={styles.navRight}>
          <button className={styles.signInButton}>Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;