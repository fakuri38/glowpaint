import React, { useState } from 'react';
import HeaderAdmin from './HeaderAdmin';
import PaymentSearch from './PaymentSearch';
import PaymentList from './PaymentList';
import styles from './AdminPaymentList.module.css';

function AdminPaymentList() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={styles.kitCollect}>
      <HeaderAdmin />
      <PaymentSearch onSearch={handleSearch} />
      <PaymentList searchTerm={searchTerm} />
    </div>
  );
}

export default AdminPaymentList;