import React from 'react';
import styles from './TermsSection.module.css';

export const TermsSection = () => {
  const terms = [
    'The organizer reserves the right to close entries before the deadline without any notice once the race quota is full.',
    'The organizer reserves the right to limit and refuse entries without reasons.',
    'The organizer reserves the right to contact and to interview any applicants by phone or otherwise for additional information required for matters relating to their applications.',
    'After registration, there will be no fee refund for a participant who does not eventually take part in the race, for any reasons whatsoever or if the run is canceled.',
    'The organizer reserves the right to cancel, postpone, change the game format (to virtually run or any other format) if there is a need and necessary based on the latest and current situation (Covid, Disaster, Disease, Government Policy Change, War). NO REFUND.',
    'Each participant must ensure his/her health condition is fit before participating and during the race. Each participant shall be responsible for his/her own health/condition. The organizer will not be responsible for personal injury or death during or after the race.',
    'Your personal data will be used for the administrative purpose and will not be release to any other third parties.'
  ];

  return (
    <section className={styles.termsSection} aria-labelledby="terms-title">
      <h1 id="terms-title" className={styles.title}>Terms & Condition</h1>
      <div className={styles.content}>
        <ul className={styles.termsList}>
          {terms.map((term, index) => (
            <li key={index} className={styles.termItem}>{term}</li>
          ))}
        </ul>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c580b9ed384cfab0cdd072675d91ca00136658dbd02a21c821a443976b73d4f?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c"
          alt=""
          className={styles.illustration}
          role="presentation"
        />
      </div>
    </section>
  );
};