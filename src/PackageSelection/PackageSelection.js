import React, { useState } from 'react';
import styles from './PackageSelection.module.css';

export const PackageSelection = ({ onClose, onBack }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { title: 'Starter', features: ['LED Stick', 'Refreshments'], price: '15' },
    { title: 'Lite', features: ['T-Shirt', 'LED Stick'], price: '35' },
    { title: 'Pro', features: ['T-Shirt', 'LED Stick', 'Medal'], price: '50' },
  ];

  return (
    <main className={styles.packageSelection}>
      <header className={styles.modalHeader}>   
        <button className={styles.closeButton} onClick={onClose}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fb2c95ce6a8d473e94eb0b0c97b334f0/f9c1e4fb612255943eac4158feb6ec4bd22fb1491781e95cc8a7cef092677e64?apiKey=fb2c95ce6a8d473e94eb0b0c97b334f0&"
            className={styles.closeIcon}
            alt="Close"
          />
        </button>
        <h2>Package Selection</h2>
      </header>

      <section className={styles.content}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.packageCard}>
            <h3>{pkg.title}</h3>
            <ul>
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <p>Price: RM {pkg.price}</p>
          </div>
        ))}
      </section>

      <footer className={styles.modalFooter}>
        {onBack && <button className={styles.backButton} onClick={onBack}>Back</button>}
        <button className={styles.nextButton}>Next</button>
      </footer>
    </main>
  );
};
