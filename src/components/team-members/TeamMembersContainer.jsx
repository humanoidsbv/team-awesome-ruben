import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addTeamMemberRequest,
  deleteTeamMemberRequest,
  fetchTeamMembersRequest,
  timeEntriesItemsSelector
} from '../../redux/team-members';
import TeamMembers from './TeamMembers';

const TeamMembersContainer = props => <TeamMembers {...props} />;

const mapStateToProps = state => ({
  timeEntries: timeEntriesItemsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTeamMember: addTeamMemberRequest,
      deleteTeamMember: deleteTeamMemberRequest,
      fetchTeamMembers: fetchTeamMembersRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMembersContainer);
