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

import { SagaIterator } from 'redux-saga';

function* fetchTeamMembersRequest(): SagaIterator {
  try {
    const response = yield call(fetchTeamMembers);
    yield put(fetchTeamMembersSuccess(response));
  } catch (error) {
    yield put(fetchTeamMembersFailure(error));
  }
}

export function* watchFetchTeamMembersRequest(): SagaIterator {
  yield takeLatest(FETCH_TEAM_MEMBERS_REQUEST, fetchTeamMembersRequest);
}

function* deleteTeamMemberRequest({ payload }: any): {} {
  try {
    yield call(deleteTeamMember, payload);
    yield put(deleteTeamMemberSuccess(payload));
  } catch (error) {
    yield put(deleteTeamMemberFailure(error));
  }
}

export function* watchDeleteTeamMembersRequest(): SagaIterator {
  yield takeLatest(DELETE_TEAM_MEMBER_REQUEST, deleteTeamMemberRequest);
}

function* addTeamMemberRequest({ payload }: any): SagaIterator {
  try {
    yield call(addTeamMember, payload);
    yield put(addTeamMemberSuccess(payload));
  } catch (error) {
    yield put(addTeamMemberFailure(error));
  }
}

export function* watchAddTeamMemberRequest(): SagaIterator {
  yield takeLatest(ADD_TEAM_MEMBER_REQUEST, addTeamMemberRequest);
}

export function* teamMembersSagas(): SagaIterator {
  yield all([
    fork(watchAddTeamMemberRequest),
    fork(watchDeleteTeamMembersRequest),
    fork(watchFetchTeamMembersRequest)
  ]);
}
