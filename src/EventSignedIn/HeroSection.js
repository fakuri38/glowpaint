import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroLeft}>
            <div className={styles.heroImage}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ea3b622fb1ea2a8e8aba9b44c34f516c87989a1ebbf8b655631ba2d0b53f51?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Glow Paint Run Logo" className={styles.heroImageContent} />
            </div>
            {/* <button className={styles.registerButton}>Register Now!</button>
            <p className={styles.registrationClosed}>Registration Closed: 1 Dec 2024</p> */}
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ae6b7c83ca64b986fd8bd73e590af9c529438c53f8f2e6fc9f101c4460ad3e8?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Glow Paint Run Event" className={styles.heroRightImage} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;