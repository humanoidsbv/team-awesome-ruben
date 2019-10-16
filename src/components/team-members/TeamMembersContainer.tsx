import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addTeamMemberRequest,
  deleteTeamMemberRequest,
  fetchTeamMembersRequest,
  sortTeamMembersByField,
  sortTeamMembersOrder,
  teamMembersItemsSelector,
  teamMembersOrderSelector
} from '../../redux/team-members';
import TeamMembers from './TeamMembers';

import {
  TeamMembersStateInterface,
  TeamMembersDispatchInterface
} from '../../redux/team-members/types';

const TeamMembersContainer = (
  props: TeamMembersStateInterface
): React.ReactElement => <TeamMembers {...props} />;

const mapStateToProps = (state: TeamMembersStateInterface): {} => ({
  orderToggle: teamMembersOrderSelector(state),
  teamMembers: teamMembersItemsSelector(state)
});

const mapDispatchToProps = (dispatch): TeamMembersDispatchInterface =>
  bindActionCreators(
    {
      addTeamMember: addTeamMemberRequest,
      deleteTeamMember: deleteTeamMemberRequest,
      fetchTeamMembers: fetchTeamMembersRequest,
      sortTeamMembersByField,
      sortTeamMembersOrder
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMembersContainer);
