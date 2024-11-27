import React from 'react';
import styles from './TransactionModal.module.css';

export const ReceiptUploader = () => {
  return ( 
    <section className={styles.uploadSection}>
      <h3 className={styles.uploadTitle}>Upload you receipt here:</h3>
      <div 
        className={styles.uploadZone}
        role="button"
        tabIndex={0}
        aria-label="Upload receipt"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/fb2c95ce6a8d473e94eb0b0c97b334f0/1f5e4e34dc1bfbc0375b0ec18659feeaa23aeaa36691d53c437724941cd7105e?apiKey=fb2c95ce6a8d473e94eb0b0c97b334f0&"
          className={styles.uploadIcon}
          alt=""
        />
        <p>Upload your receipt</p>
      </div>
    </section>
  );
};