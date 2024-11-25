import React from 'react';
import { TermsSection } from './TermsSection';
import { SafetySection } from './SafetySection';
import styles from './TermsConditionPage.module.css';

function TermsConditionPage() {
    return (
      <div className={styles.pageContainer}>
        <main>
          <TermsSection />
          <SafetySection />
        </main>
      </div>
    );
  }
  
  export default TermsConditionPage;