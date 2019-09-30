import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconArrowExpand from '../../assets/icons/icon-arrow-expand.svg';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';
import styles from './TeamMember.module.css';

const TeamMember = ({
  teamMember: { currentClient },
  teamMember: { employeeNumber },
  teamMember: { firstName },
  teamMember: { role },
  teamMember: { startingDate }
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`${styles.container} ${
        isExpanded ? styles.containerActive : ''
      }`}
    >
      <img
        alt="Profile avatar"
        className={styles.profileImage}
        src={UserProfileImage}
      />
      <div className={styles.nameContainer}>
        <span className={styles.name}>{firstName}</span>
        <span className={styles.role}>{role}</span>
      </div>
      <IconArrowExpand
        className={`${styles.arrowExpand} ${styles.arrowExpandActive}`}
        onClick={handleClick}
      />
      <span className={styles.descriptionBlock}>
        Detailed information about Antje
      </span>
      <div className={`${styles.detailContainer} ${styles.employeeNumber}`}>
        <span className={styles.detail}>{employeeNumber}</span>
        <span className={styles.detailDescription}>Employee number</span>
      </div>
      <div className={`${styles.detailContainer} ${styles.currentClient}`}>
        <span className={styles.detail}>{currentClient}</span>
        <span className={styles.detailDescription}>Current client</span>
      </div>
      <div className={`${styles.detailContainer} ${styles.startingDate}`}>
        <span className={styles.detail}>{startingDate}</span>
        <span className={styles.detailDescription}>Starting date</span>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  teamMember: PropTypes.shape({
    firstName: PropTypes.string,
    role: PropTypes.string,
    employeeNumber: PropTypes.string,
    currentClient: PropTypes.string,
    startingDate: PropTypes.string,
    avatar: PropTypes.string
  })
};

TeamMember.defaultProps = {
  teamMember: []
};

export default TeamMember;
