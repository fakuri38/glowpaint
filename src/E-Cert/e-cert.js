import React from "react";
import styles from "./e-cert.module.css";

const ECert = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>E-CERT</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Category</th>
            <th>Package</th>
            <th>E-CERT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ABU BIN AHMAD</td>
            <td>12/12/2024</td>
            <td>USM Student</td>
            <td>GLOW-RIOUS LITE</td>
            <td>
              <div className={styles.checkIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="green"
                  width="20px"
                  height="20px"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm-1.05 18l-4.95-5.05 1.414-1.414L10.95 15.2l6.636-6.636 1.414 1.414L10.95 18z" />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ECert;