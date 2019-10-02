import {
  ADD_CLIENT_FAILURE,
  ADD_CLIENT_REQUEST,
  ADD_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILURE,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS
} from '.';

export const addClientFailure = error => ({
  type: ADD_CLIENT_FAILURE,
  payload: error
});

export const addClientRequest = client => ({
  type: ADD_CLIENT_REQUEST,
  payload: client
});

export const addClientSuccess = client => ({
  type: ADD_CLIENT_SUCCESS,
  payload: client
});

export const deleteClientFailure = error => ({
  type: DELETE_CLIENT_FAILURE,
  payload: error
});

export const deleteClientRequest = clientId => ({
  type: DELETE_CLIENT_REQUEST,
  payload: clientId
});

export const deleteClientSuccess = clientId => ({
  type: DELETE_CLIENT_SUCCESS,
  payload: clientId
});

export const fetchClientsFailure = error => ({
  type: FETCH_CLIENTS_FAILURE,
  payload: error
});

export const fetchClientsRequest = () => ({
  type: FETCH_CLIENTS_REQUEST
});

export const fetchClientsSuccess = clients => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: clients
});
