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

import { ActionsInterface } from '../team-members/types';

export const addTeamMemberFailure = (error: string): ActionsInterface => ({
  type: ADD_TEAM_MEMBER_FAILURE,
  payload: error
});

export const addTeamMemberRequest = (teamMember: {}): ActionsInterface => ({
  type: ADD_TEAM_MEMBER_REQUEST,
  payload: teamMember
});

export const addTeamMemberSuccess = (teamMember: {}): ActionsInterface => ({
  type: ADD_TEAM_MEMBER_SUCCESS,
  payload: teamMember
});

export const deleteTeamMemberFailure = (error: string): ActionsInterface => ({
  type: DELETE_TEAM_MEMBER_FAILURE,
  payload: error
});

export const deleteTeamMemberRequest = (
  teamMemberId: number
): ActionsInterface => ({
  type: DELETE_TEAM_MEMBER_REQUEST,
  payload: teamMemberId
});

export const deleteTeamMemberSuccess = (
  teamMemberId: number
): ActionsInterface => ({
  type: DELETE_TEAM_MEMBER_SUCCESS,
  payload: teamMemberId
});

export const fetchTeamMembersFailure = (error: string): ActionsInterface => ({
  type: FETCH_TEAM_MEMBERS_FAILURE,
  payload: error
});

export const fetchTeamMembersRequest = (): ActionsInterface => ({
  type: FETCH_TEAM_MEMBERS_REQUEST
});

export const fetchTeamMembersSuccess = (teamMembers: {}): ActionsInterface => ({
  type: FETCH_TEAM_MEMBERS_SUCCESS,
  payload: teamMembers
});

export const sortTeamMembersByField = (
  sortByField: string
): ActionsInterface => ({
  type: SORT_TEAM_MEMBERS_BY_FIELD,
  payload: sortByField
});

export const sortTeamMembersOrder = (): ActionsInterface => ({
  type: SORT_TEAM_MEMBERS_ORDER
});
