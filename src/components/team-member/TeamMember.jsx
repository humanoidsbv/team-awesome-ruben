import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconArrowExpand from '../../assets/icons/icon-arrow-expand.svg';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';
import styles from './TeamMember.module.css';

const TeamMember = ({
  teamMember: { currentClient },
  teamMember: { employeeNumber },
  teamMember: { firstName },
  teamMember: { lastName },
  teamMember: { role },
  teamMember: { startingDate }
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <button
      className={`${styles.container} ${
        isExpanded ? styles.containerActive : ''
      }`}
      onClick={handleClick}
      type="button"
    >
      <img
        alt="Profile avatar"
        className={styles.profileImage}
        src={UserProfileImage}
      />
      <div className={styles.nameContainer}>
        <span className={styles.name}>{`${firstName} ${lastName}`}</span>
        <span className={styles.role}>{role}</span>
      </div>
      <IconArrowExpand
        className={`${styles.arrowExpand}
      ${isExpanded ? styles.arrowExpandActive : ''}`}
      />
      <span
        className={`${styles.descriptionBlock}
      ${isExpanded ? styles.descriptionBlockActive : ''}`}
      >
        {`Detailed information about ${firstName}`}
      </span>
      <div
        className={`
          ${styles.detailContainer} ${styles.employeeNumber}
          ${isExpanded ? styles.detailContainerActive : ''}`}
      >
        <span className={styles.detail}>{employeeNumber}</span>
        <span className={styles.detailDescription}>Employee number</span>
      </div>
      <div
        className={`
          ${styles.detailContainer} ${styles.currentClient}
          ${isExpanded ? styles.detailContainerActive : ''}`}
      >
        <span className={styles.detail}>{currentClient}</span>
        <span className={styles.detailDescription}>Current client</span>
      </div>
      <div
        className={`
          ${styles.detailContainer} ${styles.startingDate}
          ${isExpanded ? styles.detailContainerActive : ''}`}
      >
        <span className={styles.detail}>{startingDate}</span>
        <span className={styles.detailDescription}>Starting date</span>
      </div>
    </button>
  );
};

TeamMember.propTypes = {
  teamMember: PropTypes.shape({
    avatar: PropTypes.string,
    currentClient: PropTypes.string,
    employeeNumber: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string,
    startingDate: PropTypes.string
  })
};

TeamMember.defaultProps = {
  teamMember: []
};

export default TeamMember;
