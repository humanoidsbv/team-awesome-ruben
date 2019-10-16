import { ActionInterface } from '../time-entries/types';

import {
  ADD_TIME_ENTRY_FAILURE,
  ADD_TIME_ENTRY_REQUEST,
  ADD_TIME_ENTRY_SUCCESS,
  DELETE_TIME_ENTRY_FAILURE,
  DELETE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_SUCCESS,
  FETCH_TIME_ENTRIES_FAILURE,
  FETCH_TIME_ENTRIES_REQUEST,
  FETCH_TIME_ENTRIES_SUCCESS,
  FILTER_TIME_ENTRIES_BY_CLIENT
} from '.';

export const addTimeEntryFailure = (error): ActionInterface => ({
  type: ADD_TIME_ENTRY_FAILURE,
  payload: error
});

export const addTimeEntryRequest = (timeEntry): ActionInterface => ({
  type: ADD_TIME_ENTRY_REQUEST,
  payload: timeEntry
});

export const addTimeEntrySuccess = (timeEntry): ActionInterface => ({
  type: ADD_TIME_ENTRY_SUCCESS,
  payload: timeEntry
});

export const deleteTimeEntryFailure = (error): ActionInterface => ({
  type: DELETE_TIME_ENTRY_FAILURE,
  payload: error
});

export const deleteTimeEntryRequest = (id): ActionInterface => ({
  type: DELETE_TIME_ENTRY_REQUEST,
  payload: id
});

export const deleteTimeEntrySuccess = (id): ActionInterface => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  payload: id
});

export const fetchTimeEntriesFailure = (error): ActionInterface => ({
  type: FETCH_TIME_ENTRIES_FAILURE,
  payload: error
});

export const fetchTimeEntriesRequest = (): ActionInterface => ({
  type: FETCH_TIME_ENTRIES_REQUEST
});

export const fetchTimeEntriesSuccess = (timeEntries): ActionInterface => ({
  type: FETCH_TIME_ENTRIES_SUCCESS,
  payload: timeEntries
});

export const filterTimeEntriesByClient = (
  timeEntryFilter
): ActionInterface => ({
  type: FILTER_TIME_ENTRIES_BY_CLIENT,
  payload: timeEntryFilter
});
