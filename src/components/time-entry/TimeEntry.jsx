import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeEntry.module.css';

const TimeEntry = ({ client, startTimeStamp, stopTimeStamp }) => (
  <div className={styles.timeEntry}>
    <p>{client}</p>
    <div>
      <p className={styles.hoursWorked}>
        {`${startTimeStamp.slice(10, 16)} -
        ${stopTimeStamp.slice(10, 16)}`}
      </p>
      <p className={styles.hoursDuration}>
        {stopTimeStamp.slice(10, 13) - startTimeStamp.slice(10, 13)}
      </p>
    </div>
  </div>
);

TimeEntry.propTypes = {
  client: PropTypes.string.isRequired,
  startTimeStamp: PropTypes.string.isRequired,
  stopTimeStamp: PropTypes.string.isRequired
};

export default TimeEntry;
