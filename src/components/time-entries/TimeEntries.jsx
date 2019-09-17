import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryAdd from '../time-entry-add/TimeEntryAdd';
import TimeEntryHeader from '../time-entry-header/TimeEntryHeader';
import styles from './TimeEntries.module.css';

const TimeEntries = () => (
  <div className={styles.timeEntries}>
    <TimeEntryAdd />
    <TimeEntryHeader />
    <TimeEntry />
    <TimeEntryHeader />
    <TimeEntry />
    <TimeEntry />
  </div>
);

export default TimeEntries;
