import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./GlowPaintRun.module.css";
import { ComponentHeader } from "./components/ComponentHeader";
import { Header } from "./HomePage/Header";
import HeroSection from "./HomePage/HeroSection";
import InfoSection from "./HomePage/InfoSection";
import AboutUs from "./HomePage/AboutUs";
import Gallery from "./HomePage/Gallery";
import { Footer } from "./HomePage/Footer";
import { ComponentFooter } from "./components/ComponentFooter";
import EventPage from "./EventPage/EventPage";
import HomeSignedInPage from "./HomeSignedIn/HomeSignedInPage";
import EventSignedInPage from "./EventSignedIn/EventSignedInPage";
import KitPage from "./KitPage/KitPage";
import TermsConditionPage from "./TermsConditionPage/TermsConditionPage";
import TermsConditionSignedInPage from "./TermsConditionSignedIn/TermsConditionSignedInPage";
import AdminDashboardPage from "./AdminDashboard/AdminDashboardPage";
import AdminKitPage from "./AdminKit/AdminKitPage";
import AdminPartList from "./AdminPartList/AdminPartList";
import AdminPaymentList from "./AdminPaymentList/AdminPaymentList";
import AdminAttList from "./AdminAttList/AdminAttList";
import { AdminSignIn } from "./AdminSignIn/AdminSignIn";
import ECert from "./E-Cert/e-cert"
// import { RegistrationForm } from "./RegistrationForm/RegistrationForm";

// import ScrollToTop from './ScrollToTop';
function GlowPaintRun() {
  const location = useLocation();

  //Modal PopUp
  // const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle modal visibility
  // const toggleModal = () => {
  //   setModalOpen(!isModalOpen);
  // };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Function to determine the correct header based on the current route
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return <Header />;
      case "/event-page":
        return <Header />;
      case "/terms-condition-page":
        return <Header />;
      case "/home-signed-in-page":
        return <ComponentHeader />;
      case "/event-signed-in-page":
        return <ComponentHeader />;
      case "/ecert":
        return <ComponentHeader />;
      case "/kit-page":
        return <ComponentHeader />;
      case "/terms-condition-signed-in-page":
        return <ComponentHeader />;
      // default:
      //   return <Header />;
    }
  };

  const renderFooter = () => {
    switch (location.pathname) {
      case "/":
        return <Footer />;
      case "/event-page":
        return <Footer />;
      case "/home-signed-in-page":
        return <ComponentFooter />;
      case "/event-signed-in-page":
        return <ComponentFooter />;
      case "/kit-page":
        return <ComponentFooter />;
      case "/terms-condition-page":
        return <ComponentFooter />;
      // default:
      //   return <Footer />;
    }
  };

  return (
    <div>
      {/* <ScrollToTop /> */}
      {renderHeader()}
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/event-page" element={<EventPage />} />
          <Route path="/kit-page" element={<KitPage />} />
          <Route path="/home-signed-in-page" element={<HomeSignedInPage />} />
          <Route path="/event-signed-in-page" element={<EventSignedInPage />} />
          <Route path="/kit-page" element={<KitPage />} />
          <Route
            path="/terms-condition-page"
            element={<TermsConditionPage />}
          />
          <Route
            path="/terms-condition-signed-in-page"
            element={<TermsConditionSignedInPage />}
          />
          {/* admin */}
          <Route path="/admin-sign-in-page" element={<AdminSignIn />} />
          <Route
            path="/admin-dashboard-page"
            element={<AdminDashboardPage />}
          />
          <Route path="/admin-kit-page" element={<AdminKitPage />} />
          <Route path="/admin-participant-page" element={<AdminPartList />} />
          <Route path="/admin-payment-page" element={<AdminPaymentList />} />
          <Route path="/admin-att-page" element={<AdminAttList />} />
          <Route path="/ecert" element={<ECert />} />
        </Routes>

        {location.pathname === "/" && (
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
            <AboutUs />
            <Gallery />
          </>
        )}
      </main>
      {/* Conditionally render the modal outside the main layout */}
      {/* {isModalOpen && (
        <div className={styles.modalOverlay}>
          <RegistrationForm />
        </div>
      )} */}
      {renderFooter()}
    </div>
  );
}

export default GlowPaintRun;
