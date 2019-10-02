import React, { useState } from 'react';

import IconArrowExpand from '../../assets/icons/icon-arrow-expand.svg';
import styles from './Client.module.css';

const Client = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  const client = 'Port of Rotterdam';
  const clientNumber = 'POR_001';
  const projects = { '0': 'project1', '1': 'project1', '2': 'project1' };

  return (
    <button
      className={`${styles.container} ${
        isExpanded ? styles.containerActive : ''
      }`}
      onClick={handleClick}
      type="button"
    >
      <div className={styles.nameContainer}>
        <span>{client}</span>
      </div>
      <IconArrowExpand
        className={`${styles.arrowExpand}
      ${isExpanded ? styles.arrowExpandActive : ''}`}
      />
      <span
        className={`${styles.descriptionBlock}
      ${isExpanded ? styles.descriptionBlockActive : ''}`}
      >
        {`Detailed information about ${client}`}
      </span>
      <div
        className={`
          ${styles.detailContainer} ${styles.employeeNumber}
          ${isExpanded ? styles.detailContainerActive : ''}`}
      >
        <span className={styles.detail}>{clientNumber}</span>
        <span className={styles.detailDescription}>Client number</span>
      </div>

      <div
        className={`
          ${styles.detailContainer} ${styles.startingDate}
          ${isExpanded ? styles.detailContainerActive : ''}`}
      >
        <span className={styles.detail}>
          {String(Object.keys(projects).length).padStart(3, '0')}
        </span>
        <span className={styles.detailDescription}>Active projects</span>
      </div>
    </button>
  );
};

export default Client;
