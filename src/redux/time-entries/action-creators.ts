import { ActionsInterface } from '../time-entries/types';

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

export const addTimeEntryFailure = (error): ActionsInterface => ({
  type: ADD_TIME_ENTRY_FAILURE,
  payload: error
});

export const addTimeEntryRequest = (timeEntry): ActionsInterface => ({
  type: ADD_TIME_ENTRY_REQUEST,
  payload: timeEntry
});

export const addTimeEntrySuccess = (timeEntry): ActionsInterface => ({
  type: ADD_TIME_ENTRY_SUCCESS,
  payload: timeEntry
});

export const deleteTimeEntryFailure = (error): ActionsInterface => ({
  type: DELETE_TIME_ENTRY_FAILURE,
  payload: error
});

export const deleteTimeEntryRequest = (timeEntryId): ActionsInterface => ({
  type: DELETE_TIME_ENTRY_REQUEST,
  payload: timeEntryId
});

export const deleteTimeEntrySuccess = (timeEntryId): ActionsInterface => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  payload: timeEntryId
});

export const fetchTimeEntriesFailure = (error): ActionsInterface => ({
  type: FETCH_TIME_ENTRIES_FAILURE,
  payload: error
});

export const fetchTimeEntriesRequest = (): {} => ({
  type: FETCH_TIME_ENTRIES_REQUEST
});

export const fetchTimeEntriesSuccess = (timeEntries): ActionsInterface => ({
  type: FETCH_TIME_ENTRIES_SUCCESS,
  payload: timeEntries
});

export const filterTimeEntriesByClient = (
  timeEntryFilter
): ActionsInterface => ({
  type: FILTER_TIME_ENTRIES_BY_CLIENT,
  payload: timeEntryFilter
});
