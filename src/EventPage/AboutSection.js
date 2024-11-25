import React from 'react';
import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>About</h2>
      <div className={styles.aboutContent}>
        <p className={styles.aboutDescription}>
          3KPP is back with another amazing activity; Glow Paint Run. Let's brighten and light up the night with glow paint together with 3KPP24!
          <br />
          Lace up your sneakers and don't miss this great opportunity to showcase your athletic talent!
        </p>
        <div className={styles.eventDetails}>
          Date: 14 December 2024
          <br />
          Time: 6.30pm - 11.00pm
          <br />
          Starting Point: The Bricks, USM Main Campus
          <br />
          Distance: 5KM
        </div>
      </div>
    </section>
  );
}

export default AboutSection;