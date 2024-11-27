import React from 'react';
import styles from './PackageSelection.module.css';

export const PackageCard = ({ title, features, price }) => {
  return (
    <article className={styles.packageCard}>
      <h3 className={styles.packageTitle}>{title}</h3>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>{feature}</li>
        ))}
      </ul>
      <p className={styles.packagePrice}>Price: RM {price}</p>
    </article>
  );
};