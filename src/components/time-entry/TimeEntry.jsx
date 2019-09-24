import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '../../assets/icons/icon-delete.svg';
import styles from './TimeEntry.module.css';

const TimeEntry = ({
  client,
  deleteEntry,
  timeEntryId,
  startTimestamp,
  stopTimestamp
}) => {
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
        onClick={() => deleteEntry(timeEntryId)}
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

TimeEntry.propTypes = {
  client: PropTypes.string.isRequired,
  deleteEntry: PropTypes.func.isRequired,
  startTimestamp: PropTypes.string.isRequired,
  stopTimestamp: PropTypes.string.isRequired,
  timeEntryId: PropTypes.number.isRequired
};

export default TimeEntry;
