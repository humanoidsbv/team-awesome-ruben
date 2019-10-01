import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconPlus from '../../assets/icons/icon-plus.svg';
import styles from './TeamMembers.module.css';
import TeamMember from '../team-member/';
import TeamMemberAdd from '../team-member-add/';

const TeamMembers = ({ addTeamMember, fetchTeamMembers, teamMembers }) => {
  const [isFormActive, setIsFormActive] = useState(false);

  useEffect(function getTeamMembers() {
    fetchTeamMembers();
  }, []);

  const handleFormActive = () => {
    setIsFormActive(!isFormActive);
  };

  return (
    <React.Fragment>
      {isFormActive && (
        <TeamMemberAdd
          addFormData={addTeamMember}
          handleFormActive={handleFormActive}
        />
      )}

      <div className={styles.header}>
        <span className={styles.heading}>All Humanoids</span>
        <button
          className={`${styles.addMember} ${
            isFormActive ? styles.addMemberActive : ''
          }`}
          onClick={handleFormActive}
          disabled={isFormActive === true}
          type="button"
        >
          <IconPlus className={styles.addNewIcon} />
          New Humanoid
        </button>
        <button type="button" className={styles.sortMembers}>
          Sort by:
          <IconArrowDown />
        </button>
      </div>
      {teamMembers.map(teamMember => {
        return (
          <React.Fragment key={teamMember.id}>
            <TeamMember teamMember={teamMember} />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

TeamMembers.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  ),
  addTeamMember: PropTypes.func.isRequired,
  fetchTeamMembers: PropTypes.func.isRequired
};

TeamMembers.defaultProps = {
  teamMembers: []
};

export default TeamMembers;
