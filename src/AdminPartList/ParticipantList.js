import React from 'react';
import styles from './ParticipantList.module.css';

function ParticipantList({ searchQuery }) {
  const participants = [
    {
      name: 'ALI BIN ABU',
      id: '000010',
      category: 'USM STUDENT',
      package: 'GLOW-RIOUS LITE',
      paymentProof: 'Payment pic'
    }
  ];

  const filteredParticipants = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.tableContainer}>
      <div className={styles.column}>
        <div className={styles.headerCell}>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4018bc5a3c5086c2cb5b39f562fcef16358be90e3200b776297f72f864d025a5?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" 
            alt="Sort" 
            className={styles.sortIcon} 
          />
          <div className={styles.headerText}>Name</div>
        </div>
        {filteredParticipants.map(participant => (
          <div key={participant.id} className={styles.dataCell}>
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4018bc5a3c5086c2cb5b39f562fcef16358be90e3200b776297f72f864d025a5?placeholderIfAbsent=true&apiKey=b2f4144ba019415cbc6fc83b3fd71e5c" 
              alt="Sort" 
              className={styles.sortIcon} 
            />
            <div className={styles.cellText}>{participant.name}</div>
          </div>
        ))}
      </div>

      <div className={styles.column}>
        <div className={styles.headerCell}>Id</div>
        {filteredParticipants.map(participant => (
          <div key={participant.id} className={styles.dataCell}>
            {participant.id}
          </div>
        ))}
      </div>

      <div className={styles.column}>
        <div className={styles.headerCell}>Category</div>
        {filteredParticipants.map(participant => (
          <div key={participant.id} className={styles.dataCell}>
            {participant.category}
          </div>
        ))}
      </div>

      <div className={styles.column}>
        <div className={styles.headerCell}>Package</div>
        {filteredParticipants.map(participant => (
          <div key={participant.id} className={styles.dataCell}>
            {participant.package}
          </div>
        ))}
      </div>

      <div className={styles.column}>
        <div className={styles.headerCell}>Proof of Payment</div>
        {filteredParticipants.map(participant => (
          <div key={participant.id} className={styles.dataCell}>
            {participant.paymentProof}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParticipantList