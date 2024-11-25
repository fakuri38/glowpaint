import React from 'react';
import styles from './KitPage.module.css';
// import NavBar from './NavBar';
import MainContent from './MainContent';
import SizingSection from './SizingSection';
import Footer from './Footer';

const KitPage = () => {
  return (
    <div className={styles.container}>
      <MainContent />
      <SizingSection />
      <Footer />
    </div>
  );
};

export default KitPage;