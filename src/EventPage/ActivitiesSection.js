import React from 'react';
import styles from './ActivitiesSection.module.css';

const activities = [
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a00b476df8c380a4aca2ce00dd4426a6e4cf4391803569b3e40ceafec1b2ee5b?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", title: "Face Paint Service" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a973dc6caca76b5b035f630c3d0b0cf1d40af6c4863219adf3041b4dfcd5f2ed?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", title: "Fire Show" },
  { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/822728cbbebc4e15057d5b012cb96d3c8e43f133ed400f6f17e15913540e4e4e?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c", title: "Lucky Draw" }
];

function ActivitiesSection() {
  return (
    <section className={styles.activitiesSection}>
      <h2 className={styles.activitiesTitle}>Comes With Amazing Activities</h2>
      <div className={styles.activitiesWrapper}>
        {activities.map((activity, index) => (
          <div key={index} className={styles.activityCard}>
            <img src={activity.image} alt={activity.title} className={styles.activityImage} />
            <p className={styles.activityTitle}>{activity.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivitiesSection;