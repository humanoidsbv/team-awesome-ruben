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
  SORT_TEAM_MEMBERS_BY_FIELD,
  SORT_TEAM_MEMBERS_ORDER
} from '.';

import { ActionInterface } from '../team-members/types';

export const addTeamMemberFailure = (error: string): ActionInterface => ({
  type: ADD_TEAM_MEMBER_FAILURE,
  payload: error
});

export const addTeamMemberRequest = (teamMember: {}): ActionInterface => ({
  type: ADD_TEAM_MEMBER_REQUEST,
  payload: teamMember
});

export const addTeamMemberSuccess = (teamMember: {}): ActionInterface => ({
  type: ADD_TEAM_MEMBER_SUCCESS,
  payload: teamMember
});

export const deleteTeamMemberFailure = (error: string): ActionInterface => ({
  type: DELETE_TEAM_MEMBER_FAILURE,
  payload: error
});

export const deleteTeamMemberRequest = (
  teamMemberId: number
): ActionInterface => ({
  type: DELETE_TEAM_MEMBER_REQUEST,
  payload: teamMemberId
});

export const deleteTeamMemberSuccess = (
  teamMemberId: number
): ActionInterface => ({
  type: DELETE_TEAM_MEMBER_SUCCESS,
  payload: teamMemberId
});

export const fetchTeamMembersFailure = (error: string): ActionInterface => ({
  type: FETCH_TEAM_MEMBERS_FAILURE,
  payload: error
});

export const fetchTeamMembersRequest = (): ActionInterface => ({
  type: FETCH_TEAM_MEMBERS_REQUEST
});

export const fetchTeamMembersSuccess = (teamMembers: {}): ActionInterface => ({
  type: FETCH_TEAM_MEMBERS_SUCCESS,
  payload: teamMembers
});

export const sortTeamMembersByField = (
  sortByField: string
): ActionInterface => ({
  type: SORT_TEAM_MEMBERS_BY_FIELD,
  payload: sortByField
});

export const sortTeamMembersOrder = (): ActionInterface => ({
  type: SORT_TEAM_MEMBERS_ORDER
});
