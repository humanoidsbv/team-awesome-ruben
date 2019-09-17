import React from 'react';
import styles from './TimeStamp.module.css';

const timeEntryHeader = () => (
  <div className={styles.timeStamp}>
    <p className={styles.date}>Vrijdag 29-07 (Today)</p>
    <p className={styles.date}>08:00:00</p>
  </div>
);

export default timeEntryHeader;
