import clientsReducer from './reducer';

export { clientsSagas } from './sagas';

export {
  ADD_CLIENT_FAILURE,
  ADD_CLIENT_REQUEST,
  ADD_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILURE,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS
} from './actions';

export {
  addClientFailure,
  addClientRequest,
  addClientSuccess,
  deleteClientFailure,
  deleteClientRequest,
  deleteClientSuccess,
  fetchClientsFailure,
  fetchClientsRequest,
  fetchClientsSuccess
} from './action-creators';

export {
  clientsErrorSelector,
  clientsIsLoadingSelector,
  clientsItemsSelector,
  clientsRootSelector
} from './selectors';

export default clientsReducer;
