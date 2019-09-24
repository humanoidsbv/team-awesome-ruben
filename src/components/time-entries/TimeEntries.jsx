import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryAdd from '../time-entry-add/TimeEntryAdd';
import TimeEntryHeader from '../time-entry-header/TimeEntryHeader';

const TimeEntries = ({ timeEntries, fetchTimeEntries }) => {
  const handleSubmit = () => null;
  const handleDelete = () => null;

  useEffect(function getTimeEntries() {
    fetchTimeEntries();
  }, []);

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

TimeEntries.propTypes = {
  timeEntries: PropTypes.arrayOf(
    PropTypes.shape({ startTimestamp: PropTypes.string })
  ),
  fetchTimeEntries: PropTypes.func.isRequired
};

TimeEntries.defaultProps = {
  timeEntries: []
};

export default TimeEntries;
