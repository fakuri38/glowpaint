import React, { useState } from 'react';
// import { ParticipantHeader } from './ParticipantHeader';
// import { SearchSection } from './SearchSection';
// import { TableContainer } from './TableContainer';
// import styles from './ParticipantPage.module.css';
import HeaderAdmin from './HeaderAdmin';
import SearchSection from './SearchSection';
import ParticipantList from './ParticipantList';
import styles from './AdminPartList.module.css';

function AdminPartList() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.participantPage}>
      <HeaderAdmin />
      <div className={styles.mainContent}>
        <SearchSection 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        <ParticipantList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default AdminPartList;