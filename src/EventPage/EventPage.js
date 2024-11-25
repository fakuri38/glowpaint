import React from 'react';
// import Navbar from './Navbar';
// import { ComponentHeader } from '../components/Header';
// import { Header } from '../HomePage/Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ActivitiesSection from './ActivitiesSection';
import RouteSection from './RouteSection';
// import Footer from './Footer';
import styles from './EventPage.module.css';

function EventPage() {
  return (
    <div className={styles.event}>
      {/* <Navbar /> */}
      {/* <Header />*/}
      <main className={styles.mainContent}>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <RouteSection />
      </main>
    </div>
  );
}

export default EventPage;