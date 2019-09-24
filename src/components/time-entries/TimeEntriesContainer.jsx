import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  requestTimeEntries,
  timeEntriesItemsSelector,
  deleteTimeEntryRequest
} from '../../redux/time-entries';
import TimeEntries from './TimeEntries';

const TimeEntriesContainer = props => <TimeEntries {...props} />;

const mapStateToProps = state => ({
  timeEntries: timeEntriesItemsSelector(state)
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTimeEntries: requestTimeEntries,
      deleteTimeEntry: deleteTimeEntryRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesContainer);
