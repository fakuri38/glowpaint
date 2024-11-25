import React from 'react';
import styles from './HeaderAdmin.module.css';
import {Link} from 'react-router-dom';

function HeaderAdmin() {
  return (
    <div className={styles.header}>
      <div className={styles.div}>
        <div className={styles.div2}>
          <div className={styles.glowpaintrun}>GLOWPAINTRUN</div>
          <nav className={styles.div3}>
          <Link to="/admin-dashboard-page" className={styles.participationList}>Home</Link>
            <Link to="/admin-participant-page" className={styles.participationList}>Participant List</Link>
            <Link to="/admin-payment-page" className={styles.paymentStatus}>Payment Status</Link>
            <Link to="/admin-att-page" className={styles.attendanceList}>Attendance List</Link>
            <Link to="/admin-kit-page" className={styles.kitCollection}>Kit Collection</Link>
          </nav>
        </div>
        <div className={styles.signOut}>Sign Out</div>
      </div>
    </div>
  );
}

export default HeaderAdmin;