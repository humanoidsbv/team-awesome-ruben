import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconArrowExpand from '../../assets/icons/icon-arrow-expand.svg';
import styles from './Client.module.css';

const Client = ({ client: { client } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  const clientNumber = 'POR_001';
  const projects = { '0': 'project1' };
  const activeTeamMembers = ['Antje Adriaens'];

  return (
    <button
      className={`${styles.container}
        ${isExpanded && styles.containerActive}`}
      onClick={handleClick}
      type="button"
    >
      <div className={styles.nameContainer}>
        <span>{client}</span>
      </div>
      <IconArrowExpand
        className={`${styles.arrowExpand}
          ${isExpanded && styles.arrowExpandActive}`}
      />
      <span
        className={`${styles.descriptionBlock}
          ${isExpanded && styles.descriptionBlockActive}`}
      >
        {`Detailed information about ${client}`}
      </span>
      <div
        className={`
          ${styles.detailContainer} ${styles.employeeNumber}
          ${isExpanded && styles.detailContainerActive}`}
      >
        <span className={styles.detail}>{clientNumber}</span>
        <span className={styles.detailDescription}>Client number</span>
      </div>

      <div
        className={`
          ${styles.detailContainer} ${styles.startingDate}
          ${isExpanded && styles.detailContainerActive}`}
      >
        <span className={styles.detail}>
          {String(Object.keys(projects).length).padStart(3, '0')}
        </span>
        <span className={styles.detailDescription}>Active projects</span>
      </div>

      <div
        className={`
          ${styles.detailContainer} ${styles.startingDate}
          ${isExpanded && styles.detailContainerActive}`}
      >
        <span className={styles.detail}>
          {String(activeTeamMembers.length).padStart(3, '0')}
        </span>
        <span className={styles.detailDescription}>Assigned</span>
      </div>
    </button>
  );
};

Client.propTypes = {
  client: PropTypes.shape({
    client: PropTypes.string
  })
};

Client.defaultProps = {
  client: []
};

export default Client;
