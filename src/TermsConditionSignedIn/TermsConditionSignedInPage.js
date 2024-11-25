import React from 'react';
import { TermsSection } from './TermsSection';
import { SafetySection } from '../TermsConditionPage/SafetySection';
import styles from './TermsConditionSignedInPage.module.css';

function TermsConditionSignedInPage() {
    return (
      <div className={styles.pageContainer}>
        <main>
          <TermsSection />
          <SafetySection />
        </main>
      </div>
    );
  }
  
  export default TermsConditionSignedInPage;