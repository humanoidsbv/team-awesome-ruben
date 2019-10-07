import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import TimeEntry from '../time-entry/';
import TimeEntryAdd from '../time-entry-add/';
import TimeEntryHeader from '../time-entry-header/';

const TimeEntries = ({
  addTimeEntry,
  clients,
  deleteTimeEntry,
  fetchClients,
  fetchTimeEntries,
  timeEntries
}) => {
  useEffect(function getEntryData() {
    fetchClients();
    fetchTimeEntries();
  }, []);

  return (
    <React.Fragment>
      <TimeEntryAdd addFormData={addTimeEntry} clients={clients} />
      <button type="button">
        Sort by:
        <IconArrowDown />
      </button>

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
  addTimeEntry: PropTypes.func.isRequired,
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      companyName: PropTypes.string
    })
  ),
  deleteTimeEntry: PropTypes.func.isRequired,
  fetchClients: PropTypes.func.isRequired,
  fetchTimeEntries: PropTypes.func.isRequired,
  timeEntries: PropTypes.arrayOf(
    PropTypes.shape({
      startTimestamp: PropTypes.string
    })
  )
};

TimeEntries.defaultProps = {
  clients: [],
  timeEntries: []
};

export default TimeEntries;
