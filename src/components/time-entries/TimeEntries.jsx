import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import TimeEntry from '../time-entry/';
import TimeEntryAdd from '../time-entry-add/';
import TimeEntryHeader from '../time-entry-header/';

const TimeEntries = ({
  addTimeEntry,
  deleteTimeEntry,
  fetchTimeEntries,
  timeEntries
}) => {
  useEffect(function getTimeEntries() {
    fetchTimeEntries();
  }, []);

  return (
    <React.Fragment>
      <TimeEntryAdd addFormData={addTimeEntry} />
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
                deleteEntry={timeEntryId => deleteTimeEntry(timeEntryId)}
                startTimestamp={startTimestamp}
                stopTimestamp={stopTimestamp}
                timeEntryId={id}
              />
            </React.Fragment>
          );
        }
      )}
    </React.Fragment>
  );
};

TimeEntries.propTypes = {
  timeEntries: PropTypes.arrayOf(
    PropTypes.shape({
      client: PropTypes.string,
      id: PropTypes.number,
      startTimestamp: PropTypes.string,
      stopTimestamp: PropTypes.string
    })
  ),
  addTimeEntry: PropTypes.func.isRequired,
  deleteTimeEntry: PropTypes.func.isRequired,
  fetchTimeEntries: PropTypes.func.isRequired
};

TimeEntries.defaultProps = {
  timeEntries: []
};

export default TimeEntries;
