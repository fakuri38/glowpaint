import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './HeroSection.module.css';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';
import { PackageSelection } from '../PackageSelection/PackageSelection';

function HeroSection() {
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false); // Manage modal visibility
  const [currentStep, setCurrentStep] = useState('registration'); // Manage steps

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Open the modal
  const openModal = () => {
    setModalOpen(true);
    setCurrentStep('registration'); // Start with the first step
  };

  // Close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Go to the next step
  const goToNextStep = () => {
    if (currentStep === 'registration') {
      setCurrentStep('packages'); // Move to Package Selection
    }
  };

  // Go to the previous step (if needed)
  const goToPreviousStep = () => {
    if (currentStep === 'packages') {
      setCurrentStep('registration'); // Go back to Registration
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroLeft}>
            <div className={styles.heroImage}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ea3b622fb1ea2a8e8aba9b44c34f516c87989a1ebbf8b655631ba2d0b53f51?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
                alt="Glow Paint Run Logo"
                className={styles.heroImageContent}
              />
            </div>
            <button
              className={styles.registerButton}
              onClick={openModal} // Open modal
            >
              Register Now!
            </button>
            <p className={styles.registrationClosed}>
              Registration Closed: 1 Dec 2024
            </p>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ae6b7c83ca64b986fd8bd73e590af9c529438c53f8f2e6fc9f101c4460ad3e8?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
            alt="Glow Paint Run Event"
            className={styles.heroRightImage}
          />
        </div>
      </div>

      {/* Modal Implementation */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          {currentStep === 'registration' && (
            <RegistrationForm
              onNext={goToNextStep} // Navigate to next step
              onClose={closeModal} // Close the modal
            />
          )}
          {currentStep === 'packages' && (
            <PackageSelection
              onClose={closeModal} // Close the modal
              onBack={goToPreviousStep} // Optional: Navigate back
            />
          )}
        </div>
      )}
    </section>
  );
}

export default HeroSection;
