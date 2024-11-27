import React from "react";
import styles from "./SuccessfulRegistration.module.css";

export const SuccessfulRegistration = () => {
  return ( 
    <main>
      <section className={styles.mainContent}>
        <h3 className={styles.thankYouTitle}>
          Thank you for your registration!
        </h3>
        <p className={styles.approvalMessage}>
          Please wait maximum 3 business days for your account approval. You can
          sign in to your account after we approve your account.
        </p>
        <p className={styles.contactInfo}>
          For further inquires you may contact: <br /> Pavitra: 014-2561922{" "}
          <br /> Ikmal:011-30566351
        </p>

        <p>
          Follow us on every social media for more updates can contents. <br />{" "}
          Instagram: @3kppusm
          <br />
          Tiktok: @3kpp_usm
        </p>
      </section>
    </main>
  );
};
