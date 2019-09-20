import React, { useState, useEffect } from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryAdd from '../time-entry-add/TimeEntryAdd';
import TimeEntryHeader from '../time-entry-header/TimeEntryHeader';
import styles from './TimeEntries.module.css';

function TimeEntries() {
  const [timeEntries, setTimeEntries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://localhost:3000/time-entries?_sort=startTimestamp&_order=desc'
      );
      setTimeEntries(await response.json());
    }
    fetchData();
  }, []);

  const handleSubmit = newTimeEntry => {
    async function saveData() {
      await fetch('http://localhost:3000/time-entries', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTimeEntry)
      });
    }
    saveData();
    setTimeEntries([newTimeEntry, ...timeEntries]);
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
              />
            </React.Fragment>
          );
        }
      )}
    </div>
  );
}

export default TimeEntries;
