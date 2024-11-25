import React from 'react';
// import styles from './GlowPaintRun.module.css';
import styles from './InfoSection.module.css'

function InfoSection({ title, description, imageSrc, imageRight }) {
  const infoText = (
    <div className={styles.infoText}>
      <h2 className={styles.infoTitle}>{title}</h2>
      <p className={styles.infoDescription}>{description}</p>
    </div>
  );

  const infoImage = (
    <img src={imageSrc} alt={title} className={styles.infoImage} />
  );

  // Arrange elements based on `imageRight`
  const content = imageRight ? [infoText, infoImage] : [infoImage, infoText];

  return (
    <section className={styles.infoSection}>
      <div className={styles.infoContent}>
        {content.map((element, index) => (
          <React.Fragment key={index}>{element}</React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default InfoSection;
