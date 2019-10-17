import React, { useEffect, useState } from 'react';

import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconPlus from '../../assets/icons/icon-plus.svg';
import TeamMember from '../team-member/';
import TeamMemberAdd from '../team-member-add';
import styles from './TeamMembers.module.css';

import { TeamMemberInterface } from '../../redux/team-members/types';

export interface TeamMembersProps {
  addTeamMember: ({}) => void;
  fetchTeamMembers: () => void;
  orderToggle: boolean;
  sortTeamMembersByField: (value: string) => void;
  sortTeamMembersOrder: () => void;
  teamMembers: TeamMemberInterface[];
}

const TeamMembers = ({
  addTeamMember,
  fetchTeamMembers,
  orderToggle,
  sortTeamMembersByField,
  sortTeamMembersOrder,
  teamMembers
}: TeamMembersProps): React.ReactElement => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const handleFormVisible = (): void => setIsFormVisible(!isFormVisible);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void =>
    sortTeamMembersByField(event.currentTarget.value);

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
        <select className={styles.sortMembers} onChange={handleChange}>
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
      {teamMembers.map(teamMember => (
        <TeamMember teamMember={teamMember} key={teamMember.id} />
      ))}
    </React.Fragment>
  );
};

export default TeamMembers;
