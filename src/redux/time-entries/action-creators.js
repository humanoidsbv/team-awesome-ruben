import {
  ADD_TIME_ENTRY_FAILURE,
  ADD_TIME_ENTRY_REQUEST,
  ADD_TIME_ENTRY_SUCCESS,
  DELETE_TIME_ENTRY_FAILURE,
  DELETE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_SUCCESS,
  FETCH_TIME_ENTRIES_FAILURE,
  FETCH_TIME_ENTRIES_REQUEST,
  FETCH_TIME_ENTRIES_SUCCESS
} from '.';

export const fetchTimeEntriesRequest = () => ({
  type: FETCH_TIME_ENTRIES_REQUEST
});

export const fetchTimeEntriesSuccess = timeEntries => ({
  type: FETCH_TIME_ENTRIES_SUCCESS,
  payload: timeEntries
});

export const fetchTimeEntriesFailure = error => ({
  type: FETCH_TIME_ENTRIES_FAILURE,
  payload: error
});

export const deleteTimeEntryRequest = timeEntryId => ({
  type: DELETE_TIME_ENTRY_REQUEST,
  payload: timeEntryId
});

export const deleteTimeEntrySuccess = timeEntryId => ({
  type: DELETE_TIME_ENTRY_SUCCESS,
  payload: timeEntryId
});

export const deleteTimeEntryFailure = error => ({
  type: DELETE_TIME_ENTRY_FAILURE,
  payload: error
});

export const addTimeEntryRequest = timeEntry => ({
  type: ADD_TIME_ENTRY_REQUEST,
  payload: timeEntry
});

export const addTimeEntrySuccess = timeEntry => ({
  type: ADD_TIME_ENTRY_SUCCESS,
  payload: timeEntry
});

export const addTimeEntryFailure = error => ({
  type: ADD_TIME_ENTRY_FAILURE,
  payload: error
});
