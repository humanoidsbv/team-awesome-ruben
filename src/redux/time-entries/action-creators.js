import {
  FETCH_TIME_ENTRIES_REQUEST,
  FETCH_TIME_ENTRIES_REQUEST_SUCCESS,
  FETCH_TIME_ENTRIES_REQUEST_FAILURE,
  DELETE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_REQUEST_SUCCESS,
  DELETE_TIME_ENTRY_REQUEST_FAILURE,
  ADD_TIME_ENTRY_REQUEST,
  ADD_TIME_ENTRY_REQUEST_SUCCESS,
  ADD_TIME_ENTRY_REQUEST_FAILURE
} from '.';

export const requestTimeEntries = () => ({
  type: FETCH_TIME_ENTRIES_REQUEST
});

export const requestTimeEntriesSuccess = timeEntries => ({
  type: FETCH_TIME_ENTRIES_REQUEST_SUCCESS,
  payload: timeEntries
});

export const requestTimeEntriesFailure = error => ({
  type: FETCH_TIME_ENTRIES_REQUEST_FAILURE,
  payload: error
});

export const deleteTimeEntryRequest = timeEntryId => ({
  type: DELETE_TIME_ENTRY_REQUEST,
  payload: timeEntryId
});

export const deleteTimeEntryRequestSuccess = timeEntryId => ({
  type: DELETE_TIME_ENTRY_REQUEST_SUCCESS,
  payload: timeEntryId
});

export const deleteTimeEntryRequestFailure = error => ({
  type: DELETE_TIME_ENTRY_REQUEST_FAILURE,
  payload: error
});

export const addTimeEntryRequest = timeEntry => ({
  type: ADD_TIME_ENTRY_REQUEST,
  payload: timeEntry
});

export const addTimeEntryRequestSuccess = timeEntry => ({
  type: ADD_TIME_ENTRY_REQUEST_SUCCESS,
  payload: timeEntry
});

export const addTimeEntryRequestFailure = error => ({
  type: ADD_TIME_ENTRY_REQUEST_FAILURE,
  payload: error
});
