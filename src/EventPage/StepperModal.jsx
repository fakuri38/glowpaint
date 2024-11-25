import React, { useState } from 'react';
import { RegistrationForm } from './RegistrationForm/RegistrationForm';
import { PackageSelection } from './PackageSelection/PackageSelection';
import styles from './StepperModal.module.css';

export const StepperModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState('registration'); // Manage steps

  if (!isOpen) return null; // Render nothing if the modal is not open

  const goToNextStep = () => {
    if (currentStep === 'registration') setCurrentStep('packages');
  };

  const goToPreviousStep = () => {
    if (currentStep === 'packages') setCurrentStep('registration');
  };

  return (
    <div className={styles.modalOverlay}>
      {currentStep === 'registration' && (
        <RegistrationForm
          onNext={goToNextStep} // Move to the next step
          onClose={onClose} // Close modal
        />
      )}
      {currentStep === 'packages' && (
        <PackageSelection
          onClose={onClose} // Close modal
          onBack={goToPreviousStep} // Optional: Go back to the previous step
        />
      )}
    </div>
  );
};
