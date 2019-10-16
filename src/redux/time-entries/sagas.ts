import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import {
  addTimeEntry,
  deleteTimeEntry,
  fetchTimeEntries
} from '../../services/time-entry-api';

import {
  ADD_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_REQUEST,
  FETCH_TIME_ENTRIES_REQUEST,
  addTimeEntryFailure,
  addTimeEntrySuccess,
  deleteTimeEntryFailure,
  deleteTimeEntrySuccess,
  fetchTimeEntriesFailure,
  fetchTimeEntriesSuccess
} from '.';

import { SagaIterator } from 'redux-saga';

function* fetchTimeEntriesRequest(): SagaIterator {
  try {
    const response = yield call(fetchTimeEntries);
    yield put(fetchTimeEntriesSuccess(response));
  } catch (error) {
    yield put(fetchTimeEntriesFailure(error));
  }
}

export function* watchFetchTimeEntriesRequest(): SagaIterator {
  yield takeLatest(FETCH_TIME_ENTRIES_REQUEST, fetchTimeEntriesRequest);
}

function* deleteTimeEntryRequest({ payload }: any): SagaIterator {
  try {
    yield call(deleteTimeEntry, payload);
    yield put(deleteTimeEntrySuccess(payload));
  } catch (error) {
    yield put(deleteTimeEntryFailure(error));
  }
}

export function* watchDeleteTimeEntryRequest(): SagaIterator {
  yield takeLatest(DELETE_TIME_ENTRY_REQUEST, deleteTimeEntryRequest);
}

function* addTimeEntryRequest({ payload }: any): SagaIterator {
  try {
    yield call(addTimeEntry, payload);
    yield put(addTimeEntrySuccess(payload));
  } catch (error) {
    yield put(addTimeEntryFailure(error));
  }
}

export function* watchAddTimeEntryRequest(): SagaIterator {
  yield takeLatest(ADD_TIME_ENTRY_REQUEST, addTimeEntryRequest);
}

export function* timeEntriesSagas(): SagaIterator {
  yield all([
    fork(watchAddTimeEntryRequest),
    fork(watchDeleteTimeEntryRequest),
    fork(watchFetchTimeEntriesRequest)
  ]);
}
