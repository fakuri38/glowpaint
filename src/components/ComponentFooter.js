import React from 'react';
import styles from './ComponentFooter.module.css';
import { Link } from 'react-router-dom';

export const ComponentFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h1 className={styles.footerLogo}>GLOWPAINTRUN</h1>
          <nav className={styles.footerLinks}>
            <Link to="/" className={styles.footerLink}>Home</Link>
            <Link to="/terms-condition-signed-in-page" className={styles.footerLink}>Terms & Conditions</Link>
          </nav>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.socialIcons}>
            <a href="https://www.tiktok.com/@3kpp_usm" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3133a99ab189e52878bcd0fe58bee821fc721b701ea1cc26b4882663c6dbdb6e"
                alt="Tiktok"
                className={styles.socialIcon}
              />
            </a>
            <a href="https://www.instagram.com/3kpp_usm/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed954666f8d98909ecb0828f4a3b179349798c165bd2c70568cb81415487a044"
                alt="Instagram"
                className={styles.socialIcon}
              />
            </a>
            <a href="https://www.facebook.com/p/Karnival-Keusahawanan-Kerjaya-Pulau-Pinang-100085816266970/" target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1339bae5f05877b6aa66d1b6f759cd545c2443d22f2ef53d16ec0bbba8f460cf"
                alt="Facebook"
                className={styles.socialIcon}
              />
            </a>
          </div>
          <div className={styles.contactInfo}>
            <a href="https://www.tiktok.com/@3kpp_usm" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <div className={styles.contactItem}>3kpp_usm</div>
            </a>
            <a href="https://www.instagram.com/3kpp_usm/?hl=en" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <div className={styles.contactItem}>3kpp_usm</div>
            </a>
            <a href="https://www.facebook.com/p/Karnival-Keusahawanan-Kerjaya-Pulau-Pinang-100085816266970/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <div className={styles.contactItem}>Karnival Keusahawanan & Kerjaya Pulau Pinang</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ComponentFooter;
