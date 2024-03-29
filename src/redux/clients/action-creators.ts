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

import { ClientsActionInterface } from './types';

export const addClientFailure = (error: string): ClientsActionInterface => ({
  type: ADD_CLIENT_FAILURE,
  payload: error
});

export const addClientRequest = (client: {}): ClientsActionInterface => ({
  type: ADD_CLIENT_REQUEST,
  payload: client
});

export const addClientSuccess = (client: {}): ClientsActionInterface => ({
  type: ADD_CLIENT_SUCCESS,
  payload: client
});

export const deleteClientFailure = (error: string): ClientsActionInterface => ({
  type: DELETE_CLIENT_FAILURE,
  payload: error
});

export const deleteClientRequest = (
  clientId: number
): ClientsActionInterface => ({
  type: DELETE_CLIENT_REQUEST,
  payload: clientId
});

export const deleteClientSuccess = (
  clientId: number
): ClientsActionInterface => ({
  type: DELETE_CLIENT_SUCCESS,
  payload: clientId
});

export const fetchClientsFailure = (error: string): ClientsActionInterface => ({
  type: FETCH_CLIENTS_FAILURE,
  payload: error
});

export const fetchClientsRequest = (): ClientsActionInterface => ({
  type: FETCH_CLIENTS_REQUEST
});

export const fetchClientsSuccess = (clients: {}): ClientsActionInterface => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: clients
});
