import React from "react";
import styles from "./AttendanceSuccess.module.css"; // Optional for modular CSS

const AttendanceSuccess = () => {
  return (
    <div className={styles.container}>

      {/* Main Content */}
      <main className={styles.main}>
        <h2 className={styles.title}>You're all set! Attendance recorded.</h2>
        <div className={styles.successIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="green"
            width="100px"
            height="100px"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm-1.05 18l-4.95-5.05 1.414-1.414L10.95 15.2l6.636-6.636 1.414 1.414L10.95 18z" />
          </svg>
        </div>
      </main>
    </div>
  );
};

export default AttendanceSuccess;