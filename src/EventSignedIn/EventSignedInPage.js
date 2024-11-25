import React from 'react';
// import Navbar from './Navbar';
// import { ComponentHeader } from '../components/ComponentHeader';
// import {ComponentHeader } from '../components/ComponentHeader';
// import { Header } from '../HomePage/Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ActivitiesSection from './ActivitiesSection';
import RouteSection from './RouteSection';
// import Footer from './Footer';
import styles from './EventSignedInPage.module.css';

function EventSignedInPage() {
  return (
    <div className={styles.event}>
      <main className={styles.mainContent}>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <RouteSection />
      </main>
    </div>
  );
}

export default EventSignedInPage;