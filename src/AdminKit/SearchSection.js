import React, { useState } from 'react';
import styles from './SearchSection.module.css';

function KitSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <h1 className={styles.title}>KIT COLLECTION</h1>
        <div className={styles.searchBox}>
          <input 
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
            placeholder="Search"
            aria-label="Search kit collections"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e2efe06f0f0e0874aafa9b596aa1c85b96b6dd28d36bd0742509023febf9f4d?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
            alt="Search"
            className={styles.searchIcon}
            aria-hidden="true"
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

export default KitSearch;