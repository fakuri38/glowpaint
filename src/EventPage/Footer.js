import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>GLOWPAINTRUN</div>
          <div className={styles.footerLinks}>
            <div>Home</div>
            <div className={styles.aboutUs}>About Us</div>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.socialIcons}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3133a99ab189e52878bcd0fe58bee821fc721b701ea1cc26b4882663c6dbdb6e?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Social Icon 1" className={styles.socialIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bc1ceffccca686f9bcf32e550bf83ad20e38750daef9eab469bf78028e764f8?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Social Icon 2" className={styles.socialIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee8b1581a584045f92fd02b69d72dabfafff0864bed307bd52c00f56cd3617d?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Social Icon 3" className={styles.socialIcon} />
          </div>
          <div className={styles.contactInfo}>
            <div>3kpp_usm</div>
            <div className={styles.contactEmail}>3kpp_usm</div>
            <div className={styles.contactAddress}>
              Karnival Keusahawan & Kerjaya Pulau PInang
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;