import React from 'react';
import styles from './AttSearch.module.css';

function AttSearch({ searchQuery, onSearchChange }) {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.searchSection}>
      <div className={styles.titleGroup}>
        <h1 className={styles.title}>ATTENDANCE LIST</h1>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={styles.searchInput}
            aria-label="Search participants"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e2efe06f0f0e0874aafa9b596aa1c85b96b6dd28d36bd0742509023febf9f4d?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
            alt="Search"
            className={styles.searchIcon}
          />
        </div>
      </div>
      <button 
        onClick={handlePrint}
        className={styles.printButton}
        aria-label="Print table"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09bd7ede417825e25352639728bbae109776eedd2a03f7be73d7cf5122e32666?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
          alt="Print"
          className={styles.printIcon}
          aria-hidden="true"
        />
        <span>Print</span>
      </button>
    </div>
  );
}

export default AttSearch;