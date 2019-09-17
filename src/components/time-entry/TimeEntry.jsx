import React from 'react';

import styles from './TimeEntry.module.css';

const TimeEntry = () => (
  <div className={styles.timeEntry}>
    <p>Port of Rotterdam</p>
    <div>
      <p className={styles.hoursWorked}>09:00 - 17:00</p>
      <p className={styles.hoursDuration}>08:00:00</p>
    </div>
  </div>
);

export default TimeEntry;
