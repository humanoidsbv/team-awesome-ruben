import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconArrowExpand from '../../assets/icons/icon-arrow-expand.svg';
import styles from './Client.module.css';

const Client = ({ client: { companyName } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  // mock data for now!
  const clientNumber = 'CLN_';
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
        <span>{companyName}</span>
      </div>
      <IconArrowExpand
        className={`${styles.arrowExpand}
          ${isExpanded && styles.arrowExpandActive}`}
      />
      <span
        className={`${styles.descriptionBlock}
          ${isExpanded && styles.descriptionBlockActive}`}
      >
        {`Detailed information about ${companyName}`}
      </span>
      <div
        className={`
          ${styles.detailContainer}
          ${isExpanded && styles.detailContainerActive}`}
      >
        <span className={styles.detail}>{clientNumber}</span>
        <span className={styles.detailDescription}>Client number</span>
      </div>

      <div
        className={`
          ${styles.detailContainer}
          ${isExpanded && styles.detailContainerActive}`}
      >
        <span className={styles.detail}>
          {String(Object.keys(projects).length).padStart(3, '0')}
        </span>
        <span className={styles.detailDescription}>Active projects</span>
      </div>

      <div
        className={`
          ${styles.detailContainer}
          ${isExpanded && styles.detailContainerActive}`}
      >
        <span className={styles.detail}>
          {String(activeTeamMembers.length).padStart(3, '0')}
        </span>
        <span className={styles.detailDescription}>Assigned team</span>
      </div>

      <div
        className={`
          ${styles.detailContainer} ${styles.fullWidth}
          ${isExpanded && styles.detailContainerActive}`}
      >
        <span className={`${styles.detail}`}>
          {String(activeTeamMembers.length).padStart(3, '0')}
        </span>
        <span className={styles.detailDescription}>Assigned</span>
      </div>
      <div
        className={`
          ${styles.detailContainer} ${styles.fullWidth}
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
    companyName: PropTypes.string
  })
};

Client.defaultProps = {
  client: []
};

export default Client;