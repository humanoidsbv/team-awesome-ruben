import {
  ADD_TEAM_MEMBER_REQUEST,
  ADD_TEAM_MEMBER_SUCCESS,
  DELETE_TEAM_MEMBER_REQUEST,
  DELETE_TEAM_MEMBER_SUCCESS,
  FETCH_TEAM_MEMBERS_REQUEST,
  FETCH_TEAM_MEMBERS_SUCCESS
} from './actions';

const initialState = {
  items: [],
  isLoading: false,
  hasError: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TEAM_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case ADD_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        isLoading: false
      };

    case DELETE_TEAM_MEMBER_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
        isLoading: false
      };

    case FETCH_TEAM_MEMBERS_REQUEST:
      return {
        ...state,
        items: [],
        isLoading: true
      };

    case FETCH_TEAM_MEMBERS_SUCCESS:
      return {
        ...state,
        items: payload,
        isLoading: false
      };
    default:
      return state;
  }
};
