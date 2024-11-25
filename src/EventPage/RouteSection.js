import React from 'react';
import styles from './RouteSection.module.css';

function RouteSection() {
  return (
    <section className={styles.routeSection}>
      <h2 className={styles.routeTitle}>Running Route</h2>
      <div className={styles.routeMapWrapper}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbf9db50394615c85a941a557dac3db2860b390c6e9b95ddf08794654388c208?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Running Route Map" className={styles.routeMap} />
      </div>
    </section>
  );
}

export default RouteSection;