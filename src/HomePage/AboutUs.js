import React from 'react';
import styles from './AboutUs.module.css';

function AboutUs() {
  return (
    <section className={styles.about}>
      <h2 className={styles.aboutTitle}>About Us</h2>
      <div className={styles.contentContainer}>
        <article className={styles.infoBox}>
          <h3 className={styles.infoTitle}>WHAT WE DO</h3>
          <hr className={styles.divider} />
          <p className={styles.infoText}>
            We help people find and register for the best and endurance events – all in one place. 
            Bringing people together for vibrant, glow-themed runs that combine fitness, fun, and community. 
            We are geared up to expand our services globally and to help people build a quality lifestyle. 
            Together we build a better future.
          </p>
        </article>
        <article className={styles.infoBox}>
          <h3 className={styles.infoTitle}>OUR VISION</h3>
          <hr className={styles.divider} />
          <p className={styles.infoText}>
            We are working towards building a platform to engage fitness in the community 
            under a splash of vibrant glow and for a quality lifestyle.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutUs;
