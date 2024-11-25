import React from 'react';
// import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ActivitiesSection from './ActivitiesSection';
import RouteSection from './RouteSection';
import Footer from './Footer';
import styles from './EventPage.module.css';

function EventPage() {
  return (
    <div className={styles.event}>
      {/* <Navbar /> */}
      <main className={styles.mainContent}>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <RouteSection />
      </main>
      <Footer />
    </div>
  );
}

export default EventPage;