import React, { useState } from 'react';

import IconArrowExpand from '../../assets/icons/icon-arrow-expand.svg';
import styles from './Client.module.css';

import { ClientInterface } from '../../redux/clients/types';

interface ClientPropsInterface extends ClientInterface {
  client: ClientPropsInterface;
}

const Client = ({
  client: { companyName }
}: ClientPropsInterface): React.ReactFragment => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  //* mock data for now!
  const clientNumber = 'CLN_';
  const projects = ['project1'];
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
          {String(projects.length).padStart(3, '0')}
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

export default Client;
