import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addTimeEntryRequest,
  deleteTimeEntryRequest,
  fetchTimeEntriesRequest,
  filterTimeEntriesByClient,
  timeEntriesByClientSelector
} from '../../redux/time-entries';

import { clientsItemsSelector, fetchClientsRequest } from '../../redux/clients';

import TimeEntries from './TimeEntries';

import {
  TimeEntriesDispatchInterface,
  TimeEntriesStateInterface
} from '../../redux/time-entries/types';

const TimeEntriesContainer = props => <TimeEntries {...props} />;

const mapStateToProps = (state): TimeEntriesStateInterface => ({
  clients: clientsItemsSelector(state),
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
