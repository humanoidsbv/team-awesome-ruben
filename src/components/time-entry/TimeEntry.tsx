import React from 'react';

import { TimeEntryInterface } from '../../redux/time-entries/types';
import DeleteIcon from '../../assets/icons/icon-delete.svg';
import styles from './TimeEntry.module.css';

export interface TimeEntryProps extends TimeEntryInterface {
  deleteEntry: (number) => {};
}

const TimeEntry = ({
  client,
  deleteEntry,
  id,
  startTimestamp,
  stopTimestamp
}: TimeEntryProps): React.ReactElement => {
  const totalHours =
    (Date.parse(stopTimestamp) - Date.parse(startTimestamp)) / 1000 / 60 / 60;

  const totalHoursString = `${Math.trunc(totalHours)}:${Math.round(
    (totalHours % 1) * 60
  )
    .toString()
    .padStart(2, '0')}`;

  const startTimeString = new Date(startTimestamp).toLocaleTimeString('nl-NL', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const stopTimeString = new Date(stopTimestamp).toLocaleTimeString('nl-NL', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={styles.timeEntry}>
      <span>{client}</span>
      <button
        className={styles.deleteEntry}
        onClick={(): {} => deleteEntry(id)}
        type="button"
      >
        <DeleteIcon className={styles.deleteIcon} />
        Delete
      </button>
      <div className={styles.timeStamps}>
        <span className={styles.hoursWorked}>
          {`${startTimeString} - ${stopTimeString}`}
        </span>
        <span className={styles.hoursDuration}>{totalHoursString}</span>
      </div>
    </div>
  );
};

export default TimeEntry;
