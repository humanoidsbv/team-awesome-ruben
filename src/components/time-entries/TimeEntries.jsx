import React from 'react';
import styles from './TimeEntries.module.css';

import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryAdd from '../time-entry-add/TimeEntryAdd';

const TimeEntries = () => (
  <div className={styles.timeEntries}>
    <TimeEntryAdd />
    <TimeEntry />
    <TimeEntry />
    <TimeEntry />
  </div>
);

export default TimeEntries;
