import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import {
  addClient,
  deleteClient,
  fetchClients
} from '../../services/client-api';

import {
  ADD_CLIENT_REQUEST,
  addClientSuccess,
  addClientFailure,
  DELETE_CLIENT_REQUEST,
  deleteClientSuccess,
  deleteClientFailure,
  FETCH_CLIENTS_REQUEST,
  fetchClientsSuccess,
  fetchClientsFailure
} from '.';

function* fetchClientsRequest() {
  try {
    const response = yield call(fetchClients);
    yield put(fetchClientsSuccess(response));
  } catch (error) {
    yield put(fetchClientsFailure(error));
  }
}

export function* watchFetchClientsRequest() {
  yield takeLatest(FETCH_CLIENTS_REQUEST, fetchClientsRequest);
}

function* deleteClientRequest({ payload }) {
  try {
    yield call(deleteClient, payload);
    yield put(deleteClientSuccess(payload));
  } catch (error) {
    yield put(deleteClientFailure(error));
  }
}

export function* watchDeleteClientsRequest() {
  yield takeLatest(DELETE_CLIENT_REQUEST, deleteClientRequest);
}

function* addClientRequest({ payload }) {
  try {
    yield call(addClient, payload);
    yield put(addClientSuccess(payload));
  } catch (error) {
    yield put(addClientFailure(error));
  }
}

export function* watchAddClientRequest() {
  yield takeLatest(ADD_CLIENT_REQUEST, addClientRequest);
}

export function* clientsSagas() {
  yield all([
    fork(watchAddClientRequest),
    fork(watchDeleteClientsRequest),
    fork(watchFetchClientsRequest)
  ]);
}
