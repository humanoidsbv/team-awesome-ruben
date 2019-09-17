import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryAdd from '../time-entry-add/TimeEntryAdd';
import TimeStamp from '../time-stamp/TimeStamp';
import styles from './TimeEntries.module.css';

const TimeEntries = () => (
  <div className={styles.timeEntries}>
    <TimeEntryAdd />
    <TimeStamp />
    <TimeEntry />
    <TimeStamp />
    <TimeEntry />
    <TimeEntry />
  </div>
);

export default TimeEntries;
