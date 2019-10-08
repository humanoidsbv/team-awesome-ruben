import {
  ADD_TEAM_MEMBER_FAILURE,
  ADD_TEAM_MEMBER_REQUEST,
  ADD_TEAM_MEMBER_SUCCESS,
  DELETE_TEAM_MEMBER_FAILURE,
  DELETE_TEAM_MEMBER_REQUEST,
  DELETE_TEAM_MEMBER_SUCCESS,
  FETCH_TEAM_MEMBERS_FAILURE,
  FETCH_TEAM_MEMBERS_REQUEST,
  FETCH_TEAM_MEMBERS_SUCCESS,
  SORT_TEAM_MEMBERS_BY_FIELD
} from '.';

export const addTeamMemberFailure = error => ({
  type: ADD_TEAM_MEMBER_FAILURE,
  payload: error
});

export const addTeamMemberRequest = teamMember => ({
  type: ADD_TEAM_MEMBER_REQUEST,
  payload: teamMember
});

export const addTeamMemberSuccess = teamMember => ({
  type: ADD_TEAM_MEMBER_SUCCESS,
  payload: teamMember
});

export const deleteTeamMemberFailure = error => ({
  type: DELETE_TEAM_MEMBER_FAILURE,
  payload: error
});

export const deleteTeamMemberRequest = teamMemberId => ({
  type: DELETE_TEAM_MEMBER_REQUEST,
  payload: teamMemberId
});

export const deleteTeamMemberSuccess = teamMemberId => ({
  type: DELETE_TEAM_MEMBER_SUCCESS,
  payload: teamMemberId
});

export const fetchTeamMembersFailure = error => ({
  type: FETCH_TEAM_MEMBERS_FAILURE,
  payload: error
});

export const fetchTeamMembersRequest = () => ({
  type: FETCH_TEAM_MEMBERS_REQUEST
});

export const fetchTeamMembersSuccess = teamMembers => ({
  type: FETCH_TEAM_MEMBERS_SUCCESS,
  payload: teamMembers
});

export const sortTeamMembersByField = sortByField => ({
  type: SORT_TEAM_MEMBERS_BY_FIELD,
  payload: sortByField
});
