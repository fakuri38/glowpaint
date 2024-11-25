import React, { useState } from 'react';
// import { ParticipantHeader } from './ParticipantHeader';
// import { SearchSection } from './SearchSection';
// import { TableContainer } from './TableContainer';
// import styles from './ParticipantPage.module.css';
import HeaderAdmin from './HeaderAdmin';
import AttSearch from './AttSearch';
import AttendanceList from './AttendanceList';
import styles from './AdminAttList.module.css';

function AdminAttList() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.participantPage}>
      <HeaderAdmin />
      <div className={styles.mainContent}>
        <AttSearch 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        <AttendanceList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default AdminAttList;