import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeEntry.module.css';

const TimeEntry = ({ client, startTimestamp, stopTimestamp }) => {
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
      <p>{client}</p>
      <div>
        <p className={styles.hoursWorked}>
          {`${startTimeString} - ${stopTimeString}`}
        </p>
        <p className={styles.hoursDuration}>{totalHoursString}</p>
      </div>
    </div>
  );
};

TimeEntry.propTypes = {
  client: PropTypes.string.isRequired,
  startTimestamp: PropTypes.string.isRequired,
  stopTimestamp: PropTypes.string.isRequired
};

export default TimeEntry;
