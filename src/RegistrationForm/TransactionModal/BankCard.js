import React from "react";
import styles from "./TransactionModal.module.css";

export const BankCard = () => {
  return (
    <section className={styles.bankCard} aria-label="Bank transfer details">
      <div> 
        <h3>3KPP USM</h3>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/fb2c95ce6a8d473e94eb0b0c97b334f0/412ba2baf1b9f219c69354c823187899c806aa0f2972db27cb6c898fbe0b705b?apiKey=fb2c95ce6a8d473e94eb0b0c97b334f0&"
          className={styles.bankImage}
          alt="Bank transfer instructions"
        />
      </div>
      <button onClick={() => void 0}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/fb2c95ce6a8d473e94eb0b0c97b334f0/608c01ed0988ddba174ea9a158cd64f6c48427d78256629f9d6480f13e61c01a?apiKey=fb2c95ce6a8d473e94eb0b0c97b334f0&"
          className={styles.bankLogo}
          alt="download"
        />
      </button>
    </section>
  );
};
