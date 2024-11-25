import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import StatsContainer from './StatsContainer';
import EventBanner from './EventBanner';
import styles from './AdminDashboardPage.module.css';

function AdminDashboardPage() {
  return (
    <div className={styles.adminDashboard}>
      <HeaderAdmin />
      <StatsContainer />
      <EventBanner />
    </div>
  );
}

export default AdminDashboardPage;