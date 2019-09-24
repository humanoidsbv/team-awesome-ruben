import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestTimeEntries } from '../../redux/time-entries';
import TimeEntries from './TimeEntries';

const TimeEntriesContainer = props => <TimeEntries {...props} />;

const mapStateToProps = state => ({
  timeEntries: state.timeEntries.items
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTimeEntries: requestTimeEntries
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesContainer);
