import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./QR.module.css";

const AttendancePage = () => {
  return (
    <div className={styles.container}>

      {/* Main Content */}
      <main className={styles.main}>
        <h2 className={styles.title}>ATTENDANCE</h2>
        <div className={styles.qrCode}>
          <QRCodeCanvas value="https://example.com/attendance" size={200} />
        </div>
      </main>
    </div>
  );
};

export default AttendancePage;