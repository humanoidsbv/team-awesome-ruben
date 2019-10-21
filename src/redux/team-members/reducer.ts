import {
  ADD_TEAM_MEMBER_REQUEST,
  ADD_TEAM_MEMBER_SUCCESS,
  DELETE_TEAM_MEMBER_REQUEST,
  DELETE_TEAM_MEMBER_SUCCESS,
  FETCH_TEAM_MEMBERS_REQUEST,
  FETCH_TEAM_MEMBERS_SUCCESS,
  SORT_TEAM_MEMBERS_BY_FIELD,
  SORT_TEAM_MEMBERS_ORDER
} from './actions';

import { TeamMemberStateInterface, ActionInterface } from './types';

const initialState: TeamMemberStateInterface = {
  hasError: '',
  isLoading: false,
  items: [],
  order: true,
  sortByField: 'firstName'
};

export default (
  state: TeamMemberStateInterface = initialState,
  { type, payload }: ActionInterface
): TeamMemberStateInterface => {
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

    case SORT_TEAM_MEMBERS_BY_FIELD:
      return {
        ...state,
        sortByField: payload
      };

    case SORT_TEAM_MEMBERS_ORDER:
      return {
        ...state,
        order: !state.order
      };

    default:
      return state;
  }
};
