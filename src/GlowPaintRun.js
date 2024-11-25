import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styles from './GlowPaintRun.module.css';
import Header from './HomePage/Header';
import HeroSection from './HomePage/HeroSection';
import InfoSection from './HomePage/InfoSection';
import Footer from './HomePage/Footer';
import EventPage from './EventPage/EventPage';
import KitPage from './KitPage/KitPage';
import AttendanceSuccess from "./E-Cert/AttendanceSuccess";
import ECert from "./E-Cert/e-cert";
import AttendancePage from "./E-Cert/QR";

function GlowPaintRun() {
  const location = useLocation();

  // Define routes where the navbar (Header) should be hidden
  const hiddenRoutes = ['/QR','/attendance-success'];

  return (
    <div className={styles.home}>
      {/* Conditionally render the Header */}
      {!hiddenRoutes.includes(location.pathname) && <Header />}

      <main className={styles.mainContent}>
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/event-page' element={<EventPage />} />
          <Route path='/kit-page' element={<KitPage />} />
          <Route path="/attendance-success" element={<AttendanceSuccess />} />
          <Route path="/ecert" element={<ECert />} />
          <Route path="/QR" element={<AttendancePage />} />
        </Routes>

        {/* Render InfoSection and Footer only on the home page */}
        {location.pathname === '/' && (
          <>
            <InfoSection
              title="Sign Up"
              description="Create your account effortlessly using your phone number or email. Join our vibrant community and stay updated on the latest events!"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0f5af06b805be519f8cbf2710c992c4999c70b6d852956357d0c5875fb63a08a?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
            />
            <InfoSection
              title="Select and Purchase Package"
              description="Choose your preferred package and complete your registration form. Upload your proof of transaction and submit the registration form to finalize your entry."
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a57c0f9c922176eb639ea565fad29c5bed5636f52f055500fa77d2b8732dc9?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
              imageRight
            />
            <InfoSection
              title="Kit Collection"
              description="Collect your race kit with ease. Just head to the designated collection point on the specified dates and times, show your confirmation, and pick up your essentials for the event."
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3e6c7400dbae42b63c8601833f7bc7b96a22b4efa8dd50d89b8d5e6de65b85b5?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
            />
            <InfoSection
              title="Event Day Check In"
              description="Simply scan your QR code at the registration desk for a quick and seamless check-in process. Enjoy your GlowPaintRun adventure!"
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/31ddf84ac6bfa1471baa11b6efd0b85695d9a917f8d4ef121ce6249dd99fe205?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
              imageRight
            />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

export default GlowPaintRun;
