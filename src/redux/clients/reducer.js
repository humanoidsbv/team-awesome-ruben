import {
  ADD_CLIENT_REQUEST,
  ADD_CLIENT_SUCCESS,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS
} from './actions';

const initialState = {
  items: [],
  isLoading: false,
  hasError: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CLIENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ADD_CLIENT_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        isLoading: false
      };

    case DELETE_CLIENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
        isLoading: false
      };

    case FETCH_CLIENTS_REQUEST:
      return {
        ...state,
        items: [],
        isLoading: true
      };

    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      };
    default:
      return state;
  }
};
