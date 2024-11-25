import React from 'react';
import styles from './SafetySection.module.css';

export const SafetySection = () => {
  const safetyRules = [
    'The wristband provided by organizers must always be worn throughout the event.',
    'Participants must always stay on the marked course all the time. Short cuts/running off the route are strictly prohibited.',
    'Should you notice marshal vehicles (motorbike / jeep) approaching during the race, please slow down and give way.',
    'Please be cautious as some parts of the route might be slippery in condition.',
    'Ensure your own safety and that of others. Be considerate of other road users.'
  ];

  return (
    <section className={styles.safetySection} aria-labelledby="safety-title">
      <h2 id="safety-title" className={styles.title}>Safety</h2>
      <div className={styles.content}>
        <ul className={styles.rulesList}>
          {safetyRules.map((rule, index) => (
            <li key={index} className={styles.ruleItem}>{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};