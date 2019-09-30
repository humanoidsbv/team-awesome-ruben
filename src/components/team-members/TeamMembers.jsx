import React from 'react';
import PropTypes from 'prop-types';

import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './TeamMembers.module.css';
import TeamMember from '../team-member/';
import TeamMemberAdd from '../team-member-add/';

const TeamMembers = ({ name }) => {
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
      <TeamMember name={name} />
    </React.Fragment>
  );
};

TeamMembers.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  addTeamMembers: PropTypes.func.isRequired,
  deleteTeamMember: PropTypes.func.isRequired,
  fetchTeamMembers: PropTypes.func.isRequired
};

TeamMembers.defaultProps = {
  teamMembers: []
};

export default TeamMembers;
