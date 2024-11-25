import React, { useState, useEffect } from 'react';
import styles from './PaymentList.module.css';

function PaymentList({ searchTerm }) {
  const [kitData, setKitData] = useState([
    {
      id: '1',
      name: 'ALI BIN AHMAD',
      category: 'USM Student',
      package: 'GLOW-RIOUS LITE',
      proof: 'picture',
      status: 'pending',
    },
  ]);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Add a new entry only once when the component mounts
    setKitData((prevData) => {
      const isEntryPresent = prevData.some((item) => item.id === '2');
      if (!isEntryPresent) {
        return [
          ...prevData,
          {
            id: '2',
            name: 'FATIMAH BINTI OTHMAN',
            category: 'PUBLIC',
            package: 'GLOW-RIOUS PRO',
            proof: 'receipt',
            status: 'pending',
          },
        ];
      }
      return prevData;
    });
  }, []); // Empty dependency ensures this runs only once on mount

  useEffect(() => {
    // Filter data based on search term
    const filtered = kitData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.package.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, kitData]); // Dependent on searchTerm and kitData

  const handleStatusChange = (id, newStatus) => {
    setKitData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className={styles.tableContainer} role="table" aria-label="Kit Collection Status">
      <div className={styles.tableHeader} role="row">
        <div className={styles.headerCell} role="columnheader">
          <img src="/assets/name-icon.svg" alt="" aria-hidden="true" />
          <span>Name</span>
        </div>
        <div className={styles.headerCell} role="columnheader">Category</div>
        <div className={styles.headerCell} role="columnheader">Package</div>
        <div className={styles.headerCell} role="columnheader">Proof of Payment</div>
        <div className={styles.headerCell} role="columnheader">Action</div>
      </div>

      {filteredData.map((item) => (
        <div key={item.id} className={styles.tableRow} role="row">
          <div className={styles.cell} role="cell">
            <img src="/assets/user-icon.svg" alt="" aria-hidden="true" />
            <span>{item.name}</span>
          </div>
          <div className={styles.cell} role="cell">{item.category}</div>
          <div className={styles.cell} role="cell">{item.package}</div>
          <div className={styles.cell} role="cell">{item.proof}</div>
          <div className={styles.actionCell} role="cell">
            <button
              className={styles.approveButton}
              onClick={() => handleStatusChange(item.id, 'approved')}
              aria-label={`Approve kit collection for ${item.name}`}
              disabled={item.status === 'approved'}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a56220cce44bf9a8f20b4c34eea2343b3276160335b85105dde7e7e364b9bb5?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
                alt=""
                aria-hidden="true"
              />
            </button>
            <button
              className={styles.rejectButton}
              onClick={() => handleStatusChange(item.id, 'rejected')}
              aria-label={`Reject kit collection for ${item.name}`}
              disabled={item.status === 'rejected'}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e854198870693719030035b9949008b1f9843e1385e669f68c49c84f958eb70?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
                alt=""
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaymentList;
