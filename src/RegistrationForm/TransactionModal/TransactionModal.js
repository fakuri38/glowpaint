import React from 'react';
import { BankCard } from './BankCard';
import { ReceiptUploader } from './ReceiptUploader';
import styles from './TransactionModal.module.css';

export const TransactionModal = () => {
  return (
    <main>
      <section className={styles.mainContent}>
        <div className={styles.receiptSection}>
          <div className={styles.receiptDetails}>
            <p>Email:</p>
            <p>Package:</p>
            <p>Amount:</p> 
          </div>
        </div>

        <BankCard />
        <ReceiptUploader />

        <p className={styles.reminder} role="alert">
          Reminder: Please make sure you transfer the correct amount to be
          able to join this run and activate your account before uploading.
        </p>
      </section>
    </main>
  );
};