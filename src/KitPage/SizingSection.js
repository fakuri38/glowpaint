import React from 'react';
import styles from './SizingSection.module.css';

const SizingSection = () => {
  return (
    <section className={styles.sizingSection}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/132a98926835c096eee4819aeb8f9d89610028ce8563062b714a6f7881792432?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" alt="Sizing chart" className={styles.sizingImage} />
      <h2 className={styles.sizingTitle}>
        Sizing <br /> Chart
      </h2>
    </section>
  );
};

export default SizingSection;