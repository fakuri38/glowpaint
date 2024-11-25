import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const navItems = ['Home', 'Event', 'Kit Collection', 'E-Cert'];

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.navbarLeft}>
          <h1 className={styles.logo}>GLOWPAINTRUN</h1>
          <nav className={styles.navMenu}>
            {navItems.map((item, index) => (
              <a key={index} href="#" className={styles.navItem}>
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.navbarRight} />
      </div>
    </header>
  );
}

export default Navbar;