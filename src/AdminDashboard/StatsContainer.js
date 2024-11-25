import React from 'react';
import styles from './StatsContainer.module.css';

function StatsContainer() {
  return (
    <div className={styles.stat}>
      <div className={styles.dashboard}>DASHBOARD</div>
      <div className={styles.todaysStatistic}>Today's Statistic</div>
      <div className={styles.div4}>
        <div className={styles.noUsers}>
          <img
            
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a65c5db4709655f50d17af4ba32607e0d107b4244d4fa666a272cf1b886f2378?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
            className={styles.img}
          />
          <div className={styles.div5}>
            <div className={styles.participants}>Participants</div>
            <div className={styles.participants198}>198</div>
          </div>
        </div>
        <div className={styles.noKit}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3489a2a0fa22dd1a07974ce312f39845e505205d8aa34ab40f5ffea4092da0ae?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
            className={styles.img}
          />
          <div className={styles.div6}>
            <div className={styles.kitCollected}>Kit collected</div>
            <div className={styles.kitRatio}>100/198</div>
          </div>
        </div>
        <div className={styles.noKitAvail}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c2d4b23c5babc1e19d51571bdfe206bd8daa881b4487d63d6864f75ddb05785?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
            className={styles.img}
          />
          <div className={styles.div7}>
            <div className={styles.pendingList}>Website visitor</div>
            <div className={styles.visitorCount}>205</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsContainer;