import React from 'react';
// import styles from './GlowPaintRun.module.css';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>GLOWPAINTRUN</div>
          <nav className={styles.navLinks}>
            
            <Link to="/">Home</Link>
            <Link to="/event-page">Event</Link>
            <Link to="/kit-page">Kit Collection</Link>
            <a href="#e-cert">E-Cert</a>
          </nav>
        </div>
        <div className={styles.registerButton}>
        <Link to='/sign-in-page'>
        <button className={styles.signInButton}>Admin Sign In</button>
        </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;