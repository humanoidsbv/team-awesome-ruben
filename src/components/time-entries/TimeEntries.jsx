import React, { useState, useEffect } from 'react';

import {
  deleteTimeEntry,
  fetchTimeEntries,
  saveTimeEntry
} from '../../services/time-entry-api';
import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryAdd from '../time-entry-add/TimeEntryAdd';
import TimeEntryHeader from '../time-entry-header/TimeEntryHeader';

const TimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState([]);

  useEffect(function getTimeEntries() {
    async function execute() {
      setTimeEntries(await fetchTimeEntries());
    }
    execute();
  }, []);

  const handleSubmit = newTimeEntry => {
    saveTimeEntry(newTimeEntry);
    setTimeEntries([newTimeEntry, ...timeEntries]);
  };

  const handleDelete = timeEntryId => {
    setTimeEntries(
      timeEntries.filter(timeEntry => timeEntry.id !== timeEntryId)
    );
    deleteTimeEntry(timeEntryId);
  };

  return (
    <div className={styles.timeEntries}>
      <TimeEntryAdd addFormData={handleSubmit} />
      {timeEntries.map(
        ({ startTimestamp, stopTimestamp, id, client }, index) => {
          const previousItem = timeEntries[index - 1];
          const currentDate = new Date(startTimestamp).toDateString();
          const previousDate = previousItem
            ? new Date(previousItem.startTimestamp).toDateString()
            : '';

          return (
            <React.Fragment key={id}>
              {currentDate !== previousDate && (
                <TimeEntryHeader
                  startTimestamp={startTimestamp}
                  stopTimestamp={stopTimestamp}
                />
              )}
              <TimeEntry
                client={client}
                deleteEntry={handleDelete}
                timeEntryId={id}
                startTimestamp={startTimestamp}
                stopTimestamp={stopTimestamp}
              />
            </React.Fragment>
          );
        }
      )}
    </div>
  );
};

export default TimeEntries;
