import React from 'react';
import styles from './timeEntryHeader.module.css';

const TimeEntryHeader = () => (
  <div className={styles.container}>
    <p className={styles.date}>Vrijdag 29-07 (Today)</p>
    <p className={styles.date}>08:00:00</p>
  </div>
);

export default TimeEntryHeader;
