import React from "react";
import { TextField } from "../../components/TextField";
import { PasswordField } from "../../components/PasswordField";
import styles from "../RegistrationForm.module.css";

export const PublicRegistration = () => {
  return (
    <main>
      <form className={styles.formContent}>
        <TextField
          label="Email Address"
          placeholder="Email address"
          type="email"
          id="email"
        />
        <TextField
          label="Full Name"
          placeholder="Full name as per IC/Passport"
          id="fullName"
        />
        <PasswordField
          label="Password"
          placeholder="8 - 12 characters password"
          id="password"
        />
        <PasswordField
          label="Confirm Password"
          placeholder="Retype your password"
          id="confirmPassword"
        />
        <TextField
          label="Phone Number"
          placeholder="Phone number"
          id="phoneNumber"
        />
      </form>
    </main>
  );
};
