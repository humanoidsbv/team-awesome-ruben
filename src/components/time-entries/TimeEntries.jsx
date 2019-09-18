import React from 'react';

import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryAdd from '../time-entry-add/TimeEntryAdd';
import TimeEntryData from './time-entry.json';
import TimeEntryHeader from '../time-entry-header/TimeEntryHeader';
import styles from './TimeEntries.module.css';

const TimeEntries = () => (
  <div className={styles.timeEntries}>
    <TimeEntryAdd />
    {TimeEntryData.map(
      ({ startTimeStamp, stopTimeStamp, id, client }, index) => {
        const previousItem = TimeEntryData[index - 1];
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

export default TimeEntries;
