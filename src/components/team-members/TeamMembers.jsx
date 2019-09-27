import React from 'react';

import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './TeamMembers.module.css';
import TeamMember from '../team-member/';
import TeamMemberAdd from '../team-member-add/';

const TeamMembers = () => {
  return (
    <React.Fragment>
      <TeamMemberAdd />
      <div className={styles.header}>
        <span className={styles.heading}>All Humanoids</span>
        <button type="button" className={styles.addMember}>
          <IconPlus className={styles.addNewIcon} />
          New Humanoid
        </button>
        <button type="button" className={styles.sortMembers}>
          Sort by:
          <IconArrowDown />
        </button>
      </div>
      <TeamMember />
    </React.Fragment>
  );
};

export default TeamMembers;
