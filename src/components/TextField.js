import React from 'react';
import styles from './TextField.module.css';

export const TextField = ({ label, placeholder, type = "text", id }) => {
  return (
    <div className={styles.textFieldWrapper}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        type={type}
        id={id} 
        className={styles.input}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};