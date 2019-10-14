import React, { useState } from 'react';

import IconArrowExpand from '../../assets/icons/icon-arrow-expand.svg';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';
import styles from './TeamMember.module.css';

import { TeamMemberInterface } from '../../redux/team-members/types';

interface TeamMemberProps {
  teamMember: TeamMemberInterface;
}

const TeamMember = ({
  teamMember: {
    currentClient,
    employeeNumber,
    firstName,
    lastName,
    role,
    startingDate
  }
}: TeamMemberProps): React.ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (): void => setIsExpanded(!isExpanded);

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
        <span className={styles.detail}>{`${firstName} ${lastName}`}</span>
        <span className={styles.detailDescription}>{role}</span>
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

export default TeamMember;
