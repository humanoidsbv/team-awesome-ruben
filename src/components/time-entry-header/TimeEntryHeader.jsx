import React from 'react';
import PropTypes from 'prop-types';

import styles from './timeEntryHeader.module.css';

const TimeEntryHeader = ({ startTimeStamp, stopTimeStamp }) => (
  <div className={styles.container}>
    <p className={styles.date}>{startTimeStamp.slice(0, 10)}</p>
    <p className={styles.date}>08:00:00</p>
  </div>
);

TimeEntryHeader.propTypes = {
  startTimeStamp: PropTypes.string.isRequired,
  stopTimeStamp: PropTypes.string.isRequired
};

export default TimeEntryHeader;
