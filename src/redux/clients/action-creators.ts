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

import { ClientsActionsInterface } from './types';

export const addClientFailure = (error: string): ClientsActionsInterface => ({
  type: ADD_CLIENT_FAILURE,
  payload: error
});

export const addClientRequest = (client: {}): ClientsActionsInterface => ({
  type: ADD_CLIENT_REQUEST,
  payload: client
});

export const addClientSuccess = (client: {}): ClientsActionsInterface => ({
  type: ADD_CLIENT_SUCCESS,
  payload: client
});

export const deleteClientFailure = (
  error: string
): ClientsActionsInterface => ({
  type: DELETE_CLIENT_FAILURE,
  payload: error
});

export const deleteClientRequest = (
  clientId: number
): ClientsActionsInterface => ({
  type: DELETE_CLIENT_REQUEST,
  payload: clientId
});

export const deleteClientSuccess = (
  clientId: number
): ClientsActionsInterface => ({
  type: DELETE_CLIENT_SUCCESS,
  payload: clientId
});

export const fetchClientsFailure = (
  error: string
): ClientsActionsInterface => ({
  type: FETCH_CLIENTS_FAILURE,
  payload: error
});

export const fetchClientsRequest = (): ClientsActionsInterface => ({
  type: FETCH_CLIENTS_REQUEST
});

export const fetchClientsSuccess = (clients: {}): ClientsActionsInterface => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: clients
});
