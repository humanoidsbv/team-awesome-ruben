import React, { useState, useEffect } from 'react';

import {
  fetchTimeEntries,
  saveTimeEntry,
  deleteTimeEntry
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

  const handleDelete = id => {
    setTimeEntries(timeEntries.filter(entry => entry.id !== id));
    deleteTimeEntry(id);
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
                startTimestamp={startTimestamp}
                stopTimestamp={stopTimestamp}
                id={id}
                deleteEntry={handleDelete}
              />
            </React.Fragment>
          );
        }
      )}
    </div>
  );
};

export default TimeEntries;
