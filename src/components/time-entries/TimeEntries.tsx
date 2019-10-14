import React, { useEffect } from 'react';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry';
import TimeEntryAdd from '../time-entry-add';
import TimeEntryHeader from '../time-entry-header';

import { ClientInterface } from '../../redux/clients/types';
import { TimeEntryInterface } from '../../redux/time-entries/types';

interface TimeEntriesProps {
  addTimeEntry: () => void;
  clients: ClientInterface[];
  deleteTimeEntry: (TimeEntryInterface) => {};
  fetchClients: () => void;
  fetchTimeEntries: () => void;
  filterTimeEntriesByClient: (string) => void;
  timeEntries: TimeEntryInterface[];
}

const TimeEntries = ({
  addTimeEntry,
  clients,
  deleteTimeEntry,
  fetchClients,
  fetchTimeEntries,
  filterTimeEntriesByClient,
  timeEntries
}: TimeEntriesProps): React.ReactElement => {
  useEffect(() => {
    fetchClients();
    fetchTimeEntries();
  }, []);

  //* Note: a select element returns a string. We're working with a number
  const handleChange = (event): void =>
    filterTimeEntriesByClient(
      !event.target.value ? null : Number(event.target.value)
    );

  return (
    <>
      <TimeEntryAdd addFormData={addTimeEntry} clients={clients} />
      <div className={styles.header}>
        <span className={styles.heading}>All time entries</span>
        <select className={styles.sortMembers} onChange={handleChange}>
          <option value="">No filter</option>
          {clients.map(({ companyName, id }) => (
            <option value={id} key={id}>
              {companyName}
            </option>
          ))}
        </select>
      </div>
      {timeEntries.map(
        ({ startTimestamp, stopTimestamp, id, client }, index: number) => {
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
                deleteEntry={(timeEntryId): {} => deleteTimeEntry(timeEntryId)}
                startTimestamp={startTimestamp}
                stopTimestamp={stopTimestamp}
                id={id}
              />
            </React.Fragment>
          );
        }
      )}
    </>
  );
};

export default TimeEntries;
