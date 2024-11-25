import React from 'react';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import styles from './HomeSignedInPage.module.css';


function HomeSignedInPage() {
    return (
      <div className={styles.event}>
        <main className={styles.mainContent}>
          <HeroSection />
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
          <AboutUs />
          <Gallery />
        </main>
      </div>
    );
  }
  
  export default HomeSignedInPage;