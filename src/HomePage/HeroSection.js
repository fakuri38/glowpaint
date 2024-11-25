import React from 'react';
// import styles from './GlowPaintRun.module.css';
import styles from './HeroSection.module.css';
import {Link} from 'react-router-dom';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Have a <br></br>Glowrious Run</h1>
          <p className={styles.heroDescription}>
            Get ready to light up the night at the most vibrant and electrifying 5KM run ever! <br></br>Join us for an unforgettable experience filled with endless fun.
          </p>
        </div>
        <div className={styles.registerButton}>
        <Link to='/event-page'>
          <button className={styles.registerNow}>Register Now!</button>
          </Link>
        </div>

      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/08cd7aba9a428879348cf92e43b17617e09ed49a03e50155ebf1ace5820b627d?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Glowrious Run Event" className={styles.heroImage} />
    </section>
  );
}

export default HeroSection;