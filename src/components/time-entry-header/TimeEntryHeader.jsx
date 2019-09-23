import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeEntryHeader.module.css';

const TimeEntryHeader = ({ startTimestamp, stopTimestamp }) => {
  const durationHours =
    (Date.parse(stopTimestamp) - Date.parse(startTimestamp)) / 1000 / 60 / 60;

  const formatDuration = hours =>
    `${Math.trunc(hours)}:${Math.round((hours % 1) * 60)
      .toString()
      .padStart(2, '0')}`;

  const durationString = formatDuration(durationHours);

  const date = new Date(startTimestamp);
  const dateString = date.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    weekday: 'long'
  });

  return (
    <div className={styles.container}>
      <p className={styles.date}>
        {dateString.charAt(0).toUpperCase()}
        {dateString.slice(1)}
      </p>
      <p className={styles.date}>{durationString}</p>
    </div>
  );
};

TimeEntryHeader.propTypes = {
  startTimestamp: PropTypes.string.isRequired,
  stopTimestamp: PropTypes.string.isRequired
};

export default TimeEntryHeader;
