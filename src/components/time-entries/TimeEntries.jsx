import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//* todo: add icon to select
// import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/';
import TimeEntryAdd from '../time-entry-add/';
import TimeEntryHeader from '../time-entry-header/';

const TimeEntries = ({
  addTimeEntry,
  clients,
  deleteTimeEntry,
  fetchClients,
  fetchTimeEntries,
  filterTimeEntriesByClient,
  timeEntries
}) => {
  useEffect(function getEntryData() {
    fetchClients();
    fetchTimeEntries();
  }, []);

  //* Note: html select elements return strings while we're working with an id (number)
  const handleChange = event =>
    filterTimeEntriesByClient(
      !event.target.value ? null : Number(event.target.value)
    );

  return (
    <React.Fragment>
      <TimeEntryAdd addFormData={addTimeEntry} clients={clients} />
      <div className={styles.header}>
        <span className={styles.heading}>All time entries</span>
        <select
          className={styles.sortMembers}
          onChange={handleChange}
          type="button"
        >
          <option value="">No filter</option>
          {clients.map(({ companyName, id }) => (
            <option value={id} key={id}>
              {companyName}
            </option>
          ))}
        </select>
      </div>
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
                client={client.companyName}
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
  ).isRequired,
  deleteTimeEntry: PropTypes.func.isRequired,
  fetchClients: PropTypes.func.isRequired,
  fetchTimeEntries: PropTypes.func.isRequired,
  filterTimeEntriesByClient: PropTypes.func.isRequired,
  timeEntries: PropTypes.arrayOf(
    PropTypes.shape({
      startTimestamp: PropTypes.string
    })
  ).isRequired
};

export default TimeEntries;
