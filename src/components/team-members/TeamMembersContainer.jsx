import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addTeamMemberRequest,
  deleteTeamMemberRequest,
  fetchTeamMembersRequest,
  sortTeamMembersByField,
  sortTeamMembersOrder,
  teamMembersItemsSelector
} from '../../redux/team-members';
import TeamMembers from './TeamMembers';

const TeamMembersContainer = props => <TeamMembers {...props} />;

const mapStateToProps = state => ({
  teamMembers: teamMembersItemsSelector(state)
});

const mapDispatchToProps = dispatch =>
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
