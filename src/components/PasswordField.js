import React from "react";
import styles from "./PasswordField.module.css";

export const PasswordField = ({ label, placeholder, id }) => {
  return (
    <div className={styles.passwordFieldWrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {/* <div className={styles.inputWrapper}> */}
      <input
        type="password"
        id={id}
        className={styles.input}
        placeholder={placeholder}
        aria-label={label}
      />
      {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/fb2c95ce6a8d473e94eb0b0c97b334f0/83bbb385c0c85606c86d836551f5136fe928dd6856ccf2dd90b891161d7149dd?apiKey=fb2c95ce6a8d473e94eb0b0c97b334f0&"
          className={styles.visibilityIcon}
          alt=""
          role="presentation"
        /> */}
      {/* </div> */}
    </div>
  );
};
