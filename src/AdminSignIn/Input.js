import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type = "text", placeholder, id }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={styles.inputField}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};

export default Input;