import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <div className={styles.footerLogo}>GLOWPAINTRUN</div>
          <div className={styles.footerNavLinks}>
            <a href="#home">Home</a>
            <a href="#about-us" className={styles.aboutUs}>About Us</a>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <div className={styles.socialIcons}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3133a99ab189e52878bcd0fe58bee821fc721b701ea1cc26b4882663c6dbdb6e?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Social media icon" className={styles.socialIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/35aa79b58919ebb2bb8630b5a6e6874179a3e1c0632eb6eccf0f7cea3daf4cdb?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Social media icon" className={styles.socialIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a48f8d47a3dff34e0efb5f6069875d32889af5c4b2420e82f82f51f42895d93?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Social media icon" className={styles.socialIcon} />
          </div>
          <div className={styles.contactInfo}>
            <div>3kpp_usm</div>
            <div>3kpp_usm</div>
            <div>Karnival Keusahawan & Kerjaya Pulau PInang</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;