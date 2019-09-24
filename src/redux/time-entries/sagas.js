import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchTimeEntries,
  deleteTimeEntry,
  addTimeEntry
} from '../../services/time-entry-api';

import {
  FETCH_TIME_ENTRIES_REQUEST,
  requestTimeEntriesSuccess,
  requestTimeEntriesFailure,
  DELETE_TIME_ENTRY_REQUEST,
  deleteTimeEntryRequestSuccess,
  deleteTimeEntryRequestFailure,
  ADD_TIME_ENTRY_REQUEST,
  addTimeEntryRequestSuccess,
  addTimeEntryRequestFailure
} from '.';

function* requestTimeEntries() {
  try {
    const response = yield call(fetchTimeEntries);
    yield put(requestTimeEntriesSuccess(response));
  } catch (error) {
    yield put(requestTimeEntriesFailure(error));
  }
}

export function* watchRequestTimeEntries() {
  yield takeLatest(FETCH_TIME_ENTRIES_REQUEST, requestTimeEntries);
}

function* deleteTimeEntryRequest({ payload }) {
  try {
    yield call(deleteTimeEntry, payload);
    yield put(deleteTimeEntryRequestSuccess(payload));
  } catch (error) {
    yield put(deleteTimeEntryRequestFailure(error));
  }
}

export function* watchDeleteTimeEntry() {
  yield takeLatest(DELETE_TIME_ENTRY_REQUEST, deleteTimeEntryRequest);
}

function* addTimeEntryRequest({ payload }) {
  try {
    yield call(addTimeEntry, payload);
    yield put(addTimeEntryRequestSuccess(payload));
  } catch (error) {
    yield put(addTimeEntryRequestFailure(error));
  }
}

export function* watchAddTimeEntry() {
  yield takeLatest(ADD_TIME_ENTRY_REQUEST, addTimeEntryRequest);
}

export function* timeEntriesSagas() {
  yield all([
    fork(watchRequestTimeEntries),
    fork(watchDeleteTimeEntry),
    fork(watchAddTimeEntry)
  ]);
}
