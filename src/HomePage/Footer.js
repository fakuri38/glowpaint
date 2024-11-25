import React from 'react';
// import styles from './GlowPaintRun.module.css';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>GLOWPAINTRUN</div>
          <div className={styles.footerLinks}>
          <Link to="/">Home</Link>
            <a href="#about-us">About Us</a>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.socialIcons}>
            {['https://cdn.builder.io/api/v1/image/assets/TEMP/3133a99ab189e52878bcd0fe58bee821fc721b701ea1cc26b4882663c6dbdb6e?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c', 'https://cdn.builder.io/api/v1/image/assets/TEMP/ed954666f8d98909ecb0828f4a3b179349798c165bd2c70568cb81415487a044?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c', 'https://cdn.builder.io/api/v1/image/assets/TEMP/1339bae5f05877b6aa66d1b6f759cd545c2443d22f2ef53d16ec0bbba8f460cf?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c'].map((src, index) => (
              <img key={index} src={src} alt={`Social icon ${index + 1}`} className={styles.socialIcon} />
            ))}
          </div>
          <div className={styles.contactInfo}>
            {['3kpp_usm', '3kpp_usm', 'Karnival Keusahawan & Kerjaya Pulau PInang'].map((item, index) => (
              <div key={index} className={styles.contactItem}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;