import React from 'react';

import IconArrowExpand from '../../assets/icons/icon-arrow-expand.svg';
import UserProfileImage from '../../../static/images/picture-tnt.jpg';
import styles from './TeamMember.module.css';

const TeamMember = () => {
  return (
    <div className={`${styles.container} ${styles.containerActive}`}>
      <img
        alt="Profile avatar"
        className={styles.profileImage}
        src={UserProfileImage}
      />
      <div className={styles.nameContainer}>
        <span className={styles.name}>Antje</span>
        <span className={styles.role}>UX Designer</span>
      </div>
      <IconArrowExpand
        className={`${styles.arrowExpand} ${styles.arrowExpandActive}`}
      />
      <span className={styles.descriptionBlock}>
        Detailed information about Antje
      </span>
      <div className={`${styles.detailContainer} ${styles.employeeNumber}`}>
        <span className={styles.detail}>HUM_001</span>
        <span className={styles.detailDescription}>Employee number</span>
      </div>
      <div className={`${styles.detailContainer} ${styles.currentEmployer}`}>
        <span className={styles.detail}>Port of Rotterdam</span>
        <span className={styles.detailDescription}>Current employer</span>
      </div>
      <div className={`${styles.detailContainer} ${styles.startingDate}`}>
        <span className={styles.detail}>February 18</span>
        <span className={styles.detailDescription}>Starting date</span>
      </div>
    </div>
  );
};

export default TeamMember;
