import { TimeEntryStateInterface } from './types';

import {
  ADD_TIME_ENTRY_REQUEST,
  ADD_TIME_ENTRY_SUCCESS,
  DELETE_TIME_ENTRY_REQUEST,
  DELETE_TIME_ENTRY_SUCCESS,
  FETCH_TIME_ENTRIES_REQUEST,
  FETCH_TIME_ENTRIES_SUCCESS,
  FILTER_TIME_ENTRIES_BY_CLIENT
} from './actions';

const initialState = {
  items: [],
  isLoading: false,
  hasError: '',
  filterByClient: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TIME_ENTRY_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ADD_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        isLoading: false
      };

    case DELETE_TIME_ENTRY_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_TIME_ENTRY_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
        isLoading: false
      };

    case FETCH_TIME_ENTRIES_REQUEST:
      return {
        ...state,
        items: [],
        isLoading: true
      };

    case FETCH_TIME_ENTRIES_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      };

    case FILTER_TIME_ENTRIES_BY_CLIENT:
      return {
        ...state,
        filterByClient: payload
      };

    default:
      return state;
  }
};
