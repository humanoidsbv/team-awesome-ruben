import React from 'react';

import styles from './TimeEntryHeader.module.css';

interface TimeEntryHeaderProps {
  startTimestamp: string;
  stopTimestamp: string;
}

const TimeEntryHeader = ({
  startTimestamp,
  stopTimestamp
}: TimeEntryHeaderProps): React.ReactElement => {
  const durationHours =
    (Date.parse(stopTimestamp) - Date.parse(startTimestamp)) / 1000 / 60 / 60;

  const formatDuration = (hours: number): string =>
    `${Math.trunc(hours)}:${Math.round((hours % 1) * 60)
      .toString()
      .padStart(2, '0')}`;

  const durationString = formatDuration(durationHours);

  const dateString = new Date(startTimestamp).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    weekday: 'long'
  });

  return (
    <div className={styles.container}>
      <p className={styles.date}>{dateString}</p>
      <p className={styles.date}>{durationString}</p>
    </div>
  );
};

export default TimeEntryHeader;
