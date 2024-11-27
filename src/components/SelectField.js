import React from "react";
import styles from "./SelectField.module.css";

export const SelectField = ({ label, id, options, placeholder }) => {
  return (
    <div className={styles.fieldWrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <select id={id} className={styles.select} aria-label={label}>
        <option value="" disabled className={styles.placeHolder}>
          {placeholder}{" "}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
