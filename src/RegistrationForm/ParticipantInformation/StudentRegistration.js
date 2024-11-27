import React from "react";
import styles from "../RegistrationForm.module.css";
import { TextField } from "../../components/TextField";
import { SelectField } from "../../components/SelectField";

export const StudentRegistration = () => {
  const schoolOptions = [ 
    {
      value: "School of Computer Science",
    },
    { value: "School of Chemistry" },
    {
      value: "School of Housing, Building and Planning",
    },
  ];

  const campusOptions = [
    { value: "Kampus Induk" },
    { value: "Kampus Kejuruteraan" },
  ];

  return (
    <main>
      <form className={styles.formContent}>
        <TextField
          label="Email Address"
          id="email"
          type="email"
          placeholder="Email address"
        />
        <TextField
          label="Full Name"
          id="fullName"
          placeholder="Full name as per IC/Passport"
        />
        <TextField
          label="Password"
          id="password"
          type="password"
          placeholder="8 - 12 characters password"
        />
        <TextField
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          placeholder="Retype your password"
        />
        <TextField
          label="Matric Number"
          id="matricNumber"
          placeholder="Matric number eg: XXXXX"
        />
        <SelectField
          label="Campus"
          id="campus"
          options={campusOptions}
          placeholder="Select your campus"
        />
        <SelectField
          label="School"
          id="school"
          options={schoolOptions}
          placeholder="Select your school"
        />
      </form>
    </main>
  );
};
