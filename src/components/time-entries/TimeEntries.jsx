import React, { useState } from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryAdd from '../time-entry-add/TimeEntryAdd';
import TimeEntryData from './time-entry.json';
import TimeEntryHeader from '../time-entry-header/TimeEntryHeader';
import styles from './TimeEntries.module.css';

function TimeEntries() {
  const [timeEntries, setTimeEntries] = useState(TimeEntryData);

  const handleSubmit = newTimeEntry => {
    setTimeEntries([newTimeEntry, ...timeEntries]);
  };

  return (
    <div className={styles.timeEntries}>
      <TimeEntryAdd addFormData={handleSubmit} />
      {timeEntries.map(
        ({ startTimeStamp, stopTimeStamp, id, client }, index) => {
          const previousItem = timeEntries[index - 1];
          const currentDate = startTimeStamp.slice(0, 10);
          const previousDate = previousItem
            ? previousItem.startTimeStamp.slice(0, 10)
            : '';
          return (
            <React.Fragment key={id}>
              {currentDate !== previousDate && (
                <TimeEntryHeader
                  startTimeStamp={startTimeStamp}
                  stopTimeStamp={stopTimeStamp}
                />
              )}
              <TimeEntry
                client={client}
                startTimeStamp={startTimeStamp}
                stopTimeStamp={stopTimeStamp}
              />
            </React.Fragment>
          );
        }
      )}
    </div>
  );
}

export default TimeEntries;
