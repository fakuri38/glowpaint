import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1da4af4b8dbfeb6eb08e6f84fe11bb4920bcd062f7543af1bb485ba33760fb0a?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" 
          alt="Event information graphic" 
          className={styles.infoImage} 
          />
          <p className={styles.infoText}>
            Please bring your Student Matric Card or Identification Card for verification
          </p>
        </div>
        <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9889a6f0250fd53099f31f3a11fe7717fa46a72c02da490cdfeb996eec6e537f?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" 
        alt="Event promotional image" 
        className={styles.mainImage} 
        />
      </div>
    </main>
  );
};

export default MainContent;