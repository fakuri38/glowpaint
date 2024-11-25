import React, { useState } from 'react';
import HeaderAdmin from './HeaderAdmin';
import SearchSection from './SearchSection';
import KitList from './KitList';
import styles from './AdminKitPage.module.css';

function AdminKitPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={styles.kitCollect}>
      <HeaderAdmin />
      <SearchSection onSearch={handleSearch} />
      <KitList searchTerm={searchTerm} />
    </div>
  );
}

export default AdminKitPage;