import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import {
  addTeamMember,
  deleteTeamMember,
  fetchTeamMembers
} from '../../services/team-member-api';

import {
  ADD_TEAM_MEMBER_REQUEST,
  addTeamMemberSuccess,
  addTeamMemberFailure,
  DELETE_TEAM_MEMBER_REQUEST,
  deleteTeamMemberSuccess,
  deleteTeamMemberFailure,
  FETCH_TEAM_MEMBERS_REQUEST,
  fetchTeamMembersSuccess,
  fetchTeamMembersFailure
} from '.';

function* fetchTeamMembersRequest() {
  try {
    const response = yield call(fetchTeamMembers);
    yield put(fetchTeamMembersSuccess(response));
  } catch (error) {
    yield put(fetchTeamMembersFailure(error));
  }
}

export function* watchFetchTeamMembersRequest() {
  yield takeLatest(FETCH_TEAM_MEMBERS_REQUEST, fetchTeamMembersRequest);
}

function* deleteTeamMemberRequest({ payload }) {
  try {
    yield call(deleteTeamMember, payload);
    yield put(deleteTeamMemberSuccess(payload));
  } catch (error) {
    yield put(deleteTeamMemberFailure(error));
  }
}

export function* watchDeleteTeamMembersRequest() {
  yield takeLatest(DELETE_TEAM_MEMBER_REQUEST, deleteTeamMemberRequest);
}

function* addTeamMemberRequest({ payload }) {
  try {
    yield call(addTeamMember, payload);
    yield put(addTeamMemberSuccess(payload));
  } catch (error) {
    yield put(addTeamMemberFailure(error));
  }
}

export function* watchAddTeamMemberRequest() {
  yield takeLatest(ADD_TEAM_MEMBER_REQUEST, addTeamMemberRequest);
}

export function* teamMembersSagas() {
  yield all([
    fork(watchAddTeamMemberRequest),
    fork(watchDeleteTeamMembersRequest),
    fork(watchFetchTeamMembersRequest)
  ]);
}
