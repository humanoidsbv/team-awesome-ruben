import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addTimeEntryRequest,
  deleteTimeEntryRequest,
  fetchTimeEntriesRequest,
  filterTimeEntriesByClient,
  timeEntriesByClientSelector,
  timeEntriesIsLoadingSelector
} from '../../redux/time-entries';

import TimeEntries, { TimeEntriesProps } from './TimeEntries';

import {
  clientsIsLoadingSelector,
  clientsItemsSelector,
  fetchClientsRequest
} from '../../redux/clients';

import {
  TimeEntriesDispatchInterface,
  TimeEntriesStateInterface
} from '../../redux/time-entries/types';

const TimeEntriesContainer = (props: TimeEntriesProps): React.ReactElement => (
  <TimeEntries {...props} />
);

const mapStateToProps = (state: TimeEntriesStateInterface): {} => ({
  clients: clientsItemsSelector(state),
  isLoading:
    clientsIsLoadingSelector(state) || timeEntriesIsLoadingSelector(state),
  timeEntries: timeEntriesByClientSelector(state)
});

const mapDispatchToProps = (dispatch): TimeEntriesDispatchInterface =>
  bindActionCreators(
    {
      addTimeEntry: addTimeEntryRequest,
      deleteTimeEntry: deleteTimeEntryRequest,
      fetchClients: fetchClientsRequest,
      fetchTimeEntries: fetchTimeEntriesRequest,
      filterTimeEntriesByClient
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesContainer);
