import React from 'react';

import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import styles from './TeamMembers.module.css';
import TeamMember from '../team-member/';
import TeamMemberAdd from '../team-member-add/';

const TeamMembers = () => {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <span className={styles.heading}>All Humanoids</span>
        <TeamMemberAdd />
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
