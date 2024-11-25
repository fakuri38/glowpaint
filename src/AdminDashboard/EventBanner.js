import React from 'react';
import styles from './EventBanner.module.css';

function EventBanner() {
  return (
    <div className={styles.details}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28740ffbf2e5988edf5fe5195344b1dad80e8161df7b5a8a466d34c432836194?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
        className={styles.img2}
      />
      <div className={styles.eventTime}>
        <div className={styles.glowPaintRun}>GLOW PAINT RUN</div>
        <div className={styles.eventDate}>14 DECEMBER 2024</div>
      </div>
    </div>
  );
}

export default EventBanner;