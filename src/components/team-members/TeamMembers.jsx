import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconPlus from '../../assets/icons/icon-plus.svg';
import TeamMember from '../team-member/';
import TeamMemberAdd from '../team-member-add/';
import styles from './TeamMembers.module.css';

const TeamMembers = ({
  addTeamMember,
  fetchTeamMembers,
  orderToggle,
  sortTeamMembersByField,
  sortTeamMembersOrder,
  teamMembers
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(function getTeamMembers() {
    fetchTeamMembers();
  }, []);

  const handleFormVisible = () => setIsFormVisible(!isFormVisible);

  const handleChange = event => sortTeamMembersByField(event.target.value);

  const handeClick = () => sortTeamMembersOrder();

  return (
    <React.Fragment>
      {isFormVisible && (
        <TeamMemberAdd
          addFormData={addTeamMember}
          handleFormVisible={handleFormVisible}
        />
      )}

      <div className={styles.header}>
        <span className={styles.heading}>All Humanoids</span>
        <button
          className={`${styles.addMember} ${isFormVisible &&
            styles.addMemberVisible}`}
          onClick={handleFormVisible}
          disabled={isFormVisible === true}
          type="button"
        >
          <IconPlus className={styles.addNewIcon} />
          New Humanoid
        </button>
        <select
          className={styles.sortMembers}
          onChange={handleChange}
          type="button"
        >
          <option value="firstName">First name</option>
          <option value="lastName">Last name</option>
          <option value="locality">Location</option>
          <option value="role">Project role</option>
          <option value="currentClient">Client name</option>
          <option value="startingDate">Date</option>
        </select>
        <button
          className={`${styles.sortMembersOrder} ${orderToggle &&
            styles.sortMembersActive}`}
          onClick={handeClick}
          type="button"
        >
          <IconArrowDown />
        </button>
      </div>
      {teamMembers.map(teamMember => {
        return <TeamMember teamMember={teamMember} key={teamMember.id} />;
      })}
    </React.Fragment>
  );
};

TeamMembers.propTypes = {
  addTeamMember: PropTypes.func.isRequired,
  fetchTeamMembers: PropTypes.func.isRequired,
  orderToggle: PropTypes.bool.isRequired,
  sortTeamMembersByField: PropTypes.func.isRequired,
  sortTeamMembersOrder: PropTypes.func.isRequired,
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  ).isRequired
};

export default TeamMembers;
